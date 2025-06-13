# Aprende Jugando 🎮📚

**Aprende Jugando** es una plataforma web educativa gamificada diseñada para niños de primaria y secundaria. Permite a los estudiantes aprender de manera interactiva mediante minijuegos por materias y niveles de dificultad. También ofrece a padres y tutores herramientas para seguir el progreso del alumno.

---

## 🧠 Descripción del Proyecto

Este sistema educativo incluye:
- Registro e inicio de sesión de usuarios.
- Configuración personalizada por materia y dificultad.
- Progreso guardado por niveles.
- Retroalimentación automática al finalizar niveles.
- Consulta del avance por parte de tutores.
- Interfaz intuitiva, amigable y adaptativa.

---

## 💻 Tecnologías Usadas

| Área         | Tecnologías |
|--------------|-------------|
| **Frontend** | HTML, CSS, JavaScript|
| **Backend**  | Node.js + Express |
| **Base de Datos** | SQL Server |
| **Correo**   | Nodemailer (para recuperación de contraseña) |
| **Control de Versiones** | Git + GitHub |

---

## ⚙️ Instrucciones de Instalación

### 🔸 Requisitos Previos

#### Servidor
- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [SQL Server](https://www.microsoft.com/es-es/sql-server) instalado y ejecutándose
- Base de datos "AprendeJugando" restaurada desde el script correspondiente
- Editor de texto o IDE (Visual Studio Code recomendado)

#### Cliente
- Navegador moderno: Chrome, Firefox, Edge o Safari
- Resolución mínima de pantalla: 1024x768

---

### 🔸 Pasos para Instalar y Ejecutar el Proyecto

#### 1. Clona el repositorio
```bash
git clone <URL-del-repositorio>
cd aprende-jugando
```

#### 2. Instala las dependencias del backend
```bash
npm install
```

#### 3. Configura el entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
DB_USER=tu_usuario_sql
DB_PASS=tu_contraseña_sql
DB_NAME=AprendeJugando
DB_HOST=localhost
DB_PORT=1433
PORT=3000
```

> ⚠️ Asegúrate de tener habilitado el acceso a aplicaciones poco seguras en Gmail o usar una contraseña de aplicación.

#### 4. Conexión a la Base de Datos

- Usa SQL Server Management Studio (SSMS) para ejecutar los scripts de creación de tablas y procedimientos almacenados.
- Asegúrate de tener habilitado TCP/IP en SQL Server Configuration Manager.
- Verifica que el puerto 1433 esté habilitado para conexiones remotas (si aplica).

#### 5. Ejecuta el servidor
```bash
npm start
```
> Por defecto se ejecutará en `http://localhost:5000`

#### 6. Accede a la interfaz web
Abre tu navegador y visita:
```
http://localhost:5000
```

---

## 🧪 Pruebas Recomendadas

- Iniciar sesión con usuario de prueba
- Crear nuevo usuario
- Cambiar contraseña
- Guardar configuración de juego (materia y dificultad)
- Consultar progreso
- Jugar niveles y guardar partida

---
