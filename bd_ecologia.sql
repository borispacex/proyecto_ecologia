--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.2

-- Started on 2020-09-22 14:12:09 -04

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
-- TOC entry 202 (class 1259 OID 16385)
-- Name: adm_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_roles (
    id_rol integer NOT NULL,
    rol character varying(50) NOT NULL,
    descripcion character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.adm_roles OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16391)
-- Name: adm_rol_id_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adm_rol_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adm_rol_id_rol_seq OWNER TO postgres;

--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 203
-- Name: adm_rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_rol_id_rol_seq OWNED BY public.adm_roles.id_rol;


--
-- TOC entry 204 (class 1259 OID 16393)
-- Name: adm_usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_usuarios (
    id_usuario integer NOT NULL,
    id_persona integer NOT NULL,
    usuario character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    recordatorio character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "resetPasswordToken" character varying(55),
    "resetPasswordExpires" time with time zone
);


ALTER TABLE public.adm_usuarios OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16399)
-- Name: adm_usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adm_usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adm_usuario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 205
-- Name: adm_usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_id_usuario_seq OWNED BY public.adm_usuarios.id_usuario;


--
-- TOC entry 206 (class 1259 OID 16401)
-- Name: adm_usuario_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_usuario_roles (
    id_adm_usuario_rol integer NOT NULL,
    id_usuario integer NOT NULL,
    id_rol integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.adm_usuario_roles OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16407)
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
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 207
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_roles_id_adm_usuario_rol_seq OWNED BY public.adm_usuario_roles.id_adm_usuario_rol;


--
-- TOC entry 208 (class 1259 OID 16409)
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
-- TOC entry 209 (class 1259 OID 16415)
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
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 209
-- Name: autores_id_autor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.autores_id_autor_seq OWNED BY public.autores.id_autor;


--
-- TOC entry 210 (class 1259 OID 16417)
-- Name: basica_tecnicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.basica_tecnicas (
    id_basica_tecnica integer NOT NULL,
    id_proyecto integer NOT NULL,
    tipo character varying(100),
    area character varying(100),
    tipo_p character varying(100),
    carga_h integer,
    unidades character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.basica_tecnicas OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16426)
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
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 211
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.basica_tecnicas_id_basica_tecnica_seq OWNED BY public.basica_tecnicas.id_basica_tecnica;


--
-- TOC entry 212 (class 1259 OID 16428)
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
-- TOC entry 213 (class 1259 OID 16434)
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
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 213
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_id_comentario_seq OWNED BY public.comentarios.id_comentario;


--
-- TOC entry 214 (class 1259 OID 16436)
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
-- TOC entry 215 (class 1259 OID 16442)
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
-- TOC entry 3432 (class 0 OID 0)
-- Dependencies: 215
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contra_archivos_id_contra_archivo_seq OWNED BY public.contra_archivos.id_contra_archivo;


--
-- TOC entry 216 (class 1259 OID 16444)
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
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone,
    fechafin timestamp with time zone,
    descripcion character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.contratados OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16454)
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
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 217
-- Name: contratados_id_contratado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contratados_id_contratado_seq OWNED BY public.contratados.id_contratado;


--
-- TOC entry 218 (class 1259 OID 16456)
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
-- TOC entry 219 (class 1259 OID 16462)
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
-- TOC entry 3434 (class 0 OID 0)
-- Dependencies: 219
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conv_archivos_id_conv_archivo_seq OWNED BY public.conv_archivos.id_conv_archivo;


--
-- TOC entry 220 (class 1259 OID 16464)
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
    objetivo character varying(100),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone,
    fechafin timestamp with time zone,
    descripcion character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.convenios OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16474)
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
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 221
-- Name: convenios_id_convenio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.convenios_id_convenio_seq OWNED BY public.convenios.id_convenio;


--
-- TOC entry 222 (class 1259 OID 16476)
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
-- TOC entry 223 (class 1259 OID 16482)
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
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 223
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.curso_archivos_id_curso_archivo_seq OWNED BY public.curso_archivos.id_curso_archivo;


--
-- TOC entry 224 (class 1259 OID 16484)
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
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone,
    fechafin timestamp with time zone,
    horas integer,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.cursos OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16494)
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
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 225
-- Name: cursos_id_curso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cursos_id_curso_seq OWNED BY public.cursos.id_curso;


--
-- TOC entry 226 (class 1259 OID 16496)
-- Name: evento_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento_archivos (
    id_evento_archivo integer NOT NULL,
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
-- TOC entry 227 (class 1259 OID 16502)
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
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 227
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_archivos_id_evento_archivos_seq OWNED BY public.evento_archivos.id_evento_archivo;


--
-- TOC entry 228 (class 1259 OID 16504)
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos (
    id_evento integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100),
    objetivo character varying(100),
    lugar character varying(100),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone,
    fechafin timestamp with time zone,
    resumen character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.eventos OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16514)
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
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 229
-- Name: eventos_id_evento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eventos_id_evento_seq OWNED BY public.eventos.id_evento;


--
-- TOC entry 230 (class 1259 OID 16516)
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
-- TOC entry 231 (class 1259 OID 16522)
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
-- TOC entry 3440 (class 0 OID 0)
-- Dependencies: 231
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expo_archivos_id_expo_archivo_seq OWNED BY public.expo_archivos.id_expo_archivo;


--
-- TOC entry 232 (class 1259 OID 16524)
-- Name: exposiciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exposiciones (
    id_exposicion integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100) NOT NULL,
    tema character varying(100) NOT NULL,
    objetivo character varying(100) NOT NULL,
    lugar character varying(100) NOT NULL,
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
-- TOC entry 233 (class 1259 OID 16534)
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
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 233
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exposiciones_id_exposicion_seq OWNED BY public.exposiciones.id_exposicion;


--
-- TOC entry 234 (class 1259 OID 16536)
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
-- TOC entry 235 (class 1259 OID 16542)
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
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 235
-- Name: expositores_id_expositor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expositores_id_expositor_seq OWNED BY public.expositores.id_expositor;


--
-- TOC entry 236 (class 1259 OID 16544)
-- Name: fotografias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fotografias (
    id_fotografia integer NOT NULL,
    imagen character varying(200),
    descripcion character varying(250),
    numero integer DEFAULT 0,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    tipo character varying(100)
);


ALTER TABLE public.fotografias OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16554)
-- Name: fotografia_id_fotografia_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.fotografia_id_fotografia_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fotografia_id_fotografia_seq OWNER TO postgres;

--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 237
-- Name: fotografia_id_fotografia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fotografia_id_fotografia_seq OWNED BY public.fotografias.id_fotografia;


--
-- TOC entry 238 (class 1259 OID 16556)
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
-- TOC entry 239 (class 1259 OID 16562)
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
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 239
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_proyectos_id_inv_proyecto_seq OWNED BY public.inv_proyectos.id_inv_proyecto;


--
-- TOC entry 240 (class 1259 OID 16564)
-- Name: inv_tipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inv_tipos (
    id_inv_tipo integer NOT NULL,
    tipo character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    descripcion character varying(200)
);


ALTER TABLE public.inv_tipos OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16570)
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
-- TOC entry 3445 (class 0 OID 0)
-- Dependencies: 241
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_tipos_id_inv_tipo_seq OWNED BY public.inv_tipos.id_inv_tipo;


--
-- TOC entry 242 (class 1259 OID 16572)
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
-- TOC entry 243 (class 1259 OID 16578)
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
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 243
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.investigadores_id_investigador_seq OWNED BY public.investigadores.id_investigador;


--
-- TOC entry 244 (class 1259 OID 16580)
-- Name: lugar_desarrollos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lugar_desarrollos (
    id_lugar_desarrollo integer NOT NULL,
    id_proyecto integer NOT NULL,
    departamento character varying(100) NOT NULL,
    provincia character varying(100) NOT NULL,
    municipio character varying(100) NOT NULL,
    localidad character varying(100) NOT NULL,
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
-- TOC entry 245 (class 1259 OID 16586)
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
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 245
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lugar_desarrollos_id_lugar_desarrollo_seq OWNED BY public.lugar_desarrollos.id_lugar_desarrollo;


--
-- TOC entry 246 (class 1259 OID 16588)
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
-- TOC entry 247 (class 1259 OID 16594)
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
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 247
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_archivos_id_nota_archivo_seq OWNED BY public.nota_archivos.id_nota_archivo;


--
-- TOC entry 248 (class 1259 OID 16596)
-- Name: nota_prensas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota_prensas (
    id_nota_prensa integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100),
    objetivo character varying(100),
    lugar character varying(100),
    prensa character varying(100),
    resumen character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fecha timestamp with time zone
);


ALTER TABLE public.nota_prensas OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 16605)
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
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 249
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_prensas_id_nota_prensa_seq OWNED BY public.nota_prensas.id_nota_prensa;


--
-- TOC entry 250 (class 1259 OID 16607)
-- Name: permiso_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permiso_archivos (
    id_permiso_archivo integer NOT NULL,
    id_proyecto integer NOT NULL,
    archivo character varying(50),
    nombre character varying(100),
    descripcion character varying(200),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    tipo character varying(100)
);


ALTER TABLE public.permiso_archivos OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 16613)
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
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 251
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permiso_archivos_id_permiso_archivo_seq OWNED BY public.permiso_archivos.id_permiso_archivo;


--
-- TOC entry 252 (class 1259 OID 16615)
-- Name: personas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personas (
    id_persona integer NOT NULL,
    id_fotografia integer DEFAULT 1 NOT NULL,
    paterno character varying(50) NOT NULL,
    materno character varying(50),
    nombres character varying(100) NOT NULL,
    sexo character varying(20),
    estado_civil character varying(50),
    fec_nacimiento timestamp(6) with time zone,
    pais character varying(50),
    provincia character varying(50),
    direccion1 character varying(100),
    correo character varying(50) NOT NULL,
    telefono character varying(20),
    grado_academico character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    ci character varying(20),
    url character varying(50),
    ciudad character varying(50),
    direccion2 character varying(100),
    celular character varying(20),
    lenguaje character varying(50),
    formacion_pro text,
    formacion_adi text,
    habilidades text,
    conclusion text,
    tema character varying(25) DEFAULT ''::character varying,
    color character varying(25) DEFAULT 'theme-cyan'::character varying
);


ALTER TABLE public.personas OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 16627)
-- Name: persona_id_persona_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.persona_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.persona_id_persona_seq OWNER TO postgres;

--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 253
-- Name: persona_id_persona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.persona_id_persona_seq OWNED BY public.personas.id_persona;


--
-- TOC entry 254 (class 1259 OID 16629)
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
    "createdAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp(6) with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.proy_archivos OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 16635)
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
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 255
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proy_archivos_id_proy_archivo_seq OWNED BY public.proy_archivos.id_proy_archivo;


--
-- TOC entry 256 (class 1259 OID 16637)
-- Name: proyectos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proyectos (
    id_proyecto integer NOT NULL,
    id_adm integer NOT NULL,
    id_coordinador integer NOT NULL,
    titulo character varying(200),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    estado character varying(20) DEFAULT 'activo'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    proceso integer DEFAULT 0
);


ALTER TABLE public.proyectos OWNER TO postgres;

--
-- TOC entry 257 (class 1259 OID 16645)
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
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 257
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proyectos_id_proyecto_seq OWNED BY public.proyectos.id_proyecto;


--
-- TOC entry 258 (class 1259 OID 16647)
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
-- TOC entry 259 (class 1259 OID 16653)
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
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 259
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publi_archivos_id_publi_archivo_seq OWNED BY public.publi_archivos.id_publi_archivo;


--
-- TOC entry 260 (class 1259 OID 16655)
-- Name: publicaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publicaciones (
    id_publicacion integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_coordinador integer NOT NULL,
    titulo character varying(200),
    fecha timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    contenido character varying(1000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    tipo character varying(100)
);


ALTER TABLE public.publicaciones OWNER TO postgres;

--
-- TOC entry 261 (class 1259 OID 16665)
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
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 261
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publicaciones_id_publicacion_seq OWNED BY public.publicaciones.id_publicacion;


--
-- TOC entry 262 (class 1259 OID 16667)
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
-- TOC entry 263 (class 1259 OID 16673)
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
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 263
-- Name: tipos_id_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipos_id_tipo_seq OWNED BY public.tipos.id_tipo;


--
-- TOC entry 264 (class 1259 OID 16675)
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
-- TOC entry 265 (class 1259 OID 16681)
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
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 265
-- Name: unidades_id_unidad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unidades_id_unidad_seq OWNED BY public.unidades.id_unidad;


--
-- TOC entry 2976 (class 2604 OID 16683)
-- Name: adm_roles id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles ALTER COLUMN id_rol SET DEFAULT nextval('public.adm_rol_id_rol_seq'::regclass);


--
-- TOC entry 2984 (class 2604 OID 16684)
-- Name: adm_usuario_roles id_adm_usuario_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles ALTER COLUMN id_adm_usuario_rol SET DEFAULT nextval('public.adm_usuario_roles_id_adm_usuario_rol_seq'::regclass);


--
-- TOC entry 2980 (class 2604 OID 16685)
-- Name: adm_usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.adm_usuario_id_usuario_seq'::regclass);


--
-- TOC entry 2988 (class 2604 OID 16686)
-- Name: autores id_autor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores ALTER COLUMN id_autor SET DEFAULT nextval('public.autores_id_autor_seq'::regclass);


--
-- TOC entry 2992 (class 2604 OID 16687)
-- Name: basica_tecnicas id_basica_tecnica; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas ALTER COLUMN id_basica_tecnica SET DEFAULT nextval('public.basica_tecnicas_id_basica_tecnica_seq'::regclass);


--
-- TOC entry 2996 (class 2604 OID 16688)
-- Name: comentarios id_comentario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id_comentario SET DEFAULT nextval('public.comentarios_id_comentario_seq'::regclass);


--
-- TOC entry 3000 (class 2604 OID 16689)
-- Name: contra_archivos id_contra_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos ALTER COLUMN id_contra_archivo SET DEFAULT nextval('public.contra_archivos_id_contra_archivo_seq'::regclass);


--
-- TOC entry 3005 (class 2604 OID 16690)
-- Name: contratados id_contratado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados ALTER COLUMN id_contratado SET DEFAULT nextval('public.contratados_id_contratado_seq'::regclass);


--
-- TOC entry 3009 (class 2604 OID 16691)
-- Name: conv_archivos id_conv_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos ALTER COLUMN id_conv_archivo SET DEFAULT nextval('public.conv_archivos_id_conv_archivo_seq'::regclass);


--
-- TOC entry 3014 (class 2604 OID 16692)
-- Name: convenios id_convenio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios ALTER COLUMN id_convenio SET DEFAULT nextval('public.convenios_id_convenio_seq'::regclass);


--
-- TOC entry 3018 (class 2604 OID 16693)
-- Name: curso_archivos id_curso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos ALTER COLUMN id_curso_archivo SET DEFAULT nextval('public.curso_archivos_id_curso_archivo_seq'::regclass);


--
-- TOC entry 3023 (class 2604 OID 16694)
-- Name: cursos id_curso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos ALTER COLUMN id_curso SET DEFAULT nextval('public.cursos_id_curso_seq'::regclass);


--
-- TOC entry 3027 (class 2604 OID 16695)
-- Name: evento_archivos id_evento_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos ALTER COLUMN id_evento_archivo SET DEFAULT nextval('public.evento_archivos_id_evento_archivos_seq'::regclass);


--
-- TOC entry 3032 (class 2604 OID 16696)
-- Name: eventos id_evento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos ALTER COLUMN id_evento SET DEFAULT nextval('public.eventos_id_evento_seq'::regclass);


--
-- TOC entry 3036 (class 2604 OID 16697)
-- Name: expo_archivos id_expo_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos ALTER COLUMN id_expo_archivo SET DEFAULT nextval('public.expo_archivos_id_expo_archivo_seq'::regclass);


--
-- TOC entry 3041 (class 2604 OID 16698)
-- Name: exposiciones id_exposicion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones ALTER COLUMN id_exposicion SET DEFAULT nextval('public.exposiciones_id_exposicion_seq'::regclass);


--
-- TOC entry 3045 (class 2604 OID 16699)
-- Name: expositores id_expositor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores ALTER COLUMN id_expositor SET DEFAULT nextval('public.expositores_id_expositor_seq'::regclass);


--
-- TOC entry 3050 (class 2604 OID 16700)
-- Name: fotografias id_fotografia; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias ALTER COLUMN id_fotografia SET DEFAULT nextval('public.fotografia_id_fotografia_seq'::regclass);


--
-- TOC entry 3054 (class 2604 OID 16701)
-- Name: inv_proyectos id_inv_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos ALTER COLUMN id_inv_proyecto SET DEFAULT nextval('public.inv_proyectos_id_inv_proyecto_seq'::regclass);


--
-- TOC entry 3058 (class 2604 OID 16702)
-- Name: inv_tipos id_inv_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos ALTER COLUMN id_inv_tipo SET DEFAULT nextval('public.inv_tipos_id_inv_tipo_seq'::regclass);


--
-- TOC entry 3062 (class 2604 OID 16703)
-- Name: investigadores id_investigador; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores ALTER COLUMN id_investigador SET DEFAULT nextval('public.investigadores_id_investigador_seq'::regclass);


--
-- TOC entry 3066 (class 2604 OID 16704)
-- Name: lugar_desarrollos id_lugar_desarrollo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos ALTER COLUMN id_lugar_desarrollo SET DEFAULT nextval('public.lugar_desarrollos_id_lugar_desarrollo_seq'::regclass);


--
-- TOC entry 3070 (class 2604 OID 16705)
-- Name: nota_archivos id_nota_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos ALTER COLUMN id_nota_archivo SET DEFAULT nextval('public.nota_archivos_id_nota_archivo_seq'::regclass);


--
-- TOC entry 3074 (class 2604 OID 16706)
-- Name: nota_prensas id_nota_prensa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas ALTER COLUMN id_nota_prensa SET DEFAULT nextval('public.nota_prensas_id_nota_prensa_seq'::regclass);


--
-- TOC entry 3078 (class 2604 OID 16707)
-- Name: permiso_archivos id_permiso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos ALTER COLUMN id_permiso_archivo SET DEFAULT nextval('public.permiso_archivos_id_permiso_archivo_seq'::regclass);


--
-- TOC entry 3085 (class 2604 OID 16708)
-- Name: personas id_persona; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas ALTER COLUMN id_persona SET DEFAULT nextval('public.persona_id_persona_seq'::regclass);


--
-- TOC entry 3089 (class 2604 OID 16709)
-- Name: proy_archivos id_proy_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos ALTER COLUMN id_proy_archivo SET DEFAULT nextval('public.proy_archivos_id_proy_archivo_seq'::regclass);


--
-- TOC entry 3095 (class 2604 OID 16710)
-- Name: proyectos id_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos ALTER COLUMN id_proyecto SET DEFAULT nextval('public.proyectos_id_proyecto_seq'::regclass);


--
-- TOC entry 3099 (class 2604 OID 16711)
-- Name: publi_archivos id_publi_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos ALTER COLUMN id_publi_archivo SET DEFAULT nextval('public.publi_archivos_id_publi_archivo_seq'::regclass);


--
-- TOC entry 3104 (class 2604 OID 16712)
-- Name: publicaciones id_publicacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones ALTER COLUMN id_publicacion SET DEFAULT nextval('public.publicaciones_id_publicacion_seq'::regclass);


--
-- TOC entry 3108 (class 2604 OID 16713)
-- Name: tipos id_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos ALTER COLUMN id_tipo SET DEFAULT nextval('public.tipos_id_tipo_seq'::regclass);


--
-- TOC entry 3112 (class 2604 OID 16714)
-- Name: unidades id_unidad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades ALTER COLUMN id_unidad SET DEFAULT nextval('public.unidades_id_unidad_seq'::regclass);


--
-- TOC entry 3357 (class 0 OID 16385)
-- Dependencies: 202
-- Data for Name: adm_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_roles (id_rol, rol, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Administrador	Administrador del sistema	t	2019-09-09 05:04:46.766357+00	2019-09-09 05:04:46.766357+00
2	Director	Director del instituto de Ecologia	t	2019-09-09 05:04:59.237731+00	2019-09-09 05:04:59.237731+00
3	Investigador	Investigador del Instituto de Ecologia	t	2019-09-09 05:05:09.888365+00	2019-09-09 05:05:09.888365+00
\.


--
-- TOC entry 3361 (class 0 OID 16401)
-- Dependencies: 206
-- Data for Name: adm_usuario_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuario_roles (id_adm_usuario_rol, id_usuario, id_rol, estado, "createdAt", "updatedAt") FROM stdin;
2	2	2	t	2019-09-09 17:27:12.909651+00	2019-10-02 17:44:29.867+00
4	2	3	t	2019-09-09 20:26:16.862347+00	2019-10-02 17:44:29.873+00
66	28	2	t	2019-10-02 14:13:04.434+00	2019-10-02 17:44:44.612+00
1	1	1	t	2019-09-09 17:27:10.3653+00	2019-09-09 17:27:10.3653+00
67	28	3	t	2019-10-02 14:14:06.978+00	2019-10-02 17:47:24.651+00
3	3	3	t	2019-09-09 17:27:15.474194+00	2019-09-09 17:27:15.474194+00
68	29	1	f	2019-10-02 17:49:13.087+00	2020-09-06 22:33:41.93+00
70	29	3	f	2019-10-02 17:49:26.016+00	2020-09-06 22:36:21.939+00
69	29	2	f	2019-10-02 17:49:19.21+00	2020-09-06 22:39:26.188+00
\.


--
-- TOC entry 3359 (class 0 OID 16393)
-- Dependencies: 204
-- Data for Name: adm_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuarios (id_usuario, id_persona, usuario, password, recordatorio, estado, "createdAt", "updatedAt", "resetPasswordToken", "resetPasswordExpires") FROM stdin;
2	2	director	$2b$10$gbAG5QNDQsclsF1Li5uZ4uvXpWwS0a9FvKia06VD0JPDo6.KrKj9K	ecologia	t	2019-09-09 09:28:06.945+00	2019-09-25 17:53:17.075+00	\N	\N
3	3	investigador	$2b$10$vgD2OX2rBGDHePS7cK7i2Ol9ANKeoxBrZFJJ/9kjJ2y/rONwfcRcW	ecologia	t	2019-09-09 09:28:28.757+00	2019-09-25 18:44:22.653+00	\N	\N
28	32	001	$2b$10$PYyaLJqhHpr9e/sv7IVCLeHNry10B1N311iKlfZQ3/z9FqIfCRYPa	\N	t	2019-10-02 14:13:04.351+00	2019-10-02 14:13:04.351+00	\N	\N
1	1	admin	$2b$10$nFPLCv/2owXGYE6AWRRdUOntR72VCHHM4mnNmejKHVbkT/ySO2xCK	perrito	t	2019-09-09 09:27:19.174+00	2020-05-08 20:31:27.72+00	cc7e715bf5078bd2555ae5b2a89c1b93e110d46d	16:08:16.855+00
29	33	002	$2b$10$TKO70f4qiua6/ilzQ0FGM.Y4gg58eAE9nTgJiJleBqJ2gZjJJtx5S	\N	t	2019-10-02 17:49:12.999+00	2019-10-02 17:49:12.999+00	\N	\N
\.


--
-- TOC entry 3363 (class 0 OID 16409)
-- Dependencies: 208
-- Data for Name: autores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.autores (id_autor, id_investigador, id_publicacion, estado, "createdAt", "updatedAt") FROM stdin;
1	1	1	t	2020-06-26 07:15:02.369+00	2020-06-26 07:15:02.369+00
2	12	1	t	2020-06-26 07:15:02.371+00	2020-06-26 07:15:02.371+00
\.


--
-- TOC entry 3365 (class 0 OID 16417)
-- Dependencies: 210
-- Data for Name: basica_tecnicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.basica_tecnicas (id_basica_tecnica, id_proyecto, tipo, area, tipo_p, carga_h, unidades, estado, "createdAt", "updatedAt") FROM stdin;
5	52	basica	area 1	tipo proyecto 1	1000	\N	t	2020-06-05 18:07:09.136+00	2020-06-26 04:37:16.949+00
\.


--
-- TOC entry 3367 (class 0 OID 16428)
-- Dependencies: 212
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (id_comentario, id_persona, id_publicacion, comentario, estado, "createdAt", "updatedAt") FROM stdin;
1	2	1	Hola, su publicacion fue exitoso. \nSaludos.\nMoraes	t	2020-07-15 01:56:29.797+00	2020-07-15 01:56:29.797+00
\.


--
-- TOC entry 3369 (class 0 OID 16436)
-- Dependencies: 214
-- Data for Name: contra_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contra_archivos (id_contra_archivo, id_contratado, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
2	4	UjroFMc589ruK0GSXBhitRtF.pdf	Whatever, Wherever,...	descri personal2	9	t	2020-02-26 02:37:44.25+00	2020-02-26 02:37:44.266+00
1	3	SnOzTq66vSBEvJRfeqlhx3Xh.pdf	tuna plant10	descri1 tuna1 personal rrhh	9	t	2020-02-26 02:27:01.707+00	2020-05-06 04:02:50.104+00
3	5	OzcD4h0t1O9FVfIm2Kn1K05i.pdf	diploma-scrum	desc 1r	9	t	2020-06-27 16:39:45.73+00	2020-06-27 16:39:45.77+00
4	5	n2FgXh869-6bMCAI4qYqSMPR.pdf	diploma-redes1	desc 2 r	9	t	2020-06-27 16:39:45.733+00	2020-06-27 17:30:14.97+00
6	6	AnWheU8Z6573NwW8h24fn0HN.pdf	diploma-ingenieria	desc2	9	t	2020-08-02 00:17:05.625+00	2020-08-02 00:17:05.673+00
5	6	QxqlhYSG0xH3xiKXR_xVmvtE.pdf	diploma-ingles-1	desc1	9	t	2020-08-02 00:17:05.623+00	2020-08-02 00:17:05.672+00
\.


--
-- TOC entry 3371 (class 0 OID 16444)
-- Dependencies: 216
-- Data for Name: contratados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contratados (id_contratado, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, nombrecompleto, ci, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
4	1	K0USyRIRPuF5qeB9L83v-nAB.pdf	Contrado de personal RRHH	Contrado de personal RRHH	9	04	Boris Lopez Perez	123456	2020-02-01 04:00:00+00	2020-02-02 04:00:00+00	Descripcion Personal 2	t	2020-02-26 02:37:44.188+00	2020-05-06 20:46:59.303+00
3	1	DiVAk2SrNZovYXfHImgatUZ6.pdf	Contrado de personal RRHH10	Contrado de personal RRHH	9	04	Boris Vargas Juanez11	9884972	2020-02-06 04:00:00+00	2020-02-14 04:00:00+00	Areglar computadoras y verificar servidor	t	2020-02-26 02:27:01.621+00	2020-05-06 21:03:58.136+00
5	52	J_uQkS3uM2Qr6LElxOA8D0ZH.pdf	Contrado de Juan Carlos Torrez	descripcion del documento: desc inv soc	9	01	Juan Carlos Torrez	99991111	2020-06-27 04:00:00+00	2020-06-30 04:00:00+00	desc inv soc1	t	2020-06-27 16:39:45.625+00	2020-06-27 17:30:21.896+00
6	51	p184d57Krc8srK3i5cr1uAWP.pdf	Contrado de Juanita Davila	descripcion del documento: Descripcion 100	9	01	Juanita Davila	10101010	2020-01-01 04:00:00+00	2020-08-31 04:00:00+00	Descripcion 100	t	2020-08-02 00:17:05.549+00	2020-08-02 00:17:05.604+00
\.


--
-- TOC entry 3373 (class 0 OID 16456)
-- Dependencies: 218
-- Data for Name: conv_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conv_archivos (id_conv_archivo, id_convenio, archivo, nombre, descripcion, id_tipo, tipo, estado, "createdAt", "updatedAt") FROM stdin;
3	3	w4kee-xw6EPbqOiF2PKM9iS8.pdf	tuna plant1	descr1 arcivo	8	\N	t	2020-02-26 02:23:42.479+00	2020-05-06 04:02:04.374+00
2	2	Be_pr1faSdvoPBQDdlxoqQKt.pdf	Whatever, Wherever,...1	descr what1	8	\N	t	2020-02-25 23:32:21.97+00	2020-05-06 04:02:25.804+00
4	4	cVqc47mNYYBMRkz_zvjHBXBW.pdf	Practica7	desc prac7 	8	\N	t	2020-05-06 17:20:17.416+00	2020-05-06 17:20:17.449+00
5	5	jV3D_Eax-Xl6oPrbexxfDA6X.pdf	diploma-ingles-2	desci2	8	\N	t	2020-06-27 16:32:09.173+00	2020-06-27 16:32:09.205+00
6	5	DhsBqiFttCoN0qMD6Jb9G528.pdf	diploma-ingles-10	desci1	8	\N	t	2020-06-27 16:32:09.174+00	2020-06-27 17:28:28.775+00
7	6	ebv9R12pK70vvgKEKtnjTjCF.pdf	diploma-fundamentos-arduino	descri1	8	\N	t	2020-08-02 00:10:49.39+00	2020-08-02 00:10:49.448+00
8	6	cgRx9AHwF4RUW1TeiSDSw_1R.pdf	diploma-escritura-ingles	descri2	8	\N	t	2020-08-02 00:10:49.392+00	2020-08-02 00:10:49.45+00
\.


--
-- TOC entry 3375 (class 0 OID 16464)
-- Dependencies: 220
-- Data for Name: convenios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convenios (id_convenio, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, titulo, objetivo, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
3	1	Ird4mK6g-Ac62r_MD5CEwnBe.pdf	Contrado de convenio	Contrado de convenio	8	convenio marco	convenio1	obje1	2020-02-06 04:00:00+00	2020-02-14 04:00:00+00	descri1 convenio	t	2020-02-26 02:23:42.418+00	2020-02-26 02:23:42.457+00
1	1	UIB7Cd-nQjfOqqgYS-yO2ZuI.pdf	Contrado de convenio11	Contrado de convenio	8	convenio marco	convenio1	obje1	2020-02-20 04:00:00+00	2020-02-29 04:00:00+00	descrip1	t	2020-02-25 23:23:37.756+00	2020-05-06 04:01:48.96+00
2	1	D0H9FfWHW3yl4LbzL7f_00H5.pdf	Contrado de convenio	Contrado de convenio	8	convenio marco	convenio11	obje1	2020-02-20 04:00:00+00	2020-02-29 04:00:00+00	descrip1	t	2020-02-25 23:32:21.902+00	2020-02-25 23:32:21.952+00
4	1	QkbDeITD1bshkIxJYgjy1s2z.pdf	Convenio de convenio1000	descripcion de convenio: desc 1000	8	convenio marco	convenio2000	obj 2000	2020-05-07 04:00:00+00	2020-05-31 04:00:00+00	desc 2000	t	2020-05-06 17:20:17.275+00	2020-05-06 20:52:35.72+00
5	52	ENQRkcVF5bD_kW-QpVGSz1Kf.pdf	Convenio de convenio 1	descripcion de convenio: desc 1	8	convenio marco	convenio 1	objetivo1	2020-06-27 04:00:00+00	2020-06-28 04:00:00+00	desc 1	t	2020-06-27 16:32:09.109+00	2020-06-27 16:32:09.155+00
6	51	Fw7suGvEWd3SGHtXn-kiOKjt.pdf	Convenio de convenio 1000	descripcion de convenio: descripcion	8	convenio marco	convenio 1000	objetivo 1000	2020-01-29 04:00:00+00	2020-08-30 04:00:00+00	descripcion	t	2020-08-02 00:10:49.292+00	2020-08-02 00:10:49.374+00
\.


--
-- TOC entry 3377 (class 0 OID 16476)
-- Dependencies: 222
-- Data for Name: curso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.curso_archivos (id_curso_archivo, id_curso, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	3	Dl6WiHPezu7i7T9s7M8f9Gxg.pdf	ANDROID NIVEL I	gigi	7	t	2019-12-19 19:29:33.992+00	2019-12-19 19:29:34.058+00
3	5	dQbekaENEf0yHMgTXkCj9mKl.pdf	show	descri show 1	7	t	2020-06-05 22:55:00.9+00	2020-06-05 22:55:01.002+00
4	5	LCAlFNtvE_xG5bA9D6kd3euY.pdf	Invoice_447050377	descri invoice 1	7	t	2020-06-05 22:55:00.905+00	2020-06-05 22:55:01.026+00
5	2	to6GZUV9qbYV2E70H-CX7wLS.pdf	show100	show titu2	7	t	2020-06-26 05:33:57.424+00	2020-06-27 18:09:24.457+00
\.


--
-- TOC entry 3379 (class 0 OID 16484)
-- Dependencies: 224
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cursos (id_curso, id_proyecto, titulo, objetivo, lugar, resumen, asistentes, fechaini, fechafin, horas, estado, "createdAt", "updatedAt") FROM stdin;
5	52	titulo curso prueba 1	objetivo prueba 1	lugar prueba 1	resumen1 titulo prueba1	100	2020-06-05 04:00:00+00	2020-06-13 04:00:00+00	10	t	2020-06-05 22:55:00.835+00	2020-06-26 05:12:03.756+00
3	52	titu1	obj1	La Paz	resumen curso titu1	100	2019-12-04 04:00:00+00	2019-12-12 04:00:00+00	60	t	2019-12-19 19:29:33.96+00	2020-06-26 05:21:03.093+00
2	52	titu2	ob2	La Paz	resumen titu2	100	2019-12-05 04:00:00+00	2019-12-21 04:00:00+00	50	t	2019-12-19 19:26:17.868+00	2020-06-26 05:34:46.381+00
\.


--
-- TOC entry 3381 (class 0 OID 16496)
-- Dependencies: 226
-- Data for Name: evento_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento_archivos (id_evento_archivo, id_evento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
3	4	Mbjh-ngm_G__rlisiecjr7Vg.pdf	show	bd show titu4	11	t	2020-06-26 05:42:57.078+00	2020-06-26 05:42:57.117+00
1	2	dUyc97YPptOFXPSkS8gaSuN1.pdf	tuna plant prueba1	descri1 prueba1 jajaja	7	t	2020-02-25 20:43:39.813+00	2020-02-25 20:43:39.835+00
\.


--
-- TOC entry 3383 (class 0 OID 16504)
-- Dependencies: 228
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos (id_evento, id_proyecto, titulo, objetivo, lugar, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
3	52	titu3	obje3	Santa Cruz	2019-12-04 04:00:00+00	2019-12-12 04:00:00+00	resumen3	t	2019-12-20 04:15:15.104+00	2019-12-20 04:15:15.104+00
2	52	titu2	obj2	Cochabamba	2019-12-05 04:00:00+00	2019-12-13 04:00:00+00	resumen2	t	2019-12-20 04:13:41.256+00	2020-06-26 05:40:02.503+00
4	52	titu4	obj4	La Paz	2019-12-05 04:00:00+00	2019-12-14 04:00:00+00	jeje	t	2019-12-20 04:18:20.643+00	2020-06-26 05:42:57.059+00
\.


--
-- TOC entry 3385 (class 0 OID 16516)
-- Dependencies: 230
-- Data for Name: expo_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expo_archivos (id_expo_archivo, id_exposicion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	Gy-HYs_zegJGuJwYTICl2pxz.pdf	Whatever, Wherever,...	descripcion1	7	t	2020-02-25 21:38:07.455+00	2020-02-25 21:38:07.472+00
2	2	V8JZSYowsxl5ltHAMFHS6HPg.pdf	tuna plant	jaja1	7	t	2020-02-26 04:23:02.823+00	2020-02-26 04:23:02.861+00
3	2	Qj-a8qI2Yeg8-0IEC_wlo7Q-.pdf	show cambio	show expo2 desc	13	t	2020-06-26 06:01:16.577+00	2020-06-27 15:42:02.513+00
\.


--
-- TOC entry 3387 (class 0 OID 16524)
-- Dependencies: 232
-- Data for Name: exposiciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exposiciones (id_exposicion, id_proyecto, titulo, tema, objetivo, lugar, asistentes, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
1	52	exposicion1	a	obje1	La Paz	10	2020-02-05 04:00:00+00	2020-02-13 04:00:00+00	resumen11	t	2020-02-25 21:38:07.418+00	2020-06-26 05:55:25.483+00
2	52	exposicion2	SObre virus	enseñar	La Paz	100	2020-02-07 04:00:00+00	2020-02-15 04:00:00+00	se hablara acerca de virus, ademas que habra premios	t	2020-02-26 04:23:02.773+00	2020-06-26 06:01:16.557+00
\.


--
-- TOC entry 3389 (class 0 OID 16536)
-- Dependencies: 234
-- Data for Name: expositores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expositores (id_expositor, id_curso, nombres, apellidos, estado, "createdAt", "updatedAt") FROM stdin;
1	5	nombre expo 1	\N	t	2020-06-05 22:55:00.89+00	2020-06-05 22:55:00.89+00
2	5	nombre expo 2		t	2020-06-05 22:55:00.891+00	2020-06-05 22:55:00.891+00
5	3	juanito1 expo	\N	t	2020-06-26 05:21:03.122+00	2020-06-26 05:21:03.122+00
9	2	expos 1 juan titu2	\N	t	2020-06-26 05:34:46.41+00	2020-06-26 05:34:46.41+00
10	2	expos2 titu2	\N	t	2020-06-26 05:34:46.414+00	2020-06-26 05:34:46.414+00
\.


--
-- TOC entry 3391 (class 0 OID 16544)
-- Dependencies: 236
-- Data for Name: fotografias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fotografias (id_fotografia, imagen, descripcion, numero, estado, "createdAt", "updatedAt", tipo) FROM stdin;
1	photo_default.png	fotografia por default.	1	t	2019-09-09 08:04:50.089+00	2020-05-27 22:24:06.822+00	foto
18	vDwY_BfgDjyH1BPTV0zCLvvh.jpeg	Fotografia de Boris Vargas	1	t	2020-05-27 22:50:21.612+00	2020-05-27 22:50:21.654+00	foto
19	LqUue8Ly_r1KQYjp5-sA5CVs.jpg	Fotografia de Monica Moraes	1	t	2020-05-28 14:42:13.719+00	2020-05-28 14:42:13.76+00	foto
20	YVeQqUxewtFvQXcfLc1uYUBc.png	Fotografia de Alvaro Garitano	1	t	2020-05-28 16:35:39.87+00	2020-05-28 16:35:39.907+00	foto
22	logo-pdf.jpg	Fotografia default pdf	1	t	2020-06-29 03:28:42.023+00	2020-06-29 03:28:42.131+00	foto
70	YVeQqUxewtFvQXcfLc1uYUBc.png	Fotografia de juan1 perez	1	f	2020-09-01 04:59:21.425+00	2020-09-03 04:19:43.333+00	foto
72	_cNSdsf-dFEYamq0P0zFM7j5.png	Fotografia de juan1 perez	3	t	2020-09-07 16:07:20.52+00	2020-09-07 16:07:20.653+00	foto
71	L5XM69iauFfSZCXuPVzXKhw0.png	Fotografia de juan1 perez	2	f	2020-09-03 04:19:42.864+00	2020-09-07 16:07:20.756+00	foto
\.


--
-- TOC entry 3393 (class 0 OID 16556)
-- Dependencies: 238
-- Data for Name: inv_proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_proyectos (id_inv_proyecto, id_proyecto, id_investigador, estado, "createdAt", "updatedAt") FROM stdin;
2	1	1	t	2019-09-30 14:34:42.019+00	2019-09-30 14:39:16.21+00
50	51	1	t	2020-05-08 02:44:35.663+00	2020-05-08 02:44:35.663+00
51	52	12	t	2020-05-28 22:30:48.154+00	2020-05-28 22:30:48.154+00
52	52	13	t	2020-05-28 22:30:48.163+00	2020-05-28 22:30:48.163+00
\.


--
-- TOC entry 3395 (class 0 OID 16564)
-- Dependencies: 240
-- Data for Name: inv_tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_tipos (id_inv_tipo, tipo, estado, "createdAt", "updatedAt", descripcion) FROM stdin;
1	Titular	t	2019-09-30 14:00:28.507+00	2019-09-30 14:01:36.597+00	descripcion cambiada
2	Asociado con proyecto	t	2019-10-01 13:52:11.63+00	2019-10-01 13:52:11.63+00	Tiene un proyecto asociado
3	Asociado por invitacion	t	2019-10-01 13:52:39.088+00	2019-10-01 13:52:39.088+00	invitado por la UMSA, por tiempo determinado
\.


--
-- TOC entry 3397 (class 0 OID 16572)
-- Dependencies: 242
-- Data for Name: investigadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigadores (id_investigador, id_persona, id_inv_tipo, estado, "createdAt", "updatedAt") FROM stdin;
2	2	1	t	2019-09-30 14:19:13.81+00	2019-09-30 14:19:13.81+00
1	3	2	t	2019-09-30 14:07:52.433+00	2019-09-30 14:08:50.281+00
12	32	3	t	2019-10-02 14:14:06.983+00	2019-10-02 17:46:53.032+00
13	33	3	t	2019-10-02 17:49:26.018+00	2019-10-02 17:49:26.018+00
\.


--
-- TOC entry 3399 (class 0 OID 16580)
-- Dependencies: 244
-- Data for Name: lugar_desarrollos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lugar_desarrollos (id_lugar_desarrollo, id_proyecto, departamento, provincia, municipio, localidad, latmax, lonmax, latmin, lonmin, estado, "createdAt", "updatedAt") FROM stdin;
5	52	LP	Aroma	municipio prueba 1	localidad prueba 1	1.00000010	-1.00000000	10.05000000	10.06000000	t	2020-06-05 19:47:16.153+00	2020-06-26 04:37:57.93+00
6	52	OR	Litoral	Rurrenabaque	Nose	1.00000000	1.00000000	2.00000000	2.00000000	t	2020-06-26 04:38:37.179+00	2020-06-26 04:38:50.143+00
\.


--
-- TOC entry 3401 (class 0 OID 16588)
-- Dependencies: 246
-- Data for Name: nota_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_archivos (id_nota_archivo, id_nota_prensa, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	6	atqCveIkR5QD18JPTTNLoQWh.pdf	Whatever, Wherever,...	hhhh	7	t	2020-02-25 21:27:04.897+00	2020-02-25 21:27:04.939+00
2	6	133EsiU3O8Ade6npq6umVFHp.pdf	show	show descripcion convenio1	12	t	2020-06-26 05:54:49.619+00	2020-06-26 05:54:49.653+00
\.


--
-- TOC entry 3403 (class 0 OID 16596)
-- Dependencies: 248
-- Data for Name: nota_prensas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_prensas (id_nota_prensa, id_proyecto, titulo, objetivo, lugar, prensa, resumen, estado, "createdAt", "updatedAt", fecha) FROM stdin;
6	52	convenio1	obje1	La Paz	prensa11	998989899	t	2020-02-25 21:27:04.862+00	2020-06-26 05:54:49.593+00	2020-02-25 04:00:00+00
\.


--
-- TOC entry 3405 (class 0 OID 16607)
-- Dependencies: 250
-- Data for Name: permiso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permiso_archivos (id_permiso_archivo, id_proyecto, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt", tipo) FROM stdin;
2	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 13:26:46.322+00	2019-12-19 13:26:46.322+00	otorgacion
3	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 13:27:51.854+00	2019-12-19 13:27:51.854+00	solicitud
4	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	3	t	2019-12-19 13:30:14.944+00	2019-12-19 13:30:14.944+00	solicitud
5	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 13:31:00.441+00	2019-12-19 13:31:00.441+00	solicitud
6	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 13:34:12.164+00	2019-12-19 13:34:12.164+00	otorgacion
7	1	A2s0llOfftnl-J0qyIkOgCid.pdf	document1	desc	2	t	2019-12-19 13:35:04.494+00	2019-12-19 13:35:04.558+00	solicitud
1	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	4	t	2019-12-18 20:11:05.038+00	2019-12-18 20:14:41.201+00	otorgacion
8	1	rbUuVjThA82Y_wrsem3yinjz.pdf	document10	lele1	3	t	2019-12-19 13:36:33.358+00	2020-05-06 00:28:34.942+00	otorgacion
10	52	A1vdY3wo6Rwkz2Cex-X8Zx1l.pdf	diploma-angular	desc diplo angular	5	t	2020-06-27 16:19:29.835+00	2020-06-27 16:19:29.933+00	solicitud
11	52	DkbcfvR_xxesB7ryCZFxqSd7.pdf	diploma-bd-2017	desc1	5	t	2020-06-27 16:28:11.954+00	2020-06-27 16:28:12.056+00	otorgacion
12	52	celo_2NDwJWtLK9MYUlD-05I.pdf	diploma-avanzado-redes	desc2	5	t	2020-06-27 16:28:11.97+00	2020-06-27 16:28:12.056+00	otorgacion
9	52	lDA567jORyCft8Bt_qAjwtwa.pdf	diploma-terminal1	desc diplo terminal	2	t	2020-06-27 16:16:45.236+00	2020-06-27 17:30:52.085+00	otorgacion
14	51	wxovKyLv95X5ppNTvJ2YelaB.pdf	diploma-angular	descri1	4	t	2020-08-02 00:08:51.041+00	2020-08-02 00:08:51.211+00	solicitud
13	51	o5wru8yBPenDyDYRpfHyecaJ.pdf	diploma-algoritmos	descri2	4	t	2020-08-02 00:08:51.06+00	2020-08-02 00:08:51.21+00	solicitud
16	51	DnOSWBvfvoyYNlBE16K3BaMI.pdf	diploma-typescript	desc20	5	t	2020-08-02 00:11:57.727+00	2020-08-02 00:11:57.804+00	solicitud
15	51	IZMriWntjXCa5IXz9tazX3Ei.pdf	diploma-zoom	desc10	5	t	2020-08-02 00:11:57.719+00	2020-08-02 00:11:57.805+00	solicitud
18	51	3dHtKXcUHRzfgib_-dV9oA6B.pdf	diploma-bd	desc2	3	t	2020-08-02 00:15:37.141+00	2020-08-02 00:15:37.222+00	solicitud
17	51	te4sQK7OM8noRP7uimFx6a6h.pdf	diploma-bootstrap	desc1	3	t	2020-08-02 00:15:37.139+00	2020-08-02 00:15:37.224+00	solicitud
\.


--
-- TOC entry 3407 (class 0 OID 16615)
-- Dependencies: 252
-- Data for Name: personas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personas (id_persona, id_fotografia, paterno, materno, nombres, sexo, estado_civil, fec_nacimiento, pais, provincia, direccion1, correo, telefono, grado_academico, estado, "createdAt", "updatedAt", ci, url, ciudad, direccion2, celular, lenguaje, formacion_pro, formacion_adi, habilidades, conclusion, tema, color) FROM stdin;
33	1	perez		juanito22	\N	\N	\N	\N	\N	\N	p4ecologia@outlook.es	\N	M. Sc.	t	2019-10-02 17:49:12.962+00	2020-04-30 14:23:41.621+00	002	\N	SC	\N	\N	\N	\N	\N	\N	\N		theme-cyan
3	20	Garitano	Zavala	Alvaro	Masculino	Casado	1988-01-05 04:00:00+00	BO	Murillo	Calacoto	p2ecologia@outlook.com	22222222	Ph. D.	t	2019-09-09 04:52:01.047628+00	2020-09-07 06:47:40.341+00	0000003	\N	CH	\N	\N	\N	\N	\N	\N	\N		theme-orange
2	19	Moraes	Ramirez	Monica	Femenino	Casado	1986-01-05 04:00:00+00	BO	Murillo	Obrajes	p1ecologia@outlook.es	00000000	Ph. D.	t	2019-09-09 04:46:55.187564+00	2020-09-07 06:50:36.024+00	0000002	\N	LP	\N	\N	\N	\N	\N	\N	\N		theme-cyan
32	72	perez		juan1	\N	\N	\N	\N	\N	\N	p3ecologia@outlook.es	\N	Ph. D.	t	2019-10-02 14:13:04.331+00	2020-09-07 16:07:21.1+00	001	\N	LP	\N	\N	\N	\N	\N	\N	\N		theme-cyan
1	18	Vargas	Paucara	Boris	Masculino	Soltero	1996-01-12 04:00:00+00	BO	Murillo	Mallasa	borisvargaspaucara@gmail.com	60514138	Estudiante	t	2019-09-09 04:44:24.860882+00	2020-09-21 14:00:53.226+00	0000001	\N	LP	\N	60514138	es_BO	Estudie lalaa	\N	\N	\N		theme-cyan
\.


--
-- TOC entry 3409 (class 0 OID 16629)
-- Dependencies: 254
-- Data for Name: proy_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proy_archivos (id_proy_archivo, id_proyecto, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
57	1	6MeHJyxzTtiygPPmXXMsmAL5.pdf	mismo3	desc3	1	t	2020-05-01 02:49:36+00	2020-05-01 02:49:36+00
17	1	6MeHJyxzTtiygPPmXXMsmAL5.pdf	mismo1	desc1	1	t	2020-05-01 01:40:21.188371+00	2020-05-05 21:36:29.22+00
56	1	6MeHJyxzTtiygPPmXXMsmAL5.pdf	mismo22	desc2	1	t	2020-05-01 02:48:38.283+00	2020-05-06 00:28:21.353+00
62	1	hqTixlaJnPVJEqPFwP0NgSVj.pdf	Practica5	prac5	6	t	2020-05-02 05:05:03.495+00	2020-05-06 00:28:47.844+00
61	1	LIig_NQhngE7RUKLrf40Adrg.pdf	show	certificado	7	t	2020-05-02 03:02:37.24+00	2020-05-06 00:28:57.601+00
63	1	65mL0ZUVs_b6iYM-HCVfAOYA.pdf	Practica8	desc prac8	7	t	2020-05-06 14:29:13.368+00	2020-05-06 14:29:13.498+00
64	1	nAy8nSg5ZtaLYegSvtXZih4s.pdf	Practica7	desc prac7	6	t	2020-05-06 14:31:39.819+00	2020-05-06 14:31:39.889+00
65	1	NA1KIM-NBV1cEwEx_L6ioGta.pdf	Practica7	desc prac7 otros	7	t	2020-05-06 14:32:22.369+00	2020-05-06 14:32:22.421+00
67	51	Rda1A7Ge2WL_PTxFoES3gmnH.pdf	show	Archivos necesarios para la creacion de proyecto	1	t	2020-05-08 02:44:35.673+00	2020-05-08 02:44:35.9+00
66	51	4B4nePZADYuYhwqSCuVlGvcF.pdf	Practica7	Archivos necesarios para la creacion de proyecto	1	t	2020-05-08 02:44:35.673+00	2020-05-08 02:44:36.037+00
68	51	BgHcebmW6K10fF6hYmvRfmlj.pdf	Practica8	Archivos necesarios para la creacion de proyecto	1	t	2020-05-08 02:44:35.676+00	2020-05-08 02:44:36.044+00
71	52	ir4pOEfbCtQ0DEzzlebb5dxA.pdf	documento	Archivos necesarios para la creacion de proyecto	1	t	2020-05-28 22:30:48.176+00	2020-05-28 22:30:48.437+00
70	52	retpZu0TeMmVufpO3Z6Yub2H.pdf	Invoice_447050310	Archivos necesarios para la creacion de proyecto	1	t	2020-05-28 22:30:48.169+00	2020-06-27 15:45:16.117+00
72	52	ECdRTs5h5qdstMVrtk672Cnr.pdf	diploma-zoom	diploma lala	7	t	2020-06-27 15:58:36.644+00	2020-06-27 15:58:36.738+00
73	52	dXSAx1LabRklwOWqOm8c0sas.pdf	diploma-zoom	lala	7	t	2020-06-27 16:10:32.993+00	2020-06-27 16:10:33.066+00
74	52	w4eiG7he7onurewb9xprdkJK.pdf	diploma-typescript	desc type	7	t	2020-06-27 16:14:24.371+00	2020-06-27 16:14:24.425+00
69	52	r7mxV7jQioewf05eKLTtlxrg.pdf	show1	Archivos necesarios para la creacion de proyecto1	1	t	2020-05-28 22:30:48.168+00	2020-06-27 17:07:22.117+00
75	52	ywZB6UiAwvaRU43v3PovKraC.pdf	diploma-angula	proyecto final	6	t	2020-06-27 16:40:59.287+00	2020-06-27 17:30:06.915+00
76	51	cTb4u6hfbbCGoJE9AtwVY4Mo.pdf	diploma-iot	desc1	6	t	2020-08-02 01:25:45.487+00	2020-08-02 01:25:45.552+00
77	51	8GhDXz0YO1aiYTBN0v2fxctA.pdf	diploma-aprender	Descrip1	6	t	2020-08-13 19:18:12.073+00	2020-08-13 19:18:12.223+00
79	51	WW_KOsBL5QRGcag51PU-8NWs.pdf	diploma-algoritmos	Descrip3	6	t	2020-08-13 19:18:12.083+00	2020-08-13 19:18:12.225+00
78	51	6xUW1q04dM7qpbq2WrFNUv1r.pdf	diploma-angular	Descrip2	6	t	2020-08-13 19:18:12.083+00	2020-08-13 19:18:12.235+00
82	51	uOFkBGuK27h3Q6TGzO0txU_R.pdf	diploma-sql-mysql-2016	desc2	7	t	2020-08-13 21:42:09.931+00	2020-08-13 21:42:10.256+00
81	51	ePtFePuuanui9tNjjee21e37.pdf	diploma-scrum	desc3	7	t	2020-08-13 21:42:09.953+00	2020-08-13 21:42:10.24+00
80	51	el4vuetMQK4BNloWrAzE6WVj.pdf	diploma-sql-mysql	desc1	7	t	2020-08-13 21:42:09.93+00	2020-08-13 21:42:10.287+00
\.


--
-- TOC entry 3411 (class 0 OID 16637)
-- Dependencies: 256
-- Data for Name: proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proyectos (id_proyecto, id_adm, id_coordinador, titulo, fechaini, fechafin, estado, "createdAt", "updatedAt", proceso) FROM stdin;
52	1	1	PROYECTO 1	2020-05-28 04:00:00+00	2020-05-29 04:00:00+00	activo	2020-05-28 22:30:48.085+00	2020-05-28 22:30:48.085+00	50
1	1	2	Renovacion de agua	2019-09-01 04:00:00+00	2019-11-29 04:00:00+00	inactivo	2019-09-30 14:25:27.22+00	2020-04-30 15:00:05.093+00	5
51	1	2	proyecto prueba 100	2020-05-01 04:00:00+00	2020-05-31 04:00:00+00	pendiente	2020-05-08 02:44:35.543+00	2020-05-08 02:45:56.335+00	40
\.


--
-- TOC entry 3413 (class 0 OID 16647)
-- Dependencies: 258
-- Data for Name: publi_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publi_archivos (id_publi_archivo, id_publicacion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	oS_AUFieA2eGSeV55WUCzu-s.pdf	libro100	desc10	14	t	2020-06-26 07:15:02.37+00	2020-06-27 17:48:33.306+00
\.


--
-- TOC entry 3415 (class 0 OID 16655)
-- Dependencies: 260
-- Data for Name: publicaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publicaciones (id_publicacion, id_proyecto, id_coordinador, titulo, fecha, contenido, estado, "createdAt", "updatedAt", tipo) FROM stdin;
1	52	1	libro 1 publi1	2020-06-26 04:00:00+00	allala\nlibro1\nla	t	2020-06-26 07:15:02.31+00	2020-06-27 02:16:34.139+00	Libro
\.


--
-- TOC entry 3417 (class 0 OID 16667)
-- Dependencies: 262
-- Data for Name: tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipos (id_tipo, nombre, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Principal	Son los archivos principales para la creación del proyecto	t	2019-12-18 15:53:22.007415+00	2019-12-18 15:53:22.007415+00
2	DGB	Archivo de direccion general de biodiversidad	t	2019-12-18 15:53:22.007415+00	2019-12-18 15:53:22.007415+00
3	SERNAP	Archivo de servicio nacional de areas protegidas	t	2019-12-18 15:53:22.007415+00	2019-12-18 15:53:22.007415+00
4	CITES	Archivo	t	2019-12-18 15:53:22.007415+00	2019-12-18 15:53:22.007415+00
5	BIOETICA	Archivo	t	2019-12-18 15:53:22.007415+00	2019-12-18 15:53:22.007415+00
6	Cierre de proyecto	Archivos necesarios para el cierre de proyecto	t	2019-12-18 15:53:22.007415+00	2019-12-18 15:53:22.007415+00
7	Otros	Cualquier tipo de archivo	t	2019-12-18 15:53:22.007415+00	2019-12-18 15:53:22.007415+00
8	Convenio	Archivo de convenio	t	2020-05-03 21:43:25.36632+00	2020-05-03 21:43:25.36632+00
9	Contratado	Archivo de contratado	t	2020-05-03 21:43:46.238677+00	2020-05-03 21:43:46.238677+00
10	Cursos	Archivo de Cursos	t	2020-05-03 21:51:01.170459+00	2020-05-03 21:51:01.170459+00
11	Evento	Archivo de Eventos	t	2020-05-03 21:51:14.517132+00	2020-05-03 21:51:14.517132+00
12	Nota de prensa	Archivo de no tas de prensa	t	2020-05-03 21:51:41.531575+00	2020-05-03 21:51:41.531575+00
13	Exposicion	Archivo de exposiciones	t	2020-05-03 21:52:29.646938+00	2020-05-03 21:52:29.646938+00
14	publicacion	Archivo de publicaciones	t	2020-06-26 07:03:32.278416+00	2020-06-26 07:03:32.278416+00
\.


--
-- TOC entry 3419 (class 0 OID 16675)
-- Dependencies: 264
-- Data for Name: unidades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidades (id_unidad, id_basica_tecnica, nombre, estado, "createdAt", "updatedAt") FROM stdin;
17	5	uni10	t	2020-06-26 04:37:16.972+00	2020-06-26 04:37:16.972+00
18	5	uni11	t	2020-06-26 04:37:16.975+00	2020-06-26 04:37:16.975+00
\.


--
-- TOC entry 3458 (class 0 OID 0)
-- Dependencies: 203
-- Name: adm_rol_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_rol_id_rol_seq', 3, true);


--
-- TOC entry 3459 (class 0 OID 0)
-- Dependencies: 205
-- Name: adm_usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_id_usuario_seq', 29, true);


--
-- TOC entry 3460 (class 0 OID 0)
-- Dependencies: 207
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_roles_id_adm_usuario_rol_seq', 70, true);


--
-- TOC entry 3461 (class 0 OID 0)
-- Dependencies: 209
-- Name: autores_id_autor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.autores_id_autor_seq', 2, true);


--
-- TOC entry 3462 (class 0 OID 0)
-- Dependencies: 211
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.basica_tecnicas_id_basica_tecnica_seq', 5, true);


--
-- TOC entry 3463 (class 0 OID 0)
-- Dependencies: 213
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_comentario_seq', 1, true);


--
-- TOC entry 3464 (class 0 OID 0)
-- Dependencies: 215
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contra_archivos_id_contra_archivo_seq', 6, true);


--
-- TOC entry 3465 (class 0 OID 0)
-- Dependencies: 217
-- Name: contratados_id_contratado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contratados_id_contratado_seq', 6, true);


--
-- TOC entry 3466 (class 0 OID 0)
-- Dependencies: 219
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conv_archivos_id_conv_archivo_seq', 8, true);


--
-- TOC entry 3467 (class 0 OID 0)
-- Dependencies: 221
-- Name: convenios_id_convenio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.convenios_id_convenio_seq', 6, true);


--
-- TOC entry 3468 (class 0 OID 0)
-- Dependencies: 223
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.curso_archivos_id_curso_archivo_seq', 5, true);


--
-- TOC entry 3469 (class 0 OID 0)
-- Dependencies: 225
-- Name: cursos_id_curso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cursos_id_curso_seq', 5, true);


--
-- TOC entry 3470 (class 0 OID 0)
-- Dependencies: 227
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_archivos_id_evento_archivos_seq', 3, true);


--
-- TOC entry 3471 (class 0 OID 0)
-- Dependencies: 229
-- Name: eventos_id_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_id_evento_seq', 7, true);


--
-- TOC entry 3472 (class 0 OID 0)
-- Dependencies: 231
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expo_archivos_id_expo_archivo_seq', 3, true);


--
-- TOC entry 3473 (class 0 OID 0)
-- Dependencies: 233
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exposiciones_id_exposicion_seq', 2, true);


--
-- TOC entry 3474 (class 0 OID 0)
-- Dependencies: 235
-- Name: expositores_id_expositor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expositores_id_expositor_seq', 10, true);


--
-- TOC entry 3475 (class 0 OID 0)
-- Dependencies: 237
-- Name: fotografia_id_fotografia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fotografia_id_fotografia_seq', 72, true);


--
-- TOC entry 3476 (class 0 OID 0)
-- Dependencies: 239
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_proyectos_id_inv_proyecto_seq', 52, true);


--
-- TOC entry 3477 (class 0 OID 0)
-- Dependencies: 241
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_tipos_id_inv_tipo_seq', 3, true);


--
-- TOC entry 3478 (class 0 OID 0)
-- Dependencies: 243
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.investigadores_id_investigador_seq', 13, true);


--
-- TOC entry 3479 (class 0 OID 0)
-- Dependencies: 245
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lugar_desarrollos_id_lugar_desarrollo_seq', 6, true);


--
-- TOC entry 3480 (class 0 OID 0)
-- Dependencies: 247
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_archivos_id_nota_archivo_seq', 2, true);


--
-- TOC entry 3481 (class 0 OID 0)
-- Dependencies: 249
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_prensas_id_nota_prensa_seq', 6, true);


--
-- TOC entry 3482 (class 0 OID 0)
-- Dependencies: 251
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permiso_archivos_id_permiso_archivo_seq', 18, true);


--
-- TOC entry 3483 (class 0 OID 0)
-- Dependencies: 253
-- Name: persona_id_persona_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.persona_id_persona_seq', 33, true);


--
-- TOC entry 3484 (class 0 OID 0)
-- Dependencies: 255
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proy_archivos_id_proy_archivo_seq', 82, true);


--
-- TOC entry 3485 (class 0 OID 0)
-- Dependencies: 257
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proyectos_id_proyecto_seq', 52, true);


--
-- TOC entry 3486 (class 0 OID 0)
-- Dependencies: 259
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publi_archivos_id_publi_archivo_seq', 1, true);


--
-- TOC entry 3487 (class 0 OID 0)
-- Dependencies: 261
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publicaciones_id_publicacion_seq', 1, true);


--
-- TOC entry 3488 (class 0 OID 0)
-- Dependencies: 263
-- Name: tipos_id_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipos_id_tipo_seq', 14, true);


--
-- TOC entry 3489 (class 0 OID 0)
-- Dependencies: 265
-- Name: unidades_id_unidad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidades_id_unidad_seq', 18, true);


--
-- TOC entry 3114 (class 2606 OID 16716)
-- Name: adm_roles adm_rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 3116 (class 2606 OID 16718)
-- Name: adm_roles adm_rol_rol_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_rol_rol_key UNIQUE (rol);


--
-- TOC entry 3118 (class 2606 OID 16720)
-- Name: adm_usuarios adm_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 3122 (class 2606 OID 16722)
-- Name: adm_usuario_roles adm_usuario_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_pkey PRIMARY KEY (id_adm_usuario_rol);


--
-- TOC entry 3120 (class 2606 OID 16724)
-- Name: adm_usuarios adm_usuario_usuario_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_usuario_key UNIQUE (usuario);


--
-- TOC entry 3124 (class 2606 OID 16726)
-- Name: autores autores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_pkey PRIMARY KEY (id_autor);


--
-- TOC entry 3126 (class 2606 OID 16728)
-- Name: basica_tecnicas basica_tecnicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_pkey PRIMARY KEY (id_basica_tecnica);


--
-- TOC entry 3128 (class 2606 OID 16730)
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (id_comentario);


--
-- TOC entry 3130 (class 2606 OID 16732)
-- Name: contra_archivos contra_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_pkey PRIMARY KEY (id_contra_archivo);


--
-- TOC entry 3132 (class 2606 OID 16734)
-- Name: contratados contratados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_pkey PRIMARY KEY (id_contratado);


--
-- TOC entry 3134 (class 2606 OID 16736)
-- Name: conv_archivos conv_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_pkey PRIMARY KEY (id_conv_archivo);


--
-- TOC entry 3136 (class 2606 OID 16738)
-- Name: convenios convenios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_pkey PRIMARY KEY (id_convenio);


--
-- TOC entry 3138 (class 2606 OID 16740)
-- Name: curso_archivos curso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_pkey PRIMARY KEY (id_curso_archivo);


--
-- TOC entry 3140 (class 2606 OID 16742)
-- Name: cursos cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id_curso);


--
-- TOC entry 3142 (class 2606 OID 16744)
-- Name: evento_archivos evento_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_pkey PRIMARY KEY (id_evento_archivo);


--
-- TOC entry 3144 (class 2606 OID 16746)
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id_evento);


--
-- TOC entry 3146 (class 2606 OID 16748)
-- Name: expo_archivos expo_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_pkey PRIMARY KEY (id_expo_archivo);


--
-- TOC entry 3148 (class 2606 OID 16750)
-- Name: exposiciones exposiciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_pkey PRIMARY KEY (id_exposicion);


--
-- TOC entry 3150 (class 2606 OID 16752)
-- Name: expositores expositores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_pkey PRIMARY KEY (id_expositor);


--
-- TOC entry 3152 (class 2606 OID 16754)
-- Name: fotografias fotografia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias
    ADD CONSTRAINT fotografia_pkey PRIMARY KEY (id_fotografia);


--
-- TOC entry 3154 (class 2606 OID 16756)
-- Name: inv_proyectos inv_proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_pkey PRIMARY KEY (id_inv_proyecto);


--
-- TOC entry 3156 (class 2606 OID 16758)
-- Name: inv_tipos inv_tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos
    ADD CONSTRAINT inv_tipos_pkey PRIMARY KEY (id_inv_tipo);


--
-- TOC entry 3158 (class 2606 OID 16760)
-- Name: investigadores investigadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_pkey PRIMARY KEY (id_investigador);


--
-- TOC entry 3160 (class 2606 OID 16762)
-- Name: lugar_desarrollos lugar_desarrollos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_pkey PRIMARY KEY (id_lugar_desarrollo);


--
-- TOC entry 3162 (class 2606 OID 16764)
-- Name: nota_archivos nota_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_pkey PRIMARY KEY (id_nota_archivo);


--
-- TOC entry 3164 (class 2606 OID 16766)
-- Name: nota_prensas nota_prensas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_pkey PRIMARY KEY (id_nota_prensa);


--
-- TOC entry 3166 (class 2606 OID 16768)
-- Name: permiso_archivos permiso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_pkey PRIMARY KEY (id_permiso_archivo);


--
-- TOC entry 3168 (class 2606 OID 16770)
-- Name: personas persona_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_correo_key UNIQUE (correo);


--
-- TOC entry 3170 (class 2606 OID 16772)
-- Name: personas persona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_pkey PRIMARY KEY (id_persona);


--
-- TOC entry 3172 (class 2606 OID 16774)
-- Name: personas persona_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_telefono_key UNIQUE (telefono);


--
-- TOC entry 3174 (class 2606 OID 16776)
-- Name: proy_archivos proy_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_pkey PRIMARY KEY (id_proy_archivo);


--
-- TOC entry 3176 (class 2606 OID 16778)
-- Name: proyectos proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id_proyecto);


--
-- TOC entry 3178 (class 2606 OID 16780)
-- Name: publi_archivos publi_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_pkey PRIMARY KEY (id_publi_archivo);


--
-- TOC entry 3180 (class 2606 OID 16782)
-- Name: publicaciones publicaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_pkey PRIMARY KEY (id_publicacion);


--
-- TOC entry 3182 (class 2606 OID 16784)
-- Name: tipos tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id_tipo);


--
-- TOC entry 3184 (class 2606 OID 16786)
-- Name: unidades unidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_pkey PRIMARY KEY (id_unidad);


--
-- TOC entry 3185 (class 2606 OID 16787)
-- Name: adm_usuarios adm_usuario_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3186 (class 2606 OID 16792)
-- Name: adm_usuario_roles adm_usuario_roles_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.adm_roles(id_rol);


--
-- TOC entry 3187 (class 2606 OID 16797)
-- Name: adm_usuario_roles adm_usuario_roles_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.adm_usuarios(id_usuario);


--
-- TOC entry 3188 (class 2606 OID 16802)
-- Name: autores autores_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3189 (class 2606 OID 16807)
-- Name: autores autores_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3190 (class 2606 OID 16812)
-- Name: basica_tecnicas basica_tecnicas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3191 (class 2606 OID 16817)
-- Name: comentarios comentarios_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3192 (class 2606 OID 16822)
-- Name: comentarios comentarios_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3193 (class 2606 OID 16827)
-- Name: contra_archivos contra_archivos_id_contratado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_contratado_fkey FOREIGN KEY (id_contratado) REFERENCES public.contratados(id_contratado);


--
-- TOC entry 3194 (class 2606 OID 16832)
-- Name: contra_archivos contra_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3195 (class 2606 OID 16837)
-- Name: contratados contratados_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3196 (class 2606 OID 16842)
-- Name: contratados contratados_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3197 (class 2606 OID 16847)
-- Name: conv_archivos conv_archivos_id_convenio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_convenio_fkey FOREIGN KEY (id_convenio) REFERENCES public.convenios(id_convenio);


--
-- TOC entry 3198 (class 2606 OID 16852)
-- Name: conv_archivos conv_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3199 (class 2606 OID 16857)
-- Name: convenios convenios_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3200 (class 2606 OID 16862)
-- Name: convenios convenios_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3201 (class 2606 OID 16867)
-- Name: curso_archivos curso_archivos_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3202 (class 2606 OID 16872)
-- Name: curso_archivos curso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3203 (class 2606 OID 16877)
-- Name: cursos cursos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3204 (class 2606 OID 16882)
-- Name: evento_archivos evento_archivos_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id_evento);


--
-- TOC entry 3205 (class 2606 OID 16887)
-- Name: evento_archivos evento_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3206 (class 2606 OID 16892)
-- Name: eventos eventos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3207 (class 2606 OID 16897)
-- Name: expo_archivos expo_archivos_id_exposicion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_exposicion_fkey FOREIGN KEY (id_exposicion) REFERENCES public.exposiciones(id_exposicion);


--
-- TOC entry 3208 (class 2606 OID 16902)
-- Name: expo_archivos expo_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3209 (class 2606 OID 16907)
-- Name: exposiciones exposiciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3210 (class 2606 OID 16912)
-- Name: expositores expositores_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3211 (class 2606 OID 16917)
-- Name: inv_proyectos inv_proyectos_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3212 (class 2606 OID 16922)
-- Name: inv_proyectos inv_proyectos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3213 (class 2606 OID 16927)
-- Name: investigadores investigadores_id_inv_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_inv_tipo_fkey FOREIGN KEY (id_inv_tipo) REFERENCES public.inv_tipos(id_inv_tipo);


--
-- TOC entry 3214 (class 2606 OID 16932)
-- Name: investigadores investigadores_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3215 (class 2606 OID 16937)
-- Name: lugar_desarrollos lugar_desarrollos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3216 (class 2606 OID 16942)
-- Name: nota_archivos nota_archivos_id_nota_prensa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_nota_prensa_fkey FOREIGN KEY (id_nota_prensa) REFERENCES public.nota_prensas(id_nota_prensa);


--
-- TOC entry 3217 (class 2606 OID 16947)
-- Name: nota_archivos nota_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3218 (class 2606 OID 16952)
-- Name: nota_prensas nota_prensas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3219 (class 2606 OID 16957)
-- Name: permiso_archivos permiso_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3220 (class 2606 OID 16962)
-- Name: permiso_archivos permiso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3221 (class 2606 OID 16967)
-- Name: personas persona_id_fotografia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_id_fotografia_fkey FOREIGN KEY (id_fotografia) REFERENCES public.fotografias(id_fotografia);


--
-- TOC entry 3222 (class 2606 OID 16972)
-- Name: proy_archivos proy_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3223 (class 2606 OID 16977)
-- Name: proy_archivos proy_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3224 (class 2606 OID 16982)
-- Name: proyectos proyectos_id_adm_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_adm_rol_fkey FOREIGN KEY (id_adm) REFERENCES public.adm_usuario_roles(id_adm_usuario_rol);


--
-- TOC entry 3225 (class 2606 OID 16987)
-- Name: proyectos proyectos_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3226 (class 2606 OID 16992)
-- Name: publi_archivos publi_archivos_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3227 (class 2606 OID 16997)
-- Name: publi_archivos publi_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3228 (class 2606 OID 17002)
-- Name: publicaciones publicaciones_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3229 (class 2606 OID 17007)
-- Name: publicaciones publicaciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3230 (class 2606 OID 17012)
-- Name: unidades unidades_id_basica_tecnica_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_id_basica_tecnica_fkey FOREIGN KEY (id_basica_tecnica) REFERENCES public.basica_tecnicas(id_basica_tecnica);


-- Completed on 2020-09-22 14:12:10 -04

--
-- PostgreSQL database dump complete
--

