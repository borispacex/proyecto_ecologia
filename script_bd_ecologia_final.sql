-- PREPARANO SQL para base de datos
-- TABLA FOTOGRAFIAS
create table fotografias (
    id_fotografia serial primary key,
    imagen varchar(200),
    descripcion varchar(250),
    numero integer not null default 0,
    estado boolean not null default true,
    tipo varchar(100) not null default 'foto',
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- TABLA PERSONAS
create table personas (
    id_persona serial primary key,
    id_fotografia integer default 1 not null,
    paterno varchar(100) not null,
    materno varchar(100),
    nombres varchar(100) not null,
    ci varchar(20) not null unique,
    sexo varchar(20),
    estado_civil varchar(50),
    url varchar(200),
    fec_nacimiento timestamp, 
    ciudad varchar(100),
    provincia varchar(100),    -- id
    pais varchar(100),  -- id
    direccion1 varchar(1000),
    direccion2 varchar(1000),
    correo varchar(100) not null unique,
    telefono varchar(20) unique,
    celular varchar(20) unique,
    lenguaje varchar(500),
    grado_academico varchar(200),
    formacion_pro TEXT,
    formacion_adi TEXT,
    habilidades TEXT,
    conclusion TEXT,
    tema varchar(50) not null default '',
    color varchar(50) not null default 'theme-cyan',
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    FOREIGN KEY (id_fotografia) REFERENCES fotografias(id_fotografia)
);
-- TABLA ADM_USUARIOS
create table adm_usuarios(
    id_usuario serial primary key,
    id_persona integer not null,
    usuario varchar(50) not null unique,
    password varchar(100) not null,
    recordatorio varchar(1000),
    estado boolean not null default true,
    "resetPasswordToken" varchar(100),
    "resetPasswordExpires" timestamp with time zone,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona)
);
-- TABLA ADM_ROLES
create table adm_roles(
    id_rol serial primary key,
    rol varchar(50) not null unique,
    descripcion varchar(2000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- TABLA ADM_USUARIO_ROLES
create table adm_usuario_roles(
    id_adm_usuario_rol serial primary key,
    id_usuario integer not null,
    id_rol integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_usuario) REFERENCES adm_usuarios(id_usuario),
    FOREIGN KEY (id_rol) REFERENCES adm_roles(id_rol)
);
-- TABLA INV_TIPOS
create table inv_tipos(
    id_inv_tipo serial primary key,
    tipo varchar(100),
    descripcion varchar(2000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- TABLA TIPOS
create table tipos (
    id_tipo serial primary key,
    nombre varchar(500) not null,
    descripcion varchar(2000) not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- TABLA INVESTIGADORES
create table investigadores(
    id_investigador serial primary key,
    id_persona integer not null,
    id_inv_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona),
    FOREIGN KEY (id_inv_tipo) REFERENCES inv_tipos(id_inv_tipo)
);
-- TABLA PROYECTOS
create table proyectos (
    id_proyecto serial primary key,
    id_adm integer not null,
    id_coordinador integer not null,
    titulo varchar(2000),
    objetivo varchar(10000),
    resumen varchar(20000),
    proceso integer default 0,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    -- basica general
    carrera varchar(500) default 'Biologia',
    n_instituto varchar(500) default 'Instituto de Ecologia',
    --  basica tecnica
    tipo varchar(300),
    area varchar(300),
    tipo_p varchar(300),
    carga_h integer,
    -- financiamiento
    moneda varchar(100),
    financiamiento integer,
    estado varchar(100) not null default 'activo',
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_adm) REFERENCES personas(id_persona),
    FOREIGN KEY (id_coordinador) REFERENCES investigadores(id_investigador)
);
-- TABLA PROY_ARCHIVOS
create table proy_archivos(
    id_proy_archivo serial primary key,
    id_proyecto integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA INV_PROYECTOS
create table inv_proyectos (
    id_inv_proyecto serial primary key,
    id_proyecto integer not null,
    id_investigador integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_investigador) REFERENCES investigadores(id_investigador)
);
------------------################### ADMINISTRADOR ###################------------------ 
-- TABLA PERMISO_ARCHIVOS
create table permiso_archivos (
    id_permiso_archivo serial primary key,
    id_proyecto integer not null,
    tipo varchar(100),
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA CONVENIOS
create table convenios (
    id_convenio serial primary key,
    id_proyecto integer not null,
    -- archivo
    archivo varchar(100),
    nombre_archivo varchar(1000),
    descripcion_archivo varchar(2000),
    id_tipo integer not null,
    tipo varchar(200),
    titulo varchar(1500),
    objetivo varchar(1500),
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    descripcion varchar(2000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA CONV_ARCHIVOS
create table conv_archivos(
    id_conv_archivo serial primary key,
    id_convenio integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    tipo varchar(200),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_convenio) REFERENCES convenios(id_convenio),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA CONTRATADOS
create table contratados (
    id_contratado serial primary key,
    id_proyecto integer not null,
    -- archivo
    archivo varchar(100),
    nombre_archivo varchar(1000),
    descripcion_archivo varchar(2000),
    id_tipo integer not null,
    tipo varchar(200),
    nombrecompleto varchar(1500),
    ci varchar(100),
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    descripcion varchar(2000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA CONTRA_ARCHIVOS
create table contra_archivos(
    id_contra_archivo serial primary key,
    id_contratado integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_contratado) REFERENCES contratados(id_contratado),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
------------------################### INVESTIGADOR COORDINADOR ###################------------------ 
-- TABLA BASICA_TECNICAS
create table basica_tecnicas(
    id_basica_tecnica serial primary key,
    id_proyecto integer not null,
    tipo varchar(200),
    area varchar(500),
    tipo_p varchar(200),
    carga_h integer,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- TABLA UNIDADES
create table unidades(
    id_unidad serial primary key,
    id_proyecto integer not null,
    nombre varchar(1000),
    observacion varchar(5000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- TABLA FINANCIAMIENTOS
create table financiamientos(
    id_financiamiento serial primary key,
    id_proyecto integer not null,
    fuente varchar(2000),
    aporte integer,
    observacion varchar(5000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- TABLA LUGAR_DESARROLLOS
create table lugar_desarrollos(
    id_lugar_desarrollo serial primary key,
    id_proyecto integer not null,
    departamento varchar(500),
    provincia varchar(500),
    municipio varchar(500),
    localidad varchar(500),
    latmax numeric(10,8),
    lonmax numeric(10,8),    -- decimal(10,8) en SEQUELIZE
    latmin numeric(10,8),
    lonmin numeric(10,8),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- TABLA CURSOS
create table cursos(
    id_curso serial primary key,
    id_proyecto integer not null,
    titulo varchar(2000),
    objetivo varchar(3000),
    lugar varchar(1500),
    resumen varchar(5000),
    asistentes integer,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    horas integer,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- TABLA EXPOSITORES
create table expositores(
    id_expositor serial primary key,
    id_curso integer not null,
    nombres varchar(1000),
    apellidos varchar(1000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);
-- TABLA CURSO_ARCHIVOS
create table curso_archivos(
    id_curso_archivo serial primary key,
    id_curso integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA EVENTOS
create table eventos(
    id_evento serial primary key,
    id_proyecto integer not null,
    titulo varchar(3000),
    objetivo varchar(3000),
    lugar varchar(1000),
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    resumen varchar(5000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)   
);
-- TABLA EVENTO_ARCHIVOS
create table evento_archivos(
    id_evento_archivo serial primary key,
    id_evento integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA NOTA_PRENSAS
create table nota_prensas(
    id_nota_prensa serial primary key,
    id_proyecto integer not null,
    titulo varchar(3000),
    objetivo varchar(4000),
    lugar varchar(1000),
    prensa varchar(1000),
    fecha timestamp with time zone,
    resumen varchar(5000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)   
);
-- TABLA NOTA_ARCHIVOS
create table nota_archivos(
    id_nota_archivo serial primary key,
    id_nota_prensa integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_nota_prensa) REFERENCES nota_prensas(id_nota_prensa),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA EXPOSICIONES
create table exposiciones(
    id_exposicion serial primary key,
    id_proyecto integer not null,
    titulo varchar(2000),
    tema varchar(2000),
    objetivo varchar(2000),
    lugar varchar(3000),
    asistentes integer,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    resumen varchar(5000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)   
);
-- TABLA EXPO_ARCHIVOS
create table expo_archivos(
    id_expo_archivo serial primary key,
    id_exposicion integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_exposicion) REFERENCES exposiciones(id_exposicion),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- TABLA PUBLICACIONES
create table publicaciones(
    id_publicacion serial primary key,
    id_proyecto integer not null,
    id_coordinador integer not null,
    titulo varchar(2000),
    fecha timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    contenido varchar(2000),
    autores varchar(1000),
    tipo varchar(100),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_coordinador) REFERENCES investigadores(id_investigador)
);
-- TABLA COMENTARIOS
create table comentarios(
    id_comentario serial primary key,
    id_persona integer not null,
    id_publicacion integer not null,
    comentario varchar(5000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona),
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion)
);
-- TABLA AUTORES
create table autores(
    id_autor serial primary key,
    id_investigador integer not null,
    id_publicacion integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_investigador) REFERENCES investigadores(id_investigador),
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion)
);
-- TABLA PUBLI_ARCHIVOS
create table publi_archivos(
    id_publi_archivo serial primary key,
    id_publicacion integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);

------------------################### INVESTIGADOR  ###################------------------ 
-- TABLA PETICIONES
create table peticiones(
    id_peticion serial primary key,
    id_proyecto integer not null,
    id_investigador integer not null,
    tipo varchar(100),
    motivos varchar(5000),
    detalle varchar(5000),
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_investigador) REFERENCES investigadores(id_investigador)
);
-- TABLA PETI_ARCHIVOS
create table peti_archivos(
    id_peti_archivo serial primary key,
    id_peticion integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_peticion) REFERENCES peticiones(id_peticion),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
------------------################### DIRECTOR ###################------------------ 
create table seguimientos(
    id_seguimiento serial primary key,
    id_proyecto integer not null,
    id_director integer not null,
    tipo varchar(100),
    revision varchar(4000),
    observaciones varchar(5000),
    proceso integer,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_director) REFERENCES personas(id_persona)
);
-- TABLA SEGUI_ARCHIVOS
create table segui_archivos(
    id_segui_archivo serial primary key,
    id_seguimiento integer not null,
    -- archivo
    archivo varchar(100),
    nombre varchar(1000),
    descripcion varchar(2000),
    id_tipo integer not null,
    estado boolean not null default true,
    "createdAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    "updatedAt" timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_seguimiento) REFERENCES seguimientos(id_seguimiento),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
------------------################### LLENADO DE DATOS ###################------------------ 
-- CONSULTAS FOTOGRAFIAS
insert into fotografias (imagen, descripcion, tipo) values ('photo_default.png', 'Fotografia por default', 'foto');
insert into fotografias (imagen, descripcion, tipo) values ('logo-pdf.jpg', 'Archivo PDF por default', 'imagen');
-- CONSULTAS ADM_ROLES
insert into adm_roles (rol, descripcion) values ('admin', 'Administrador del sistema');
insert into adm_roles (rol, descripcion) values ('director', 'Director del instituto de Ecologia');
insert into adm_roles (rol, descripcion) values ('investigador', 'Investigador del Instituto de Ecologia');
-- CONSULTAS INV_TIPOS
insert into inv_tipos (tipo, descripcion) values ('Titular', 'Trabaja con proyectos');
insert into inv_tipos (tipo, descripcion) values ('Asociado con proyecto', 'Tiene un proyecto asociado');
insert into inv_tipos (tipo, descripcion) values ('Asociado por invitación', 'Invitado por la UMSA, por tiempo determinado');
-- CONSULTAS TIPOS
insert into tipos (nombre, descripcion) values ('Principal', 'Son los archivos principales para la creación del proyecto');
insert into tipos (nombre, descripcion) values ('DGB', 'Archivo de direccion general de biodiversidad');
insert into tipos (nombre, descripcion) values ('SERNAP', 'Archivo de servicio nacional de areas protegidas');
insert into tipos (nombre, descripcion) values ('CITES', 'Archivo');
insert into tipos (nombre, descripcion) values ('BIOETICA', 'Archivo');
insert into tipos (nombre, descripcion) values ('Cierre de proyecto', 'Archivos necesarios para el cierre de proyecto');
insert into tipos (nombre, descripcion) values ('Otros', 'Cualquier tipo de archivo');
insert into tipos (nombre, descripcion) values ('Convenios', 'Archivo de convenios');
insert into tipos (nombre, descripcion) values ('Contratados', 'Archivo de contratados');
insert into tipos (nombre, descripcion) values ('Cursos', 'Archivo de cursos');
insert into tipos (nombre, descripcion) values ('Eventos', 'Archivo de eventos');
insert into tipos (nombre, descripcion) values ('Notas de prensa', 'Archivo de notas de prensa');
insert into tipos (nombre, descripcion) values ('Exposiciones', 'Archivo de Exposiciones');
insert into tipos (nombre, descripcion) values ('Publicacions', 'Archivo de publicaciones');
insert into tipos (nombre, descripcion) values ('Seguimientos', 'Archivo de seguimientos');
insert into tipos (nombre, descripcion) values ('Peticiones', 'Archivo de peticiones de investigadores');
insert into tipos (nombre, descripcion) values ('Final', 'Archivo de proyecto final');
-- CREANDO ADMINISTRADOR POR DEFECTO
insert into personas (id_fotografia, nombres, paterno, ci, correo, grado_academico) values (1, 'usuario', 'administrador', '00000000', 'institutoecologiaumsa@gmail.com', 'Lic.');
insert into adm_usuarios (id_persona, usuario, password) values (1, 'admin', '$2b$10$WjuICcMcKpWFduvTSwR3suHdQaDQ2GqN2Au.dzr77gQJ/ifcqMSWa'); -- verde20
insert into adm_usuario_roles (id_usuario, id_rol) values (1, 1);

