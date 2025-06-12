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

// RUTA: Registrar usuario
app.post('/registrar', async (req, res) => {
  const {
    nombre, apellido_p, apellido_m,
    nombre_u, edad, correo, contrasena, estado
  } = req.body;

  // Validaciones servidor
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.{8,}$)(?=.*[A-Z])(?=.*\d)(?=.*\W).*$/;

  if (typeof edad !== 'number' || edad < 6 || edad > 15) {
    return res.status(400).json({ success: false, message: 'La edad debe ser entre 6 y 15.' });
  }
  if (!emailRegex.test(correo)) {
    return res.status(400).json({ success: false, message: 'Correo electrónico inválido.' });
  }
  if (!passRegex.test(contrasena)) {
    return res.status(400).json({ success: false, message: 'Contraseña no cumple los requisitos.' });
  }

  try {
    await sql.connect(config);
    const request = new sql.Request()
      .input('Nombre', sql.NVarChar(100), nombre)
      .input('ApellidoPaterno', sql.NVarChar(100), apellido_p)
      .input('ApellidoMaterno', sql.NVarChar(100), apellido_m)
      .input('NombreUsuario', sql.NVarChar(50), nombre_u)
      .input('Edad', sql.Int, edad)
      .input('Correo', sql.NVarChar(150), correo)
      .input('Contraseña', sql.NVarChar(255), contrasena)
      .input('Estado', sql.NVarChar(100), estado);

    await request.execute('sp_InsertarUsuario');
    res.json({ success: true, message: 'Usuario registrado exitosamente.' });
  } catch (err) {
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

