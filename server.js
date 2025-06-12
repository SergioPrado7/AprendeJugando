const express = require('express');
const app = express();
const sql = require('mssql');
const cors = require('cors');
const nodemailer = require('nodemailer'); // <-- agregado para enviar correo

app.use(cors());
app.use(express.json());

const config = {
  user: 'jugador_admin',
  password: '123456',
  server: 'localhost',
  database: 'AprendeJugando',
  options: {
    trustServerCertificate: true
  }
};

app.post('/login', async (req, res) => {
  const { user, password } = req.body;
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input('UsuarioCorreo', sql.NVarChar, user);
    request.input('Contrasena', sql.NVarChar, password);
    const result = await request.execute('sp_IniciarSesion');
    if (result.recordset.length > 0) {
      const usuarioId = result.recordset[0].usuarioId;
      res.json({ success: true, usuarioId });
    } else {
      res.json({ success: false, message: 'Credenciales inválidas' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/registrar', async (req, res) => {
  // Extraemos exactamente esas ocho propiedades del body:
  const {
    nombre,        // para @Nombre
    apellido_p,    // para @ApellidoPaterno
    apellido_m,    // para @ApellidoMaterno
    nombre_u,      // para @NombreUsuario
    edad,          // para @Edad
    correo,        // para @Correo
    contrasena,    // para @Contraseña
    estado         // para @Estado
  } = req.body;

  try {
    // 1) Nos conectamos a la BD
    await sql.connect(config);

    // 2) Creamos la request y le inyectamos cada parámetro
    const request = new sql.Request();
    request.input('Nombre',           sql.NVarChar(100), nombre);
    request.input('ApellidoPaterno',  sql.NVarChar(100), apellido_p);
    request.input('ApellidoMaterno',  sql.NVarChar(100), apellido_m);
    request.input('NombreUsuario',    sql.NVarChar(50),  nombre_u);
    request.input('Edad',             sql.Int,           edad);
    request.input('Correo',           sql.NVarChar(150), correo);
    request.input('Contraseña',       sql.NVarChar(255), contrasena);
    request.input('Estado',           sql.NVarChar(100), estado);

    // 3) Ejecutamos el procedimiento almacenado tal como está en tu BD
    await request.execute('sp_InsertarUsuario');

    // 4) Devolvemos respuesta de éxito
    res.json({ success: true, message: 'Usuario registrado exitosamente.' });
  } catch (err) {
    // Si ocurre algún error (por ejemplo, el SP levanta RAISERROR),
    // devolvemos el mensaje para que el cliente lo pueda manejar.
    res.status(500).json({ success: false, message: err.message });
  }
});


app.post('/guardar_configuracion', async (req, res) => {
  const { usuarioId, dificultad, materia } = req.body;
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input('UsuarioId', sql.Int, usuarioId);
    request.input('Dificultad', sql.NVarChar, dificultad);
    request.input('Materia', sql.NVarChar, materia);
    await request.execute('sp_GuardarConfiguracion');
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ NUEVA RUTA: enviar enlace de recuperación
app.post('/recuperar', async (req, res) => {
  const { correo } = req.body;

  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Usuarios WHERE Correo = ${correo}`;

    if (result.recordset.length === 0) {
      return res.json({ success: false, message: 'Correo no registrado.' });
    }

    const enlace = `http://localhost:5500/html/cambiocontrasena.html?correo=${encodeURIComponent(correo)}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pradosergioslcs275@gmail.com',
        pass: 'hulm ezwe nykn nvkh' // Clave de aplicación, no contraseña personal
      }
    });

    await transporter.sendMail({
      from: 'Aprende Jugando <pradosergioslcs275@gmail.com>',
      to: correo,
      subject: 'Recupera tu contraseña',
      html: `<p>Haz clic en el siguiente enlace para cambiar tu contraseña:</p><a href="${enlace}">${enlace}</a>`
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ NUEVA RUTA: cambiar la contraseña
app.post('/cambiar_contrasena_correo', async (req, res) => {
  const { correo, nueva } = req.body;

  try {
    await sql.connect(config);
    const result = await sql.query`
      UPDATE Usuarios SET Contraseña = ${nueva} WHERE Correo = ${correo}
    `;

    if (result.rowsAffected[0] === 0) {
      return res.json({ success: false, message: 'No se encontró el usuario' });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(3000, () => {
  console.log("Iniciando servidor en el puerto 3000...");
});

app.post('/progreso', async (req, res) => {
  const { correo } = req.body;

  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input('correo', sql.NVarChar, correo);
    const result = await request.execute('sp_ConsultarProgresoPorCorreo');

    res.json(result.recordset);
  } catch (error) {
    console.error('Error en /progreso:', error);
    res.status(500).json({ error: 'Error al consultar el progreso' });
  }
});

