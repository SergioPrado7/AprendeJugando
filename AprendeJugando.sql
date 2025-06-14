USE [AprendeJugando]
GO
/****** Object:  User [jugador_admin]    Script Date: 13/06/2025 08:58:24 a. m. ******/
CREATE USER [jugador_admin] FOR LOGIN [jugador_admin] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [jugador_admin]
GO
/****** Object:  Table [dbo].[ConfiguracionJuego]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConfiguracionJuego](
	[UsuarioId] [int] NOT NULL,
	[Dificultad] [nvarchar](20) NOT NULL,
	[Materia] [nvarchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UsuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProgresoDetalle]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProgresoDetalle](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UsuarioId] [int] NULL,
	[Materia] [nvarchar](50) NULL,
	[Dificultad] [nvarchar](20) NULL,
	[Nivel] [int] NULL,
	[Correctas] [int] NULL,
	[Incorrectas] [int] NULL,
	[FechaGuardado] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProgresoJuego]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProgresoJuego](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UsuarioId] [int] NULL,
	[Materia] [nvarchar](50) NULL,
	[Dificultad] [nvarchar](20) NULL,
	[Nivel] [int] NULL,
	[Completado] [bit] NULL,
	[FechaGuardado] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](100) NOT NULL,
	[ApellidoPaterno] [nvarchar](100) NOT NULL,
	[ApellidoMaterno] [nvarchar](100) NOT NULL,
	[NombreUsuario] [nvarchar](50) NOT NULL,
	[Edad] [int] NULL,
	[Correo] [nvarchar](150) NOT NULL,
	[Contraseña] [nvarchar](255) NOT NULL,
	[Estado] [nvarchar](100) NOT NULL,
	[FechaRegistro] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ProgresoJuego] ON 

INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1128, 1, N'lectura', N'facil', 1, 1, CAST(N'2025-06-13T08:17:34.540' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1129, 1, N'lectura', N'facil', 2, 1, CAST(N'2025-06-13T08:17:34.550' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1130, 1, N'lectura', N'facil', 3, 1, CAST(N'2025-06-13T08:17:34.560' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1131, 1, N'lectura', N'facil', 4, 1, CAST(N'2025-06-13T08:17:34.570' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1132, 1, N'lectura', N'facil', 5, 1, CAST(N'2025-06-13T08:17:34.577' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1133, 1, N'logica', N'facil', 1, 1, CAST(N'2025-06-13T00:12:00.970' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1134, 1, N'logica', N'facil', 2, 1, CAST(N'2025-06-13T00:12:00.977' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1135, 1, N'logica', N'facil', 3, 1, CAST(N'2025-06-13T00:12:00.983' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1136, 1, N'logica', N'facil', 4, 1, CAST(N'2025-06-13T00:12:00.987' AS DateTime))
INSERT [dbo].[ProgresoJuego] ([Id], [UsuarioId], [Materia], [Dificultad], [Nivel], [Completado], [FechaGuardado]) VALUES (1137, 1, N'logica', N'facil', 5, 1, CAST(N'2025-06-13T00:12:00.993' AS DateTime))
SET IDENTITY_INSERT [dbo].[ProgresoJuego] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios] ON 

INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (1, N'Sergio Servando', N'Prado', N'Lozano', N'Prrillo', 20, N'pradosergioslcs275@gmail.com', N'123456789', N'coahuila', CAST(N'2025-05-15T13:32:56.740' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2, N'Sergio Servando', N'Prado', N'Rocha', N'Serva9', 47, N'sergioprado569@gmail.com', N'Servando78', N'coahuila', CAST(N'2025-05-15T13:51:37.833' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (3, N'Juan Angel', N'Garcia', N'Sifuentes', N'Waze', 20, N'juan.garcia.22isc@tecsanpedro.edu.mx', N'Juanilloelpillo10', N'chihuahua', CAST(N'2025-05-16T06:42:01.330' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (4, N'tequito', N'san', N'pedro', N'tequito', 0, N'', N'lala', N'chihuahua', CAST(N'2025-05-16T08:00:59.240' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (5, N'', N'', N'', N'', 0, N'q@q', N'', N'', CAST(N'2025-05-16T08:03:32.397' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (7, N'Aivi', N'Rodríguez', N'', N'aivirdz', 18, N'aivirdz@gmaill.com', N'aivirdz1', N'chihuahua', CAST(N'2025-05-29T08:33:26.237' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (8, N'asdwad', N'awdasdw', N'sadawda', N'asdwdas', 12, N'aivirdz1@gmaill.com', N'asdwadsd', N'michoacan', CAST(N'2025-06-03T08:34:04.370' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (9, N'asdawd', N'asdwdad', N'awdadw', N'awdawd', 11, N'aivirdz@gmail.com', N'dawdawd12', N'oaxaca', CAST(N'2025-06-03T08:53:37.960' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (1008, N'aksjhkjsdhaksjhdaksdk', N'skjhaskdjhasdkjh', N'ksajdhaskjdhasdjh', N'UGR8', 32, N'urdhh@com.com', N'123456789', N'coahuila', CAST(N'2025-06-10T07:32:09.163' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2008, N'Niria', N'Gonzalez', N'Ortiz', N'niria', 35, N'niria.gonzalez@tecsanpedro.edu.mx', N'12345678_', N'coahuila', CAST(N'2025-06-10T12:07:52.807' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2009, N'adsad', N'sadadas', N'awdada', N'asdadw', 12, N'asdada@gmail.com', N'awdadadwa2', N'jalisco', CAST(N'2025-06-10T21:01:37.147' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2010, N'asdad', N'asdasd', N'aasdad', N'asdada123', 12, N'asdada3242@gmail.com', N'addwdadaw12', N'nayarit', CAST(N'2025-06-10T21:04:10.360' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2011, N'asdawads', N'awdadawda', N'awdadawd', N'adawdad12', 13, N'wadada342@gmail.com', N'sdawa1313', N'nuevoleon', CAST(N'2025-06-10T21:08:24.340' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2012, N'adwadwad', N'adwadad', N'dawdada', N'awdadadw2432', 14, N'24adawad@gmail.com', N'sadawa123', N'nuevoleon', CAST(N'2025-06-10T21:13:39.767' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2013, N'1', N'2', N'3', N'2', 0, N'alvarogonzalez0509@gmail.com', N'123', N'jalisco', CAST(N'2025-06-11T08:12:55.117' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2014, N'czczc', N'sacaasc', N'ascascasc', N'aaaaaa1', 12, N'sadawda@gmail.com', N'12345678', N'jalisco', CAST(N'2025-06-11T20:09:52.947' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2015, N'Sergio Servando', N'Prado', N'Lozano', N'Papu1234', 6, N'serprado@yahoo.com', N'Hola_1234.', N'nayarit', CAST(N'2025-06-11T22:15:03.687' AS DateTime))
INSERT [dbo].[Usuarios] ([Id], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [NombreUsuario], [Edad], [Correo], [Contraseña], [Estado], [FechaRegistro]) VALUES (2016, N'dadawd', N'adwdaw', N'wadad', N'awdadad', 15, N'sfsfsfsfds@jshdkjhakjdh.com', N'Hola1234.', N'michoacan', CAST(N'2025-06-12T23:04:40.050' AS DateTime))
SET IDENTITY_INSERT [dbo].[Usuarios] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Usuarios__60695A19179203D2]    Script Date: 13/06/2025 08:58:24 a. m. ******/
ALTER TABLE [dbo].[Usuarios] ADD UNIQUE NONCLUSTERED 
(
	[Correo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Usuarios__6B0F5AE09242A434]    Script Date: 13/06/2025 08:58:24 a. m. ******/
ALTER TABLE [dbo].[Usuarios] ADD UNIQUE NONCLUSTERED 
(
	[NombreUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProgresoDetalle] ADD  DEFAULT (getdate()) FOR [FechaGuardado]
GO
ALTER TABLE [dbo].[ProgresoJuego] ADD  DEFAULT ((0)) FOR [Completado]
GO
ALTER TABLE [dbo].[ProgresoJuego] ADD  DEFAULT (getdate()) FOR [FechaGuardado]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT (getdate()) FOR [FechaRegistro]
GO
ALTER TABLE [dbo].[ProgresoJuego]  WITH CHECK ADD FOREIGN KEY([UsuarioId])
REFERENCES [dbo].[Usuarios] ([Id])
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD CHECK  (([Edad]>=(0) AND [Edad]<=(120)))
GO
/****** Object:  StoredProcedure [dbo].[sp_CambiarContrasenaPorCorreo]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_CambiarContrasenaPorCorreo]
  @Correo NVARCHAR(100),
  @NuevaContrasena NVARCHAR(100)
AS
BEGIN
  SET NOCOUNT ON;

  IF EXISTS (SELECT 1 FROM Usuarios WHERE Correo = @Correo)
  BEGIN
    UPDATE Usuarios
    SET Contraseña = @NuevaContrasena
    WHERE Correo = @Correo;

    SELECT 'Contraseña actualizada correctamente' AS Mensaje;
  END
  ELSE
  BEGIN
    RAISERROR('Correo no encontrado.', 16, 1);
  END
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ConsultarProgresoPorCorreo]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[sp_ConsultarProgresoPorCorreo]
  @correo NVARCHAR(150)
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    pj.Materia AS materia,
    pj.Dificultad AS dificultad,
    COUNT(CASE WHEN pj.Completado = 1 THEN 1 END) AS niveles_correctos,
    COUNT(CASE WHEN pj.Completado = 0 THEN 1 END) AS niveles_incorrectos,
    CAST(
      (CAST(COUNT(CASE WHEN pj.Completado = 1 THEN 1 END) AS FLOAT) /
       NULLIF(COUNT(*), 0)) * 100 AS DECIMAL(5,2)
    ) AS progreso
  FROM ProgresoJuego pj
  INNER JOIN Usuarios u ON u.Id = pj.UsuarioId
  WHERE u.Correo = @correo
  GROUP BY pj.Materia, pj.Dificultad
  ORDER BY pj.Materia, pj.Dificultad;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GuardarProgreso]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_GuardarProgreso]
  @UsuarioId INT,
  @Materia NVARCHAR(50),
  @Dificultad NVARCHAR(20),
  @Nivel INT,
  @Completado BIT
AS
BEGIN
  SET NOCOUNT ON;

  IF EXISTS (
    SELECT 1 FROM ProgresoJuego
    WHERE UsuarioId = @UsuarioId AND Materia = @Materia AND Dificultad = @Dificultad AND Nivel = @Nivel
  )
  BEGIN
    UPDATE ProgresoJuego
    SET Completado = @Completado, FechaGuardado = GETDATE()
    WHERE UsuarioId = @UsuarioId AND Materia = @Materia AND Dificultad = @Dificultad AND Nivel = @Nivel;
  END
  ELSE
  BEGIN
    INSERT INTO ProgresoJuego (UsuarioId, Materia, Dificultad, Nivel, Completado)
    VALUES (@UsuarioId, @Materia, @Dificultad, @Nivel, @Completado);
  END
END
GO
/****** Object:  StoredProcedure [dbo].[sp_IniciarSesion]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_IniciarSesion]
  @UsuarioCorreo NVARCHAR(100),
  @Contrasena NVARCHAR(100)
AS
BEGIN
  SELECT Id AS usuarioId
  FROM Usuarios
  WHERE (NombreUsuario = @UsuarioCorreo OR Correo = @UsuarioCorreo)
    AND Contraseña = @Contrasena;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertarUsuario]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_InsertarUsuario]
    @Nombre NVARCHAR(100),
    @ApellidoPaterno NVARCHAR(100),
    @ApellidoMaterno NVARCHAR(100),
    @NombreUsuario NVARCHAR(50),
    @Edad INT,
    @Correo NVARCHAR(150),
    @Contraseña NVARCHAR(255),
    @Estado NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    -- Validar edad
    IF @Edad < 6 OR @Edad > 15
    BEGIN
        RAISERROR('La edad debe ser entre 6 y 15.', 16, 1);
        RETURN;
    END

    -- Validar duplicados de correo o usuario
    IF EXISTS (
        SELECT 1
        FROM Usuarios
        WHERE Correo = @Correo
           OR NombreUsuario = @NombreUsuario
    )
    BEGIN
        RAISERROR('El correo o nombre de usuario ya están registrados.', 16, 1);
        RETURN;
    END

    -- Insertar nuevo usuario
    INSERT INTO Usuarios (
        Nombre,
        ApellidoPaterno,
        ApellidoMaterno,
        NombreUsuario,
        Edad,
        Correo,
        Contraseña,
        Estado
    )
    VALUES (
        @Nombre,
        @ApellidoPaterno,
        @ApellidoMaterno,
        @NombreUsuario,
        @Edad,
        @Correo,
        @Contraseña,
        @Estado
    );
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_ObtenerConfiguracion]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_ObtenerConfiguracion]
  @UsuarioId INT
AS
BEGIN
  SELECT Dificultad, Materia
  FROM ConfiguracionJuego
  WHERE UsuarioId = @UsuarioId;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ObtenerNivelesCompletados]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_ObtenerNivelesCompletados]
  @usuarioId INT,
  @materia NVARCHAR(100),
  @dificultad NVARCHAR(100)
AS
BEGIN
  SET NOCOUNT ON;

  SELECT Nivel
  FROM ProgresoJuego
  WHERE UsuarioId = @usuarioId
    AND Materia = @materia
    AND Dificultad = @dificultad
    AND Completado = 1
  ORDER BY Nivel;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ObtenerProgreso]    Script Date: 13/06/2025 08:58:24 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_ObtenerProgreso]
  @usuarioId INT,
  @materia NVARCHAR(100),
  @dificultad NVARCHAR(100)
AS
BEGIN
  SET NOCOUNT ON;

  SELECT
    COUNT(CASE WHEN Completado = 1 THEN 1 END) AS NivelesCorrectos,
    COUNT(CASE WHEN Completado = 0 THEN 1 END) AS NivelesIncorrectos,
    CASE 
      WHEN COUNT(*) = 0 THEN 0
      ELSE CAST(
        (CAST(COUNT(CASE WHEN Completado = 1 THEN 1 END) AS FLOAT) / COUNT(*)) * 100
        AS INT
      )
    END AS Progreso
  FROM ProgresoJuego
  WHERE UsuarioId = @usuarioId
    AND Materia = @materia
    AND Dificultad = @dificultad;
END
GO
