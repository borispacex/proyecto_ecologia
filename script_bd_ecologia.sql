-- Tabla fotografia
create table fotografias (
    id_fotografia serial primary key,
    imagen varchar(200),
    descripcion varchar(250),
    numero integer not null default 0,
    estado boolean not null default true,
    tipo varchar(100) not null,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- Tabla persona
create table personas (
    id_persona serial primary key,
    id_fotografia integer not null,
    paterno varchar(50) not null,
    materno varchar(50),
    nombres varchar(100) not null,
    ci varchar(20) not null unique,
    sexo varchar(20),  -- id
    estado_civil varchar(50),   -- id
    url varchar(100),
    fec_nacimiento timestamp, 
    ciudad varchar(50),
    provincia varchar(50)    -- id
    pais varchar(50),  -- id
    direccion1 varchar(100),
    direccion2 varchar(100),
    correo varchar(50) not null unique,
    telefono varchar(20) unique,
    celular varchar(20) unique,
    lenguaje varchar(50),
    grado_academico varchar(100),   -- id
    formacion_pro TEXT,
    formacion_adi TEXT,
    habilidades TEXT,
    conclusion TEXT,
    estado boolean not null default true,     -- id
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    FOREIGN KEY (id_fotografia) REFERENCES fotografias(id_fotografia)
);
-- Tabla adm_usuario
create table adm_usuarios(
    id_usuario serial primary key,
    id_persona integer not null,
    usuario varchar(50) not null unique,
    password varchar(100) not null,
    recordatorio varchar(100),
    estado boolean not null default true,
    resetPasswordToken varchar(100),
    resetPasswordExpires timestamp with time zone,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona)
);
-- tabla adm_rol
create table adm_roles(
    id_rol serial primary key,
    rol varchar(50) not null unique,
    descripcion varchar(200),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- Tabla adm_usuario_rol
create table adm_usuario_roles(
    id_adm_usuario_rol serial primary key,
    id_usuario integer not null,
    id_rol integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_usuario) REFERENCES adm_usuarios(id_usuario),
    FOREIGN KEY (id_rol) REFERENCES adm_roles(id_rol)
);
-- tabla inv_tipos
create table inv_tipos(
    id_inv_tipo serial primary key,
    tipo varchar(100),
    descripcion varchar(200),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- tabla investigadores
create table investigadores(
    id_investigador serial primary key,
    id_persona integer not null,
    id_inv_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_persona) REFERENCES personas(id_persona),
    FOREIGN KEY (id_inv_tipo) REFERENCES inv_tipos(id_inv_tipo)
);
-- tabla proyectos
create table proyectos (
    id_proyecto serial primary key,
    id_adm integer not null,
    id_coordinador integer not null,
    titulo varchar(200),
    proceso integer default 0,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    estado varchar(20) not null default 'activo',
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_adm_rol) REFERENCES adm_usuario_roles(id_adm_usuario_rol),
    FOREIGN KEY (id_coordinador) REFERENCES investigadores(id_investigador)
);
-- tabla proy_archivos, 1 proyecto puede tener n archivos
create table proy_archivos(
    id_proy_archivo serial primary key,
    id_proyecto integer not null,
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla inv_proyectos
create table inv_proyectos (
    id_inv_proyecto serial primary key,
    id_proyecto integer not null,
    id_investigador integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_investigador) REFERENCES investigadores(id_investigador)
);
------------------################### ADMINISTRADOR ###################------------------ 
-- tabla tipo
create table tipos (
    id_tipo serial primary key,
    nombre varchar(100) not null,
    descripcion varchar(200) not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null
);
-- tabla permiso_archivos
create table permiso_archivos (
    id_permiso_archivo serial primary key,
    id_proyecto integer not null,
    tipo varchar(100),
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla convenios
create table convenios (
    id_convenio serial primary key,
    id_proyecto integer not null,
    -- archivo
    archivo varchar(50),
    nombre_archivo varchar(100),
    descripcion_archivo varchar(200),
    id_tipo integer not null,
    tipo varchar(100) not null,
    titulo varchar(100) not null,
    obejtivo varchar(100) not null,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    descripcion varchar(200),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla conv_archivos
create table conv_archivos(
    id_conv_archivo serial primary key,
    id_convenio integer not null,
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    tipo varchar(100) not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_convenio) REFERENCES convenios(id_convenio),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla contratados
create table contratados (
    id_contratado serial primary key,
    id_proyecto integer not null,
    -- archivo
    archivo varchar(50),
    nombre_archivo varchar(100),
    descripcion_archivo varchar(200),
    id_tipo integer not null,
    tipo varchar(100) not null,
    nombrecompleto varchar(150) not null,
    ci varchar(20) not null,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    descripcion varchar(200),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla contra_archivos
create table contra_archivos(
    id_contra_archivo serial primary key,
    id_contratado integer not null,
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_contratado) REFERENCES contratados(id_contratado),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
------------------################### INVESTIGADOR ###################------------------ 

-- tabla basica_tecnicas
create table basica_tecnicas(
    id_basica_tecnica serial primary key,
    id_proyecto integer not null,
    tipo varchar(100) not null,
    area varchar(100),
    tipo_p varchar(100) not null,
    carga_h integer not null,
    unidades varchar(255) not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- tabla lugar_desarrollos
create table lugar_desarrollos(
    id_lugar_desarrollo serial primary key,
    id_proyecto integer not null,
    departamento varchar(100) not null,
    provincia varchar(100) not null,
    municipio varchar(100) not null,
    localidad varchar(100) not null,
    latmax numeric(10,8),
    lonmax numeric(10,8),    -- decimal(10,8) en SEQUELIZE
    latmin numeric(10,8),
    lonmin numeric(10,8),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- tabla cursos
create table cursos(
    id_curso serial primary key,
    id_proyecto integer not null,
    titulo varchar(100) not null,
    objetivo varchar(100) not null,
    lugar varchar(100) not null,
    expositores varchar(255) not null,
    asistentes integer,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    horas integer,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)
);
-- tabla curso_archivos, 1 curso_archivos puede tener n archivos
create table curso_archivos(
    id_curso_archivo serial primary key,
    id_curso integer not null,
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla eventos
create table eventos(
    id_evento serial primary key,
    id_proyecto integer not null,
    titulo varchar(100) not null,
    objetivo varchar(100) not null,
    lugar varchar(100) not null,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    resumen varchar(255),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)   
);
-- tabla evento_archivos, 1 evento_archivos puede tener n archivos
create table evento_archivos(
    id_evento_archivos serial primary key,
    id_evento integer not null,
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla nota_prensas
create table nota_prensas(
    id_nota_prensa serial primary key,
    id_proyecto integer not null,
    titulo varchar(100) not null,
    objetivo varchar(100) not null,
    lugar varchar(100) not null,
    prensa varchar(100) not null,
    fecha timestamp with time zone,
    resumen varchar(255),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)   
);
-- tabla nota_archivos, 1 nota_archivos puede tener n archivos
create table nota_archivos(
    id_nota_archivo serial primary key,
    id_nota_prensa integer not null,
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_nota_prensa) REFERENCES nota_prensas(id_nota_prensa),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla exposiciones
create table exposiciones(
    id_exposicion serial primary key,
    id_proyecto integer not null,
    titulo varchar(100) not null,
    tema varchar(100) not null,
    objetivo varchar(100) not null,
    lugar varchar(100) not null,
    asistentes integer,
    fechaini timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    fechafin timestamp with time zone,
    resumen varchar(255),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto)   
);
-- tabla expo_archivos, 1 expo_archivos puede tener n archivos
create table expo_archivos(
    id_expo_archivo serial primary key,
    id_exposicion integer not null,
    -- archivo
    archivo varchar(50),
    nombre varchar(100),
    descripcion varchar(200),
    id_tipo integer not null,
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_exposicion) REFERENCES exposiciones(id_exposicion),
    FOREIGN KEY (id_tipo) REFERENCES tipos(id_tipo)
);
-- tabla unidades, n unidades puede tener una basica tecnica
create table unidades(
    id_unidad serial primary key,
    id_basica_tecnica integer not null,
    nombre varchar(100),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_basica_tecnica) REFERENCES basica_tecnicas(id_basica_tecnica)
);
-- tabla expositores, n expositores puede tener un curso
create table expositores(
    id_expositor serial primary key,
    id_curso integer not null,
    nombres varchar(100),
    apellidos varchar(100),
    estado boolean not null default true,
    createdAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null, 
    updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);
-----------------------###################### OPERACIONES ######################-----------------------

-- EDITAR TABLAS
-- agregar un campo a una tabla
alter table personas add constraint tipo_sanguineo varchar(25) not null;
-- tabla personas agregando campo updatedAt
alter table personas add constraint updatedAt timestamp with time zone default ('now'::text)::timestamp(6) with time zone not null;


-- agregando una llave foranea
alter table  personas add constraint FKllave FOREIGN KEY (id) REFERENCES fotografias(id);


-- AGREGAR DATO
-- agregando dato a tabla ya con datos
update personas set tipo_sanguineo = 'ORH+';
-- agregando dato a tabla fotografia dato --> tipo
update fotografias set tipo = 'foto' where id_fotografia = 1;

update adm_usuarios set password = '001' where id_adm_usuario = 28;

----------------------- CONSULTAS ---------------------
-- CONSULTAS PERSONA
insert into personas (id_fotografia, paterno, materno, nombres, sexo, estado_civil, fec_nacimiento, pais, provincia, direccion, correo, telefono, grado_academico) 
values (1, 'Vargas', 'Paucara', 'Boris', 'M', 'S', '12/01/1996 00:00:00.00', 'Bolivia', 'Murillo', 'Mallasa', 'borisvargaspaucara@gmail.com', '60514138', 'Estudiante');

insert into personas (id_fotografia, paterno, materno, nombres, sexo, estado_civil, fec_nacimiento, pais, provincia, direccion, correo, telefono, grado_academico) 
values (2, 'Moraes', 'Ramirez', 'Monica', 'F', 'C', '01/05/1986 00:00:00.00', 'Bolivia', 'Murillo', 'Obrajes', 'moraes@gmail.com', '00000000', 'Doctora');

insert into personas (id_fotografia, paterno, materno, nombres, sexo, estado_civil, fec_nacimiento, pais, provincia, direccion, correo, telefono, grado_academico) 
values (3, 'Garitano', 'Zavala', 'Alvaro', 'M', 'C', '01/05/1988 00:00:00.00', 'Bolivia', 'Murillo', 'Calacoto', 'garitano@gmail.com', '22222222', 'Doctor');
-- CONSULTAS ADM_ROL
insert into adm_roles (rol, descripcion) values ('admin', 'Administrador del sistema');
insert into adm_roles (rol, descripcion) values ('director', 'Director del instituto de Ecologia');
insert into adm_roles (rol, descripcion) values ('investigador', 'Investigador del Instituto de Ecologia');
-- CONSULTAS TIPOS
insert into tipos (nombre, descripcion) values ('Principal', 'Son los archivos principales para la creación del proyecto');
insert into tipos (nombre, descripcion) values ('DGB', 'Archivo de direccion general de biodiversidad');
insert into tipos (nombre, descripcion) values ('SERNAP', 'Archivo de servicio nacional de areas protegidas');
insert into tipos (nombre, descripcion) values ('CITES', 'Archivo');
insert into tipos (nombre, descripcion) values ('BIOETICA', 'Archivo');
insert into tipos (nombre, descripcion) values ('Cierre de proyecto', 'Archivos necesarios para el cierre de proyecto');
insert into tipos (nombre, descripcion) values ('Otros', 'Cualquier tipo de archivo');

-- CONSULTA ADM_USUARIO_ROL
insert into adm_usuario_roles (id_usuario, id_rol) values (1, 1);   -- 1 admim
insert into adm_usuario_roles (id_usuario, id_rol) values (2, 2);   -- 2 director  
insert into adm_usuario_roles (id_usuario, id_rol) values (3, 3);   -- 3 investigador
-- agregando un rol mas a admin
insert into adm_usuario_roles (id_usuario, id_rol) values (2, 3);   -- 3 investigador

-- Eliminamos registros
delete from fotografias where id_fotografia=2;
-- eliminamos tablas
drop table adm_inv_proyectos, proyectos, proyecto_archivos, archivos;

-- agregando campos a personas
alter table personas add formacion_pro TEXT;
alter table personas add formacion_adi TEXT;
alter table personas add habilidades TEXT;
alter table personas add conclusion TEXT;

-- agregando proceso a proyectos
alter table proyectos add proceso integer default 0;
