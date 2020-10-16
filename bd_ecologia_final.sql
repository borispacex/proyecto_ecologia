--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.2

-- Started on 2020-10-09 13:37:33 -04

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 17657)
-- Name: adm_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_roles (
    id_rol integer NOT NULL,
    rol character varying(50) NOT NULL,
    descripcion character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.adm_roles OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 17655)
-- Name: adm_roles_id_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adm_roles_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adm_roles_id_rol_seq OWNER TO postgres;

--
-- TOC entry 3496 (class 0 OID 0)
-- Dependencies: 208
-- Name: adm_roles_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_roles_id_rol_seq OWNED BY public.adm_roles.id_rol;


--
-- TOC entry 211 (class 1259 OID 17670)
-- Name: adm_usuario_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_usuario_roles (
    id_adm_usuario_rol integer NOT NULL,
    id_usuario integer NOT NULL,
    id_rol integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.adm_usuario_roles OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 17668)
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adm_usuario_roles_id_adm_usuario_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adm_usuario_roles_id_adm_usuario_rol_seq OWNER TO postgres;

--
-- TOC entry 3497 (class 0 OID 0)
-- Dependencies: 210
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_roles_id_adm_usuario_rol_seq OWNED BY public.adm_usuario_roles.id_adm_usuario_rol;


--
-- TOC entry 207 (class 1259 OID 17639)
-- Name: adm_usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_usuarios (
    id_usuario integer NOT NULL,
    id_persona integer NOT NULL,
    usuario character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    recordatorio character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "resetPasswordToken" character varying(100),
    "resetPasswordExpires" timestamp with time zone,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.adm_usuarios OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 17637)
-- Name: adm_usuarios_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adm_usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adm_usuarios_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3498 (class 0 OID 0)
-- Dependencies: 206
-- Name: adm_usuarios_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuarios_id_usuario_seq OWNED BY public.adm_usuarios.id_usuario;


--
-- TOC entry 263 (class 1259 OID 18185)
-- Name: autores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.autores (
    id_autor integer NOT NULL,
    id_investigador integer NOT NULL,
    id_publicacion integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.autores OWNER TO postgres;

--
-- TOC entry 262 (class 1259 OID 18183)
-- Name: autores_id_autor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.autores_id_autor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.autores_id_autor_seq OWNER TO postgres;

--
-- TOC entry 3499 (class 0 OID 0)
-- Dependencies: 262
-- Name: autores_id_autor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.autores_id_autor_seq OWNED BY public.autores.id_autor;


--
-- TOC entry 235 (class 1259 OID 17912)
-- Name: basica_tecnicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.basica_tecnicas (
    id_basica_tecnica integer NOT NULL,
    id_proyecto integer NOT NULL,
    tipo character varying(100),
    area character varying(100),
    tipo_p character varying(100),
    carga_h integer,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.basica_tecnicas OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 17910)
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.basica_tecnicas_id_basica_tecnica_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.basica_tecnicas_id_basica_tecnica_seq OWNER TO postgres;

--
-- TOC entry 3500 (class 0 OID 0)
-- Dependencies: 234
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.basica_tecnicas_id_basica_tecnica_seq OWNED BY public.basica_tecnicas.id_basica_tecnica;


--
-- TOC entry 261 (class 1259 OID 18164)
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    id_comentario integer NOT NULL,
    id_persona integer NOT NULL,
    id_publicacion integer NOT NULL,
    comentario character varying(254),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- TOC entry 260 (class 1259 OID 18162)
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comentarios_id_comentario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comentarios_id_comentario_seq OWNER TO postgres;

--
-- TOC entry 3501 (class 0 OID 0)
-- Dependencies: 260
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_id_comentario_seq OWNED BY public.comentarios.id_comentario;


--
-- TOC entry 233 (class 1259 OID 17891)
-- Name: contra_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contra_archivos (
    id_contra_archivo integer NOT NULL,
    id_contratado integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.contra_archivos OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 17889)
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contra_archivos_id_contra_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contra_archivos_id_contra_archivo_seq OWNER TO postgres;

--
-- TOC entry 3502 (class 0 OID 0)
-- Dependencies: 232
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contra_archivos_id_contra_archivo_seq OWNED BY public.contra_archivos.id_contra_archivo;


--
-- TOC entry 231 (class 1259 OID 17866)
-- Name: contratados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contratados (
    id_contratado integer NOT NULL,
    id_proyecto integer NOT NULL,
    archivo character varying(50),
    nombre_archivo character varying(100),
    descripcion_archivo character varying(200),
    id_tipo integer NOT NULL,
    tipo character varying(100),
    nombrecompleto character varying(150),
    ci character varying(20),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    descripcion character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.contratados OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 17864)
-- Name: contratados_id_contratado_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contratados_id_contratado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contratados_id_contratado_seq OWNER TO postgres;

--
-- TOC entry 3503 (class 0 OID 0)
-- Dependencies: 230
-- Name: contratados_id_contratado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contratados_id_contratado_seq OWNED BY public.contratados.id_contratado;


--
-- TOC entry 229 (class 1259 OID 17845)
-- Name: conv_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conv_archivos (
    id_conv_archivo integer NOT NULL,
    id_convenio integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    tipo character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.conv_archivos OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 17843)
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.conv_archivos_id_conv_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conv_archivos_id_conv_archivo_seq OWNER TO postgres;

--
-- TOC entry 3504 (class 0 OID 0)
-- Dependencies: 228
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conv_archivos_id_conv_archivo_seq OWNED BY public.conv_archivos.id_conv_archivo;


--
-- TOC entry 227 (class 1259 OID 17820)
-- Name: convenios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.convenios (
    id_convenio integer NOT NULL,
    id_proyecto integer NOT NULL,
    archivo character varying(50),
    nombre_archivo character varying(100),
    descripcion_archivo character varying(200),
    id_tipo integer NOT NULL,
    tipo character varying(100),
    titulo character varying(100),
    obejtivo character varying(100),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    descripcion character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.convenios OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 17818)
-- Name: convenios_id_convenio_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.convenios_id_convenio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.convenios_id_convenio_seq OWNER TO postgres;

--
-- TOC entry 3505 (class 0 OID 0)
-- Dependencies: 226
-- Name: convenios_id_convenio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.convenios_id_convenio_seq OWNED BY public.convenios.id_convenio;


--
-- TOC entry 245 (class 1259 OID 17996)
-- Name: curso_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.curso_archivos (
    id_curso_archivo integer NOT NULL,
    id_curso integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.curso_archivos OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 17994)
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.curso_archivos_id_curso_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.curso_archivos_id_curso_archivo_seq OWNER TO postgres;

--
-- TOC entry 3506 (class 0 OID 0)
-- Dependencies: 244
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.curso_archivos_id_curso_archivo_seq OWNED BY public.curso_archivos.id_curso_archivo;


--
-- TOC entry 241 (class 1259 OID 17960)
-- Name: cursos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cursos (
    id_curso integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100),
    objetivo character varying(100),
    lugar character varying(100),
    resumen character varying(255),
    asistentes integer,
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    horas integer,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.cursos OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 17958)
-- Name: cursos_id_curso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cursos_id_curso_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cursos_id_curso_seq OWNER TO postgres;

--
-- TOC entry 3507 (class 0 OID 0)
-- Dependencies: 240
-- Name: cursos_id_curso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cursos_id_curso_seq OWNED BY public.cursos.id_curso;


--
-- TOC entry 249 (class 1259 OID 18037)
-- Name: evento_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento_archivos (
    id_evento_archivos integer NOT NULL,
    id_evento integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.evento_archivos OWNER TO postgres;

--
-- TOC entry 248 (class 1259 OID 18035)
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evento_archivos_id_evento_archivos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.evento_archivos_id_evento_archivos_seq OWNER TO postgres;

--
-- TOC entry 3508 (class 0 OID 0)
-- Dependencies: 248
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_archivos_id_evento_archivos_seq OWNED BY public.evento_archivos.id_evento_archivos;


--
-- TOC entry 247 (class 1259 OID 18017)
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos (
    id_evento integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100),
    objetivo character varying(100),
    lugar character varying(100),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    resumen character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.eventos OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 18015)
-- Name: eventos_id_evento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.eventos_id_evento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.eventos_id_evento_seq OWNER TO postgres;

--
-- TOC entry 3509 (class 0 OID 0)
-- Dependencies: 246
-- Name: eventos_id_evento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eventos_id_evento_seq OWNED BY public.eventos.id_evento;


--
-- TOC entry 257 (class 1259 OID 18118)
-- Name: expo_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expo_archivos (
    id_expo_archivo integer NOT NULL,
    id_exposicion integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.expo_archivos OWNER TO postgres;

--
-- TOC entry 256 (class 1259 OID 18116)
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.expo_archivos_id_expo_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.expo_archivos_id_expo_archivo_seq OWNER TO postgres;

--
-- TOC entry 3510 (class 0 OID 0)
-- Dependencies: 256
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expo_archivos_id_expo_archivo_seq OWNED BY public.expo_archivos.id_expo_archivo;


--
-- TOC entry 255 (class 1259 OID 18098)
-- Name: exposiciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exposiciones (
    id_exposicion integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100),
    tema character varying(100),
    objetivo character varying(100),
    lugar character varying(100),
    asistentes integer,
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    resumen character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.exposiciones OWNER TO postgres;

--
-- TOC entry 254 (class 1259 OID 18096)
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exposiciones_id_exposicion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exposiciones_id_exposicion_seq OWNER TO postgres;

--
-- TOC entry 3511 (class 0 OID 0)
-- Dependencies: 254
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exposiciones_id_exposicion_seq OWNED BY public.exposiciones.id_exposicion;


--
-- TOC entry 243 (class 1259 OID 17980)
-- Name: expositores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expositores (
    id_expositor integer NOT NULL,
    id_curso integer NOT NULL,
    nombres character varying(100),
    apellidos character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.expositores OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 17978)
-- Name: expositores_id_expositor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.expositores_id_expositor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.expositores_id_expositor_seq OWNER TO postgres;

--
-- TOC entry 3512 (class 0 OID 0)
-- Dependencies: 242
-- Name: expositores_id_expositor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expositores_id_expositor_seq OWNED BY public.expositores.id_expositor;


--
-- TOC entry 203 (class 1259 OID 17593)
-- Name: fotografias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fotografias (
    id_fotografia integer NOT NULL,
    imagen character varying(200),
    descripcion character varying(250),
    numero integer DEFAULT 0 NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    tipo character varying(100) DEFAULT 'foto'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.fotografias OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 17591)
-- Name: fotografias_id_fotografia_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.fotografias_id_fotografia_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fotografias_id_fotografia_seq OWNER TO postgres;

--
-- TOC entry 3513 (class 0 OID 0)
-- Dependencies: 202
-- Name: fotografias_id_fotografia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fotografias_id_fotografia_seq OWNED BY public.fotografias.id_fotografia;


--
-- TOC entry 223 (class 1259 OID 17778)
-- Name: inv_proyectos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inv_proyectos (
    id_inv_proyecto integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_investigador integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.inv_proyectos OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 17776)
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inv_proyectos_id_inv_proyecto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inv_proyectos_id_inv_proyecto_seq OWNER TO postgres;

--
-- TOC entry 3514 (class 0 OID 0)
-- Dependencies: 222
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_proyectos_id_inv_proyecto_seq OWNED BY public.inv_proyectos.id_inv_proyecto;


--
-- TOC entry 213 (class 1259 OID 17691)
-- Name: inv_tipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inv_tipos (
    id_inv_tipo integer NOT NULL,
    tipo character varying(100),
    descripcion character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.inv_tipos OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 17689)
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inv_tipos_id_inv_tipo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inv_tipos_id_inv_tipo_seq OWNER TO postgres;

--
-- TOC entry 3515 (class 0 OID 0)
-- Dependencies: 212
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_tipos_id_inv_tipo_seq OWNED BY public.inv_tipos.id_inv_tipo;


--
-- TOC entry 217 (class 1259 OID 17713)
-- Name: investigadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.investigadores (
    id_investigador integer NOT NULL,
    id_persona integer NOT NULL,
    id_inv_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.investigadores OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 17711)
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.investigadores_id_investigador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.investigadores_id_investigador_seq OWNER TO postgres;

--
-- TOC entry 3516 (class 0 OID 0)
-- Dependencies: 216
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.investigadores_id_investigador_seq OWNED BY public.investigadores.id_investigador;


--
-- TOC entry 239 (class 1259 OID 17944)
-- Name: lugar_desarrollos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lugar_desarrollos (
    id_lugar_desarrollo integer NOT NULL,
    id_proyecto integer NOT NULL,
    departamento character varying(100),
    provincia character varying(100),
    municipio character varying(100),
    localidad character varying(100),
    latmax numeric(10,8),
    lonmax numeric(10,8),
    latmin numeric(10,8),
    lonmin numeric(10,8),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.lugar_desarrollos OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 17942)
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lugar_desarrollos_id_lugar_desarrollo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lugar_desarrollos_id_lugar_desarrollo_seq OWNER TO postgres;

--
-- TOC entry 3517 (class 0 OID 0)
-- Dependencies: 238
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lugar_desarrollos_id_lugar_desarrollo_seq OWNED BY public.lugar_desarrollos.id_lugar_desarrollo;


--
-- TOC entry 253 (class 1259 OID 18077)
-- Name: nota_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota_archivos (
    id_nota_archivo integer NOT NULL,
    id_nota_prensa integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.nota_archivos OWNER TO postgres;

--
-- TOC entry 252 (class 1259 OID 18075)
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nota_archivos_id_nota_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nota_archivos_id_nota_archivo_seq OWNER TO postgres;

--
-- TOC entry 3518 (class 0 OID 0)
-- Dependencies: 252
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_archivos_id_nota_archivo_seq OWNED BY public.nota_archivos.id_nota_archivo;


--
-- TOC entry 251 (class 1259 OID 18058)
-- Name: nota_prensas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota_prensas (
    id_nota_prensa integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100),
    objetivo character varying(100),
    lugar character varying(100),
    prensa character varying(100),
    fecha timestamp with time zone,
    resumen character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.nota_prensas OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 18056)
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nota_prensas_id_nota_prensa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nota_prensas_id_nota_prensa_seq OWNER TO postgres;

--
-- TOC entry 3519 (class 0 OID 0)
-- Dependencies: 250
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_prensas_id_nota_prensa_seq OWNED BY public.nota_prensas.id_nota_prensa;


--
-- TOC entry 225 (class 1259 OID 17799)
-- Name: permiso_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permiso_archivos (
    id_permiso_archivo integer NOT NULL,
    id_proyecto integer NOT NULL,
    tipo character varying(100),
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.permiso_archivos OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 17797)
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.permiso_archivos_id_permiso_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.permiso_archivos_id_permiso_archivo_seq OWNER TO postgres;

--
-- TOC entry 3520 (class 0 OID 0)
-- Dependencies: 224
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permiso_archivos_id_permiso_archivo_seq OWNED BY public.permiso_archivos.id_permiso_archivo;


--
-- TOC entry 205 (class 1259 OID 17609)
-- Name: personas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personas (
    id_persona integer NOT NULL,
    id_fotografia integer DEFAULT 1 NOT NULL,
    paterno character varying(50) NOT NULL,
    materno character varying(50),
    nombres character varying(100) NOT NULL,
    ci character varying(20) NOT NULL,
    sexo character varying(20),
    estado_civil character varying(50),
    url character varying(100),
    fec_nacimiento timestamp without time zone,
    ciudad character varying(50),
    provincia character varying(50),
    pais character varying(50),
    direccion1 character varying(100),
    direccion2 character varying(100),
    correo character varying(50) NOT NULL,
    telefono character varying(20),
    celular character varying(20),
    lenguaje character varying(50),
    grado_academico character varying(100),
    formacion_pro text,
    formacion_adi text,
    habilidades text,
    conclusion text,
    tema character varying(25) DEFAULT ''::character varying NOT NULL,
    color character varying(25) DEFAULT 'theme-cyan'::character varying NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.personas OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 17607)
-- Name: personas_id_persona_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.personas_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.personas_id_persona_seq OWNER TO postgres;

--
-- TOC entry 3521 (class 0 OID 0)
-- Dependencies: 204
-- Name: personas_id_persona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personas_id_persona_seq OWNED BY public.personas.id_persona;


--
-- TOC entry 269 (class 1259 OID 18251)
-- Name: peti_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peti_archivos (
    id_peti_archivo integer NOT NULL,
    id_peticion integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.peti_archivos OWNER TO postgres;

--
-- TOC entry 268 (class 1259 OID 18249)
-- Name: peti_archivos_id_peti_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.peti_archivos_id_peti_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.peti_archivos_id_peti_archivo_seq OWNER TO postgres;

--
-- TOC entry 3522 (class 0 OID 0)
-- Dependencies: 268
-- Name: peti_archivos_id_peti_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peti_archivos_id_peti_archivo_seq OWNED BY public.peti_archivos.id_peti_archivo;


--
-- TOC entry 267 (class 1259 OID 18227)
-- Name: peticiones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peticiones (
    id_peticion integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_investigador integer NOT NULL,
    tipo character varying(50),
    motivos character varying(1000),
    detalle character varying(1000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.peticiones OWNER TO postgres;

--
-- TOC entry 266 (class 1259 OID 18225)
-- Name: peticiones_id_peticion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.peticiones_id_peticion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.peticiones_id_peticion_seq OWNER TO postgres;

--
-- TOC entry 3523 (class 0 OID 0)
-- Dependencies: 266
-- Name: peticiones_id_peticion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peticiones_id_peticion_seq OWNED BY public.peticiones.id_peticion;


--
-- TOC entry 221 (class 1259 OID 17757)
-- Name: proy_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proy_archivos (
    id_proy_archivo integer NOT NULL,
    id_proyecto integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.proy_archivos OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 17755)
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proy_archivos_id_proy_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proy_archivos_id_proy_archivo_seq OWNER TO postgres;

--
-- TOC entry 3524 (class 0 OID 0)
-- Dependencies: 220
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proy_archivos_id_proy_archivo_seq OWNED BY public.proy_archivos.id_proy_archivo;


--
-- TOC entry 219 (class 1259 OID 17734)
-- Name: proyectos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proyectos (
    id_proyecto integer NOT NULL,
    id_adm integer NOT NULL,
    id_coordinador integer NOT NULL,
    titulo character varying(200),
    proceso integer DEFAULT 0,
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    estado character varying(20) DEFAULT 'activo'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.proyectos OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 17732)
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proyectos_id_proyecto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proyectos_id_proyecto_seq OWNER TO postgres;

--
-- TOC entry 3525 (class 0 OID 0)
-- Dependencies: 218
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proyectos_id_proyecto_seq OWNED BY public.proyectos.id_proyecto;


--
-- TOC entry 265 (class 1259 OID 18206)
-- Name: publi_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publi_archivos (
    id_publi_archivo integer NOT NULL,
    id_publicacion integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.publi_archivos OWNER TO postgres;

--
-- TOC entry 264 (class 1259 OID 18204)
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.publi_archivos_id_publi_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.publi_archivos_id_publi_archivo_seq OWNER TO postgres;

--
-- TOC entry 3526 (class 0 OID 0)
-- Dependencies: 264
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publi_archivos_id_publi_archivo_seq OWNED BY public.publi_archivos.id_publi_archivo;


--
-- TOC entry 259 (class 1259 OID 18139)
-- Name: publicaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publicaciones (
    id_publicacion integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_coordinador integer NOT NULL,
    titulo character varying(200),
    fecha timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    contenido character varying(1000),
    tipo character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.publicaciones OWNER TO postgres;

--
-- TOC entry 258 (class 1259 OID 18137)
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.publicaciones_id_publicacion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.publicaciones_id_publicacion_seq OWNER TO postgres;

--
-- TOC entry 3527 (class 0 OID 0)
-- Dependencies: 258
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publicaciones_id_publicacion_seq OWNED BY public.publicaciones.id_publicacion;


--
-- TOC entry 273 (class 1259 OID 18296)
-- Name: segui_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.segui_archivos (
    id_segui_archivo integer NOT NULL,
    id_seguimiento integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.segui_archivos OWNER TO postgres;

--
-- TOC entry 272 (class 1259 OID 18294)
-- Name: segui_archivos_id_segui_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.segui_archivos_id_segui_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.segui_archivos_id_segui_archivo_seq OWNER TO postgres;

--
-- TOC entry 3528 (class 0 OID 0)
-- Dependencies: 272
-- Name: segui_archivos_id_segui_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.segui_archivos_id_segui_archivo_seq OWNED BY public.segui_archivos.id_segui_archivo;


--
-- TOC entry 271 (class 1259 OID 18272)
-- Name: seguimientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seguimientos (
    id_seguimiento integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_director integer NOT NULL,
    tipo character varying(50),
    revision character varying(1000),
    observaciones character varying(1000),
    proceso integer,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.seguimientos OWNER TO postgres;

--
-- TOC entry 270 (class 1259 OID 18270)
-- Name: seguimientos_id_seguimiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seguimientos_id_seguimiento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seguimientos_id_seguimiento_seq OWNER TO postgres;

--
-- TOC entry 3529 (class 0 OID 0)
-- Dependencies: 270
-- Name: seguimientos_id_seguimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seguimientos_id_seguimiento_seq OWNED BY public.seguimientos.id_seguimiento;


--
-- TOC entry 215 (class 1259 OID 17702)
-- Name: tipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipos (
    id_tipo integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion character varying(200) NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.tipos OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 17700)
-- Name: tipos_id_tipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipos_id_tipo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipos_id_tipo_seq OWNER TO postgres;

--
-- TOC entry 3530 (class 0 OID 0)
-- Dependencies: 214
-- Name: tipos_id_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipos_id_tipo_seq OWNED BY public.tipos.id_tipo;


--
-- TOC entry 237 (class 1259 OID 17928)
-- Name: unidades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidades (
    id_unidad integer NOT NULL,
    id_basica_tecnica integer NOT NULL,
    nombre character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.unidades OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 17926)
-- Name: unidades_id_unidad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.unidades_id_unidad_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.unidades_id_unidad_seq OWNER TO postgres;

--
-- TOC entry 3531 (class 0 OID 0)
-- Dependencies: 236
-- Name: unidades_id_unidad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unidades_id_unidad_seq OWNED BY public.unidades.id_unidad;


--
-- TOC entry 3015 (class 2604 OID 17660)
-- Name: adm_roles id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles ALTER COLUMN id_rol SET DEFAULT nextval('public.adm_roles_id_rol_seq'::regclass);


--
-- TOC entry 3019 (class 2604 OID 17673)
-- Name: adm_usuario_roles id_adm_usuario_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles ALTER COLUMN id_adm_usuario_rol SET DEFAULT nextval('public.adm_usuario_roles_id_adm_usuario_rol_seq'::regclass);


--
-- TOC entry 3011 (class 2604 OID 17642)
-- Name: adm_usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.adm_usuarios_id_usuario_seq'::regclass);


--
-- TOC entry 3131 (class 2604 OID 18188)
-- Name: autores id_autor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores ALTER COLUMN id_autor SET DEFAULT nextval('public.autores_id_autor_seq'::regclass);


--
-- TOC entry 3071 (class 2604 OID 17915)
-- Name: basica_tecnicas id_basica_tecnica; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas ALTER COLUMN id_basica_tecnica SET DEFAULT nextval('public.basica_tecnicas_id_basica_tecnica_seq'::regclass);


--
-- TOC entry 3127 (class 2604 OID 18167)
-- Name: comentarios id_comentario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id_comentario SET DEFAULT nextval('public.comentarios_id_comentario_seq'::regclass);


--
-- TOC entry 3067 (class 2604 OID 17894)
-- Name: contra_archivos id_contra_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos ALTER COLUMN id_contra_archivo SET DEFAULT nextval('public.contra_archivos_id_contra_archivo_seq'::regclass);


--
-- TOC entry 3062 (class 2604 OID 17869)
-- Name: contratados id_contratado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados ALTER COLUMN id_contratado SET DEFAULT nextval('public.contratados_id_contratado_seq'::regclass);


--
-- TOC entry 3058 (class 2604 OID 17848)
-- Name: conv_archivos id_conv_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos ALTER COLUMN id_conv_archivo SET DEFAULT nextval('public.conv_archivos_id_conv_archivo_seq'::regclass);


--
-- TOC entry 3053 (class 2604 OID 17823)
-- Name: convenios id_convenio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios ALTER COLUMN id_convenio SET DEFAULT nextval('public.convenios_id_convenio_seq'::regclass);


--
-- TOC entry 3092 (class 2604 OID 17999)
-- Name: curso_archivos id_curso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos ALTER COLUMN id_curso_archivo SET DEFAULT nextval('public.curso_archivos_id_curso_archivo_seq'::regclass);


--
-- TOC entry 3083 (class 2604 OID 17963)
-- Name: cursos id_curso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos ALTER COLUMN id_curso SET DEFAULT nextval('public.cursos_id_curso_seq'::regclass);


--
-- TOC entry 3101 (class 2604 OID 18040)
-- Name: evento_archivos id_evento_archivos; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos ALTER COLUMN id_evento_archivos SET DEFAULT nextval('public.evento_archivos_id_evento_archivos_seq'::regclass);


--
-- TOC entry 3096 (class 2604 OID 18020)
-- Name: eventos id_evento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos ALTER COLUMN id_evento SET DEFAULT nextval('public.eventos_id_evento_seq'::regclass);


--
-- TOC entry 3118 (class 2604 OID 18121)
-- Name: expo_archivos id_expo_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos ALTER COLUMN id_expo_archivo SET DEFAULT nextval('public.expo_archivos_id_expo_archivo_seq'::regclass);


--
-- TOC entry 3113 (class 2604 OID 18101)
-- Name: exposiciones id_exposicion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones ALTER COLUMN id_exposicion SET DEFAULT nextval('public.exposiciones_id_exposicion_seq'::regclass);


--
-- TOC entry 3088 (class 2604 OID 17983)
-- Name: expositores id_expositor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores ALTER COLUMN id_expositor SET DEFAULT nextval('public.expositores_id_expositor_seq'::regclass);


--
-- TOC entry 2998 (class 2604 OID 17596)
-- Name: fotografias id_fotografia; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias ALTER COLUMN id_fotografia SET DEFAULT nextval('public.fotografias_id_fotografia_seq'::regclass);


--
-- TOC entry 3045 (class 2604 OID 17781)
-- Name: inv_proyectos id_inv_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos ALTER COLUMN id_inv_proyecto SET DEFAULT nextval('public.inv_proyectos_id_inv_proyecto_seq'::regclass);


--
-- TOC entry 3023 (class 2604 OID 17694)
-- Name: inv_tipos id_inv_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos ALTER COLUMN id_inv_tipo SET DEFAULT nextval('public.inv_tipos_id_inv_tipo_seq'::regclass);


--
-- TOC entry 3031 (class 2604 OID 17716)
-- Name: investigadores id_investigador; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores ALTER COLUMN id_investigador SET DEFAULT nextval('public.investigadores_id_investigador_seq'::regclass);


--
-- TOC entry 3079 (class 2604 OID 17947)
-- Name: lugar_desarrollos id_lugar_desarrollo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos ALTER COLUMN id_lugar_desarrollo SET DEFAULT nextval('public.lugar_desarrollos_id_lugar_desarrollo_seq'::regclass);


--
-- TOC entry 3109 (class 2604 OID 18080)
-- Name: nota_archivos id_nota_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos ALTER COLUMN id_nota_archivo SET DEFAULT nextval('public.nota_archivos_id_nota_archivo_seq'::regclass);


--
-- TOC entry 3105 (class 2604 OID 18061)
-- Name: nota_prensas id_nota_prensa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas ALTER COLUMN id_nota_prensa SET DEFAULT nextval('public.nota_prensas_id_nota_prensa_seq'::regclass);


--
-- TOC entry 3049 (class 2604 OID 17802)
-- Name: permiso_archivos id_permiso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos ALTER COLUMN id_permiso_archivo SET DEFAULT nextval('public.permiso_archivos_id_permiso_archivo_seq'::regclass);


--
-- TOC entry 3004 (class 2604 OID 17612)
-- Name: personas id_persona; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas ALTER COLUMN id_persona SET DEFAULT nextval('public.personas_id_persona_seq'::regclass);


--
-- TOC entry 3143 (class 2604 OID 18254)
-- Name: peti_archivos id_peti_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos ALTER COLUMN id_peti_archivo SET DEFAULT nextval('public.peti_archivos_id_peti_archivo_seq'::regclass);


--
-- TOC entry 3140 (class 2604 OID 18230)
-- Name: peticiones id_peticion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones ALTER COLUMN id_peticion SET DEFAULT nextval('public.peticiones_id_peticion_seq'::regclass);


--
-- TOC entry 3041 (class 2604 OID 17760)
-- Name: proy_archivos id_proy_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos ALTER COLUMN id_proy_archivo SET DEFAULT nextval('public.proy_archivos_id_proy_archivo_seq'::regclass);


--
-- TOC entry 3035 (class 2604 OID 17737)
-- Name: proyectos id_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos ALTER COLUMN id_proyecto SET DEFAULT nextval('public.proyectos_id_proyecto_seq'::regclass);


--
-- TOC entry 3135 (class 2604 OID 18209)
-- Name: publi_archivos id_publi_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos ALTER COLUMN id_publi_archivo SET DEFAULT nextval('public.publi_archivos_id_publi_archivo_seq'::regclass);


--
-- TOC entry 3122 (class 2604 OID 18142)
-- Name: publicaciones id_publicacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones ALTER COLUMN id_publicacion SET DEFAULT nextval('public.publicaciones_id_publicacion_seq'::regclass);


--
-- TOC entry 3151 (class 2604 OID 18299)
-- Name: segui_archivos id_segui_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos ALTER COLUMN id_segui_archivo SET DEFAULT nextval('public.segui_archivos_id_segui_archivo_seq'::regclass);


--
-- TOC entry 3147 (class 2604 OID 18275)
-- Name: seguimientos id_seguimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos ALTER COLUMN id_seguimiento SET DEFAULT nextval('public.seguimientos_id_seguimiento_seq'::regclass);


--
-- TOC entry 3027 (class 2604 OID 17705)
-- Name: tipos id_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos ALTER COLUMN id_tipo SET DEFAULT nextval('public.tipos_id_tipo_seq'::regclass);


--
-- TOC entry 3075 (class 2604 OID 17931)
-- Name: unidades id_unidad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades ALTER COLUMN id_unidad SET DEFAULT nextval('public.unidades_id_unidad_seq'::regclass);


--
-- TOC entry 3426 (class 0 OID 17657)
-- Dependencies: 209
-- Data for Name: adm_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_roles (id_rol, rol, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	admin	Administrador del sistema	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
2	director	Director del instituto de Ecologia	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
3	investigador	Investigador del Instituto de Ecologia	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
\.


--
-- TOC entry 3428 (class 0 OID 17670)
-- Dependencies: 211
-- Data for Name: adm_usuario_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuario_roles (id_adm_usuario_rol, id_usuario, id_rol, estado, "createdAt", "updatedAt") FROM stdin;
1	1	1	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
\.


--
-- TOC entry 3424 (class 0 OID 17639)
-- Dependencies: 207
-- Data for Name: adm_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuarios (id_usuario, id_persona, usuario, password, recordatorio, estado, "resetPasswordToken", "resetPasswordExpires", "createdAt", "updatedAt") FROM stdin;
1	1	admin	$2b$10$WjuICcMcKpWFduvTSwR3suHdQaDQ2GqN2Au.dzr77gQJ/ifcqMSWa	\N	t	\N	\N	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
\.


--
-- TOC entry 3480 (class 0 OID 18185)
-- Dependencies: 263
-- Data for Name: autores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.autores (id_autor, id_investigador, id_publicacion, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3452 (class 0 OID 17912)
-- Dependencies: 235
-- Data for Name: basica_tecnicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.basica_tecnicas (id_basica_tecnica, id_proyecto, tipo, area, tipo_p, carga_h, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3478 (class 0 OID 18164)
-- Dependencies: 261
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (id_comentario, id_persona, id_publicacion, comentario, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3450 (class 0 OID 17891)
-- Dependencies: 233
-- Data for Name: contra_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contra_archivos (id_contra_archivo, id_contratado, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3448 (class 0 OID 17866)
-- Dependencies: 231
-- Data for Name: contratados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contratados (id_contratado, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, nombrecompleto, ci, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3446 (class 0 OID 17845)
-- Dependencies: 229
-- Data for Name: conv_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conv_archivos (id_conv_archivo, id_convenio, archivo, nombre, descripcion, id_tipo, tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3444 (class 0 OID 17820)
-- Dependencies: 227
-- Data for Name: convenios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convenios (id_convenio, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, titulo, obejtivo, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3462 (class 0 OID 17996)
-- Dependencies: 245
-- Data for Name: curso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.curso_archivos (id_curso_archivo, id_curso, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3458 (class 0 OID 17960)
-- Dependencies: 241
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cursos (id_curso, id_proyecto, titulo, objetivo, lugar, resumen, asistentes, fechaini, fechafin, horas, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3466 (class 0 OID 18037)
-- Dependencies: 249
-- Data for Name: evento_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento_archivos (id_evento_archivos, id_evento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3464 (class 0 OID 18017)
-- Dependencies: 247
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos (id_evento, id_proyecto, titulo, objetivo, lugar, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3474 (class 0 OID 18118)
-- Dependencies: 257
-- Data for Name: expo_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expo_archivos (id_expo_archivo, id_exposicion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3472 (class 0 OID 18098)
-- Dependencies: 255
-- Data for Name: exposiciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exposiciones (id_exposicion, id_proyecto, titulo, tema, objetivo, lugar, asistentes, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3460 (class 0 OID 17980)
-- Dependencies: 243
-- Data for Name: expositores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expositores (id_expositor, id_curso, nombres, apellidos, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3420 (class 0 OID 17593)
-- Dependencies: 203
-- Data for Name: fotografias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fotografias (id_fotografia, imagen, descripcion, numero, estado, tipo, "createdAt", "updatedAt") FROM stdin;
1	photo_default.png	Fotografia por default	0	t	foto	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
\.


--
-- TOC entry 3440 (class 0 OID 17778)
-- Dependencies: 223
-- Data for Name: inv_proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_proyectos (id_inv_proyecto, id_proyecto, id_investigador, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3430 (class 0 OID 17691)
-- Dependencies: 213
-- Data for Name: inv_tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_tipos (id_inv_tipo, tipo, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Titular	Trabaja con proyectos	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
2	Asociado con proyecto	Tiene un proyecto asociado	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
3	Asociado por invitación	Invitado por la UMSA, por tiempo determinado	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
\.


--
-- TOC entry 3434 (class 0 OID 17713)
-- Dependencies: 217
-- Data for Name: investigadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigadores (id_investigador, id_persona, id_inv_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3456 (class 0 OID 17944)
-- Dependencies: 239
-- Data for Name: lugar_desarrollos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lugar_desarrollos (id_lugar_desarrollo, id_proyecto, departamento, provincia, municipio, localidad, latmax, lonmax, latmin, lonmin, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3470 (class 0 OID 18077)
-- Dependencies: 253
-- Data for Name: nota_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_archivos (id_nota_archivo, id_nota_prensa, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3468 (class 0 OID 18058)
-- Dependencies: 251
-- Data for Name: nota_prensas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_prensas (id_nota_prensa, id_proyecto, titulo, objetivo, lugar, prensa, fecha, resumen, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3442 (class 0 OID 17799)
-- Dependencies: 225
-- Data for Name: permiso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permiso_archivos (id_permiso_archivo, id_proyecto, tipo, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3422 (class 0 OID 17609)
-- Dependencies: 205
-- Data for Name: personas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personas (id_persona, id_fotografia, paterno, materno, nombres, ci, sexo, estado_civil, url, fec_nacimiento, ciudad, provincia, pais, direccion1, direccion2, correo, telefono, celular, lenguaje, grado_academico, formacion_pro, formacion_adi, habilidades, conclusion, tema, color, estado, "createdAt", "updatedAt") FROM stdin;
1	1	administrador	\N	usuario	00000000	\N	\N	\N	\N	\N	\N	\N	\N	\N	institutoecologiaumsa@gmail.com	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
\.


--
-- TOC entry 3486 (class 0 OID 18251)
-- Dependencies: 269
-- Data for Name: peti_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peti_archivos (id_peti_archivo, id_peticion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3484 (class 0 OID 18227)
-- Dependencies: 267
-- Data for Name: peticiones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peticiones (id_peticion, id_proyecto, id_investigador, tipo, motivos, detalle, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3438 (class 0 OID 17757)
-- Dependencies: 221
-- Data for Name: proy_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proy_archivos (id_proy_archivo, id_proyecto, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3436 (class 0 OID 17734)
-- Dependencies: 219
-- Data for Name: proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proyectos (id_proyecto, id_adm, id_coordinador, titulo, proceso, fechaini, fechafin, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3482 (class 0 OID 18206)
-- Dependencies: 265
-- Data for Name: publi_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publi_archivos (id_publi_archivo, id_publicacion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3476 (class 0 OID 18139)
-- Dependencies: 259
-- Data for Name: publicaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publicaciones (id_publicacion, id_proyecto, id_coordinador, titulo, fecha, contenido, tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3490 (class 0 OID 18296)
-- Dependencies: 273
-- Data for Name: segui_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.segui_archivos (id_segui_archivo, id_seguimiento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3488 (class 0 OID 18272)
-- Dependencies: 271
-- Data for Name: seguimientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seguimientos (id_seguimiento, id_proyecto, id_director, tipo, revision, observaciones, proceso, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3432 (class 0 OID 17702)
-- Dependencies: 215
-- Data for Name: tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipos (id_tipo, nombre, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Principal	Son los archivos principales para la creación del proyecto	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
2	DGB	Archivo de direccion general de biodiversidad	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
3	SERNAP	Archivo de servicio nacional de areas protegidas	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
4	CITES	Archivo	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
5	BIOETICA	Archivo	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
6	Cierre de proyecto	Archivos necesarios para el cierre de proyecto	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
7	Otros	Cualquier tipo de archivo	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
8	Convenios	Archivo de convenios	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
9	Contratados	Archivo de contratados	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
10	Cursos	Archivo de cursos	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
11	Eventos	Archivo de eventos	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
12	Notas de prensa	Archivo de notas de prensa	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
13	Exposiciones	Archivo de Exposiciones	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
14	Publicacions	Archivo de publicaciones	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
15	Seguimientos	Archivo de seguimientos	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
16	Peticiones	Archivo de peticiones de investigadores	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
17	Final	Archivo de proyecto final	t	2020-10-09 17:34:17.678614+00	2020-10-09 17:34:17.678614+00
\.


--
-- TOC entry 3454 (class 0 OID 17928)
-- Dependencies: 237
-- Data for Name: unidades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidades (id_unidad, id_basica_tecnica, nombre, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3532 (class 0 OID 0)
-- Dependencies: 208
-- Name: adm_roles_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_roles_id_rol_seq', 3, true);


--
-- TOC entry 3533 (class 0 OID 0)
-- Dependencies: 210
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_roles_id_adm_usuario_rol_seq', 1, true);


--
-- TOC entry 3534 (class 0 OID 0)
-- Dependencies: 206
-- Name: adm_usuarios_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuarios_id_usuario_seq', 1, true);


--
-- TOC entry 3535 (class 0 OID 0)
-- Dependencies: 262
-- Name: autores_id_autor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.autores_id_autor_seq', 1, false);


--
-- TOC entry 3536 (class 0 OID 0)
-- Dependencies: 234
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.basica_tecnicas_id_basica_tecnica_seq', 1, false);


--
-- TOC entry 3537 (class 0 OID 0)
-- Dependencies: 260
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_comentario_seq', 1, false);


--
-- TOC entry 3538 (class 0 OID 0)
-- Dependencies: 232
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contra_archivos_id_contra_archivo_seq', 1, false);


--
-- TOC entry 3539 (class 0 OID 0)
-- Dependencies: 230
-- Name: contratados_id_contratado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contratados_id_contratado_seq', 1, false);


--
-- TOC entry 3540 (class 0 OID 0)
-- Dependencies: 228
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conv_archivos_id_conv_archivo_seq', 1, false);


--
-- TOC entry 3541 (class 0 OID 0)
-- Dependencies: 226
-- Name: convenios_id_convenio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.convenios_id_convenio_seq', 1, false);


--
-- TOC entry 3542 (class 0 OID 0)
-- Dependencies: 244
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.curso_archivos_id_curso_archivo_seq', 1, false);


--
-- TOC entry 3543 (class 0 OID 0)
-- Dependencies: 240
-- Name: cursos_id_curso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cursos_id_curso_seq', 1, false);


--
-- TOC entry 3544 (class 0 OID 0)
-- Dependencies: 248
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_archivos_id_evento_archivos_seq', 1, false);


--
-- TOC entry 3545 (class 0 OID 0)
-- Dependencies: 246
-- Name: eventos_id_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_id_evento_seq', 1, false);


--
-- TOC entry 3546 (class 0 OID 0)
-- Dependencies: 256
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expo_archivos_id_expo_archivo_seq', 1, false);


--
-- TOC entry 3547 (class 0 OID 0)
-- Dependencies: 254
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exposiciones_id_exposicion_seq', 1, false);


--
-- TOC entry 3548 (class 0 OID 0)
-- Dependencies: 242
-- Name: expositores_id_expositor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expositores_id_expositor_seq', 1, false);


--
-- TOC entry 3549 (class 0 OID 0)
-- Dependencies: 202
-- Name: fotografias_id_fotografia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fotografias_id_fotografia_seq', 1, true);


--
-- TOC entry 3550 (class 0 OID 0)
-- Dependencies: 222
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_proyectos_id_inv_proyecto_seq', 1, false);


--
-- TOC entry 3551 (class 0 OID 0)
-- Dependencies: 212
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_tipos_id_inv_tipo_seq', 3, true);


--
-- TOC entry 3552 (class 0 OID 0)
-- Dependencies: 216
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.investigadores_id_investigador_seq', 1, false);


--
-- TOC entry 3553 (class 0 OID 0)
-- Dependencies: 238
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lugar_desarrollos_id_lugar_desarrollo_seq', 1, false);


--
-- TOC entry 3554 (class 0 OID 0)
-- Dependencies: 252
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_archivos_id_nota_archivo_seq', 1, false);


--
-- TOC entry 3555 (class 0 OID 0)
-- Dependencies: 250
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_prensas_id_nota_prensa_seq', 1, false);


--
-- TOC entry 3556 (class 0 OID 0)
-- Dependencies: 224
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permiso_archivos_id_permiso_archivo_seq', 1, false);


--
-- TOC entry 3557 (class 0 OID 0)
-- Dependencies: 204
-- Name: personas_id_persona_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personas_id_persona_seq', 1, true);


--
-- TOC entry 3558 (class 0 OID 0)
-- Dependencies: 268
-- Name: peti_archivos_id_peti_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peti_archivos_id_peti_archivo_seq', 1, false);


--
-- TOC entry 3559 (class 0 OID 0)
-- Dependencies: 266
-- Name: peticiones_id_peticion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peticiones_id_peticion_seq', 1, false);


--
-- TOC entry 3560 (class 0 OID 0)
-- Dependencies: 220
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proy_archivos_id_proy_archivo_seq', 1, false);


--
-- TOC entry 3561 (class 0 OID 0)
-- Dependencies: 218
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proyectos_id_proyecto_seq', 1, false);


--
-- TOC entry 3562 (class 0 OID 0)
-- Dependencies: 264
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publi_archivos_id_publi_archivo_seq', 1, false);


--
-- TOC entry 3563 (class 0 OID 0)
-- Dependencies: 258
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publicaciones_id_publicacion_seq', 1, false);


--
-- TOC entry 3564 (class 0 OID 0)
-- Dependencies: 272
-- Name: segui_archivos_id_segui_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.segui_archivos_id_segui_archivo_seq', 1, false);


--
-- TOC entry 3565 (class 0 OID 0)
-- Dependencies: 270
-- Name: seguimientos_id_seguimiento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seguimientos_id_seguimiento_seq', 1, false);


--
-- TOC entry 3566 (class 0 OID 0)
-- Dependencies: 214
-- Name: tipos_id_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipos_id_tipo_seq', 17, true);


--
-- TOC entry 3567 (class 0 OID 0)
-- Dependencies: 236
-- Name: unidades_id_unidad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidades_id_unidad_seq', 1, false);


--
-- TOC entry 3172 (class 2606 OID 17665)
-- Name: adm_roles adm_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_roles_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 3174 (class 2606 OID 17667)
-- Name: adm_roles adm_roles_rol_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_roles_rol_key UNIQUE (rol);


--
-- TOC entry 3176 (class 2606 OID 17678)
-- Name: adm_usuario_roles adm_usuario_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_pkey PRIMARY KEY (id_adm_usuario_rol);


--
-- TOC entry 3168 (class 2606 OID 17647)
-- Name: adm_usuarios adm_usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuarios_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 3170 (class 2606 OID 17649)
-- Name: adm_usuarios adm_usuarios_usuario_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuarios_usuario_key UNIQUE (usuario);


--
-- TOC entry 3228 (class 2606 OID 18193)
-- Name: autores autores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_pkey PRIMARY KEY (id_autor);


--
-- TOC entry 3200 (class 2606 OID 17920)
-- Name: basica_tecnicas basica_tecnicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_pkey PRIMARY KEY (id_basica_tecnica);


--
-- TOC entry 3226 (class 2606 OID 18172)
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (id_comentario);


--
-- TOC entry 3198 (class 2606 OID 17899)
-- Name: contra_archivos contra_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_pkey PRIMARY KEY (id_contra_archivo);


--
-- TOC entry 3196 (class 2606 OID 17878)
-- Name: contratados contratados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_pkey PRIMARY KEY (id_contratado);


--
-- TOC entry 3194 (class 2606 OID 17853)
-- Name: conv_archivos conv_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_pkey PRIMARY KEY (id_conv_archivo);


--
-- TOC entry 3192 (class 2606 OID 17832)
-- Name: convenios convenios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_pkey PRIMARY KEY (id_convenio);


--
-- TOC entry 3210 (class 2606 OID 18004)
-- Name: curso_archivos curso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_pkey PRIMARY KEY (id_curso_archivo);


--
-- TOC entry 3206 (class 2606 OID 17972)
-- Name: cursos cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id_curso);


--
-- TOC entry 3214 (class 2606 OID 18045)
-- Name: evento_archivos evento_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_pkey PRIMARY KEY (id_evento_archivos);


--
-- TOC entry 3212 (class 2606 OID 18029)
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id_evento);


--
-- TOC entry 3222 (class 2606 OID 18126)
-- Name: expo_archivos expo_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_pkey PRIMARY KEY (id_expo_archivo);


--
-- TOC entry 3220 (class 2606 OID 18110)
-- Name: exposiciones exposiciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_pkey PRIMARY KEY (id_exposicion);


--
-- TOC entry 3208 (class 2606 OID 17988)
-- Name: expositores expositores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_pkey PRIMARY KEY (id_expositor);


--
-- TOC entry 3156 (class 2606 OID 17606)
-- Name: fotografias fotografias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias
    ADD CONSTRAINT fotografias_pkey PRIMARY KEY (id_fotografia);


--
-- TOC entry 3188 (class 2606 OID 17786)
-- Name: inv_proyectos inv_proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_pkey PRIMARY KEY (id_inv_proyecto);


--
-- TOC entry 3178 (class 2606 OID 17699)
-- Name: inv_tipos inv_tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos
    ADD CONSTRAINT inv_tipos_pkey PRIMARY KEY (id_inv_tipo);


--
-- TOC entry 3182 (class 2606 OID 17721)
-- Name: investigadores investigadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_pkey PRIMARY KEY (id_investigador);


--
-- TOC entry 3204 (class 2606 OID 17952)
-- Name: lugar_desarrollos lugar_desarrollos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_pkey PRIMARY KEY (id_lugar_desarrollo);


--
-- TOC entry 3218 (class 2606 OID 18085)
-- Name: nota_archivos nota_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_pkey PRIMARY KEY (id_nota_archivo);


--
-- TOC entry 3216 (class 2606 OID 18069)
-- Name: nota_prensas nota_prensas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_pkey PRIMARY KEY (id_nota_prensa);


--
-- TOC entry 3190 (class 2606 OID 17807)
-- Name: permiso_archivos permiso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_pkey PRIMARY KEY (id_permiso_archivo);


--
-- TOC entry 3158 (class 2606 OID 17631)
-- Name: personas personas_celular_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_celular_key UNIQUE (celular);


--
-- TOC entry 3160 (class 2606 OID 17625)
-- Name: personas personas_ci_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_ci_key UNIQUE (ci);


--
-- TOC entry 3162 (class 2606 OID 17627)
-- Name: personas personas_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_correo_key UNIQUE (correo);


--
-- TOC entry 3164 (class 2606 OID 17623)
-- Name: personas personas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_pkey PRIMARY KEY (id_persona);


--
-- TOC entry 3166 (class 2606 OID 17629)
-- Name: personas personas_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_telefono_key UNIQUE (telefono);


--
-- TOC entry 3234 (class 2606 OID 18259)
-- Name: peti_archivos peti_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivos_pkey PRIMARY KEY (id_peti_archivo);


--
-- TOC entry 3232 (class 2606 OID 18238)
-- Name: peticiones peticiones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_pkey PRIMARY KEY (id_peticion);


--
-- TOC entry 3186 (class 2606 OID 17765)
-- Name: proy_archivos proy_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_pkey PRIMARY KEY (id_proy_archivo);


--
-- TOC entry 3184 (class 2606 OID 17744)
-- Name: proyectos proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id_proyecto);


--
-- TOC entry 3230 (class 2606 OID 18214)
-- Name: publi_archivos publi_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_pkey PRIMARY KEY (id_publi_archivo);


--
-- TOC entry 3224 (class 2606 OID 18151)
-- Name: publicaciones publicaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_pkey PRIMARY KEY (id_publicacion);


--
-- TOC entry 3238 (class 2606 OID 18304)
-- Name: segui_archivos segui_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_pkey PRIMARY KEY (id_segui_archivo);


--
-- TOC entry 3236 (class 2606 OID 18283)
-- Name: seguimientos seguimientos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_pkey PRIMARY KEY (id_seguimiento);


--
-- TOC entry 3180 (class 2606 OID 17710)
-- Name: tipos tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id_tipo);


--
-- TOC entry 3202 (class 2606 OID 17936)
-- Name: unidades unidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_pkey PRIMARY KEY (id_unidad);


--
-- TOC entry 3242 (class 2606 OID 17684)
-- Name: adm_usuario_roles adm_usuario_roles_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.adm_roles(id_rol);


--
-- TOC entry 3241 (class 2606 OID 17679)
-- Name: adm_usuario_roles adm_usuario_roles_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.adm_usuarios(id_usuario);


--
-- TOC entry 3240 (class 2606 OID 17650)
-- Name: adm_usuarios adm_usuarios_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuarios_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3281 (class 2606 OID 18194)
-- Name: autores autores_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3282 (class 2606 OID 18199)
-- Name: autores autores_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3261 (class 2606 OID 17921)
-- Name: basica_tecnicas basica_tecnicas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3279 (class 2606 OID 18173)
-- Name: comentarios comentarios_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3280 (class 2606 OID 18178)
-- Name: comentarios comentarios_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3259 (class 2606 OID 17900)
-- Name: contra_archivos contra_archivos_id_contratado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_contratado_fkey FOREIGN KEY (id_contratado) REFERENCES public.contratados(id_contratado);


--
-- TOC entry 3260 (class 2606 OID 17905)
-- Name: contra_archivos contra_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3257 (class 2606 OID 17879)
-- Name: contratados contratados_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3258 (class 2606 OID 17884)
-- Name: contratados contratados_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3255 (class 2606 OID 17854)
-- Name: conv_archivos conv_archivos_id_convenio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_convenio_fkey FOREIGN KEY (id_convenio) REFERENCES public.convenios(id_convenio);


--
-- TOC entry 3256 (class 2606 OID 17859)
-- Name: conv_archivos conv_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3253 (class 2606 OID 17833)
-- Name: convenios convenios_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3254 (class 2606 OID 17838)
-- Name: convenios convenios_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3266 (class 2606 OID 18005)
-- Name: curso_archivos curso_archivos_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3267 (class 2606 OID 18010)
-- Name: curso_archivos curso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3264 (class 2606 OID 17973)
-- Name: cursos cursos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3269 (class 2606 OID 18046)
-- Name: evento_archivos evento_archivos_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id_evento);


--
-- TOC entry 3270 (class 2606 OID 18051)
-- Name: evento_archivos evento_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3268 (class 2606 OID 18030)
-- Name: eventos eventos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3275 (class 2606 OID 18127)
-- Name: expo_archivos expo_archivos_id_exposicion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_exposicion_fkey FOREIGN KEY (id_exposicion) REFERENCES public.exposiciones(id_exposicion);


--
-- TOC entry 3276 (class 2606 OID 18132)
-- Name: expo_archivos expo_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3274 (class 2606 OID 18111)
-- Name: exposiciones exposiciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3265 (class 2606 OID 17989)
-- Name: expositores expositores_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3250 (class 2606 OID 17792)
-- Name: inv_proyectos inv_proyectos_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3249 (class 2606 OID 17787)
-- Name: inv_proyectos inv_proyectos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3244 (class 2606 OID 17727)
-- Name: investigadores investigadores_id_inv_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_inv_tipo_fkey FOREIGN KEY (id_inv_tipo) REFERENCES public.inv_tipos(id_inv_tipo);


--
-- TOC entry 3243 (class 2606 OID 17722)
-- Name: investigadores investigadores_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3263 (class 2606 OID 17953)
-- Name: lugar_desarrollos lugar_desarrollos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3272 (class 2606 OID 18086)
-- Name: nota_archivos nota_archivos_id_nota_prensa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_nota_prensa_fkey FOREIGN KEY (id_nota_prensa) REFERENCES public.nota_prensas(id_nota_prensa);


--
-- TOC entry 3273 (class 2606 OID 18091)
-- Name: nota_archivos nota_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3271 (class 2606 OID 18070)
-- Name: nota_prensas nota_prensas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3251 (class 2606 OID 17808)
-- Name: permiso_archivos permiso_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3252 (class 2606 OID 17813)
-- Name: permiso_archivos permiso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3239 (class 2606 OID 17632)
-- Name: personas personas_id_fotografia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_id_fotografia_fkey FOREIGN KEY (id_fotografia) REFERENCES public.fotografias(id_fotografia);


--
-- TOC entry 3287 (class 2606 OID 18260)
-- Name: peti_archivos peti_archivos_id_peticion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivos_id_peticion_fkey FOREIGN KEY (id_peticion) REFERENCES public.peticiones(id_peticion);


--
-- TOC entry 3288 (class 2606 OID 18265)
-- Name: peti_archivos peti_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3286 (class 2606 OID 18244)
-- Name: peticiones peticiones_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3285 (class 2606 OID 18239)
-- Name: peticiones peticiones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3247 (class 2606 OID 17766)
-- Name: proy_archivos proy_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3248 (class 2606 OID 17771)
-- Name: proy_archivos proy_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3245 (class 2606 OID 17745)
-- Name: proyectos proyectos_id_adm_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_adm_fkey FOREIGN KEY (id_adm) REFERENCES public.personas(id_persona);


--
-- TOC entry 3246 (class 2606 OID 17750)
-- Name: proyectos proyectos_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3283 (class 2606 OID 18215)
-- Name: publi_archivos publi_archivos_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3284 (class 2606 OID 18220)
-- Name: publi_archivos publi_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3278 (class 2606 OID 18157)
-- Name: publicaciones publicaciones_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3277 (class 2606 OID 18152)
-- Name: publicaciones publicaciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3291 (class 2606 OID 18305)
-- Name: segui_archivos segui_archivos_id_seguimiento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_id_seguimiento_fkey FOREIGN KEY (id_seguimiento) REFERENCES public.seguimientos(id_seguimiento);


--
-- TOC entry 3292 (class 2606 OID 18310)
-- Name: segui_archivos segui_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3290 (class 2606 OID 18289)
-- Name: seguimientos seguimientos_id_director_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_id_director_fkey FOREIGN KEY (id_director) REFERENCES public.personas(id_persona);


--
-- TOC entry 3289 (class 2606 OID 18284)
-- Name: seguimientos seguimientos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3262 (class 2606 OID 17937)
-- Name: unidades unidades_id_basica_tecnica_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_id_basica_tecnica_fkey FOREIGN KEY (id_basica_tecnica) REFERENCES public.basica_tecnicas(id_basica_tecnica);


-- Completed on 2020-10-09 13:37:34 -04

--
-- PostgreSQL database dump complete
--

