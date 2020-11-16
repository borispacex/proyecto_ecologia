--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.2

-- Started on 2020-10-23 09:01:30 -04

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
-- TOC entry 202 (class 1259 OID 18318)
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
-- TOC entry 203 (class 1259 OID 18324)
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
-- TOC entry 3492 (class 0 OID 0)
-- Dependencies: 203
-- Name: adm_rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_rol_id_rol_seq OWNED BY public.adm_roles.id_rol;


--
-- TOC entry 204 (class 1259 OID 18326)
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
-- TOC entry 205 (class 1259 OID 18332)
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
-- TOC entry 3493 (class 0 OID 0)
-- Dependencies: 205
-- Name: adm_usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_id_usuario_seq OWNED BY public.adm_usuarios.id_usuario;


--
-- TOC entry 206 (class 1259 OID 18334)
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
-- TOC entry 207 (class 1259 OID 18340)
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
-- TOC entry 3494 (class 0 OID 0)
-- Dependencies: 207
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_roles_id_adm_usuario_rol_seq OWNED BY public.adm_usuario_roles.id_adm_usuario_rol;


--
-- TOC entry 208 (class 1259 OID 18342)
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
-- TOC entry 209 (class 1259 OID 18348)
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
-- TOC entry 3495 (class 0 OID 0)
-- Dependencies: 209
-- Name: autores_id_autor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.autores_id_autor_seq OWNED BY public.autores.id_autor;


--
-- TOC entry 210 (class 1259 OID 18358)
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
-- TOC entry 211 (class 1259 OID 18364)
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
-- TOC entry 3496 (class 0 OID 0)
-- Dependencies: 211
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_id_comentario_seq OWNED BY public.comentarios.id_comentario;


--
-- TOC entry 212 (class 1259 OID 18366)
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
-- TOC entry 213 (class 1259 OID 18372)
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
-- TOC entry 3497 (class 0 OID 0)
-- Dependencies: 213
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contra_archivos_id_contra_archivo_seq OWNED BY public.contra_archivos.id_contra_archivo;


--
-- TOC entry 214 (class 1259 OID 18374)
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
-- TOC entry 215 (class 1259 OID 18384)
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
-- TOC entry 3498 (class 0 OID 0)
-- Dependencies: 215
-- Name: contratados_id_contratado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contratados_id_contratado_seq OWNED BY public.contratados.id_contratado;


--
-- TOC entry 216 (class 1259 OID 18386)
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
-- TOC entry 217 (class 1259 OID 18392)
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
-- TOC entry 3499 (class 0 OID 0)
-- Dependencies: 217
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conv_archivos_id_conv_archivo_seq OWNED BY public.conv_archivos.id_conv_archivo;


--
-- TOC entry 218 (class 1259 OID 18394)
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
-- TOC entry 219 (class 1259 OID 18404)
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
-- TOC entry 3500 (class 0 OID 0)
-- Dependencies: 219
-- Name: convenios_id_convenio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.convenios_id_convenio_seq OWNED BY public.convenios.id_convenio;


--
-- TOC entry 220 (class 1259 OID 18406)
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
-- TOC entry 221 (class 1259 OID 18412)
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
-- TOC entry 3501 (class 0 OID 0)
-- Dependencies: 221
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.curso_archivos_id_curso_archivo_seq OWNED BY public.curso_archivos.id_curso_archivo;


--
-- TOC entry 222 (class 1259 OID 18414)
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
-- TOC entry 223 (class 1259 OID 18424)
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
-- TOC entry 3502 (class 0 OID 0)
-- Dependencies: 223
-- Name: cursos_id_curso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cursos_id_curso_seq OWNED BY public.cursos.id_curso;


--
-- TOC entry 224 (class 1259 OID 18426)
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
-- TOC entry 225 (class 1259 OID 18432)
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
-- TOC entry 3503 (class 0 OID 0)
-- Dependencies: 225
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_archivos_id_evento_archivos_seq OWNED BY public.evento_archivos.id_evento_archivo;


--
-- TOC entry 226 (class 1259 OID 18434)
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
-- TOC entry 227 (class 1259 OID 18444)
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
-- TOC entry 3504 (class 0 OID 0)
-- Dependencies: 227
-- Name: eventos_id_evento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eventos_id_evento_seq OWNED BY public.eventos.id_evento;


--
-- TOC entry 228 (class 1259 OID 18446)
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
-- TOC entry 229 (class 1259 OID 18452)
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
-- TOC entry 3505 (class 0 OID 0)
-- Dependencies: 229
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expo_archivos_id_expo_archivo_seq OWNED BY public.expo_archivos.id_expo_archivo;


--
-- TOC entry 230 (class 1259 OID 18454)
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
-- TOC entry 231 (class 1259 OID 18464)
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
-- TOC entry 3506 (class 0 OID 0)
-- Dependencies: 231
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exposiciones_id_exposicion_seq OWNED BY public.exposiciones.id_exposicion;


--
-- TOC entry 232 (class 1259 OID 18466)
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
-- TOC entry 233 (class 1259 OID 18472)
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
-- TOC entry 3507 (class 0 OID 0)
-- Dependencies: 233
-- Name: expositores_id_expositor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expositores_id_expositor_seq OWNED BY public.expositores.id_expositor;


--
-- TOC entry 273 (class 1259 OID 19060)
-- Name: financiamientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.financiamientos (
    id_financiamiento integer NOT NULL,
    id_proyecto integer NOT NULL,
    fuente character varying(200),
    aporte integer,
    observacion character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.financiamientos OWNER TO postgres;

--
-- TOC entry 272 (class 1259 OID 19058)
-- Name: financiamientos_id_financiamiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.financiamientos_id_financiamiento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.financiamientos_id_financiamiento_seq OWNER TO postgres;

--
-- TOC entry 3508 (class 0 OID 0)
-- Dependencies: 272
-- Name: financiamientos_id_financiamiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.financiamientos_id_financiamiento_seq OWNED BY public.financiamientos.id_financiamiento;


--
-- TOC entry 234 (class 1259 OID 18474)
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
-- TOC entry 235 (class 1259 OID 18484)
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
-- TOC entry 3509 (class 0 OID 0)
-- Dependencies: 235
-- Name: fotografia_id_fotografia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fotografia_id_fotografia_seq OWNED BY public.fotografias.id_fotografia;


--
-- TOC entry 236 (class 1259 OID 18486)
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
-- TOC entry 237 (class 1259 OID 18492)
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
-- TOC entry 3510 (class 0 OID 0)
-- Dependencies: 237
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_proyectos_id_inv_proyecto_seq OWNED BY public.inv_proyectos.id_inv_proyecto;


--
-- TOC entry 238 (class 1259 OID 18494)
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
-- TOC entry 239 (class 1259 OID 18500)
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
-- TOC entry 3511 (class 0 OID 0)
-- Dependencies: 239
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_tipos_id_inv_tipo_seq OWNED BY public.inv_tipos.id_inv_tipo;


--
-- TOC entry 240 (class 1259 OID 18502)
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
-- TOC entry 241 (class 1259 OID 18508)
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
-- TOC entry 3512 (class 0 OID 0)
-- Dependencies: 241
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.investigadores_id_investigador_seq OWNED BY public.investigadores.id_investigador;


--
-- TOC entry 242 (class 1259 OID 18510)
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
-- TOC entry 243 (class 1259 OID 18516)
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
-- TOC entry 3513 (class 0 OID 0)
-- Dependencies: 243
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lugar_desarrollos_id_lugar_desarrollo_seq OWNED BY public.lugar_desarrollos.id_lugar_desarrollo;


--
-- TOC entry 244 (class 1259 OID 18518)
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
-- TOC entry 245 (class 1259 OID 18524)
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
-- TOC entry 3514 (class 0 OID 0)
-- Dependencies: 245
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_archivos_id_nota_archivo_seq OWNED BY public.nota_archivos.id_nota_archivo;


--
-- TOC entry 246 (class 1259 OID 18526)
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
-- TOC entry 247 (class 1259 OID 18535)
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
-- TOC entry 3515 (class 0 OID 0)
-- Dependencies: 247
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_prensas_id_nota_prensa_seq OWNED BY public.nota_prensas.id_nota_prensa;


--
-- TOC entry 248 (class 1259 OID 18537)
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
-- TOC entry 249 (class 1259 OID 18543)
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
-- TOC entry 3516 (class 0 OID 0)
-- Dependencies: 249
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permiso_archivos_id_permiso_archivo_seq OWNED BY public.permiso_archivos.id_permiso_archivo;


--
-- TOC entry 250 (class 1259 OID 18545)
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
-- TOC entry 251 (class 1259 OID 18557)
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
-- TOC entry 3517 (class 0 OID 0)
-- Dependencies: 251
-- Name: persona_id_persona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.persona_id_persona_seq OWNED BY public.personas.id_persona;


--
-- TOC entry 252 (class 1259 OID 18559)
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
-- TOC entry 253 (class 1259 OID 18565)
-- Name: peti_archivo_id_peti_archivo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.peti_archivo_id_peti_archivo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.peti_archivo_id_peti_archivo_seq OWNER TO postgres;

--
-- TOC entry 3518 (class 0 OID 0)
-- Dependencies: 253
-- Name: peti_archivo_id_peti_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peti_archivo_id_peti_archivo_seq OWNED BY public.peti_archivos.id_peti_archivo;


--
-- TOC entry 254 (class 1259 OID 18567)
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
-- TOC entry 255 (class 1259 OID 18576)
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
-- TOC entry 3519 (class 0 OID 0)
-- Dependencies: 255
-- Name: peticiones_id_peticion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peticiones_id_peticion_seq OWNED BY public.peticiones.id_peticion;


--
-- TOC entry 256 (class 1259 OID 18578)
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
-- TOC entry 257 (class 1259 OID 18584)
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
-- TOC entry 3520 (class 0 OID 0)
-- Dependencies: 257
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proy_archivos_id_proy_archivo_seq OWNED BY public.proy_archivos.id_proy_archivo;


--
-- TOC entry 258 (class 1259 OID 18586)
-- Name: proyectos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proyectos (
    id_proyecto integer NOT NULL,
    id_adm integer NOT NULL,
    id_coordinador integer NOT NULL,
    titulo character varying(2000),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    estado character varying(20) DEFAULT 'activo'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    proceso integer DEFAULT 0,
    carrera character varying(100),
    n_instituto character varying(200),
    tipo character varying(100),
    area character varying(100),
    tipo_p character varying(100),
    carga_h integer,
    moneda character varying(10),
    financiamiento integer
);


ALTER TABLE public.proyectos OWNER TO postgres;

--
-- TOC entry 259 (class 1259 OID 18594)
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
-- TOC entry 3521 (class 0 OID 0)
-- Dependencies: 259
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proyectos_id_proyecto_seq OWNED BY public.proyectos.id_proyecto;


--
-- TOC entry 260 (class 1259 OID 18596)
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
-- TOC entry 261 (class 1259 OID 18602)
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
-- TOC entry 3522 (class 0 OID 0)
-- Dependencies: 261
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publi_archivos_id_publi_archivo_seq OWNED BY public.publi_archivos.id_publi_archivo;


--
-- TOC entry 262 (class 1259 OID 18604)
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
-- TOC entry 263 (class 1259 OID 18614)
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
-- TOC entry 3523 (class 0 OID 0)
-- Dependencies: 263
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publicaciones_id_publicacion_seq OWNED BY public.publicaciones.id_publicacion;


--
-- TOC entry 264 (class 1259 OID 18616)
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
-- TOC entry 265 (class 1259 OID 18622)
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
-- TOC entry 3524 (class 0 OID 0)
-- Dependencies: 265
-- Name: segui_archivos_id_segui_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.segui_archivos_id_segui_archivo_seq OWNED BY public.segui_archivos.id_segui_archivo;


--
-- TOC entry 266 (class 1259 OID 18624)
-- Name: seguimientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seguimientos (
    id_seguimiento integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_director integer NOT NULL,
    tipo character varying(50),
    revision character varying(1000),
    observaciones character varying(1000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    proceso integer
);


ALTER TABLE public.seguimientos OWNER TO postgres;

--
-- TOC entry 267 (class 1259 OID 18633)
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
-- TOC entry 3525 (class 0 OID 0)
-- Dependencies: 267
-- Name: seguimientos_id_seguimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seguimientos_id_seguimiento_seq OWNED BY public.seguimientos.id_seguimiento;


--
-- TOC entry 268 (class 1259 OID 18635)
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
-- TOC entry 269 (class 1259 OID 18641)
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
-- TOC entry 3526 (class 0 OID 0)
-- Dependencies: 269
-- Name: tipos_id_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipos_id_tipo_seq OWNED BY public.tipos.id_tipo;


--
-- TOC entry 271 (class 1259 OID 19044)
-- Name: unidades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidades (
    id_unidad integer NOT NULL,
    id_proyecto integer NOT NULL,
    nombre character varying(100),
    observacion character varying(255),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.unidades OWNER TO postgres;

--
-- TOC entry 270 (class 1259 OID 19042)
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
-- TOC entry 3527 (class 0 OID 0)
-- Dependencies: 270
-- Name: unidades_id_unidad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unidades_id_unidad_seq OWNED BY public.unidades.id_unidad;


--
-- TOC entry 3002 (class 2604 OID 18651)
-- Name: adm_roles id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles ALTER COLUMN id_rol SET DEFAULT nextval('public.adm_rol_id_rol_seq'::regclass);


--
-- TOC entry 3010 (class 2604 OID 18652)
-- Name: adm_usuario_roles id_adm_usuario_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles ALTER COLUMN id_adm_usuario_rol SET DEFAULT nextval('public.adm_usuario_roles_id_adm_usuario_rol_seq'::regclass);


--
-- TOC entry 3006 (class 2604 OID 18653)
-- Name: adm_usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.adm_usuario_id_usuario_seq'::regclass);


--
-- TOC entry 3014 (class 2604 OID 18654)
-- Name: autores id_autor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores ALTER COLUMN id_autor SET DEFAULT nextval('public.autores_id_autor_seq'::regclass);


--
-- TOC entry 3018 (class 2604 OID 18656)
-- Name: comentarios id_comentario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id_comentario SET DEFAULT nextval('public.comentarios_id_comentario_seq'::regclass);


--
-- TOC entry 3022 (class 2604 OID 18657)
-- Name: contra_archivos id_contra_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos ALTER COLUMN id_contra_archivo SET DEFAULT nextval('public.contra_archivos_id_contra_archivo_seq'::regclass);


--
-- TOC entry 3027 (class 2604 OID 18658)
-- Name: contratados id_contratado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados ALTER COLUMN id_contratado SET DEFAULT nextval('public.contratados_id_contratado_seq'::regclass);


--
-- TOC entry 3031 (class 2604 OID 18659)
-- Name: conv_archivos id_conv_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos ALTER COLUMN id_conv_archivo SET DEFAULT nextval('public.conv_archivos_id_conv_archivo_seq'::regclass);


--
-- TOC entry 3036 (class 2604 OID 18660)
-- Name: convenios id_convenio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios ALTER COLUMN id_convenio SET DEFAULT nextval('public.convenios_id_convenio_seq'::regclass);


--
-- TOC entry 3040 (class 2604 OID 18661)
-- Name: curso_archivos id_curso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos ALTER COLUMN id_curso_archivo SET DEFAULT nextval('public.curso_archivos_id_curso_archivo_seq'::regclass);


--
-- TOC entry 3045 (class 2604 OID 18662)
-- Name: cursos id_curso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos ALTER COLUMN id_curso SET DEFAULT nextval('public.cursos_id_curso_seq'::regclass);


--
-- TOC entry 3049 (class 2604 OID 18663)
-- Name: evento_archivos id_evento_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos ALTER COLUMN id_evento_archivo SET DEFAULT nextval('public.evento_archivos_id_evento_archivos_seq'::regclass);


--
-- TOC entry 3054 (class 2604 OID 18664)
-- Name: eventos id_evento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos ALTER COLUMN id_evento SET DEFAULT nextval('public.eventos_id_evento_seq'::regclass);


--
-- TOC entry 3058 (class 2604 OID 18665)
-- Name: expo_archivos id_expo_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos ALTER COLUMN id_expo_archivo SET DEFAULT nextval('public.expo_archivos_id_expo_archivo_seq'::regclass);


--
-- TOC entry 3063 (class 2604 OID 18666)
-- Name: exposiciones id_exposicion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones ALTER COLUMN id_exposicion SET DEFAULT nextval('public.exposiciones_id_exposicion_seq'::regclass);


--
-- TOC entry 3067 (class 2604 OID 18667)
-- Name: expositores id_expositor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores ALTER COLUMN id_expositor SET DEFAULT nextval('public.expositores_id_expositor_seq'::regclass);


--
-- TOC entry 3151 (class 2604 OID 19063)
-- Name: financiamientos id_financiamiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.financiamientos ALTER COLUMN id_financiamiento SET DEFAULT nextval('public.financiamientos_id_financiamiento_seq'::regclass);


--
-- TOC entry 3072 (class 2604 OID 18668)
-- Name: fotografias id_fotografia; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias ALTER COLUMN id_fotografia SET DEFAULT nextval('public.fotografia_id_fotografia_seq'::regclass);


--
-- TOC entry 3076 (class 2604 OID 18669)
-- Name: inv_proyectos id_inv_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos ALTER COLUMN id_inv_proyecto SET DEFAULT nextval('public.inv_proyectos_id_inv_proyecto_seq'::regclass);


--
-- TOC entry 3080 (class 2604 OID 18670)
-- Name: inv_tipos id_inv_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos ALTER COLUMN id_inv_tipo SET DEFAULT nextval('public.inv_tipos_id_inv_tipo_seq'::regclass);


--
-- TOC entry 3084 (class 2604 OID 18671)
-- Name: investigadores id_investigador; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores ALTER COLUMN id_investigador SET DEFAULT nextval('public.investigadores_id_investigador_seq'::regclass);


--
-- TOC entry 3088 (class 2604 OID 18672)
-- Name: lugar_desarrollos id_lugar_desarrollo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos ALTER COLUMN id_lugar_desarrollo SET DEFAULT nextval('public.lugar_desarrollos_id_lugar_desarrollo_seq'::regclass);


--
-- TOC entry 3092 (class 2604 OID 18673)
-- Name: nota_archivos id_nota_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos ALTER COLUMN id_nota_archivo SET DEFAULT nextval('public.nota_archivos_id_nota_archivo_seq'::regclass);


--
-- TOC entry 3096 (class 2604 OID 18674)
-- Name: nota_prensas id_nota_prensa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas ALTER COLUMN id_nota_prensa SET DEFAULT nextval('public.nota_prensas_id_nota_prensa_seq'::regclass);


--
-- TOC entry 3100 (class 2604 OID 18675)
-- Name: permiso_archivos id_permiso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos ALTER COLUMN id_permiso_archivo SET DEFAULT nextval('public.permiso_archivos_id_permiso_archivo_seq'::regclass);


--
-- TOC entry 3107 (class 2604 OID 18676)
-- Name: personas id_persona; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas ALTER COLUMN id_persona SET DEFAULT nextval('public.persona_id_persona_seq'::regclass);


--
-- TOC entry 3111 (class 2604 OID 18677)
-- Name: peti_archivos id_peti_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos ALTER COLUMN id_peti_archivo SET DEFAULT nextval('public.peti_archivo_id_peti_archivo_seq'::regclass);


--
-- TOC entry 3115 (class 2604 OID 18678)
-- Name: peticiones id_peticion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones ALTER COLUMN id_peticion SET DEFAULT nextval('public.peticiones_id_peticion_seq'::regclass);


--
-- TOC entry 3119 (class 2604 OID 18679)
-- Name: proy_archivos id_proy_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos ALTER COLUMN id_proy_archivo SET DEFAULT nextval('public.proy_archivos_id_proy_archivo_seq'::regclass);


--
-- TOC entry 3125 (class 2604 OID 18680)
-- Name: proyectos id_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos ALTER COLUMN id_proyecto SET DEFAULT nextval('public.proyectos_id_proyecto_seq'::regclass);


--
-- TOC entry 3129 (class 2604 OID 18681)
-- Name: publi_archivos id_publi_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos ALTER COLUMN id_publi_archivo SET DEFAULT nextval('public.publi_archivos_id_publi_archivo_seq'::regclass);


--
-- TOC entry 3134 (class 2604 OID 18682)
-- Name: publicaciones id_publicacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones ALTER COLUMN id_publicacion SET DEFAULT nextval('public.publicaciones_id_publicacion_seq'::regclass);


--
-- TOC entry 3138 (class 2604 OID 18683)
-- Name: segui_archivos id_segui_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos ALTER COLUMN id_segui_archivo SET DEFAULT nextval('public.segui_archivos_id_segui_archivo_seq'::regclass);


--
-- TOC entry 3142 (class 2604 OID 18684)
-- Name: seguimientos id_seguimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos ALTER COLUMN id_seguimiento SET DEFAULT nextval('public.seguimientos_id_seguimiento_seq'::regclass);


--
-- TOC entry 3146 (class 2604 OID 18685)
-- Name: tipos id_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos ALTER COLUMN id_tipo SET DEFAULT nextval('public.tipos_id_tipo_seq'::regclass);


--
-- TOC entry 3147 (class 2604 OID 19047)
-- Name: unidades id_unidad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades ALTER COLUMN id_unidad SET DEFAULT nextval('public.unidades_id_unidad_seq'::regclass);


--
-- TOC entry 3415 (class 0 OID 18318)
-- Dependencies: 202
-- Data for Name: adm_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_roles (id_rol, rol, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Administrador	Administrador del sistema	t	2019-09-09 05:04:46.766357+00	2019-09-09 05:04:46.766357+00
2	Director	Director del instituto de Ecologia	t	2019-09-09 05:04:59.237731+00	2019-09-09 05:04:59.237731+00
3	Investigador	Investigador del Instituto de Ecologia	t	2019-09-09 05:05:09.888365+00	2019-09-09 05:05:09.888365+00
\.


--
-- TOC entry 3419 (class 0 OID 18334)
-- Dependencies: 206
-- Data for Name: adm_usuario_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuario_roles (id_adm_usuario_rol, id_usuario, id_rol, estado, "createdAt", "updatedAt") FROM stdin;
2	2	2	t	2019-09-09 17:27:12.909651+00	2019-10-02 17:44:29.867+00
4	2	3	t	2019-09-09 20:26:16.862347+00	2019-10-02 17:44:29.873+00
1	1	1	t	2019-09-09 17:27:10.3653+00	2019-09-09 17:27:10.3653+00
67	28	3	t	2019-10-02 14:14:06.978+00	2019-10-02 17:47:24.651+00
3	3	3	t	2019-09-09 17:27:15.474194+00	2019-09-09 17:27:15.474194+00
68	29	1	f	2019-10-02 17:49:13.087+00	2020-09-23 12:57:45.892+00
70	29	3	t	2019-10-02 17:49:26.016+00	2020-09-29 14:43:34.895+00
66	28	2	f	2019-10-02 14:13:04.434+00	2020-10-20 13:48:04.516+00
69	29	2	f	2019-10-02 17:49:19.21+00	2020-10-20 13:48:20.699+00
\.


--
-- TOC entry 3417 (class 0 OID 18326)
-- Dependencies: 204
-- Data for Name: adm_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuarios (id_usuario, id_persona, usuario, password, recordatorio, estado, "createdAt", "updatedAt", "resetPasswordToken", "resetPasswordExpires") FROM stdin;
28	32	001	$2b$10$PYyaLJqhHpr9e/sv7IVCLeHNry10B1N311iKlfZQ3/z9FqIfCRYPa	\N	t	2019-10-02 14:13:04.351+00	2019-10-02 14:13:04.351+00	\N	\N
29	33	002	$2b$10$TKO70f4qiua6/ilzQ0FGM.Y4gg58eAE9nTgJiJleBqJ2gZjJJtx5S	\N	t	2019-10-02 17:49:12.999+00	2019-10-02 17:49:12.999+00	\N	\N
1	1	admin	$2b$10$WjuICcMcKpWFduvTSwR3suHdQaDQ2GqN2Au.dzr77gQJ/ifcqMSWa	perrito	t	2019-09-09 09:27:19.174+00	2020-10-09 14:23:33.353+00	cc7e715bf5078bd2555ae5b2a89c1b93e110d46d	16:08:16.855+00
2	2	director	$2b$10$v8BC7oNi8We0OGBUe7CvNenP4RqL.nJyHX1AuuR7Y0UpRBaG42956	ecologia	t	2019-09-09 09:28:06.945+00	2020-10-09 14:24:20.479+00	\N	\N
3	3	investigador	$2b$10$YKL33OumAxsDe10hxXqL.O9jZMfCQNeegqWbGOjxSZiesIM9CRqPS	ecologia	t	2019-09-09 09:28:28.757+00	2020-10-09 14:24:37.614+00	\N	\N
\.


--
-- TOC entry 3421 (class 0 OID 18342)
-- Dependencies: 208
-- Data for Name: autores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.autores (id_autor, id_investigador, id_publicacion, estado, "createdAt", "updatedAt") FROM stdin;
1	1	1	t	2020-06-26 07:15:02.369+00	2020-06-26 07:15:02.369+00
2	12	1	t	2020-06-26 07:15:02.371+00	2020-06-26 07:15:02.371+00
3	1	2	t	2020-10-04 04:15:26.508+00	2020-10-04 04:15:26.508+00
4	12	2	t	2020-10-04 04:15:26.51+00	2020-10-04 04:15:26.51+00
\.


--
-- TOC entry 3423 (class 0 OID 18358)
-- Dependencies: 210
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (id_comentario, id_persona, id_publicacion, comentario, estado, "createdAt", "updatedAt") FROM stdin;
1	2	1	Hola, su publicacion fue exitoso. \nSaludos.\nMoraes	t	2020-07-15 01:56:29.797+00	2020-07-15 01:56:29.797+00
\.


--
-- TOC entry 3425 (class 0 OID 18366)
-- Dependencies: 212
-- Data for Name: contra_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contra_archivos (id_contra_archivo, id_contratado, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
2	4	UjroFMc589ruK0GSXBhitRtF.pdf	Whatever, Wherever,...	descri personal2	9	t	2020-02-26 02:37:44.25+00	2020-02-26 02:37:44.266+00
1	3	SnOzTq66vSBEvJRfeqlhx3Xh.pdf	tuna plant10	descri1 tuna1 personal rrhh	9	t	2020-02-26 02:27:01.707+00	2020-05-06 04:02:50.104+00
3	5	OzcD4h0t1O9FVfIm2Kn1K05i.pdf	diploma-scrum	desc 1r	9	t	2020-06-27 16:39:45.73+00	2020-06-27 16:39:45.77+00
4	5	n2FgXh869-6bMCAI4qYqSMPR.pdf	diploma-redes1	desc 2 r	9	t	2020-06-27 16:39:45.733+00	2020-06-27 17:30:14.97+00
6	6	AnWheU8Z6573NwW8h24fn0HN.pdf	diploma-ingenieria	desc2	9	t	2020-08-02 00:17:05.625+00	2020-08-02 00:17:05.673+00
5	6	QxqlhYSG0xH3xiKXR_xVmvtE.pdf	diploma-ingles-10	desc1	9	t	2020-08-02 00:17:05.623+00	2020-09-29 15:57:15.343+00
7	5	LQDS3-AjjaGX1Yu262CFwcIZ.pdf	diploma-zoom	descripcion zoom	9	t	2020-09-30 00:53:32.148+00	2020-09-30 00:53:32.247+00
8	7	7VHzBr2CSwjiVN3jOGbiCviZ.pdf	diploma-ingles-2	descripcion	9	t	2020-10-04 03:24:38.566+00	2020-10-04 03:24:38.589+00
\.


--
-- TOC entry 3427 (class 0 OID 18374)
-- Dependencies: 214
-- Data for Name: contratados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contratados (id_contratado, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, nombrecompleto, ci, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
4	1	K0USyRIRPuF5qeB9L83v-nAB.pdf	Contrado de personal RRHH	Contrado de personal RRHH	9	04	Boris Lopez Perez	123456	2020-02-01 04:00:00+00	2020-02-02 04:00:00+00	Descripcion Personal 2	t	2020-02-26 02:37:44.188+00	2020-05-06 20:46:59.303+00
3	1	DiVAk2SrNZovYXfHImgatUZ6.pdf	Contrado de personal RRHH10	Contrado de personal RRHH	9	04	Boris Vargas Juanez11	9884972	2020-02-06 04:00:00+00	2020-02-14 04:00:00+00	Areglar computadoras y verificar servidor	t	2020-02-26 02:27:01.621+00	2020-05-06 21:03:58.136+00
6	51	p184d57Krc8srK3i5cr1uAWP.pdf	Contrado de Juanita Devil	descripcion del documento: Descripcion 100	9	01	Juanita Davila	10101010	2020-01-01 04:00:00+00	2020-08-31 04:00:00+00	Descripcion 100	t	2020-08-02 00:17:05.549+00	2020-09-29 15:57:00.968+00
5	52	XsVrWA305VEKyKXKCJCjtTUP.pdf	Contrado de Juan Carlos Torrez	descripcion del documento: desc inv soc	9	01	Juan Carlos Torrez	99991111	2020-06-27 04:00:00+00	2020-06-30 04:00:00+00	desc inv soc1	t	2020-06-27 16:39:45.625+00	2020-09-30 01:31:35.192+00
7	58	yQ1KM9qg2OOCPcoMnMpgGLQ_.pdf	Contrado de Horacio Flores	descripcion del documento: descripcion contratado	9	04	Horacio Flores	123456 LP	2020-10-03 04:00:00+00	2020-10-31 04:00:00+00	descripcion contratado	t	2020-10-04 03:24:38.497+00	2020-10-04 03:24:38.55+00
\.


--
-- TOC entry 3429 (class 0 OID 18386)
-- Dependencies: 216
-- Data for Name: conv_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conv_archivos (id_conv_archivo, id_convenio, archivo, nombre, descripcion, id_tipo, tipo, estado, "createdAt", "updatedAt") FROM stdin;
3	3	w4kee-xw6EPbqOiF2PKM9iS8.pdf	tuna plant1	descr1 arcivo	8	\N	t	2020-02-26 02:23:42.479+00	2020-05-06 04:02:04.374+00
2	2	Be_pr1faSdvoPBQDdlxoqQKt.pdf	Whatever, Wherever,...1	descr what1	8	\N	t	2020-02-25 23:32:21.97+00	2020-05-06 04:02:25.804+00
4	4	cVqc47mNYYBMRkz_zvjHBXBW.pdf	Practica7	desc prac7 	8	\N	t	2020-05-06 17:20:17.416+00	2020-05-06 17:20:17.449+00
5	5	jV3D_Eax-Xl6oPrbexxfDA6X.pdf	diploma-ingles-2	desci2	8	\N	t	2020-06-27 16:32:09.173+00	2020-06-27 16:32:09.205+00
6	5	DhsBqiFttCoN0qMD6Jb9G528.pdf	diploma-ingles-10	desci1	8	\N	t	2020-06-27 16:32:09.174+00	2020-06-27 17:28:28.775+00
7	6	ebv9R12pK70vvgKEKtnjTjCF.pdf	diploma-fundamentos-arduino	descri1	8	\N	t	2020-08-02 00:10:49.39+00	2020-08-02 00:10:49.448+00
8	6	cgRx9AHwF4RUW1TeiSDSw_1R.pdf	diploma-escritura-ingless	descri2	8	\N	t	2020-08-02 00:10:49.392+00	2020-09-27 01:05:08.996+00
9	5	xEbKB3-rCQ8_RCSoTJL7w5OV.pdf	diploma-bd	desc bd	8	\N	t	2020-09-30 01:33:16.688+00	2020-09-30 01:33:16.72+00
10	7	RWihxzUnZ3xudvoJAzqpDElY.pdf	diploma-ingenieria	descripcion ingenieria	8	\N	t	2020-10-04 03:18:52.509+00	2020-10-04 03:18:52.532+00
\.


--
-- TOC entry 3431 (class 0 OID 18394)
-- Dependencies: 218
-- Data for Name: convenios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convenios (id_convenio, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, titulo, objetivo, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
3	1	Ird4mK6g-Ac62r_MD5CEwnBe.pdf	Contrado de convenio	Contrado de convenio	8	convenio marco	convenio1	obje1	2020-02-06 04:00:00+00	2020-02-14 04:00:00+00	descri1 convenio	t	2020-02-26 02:23:42.418+00	2020-02-26 02:23:42.457+00
1	1	UIB7Cd-nQjfOqqgYS-yO2ZuI.pdf	Contrado de convenio11	Contrado de convenio	8	convenio marco	convenio1	obje1	2020-02-20 04:00:00+00	2020-02-29 04:00:00+00	descrip1	t	2020-02-25 23:23:37.756+00	2020-05-06 04:01:48.96+00
2	1	D0H9FfWHW3yl4LbzL7f_00H5.pdf	Contrado de convenio	Contrado de convenio	8	convenio marco	convenio11	obje1	2020-02-20 04:00:00+00	2020-02-29 04:00:00+00	descrip1	t	2020-02-25 23:32:21.902+00	2020-02-25 23:32:21.952+00
4	1	QkbDeITD1bshkIxJYgjy1s2z.pdf	Convenio de convenio1000	descripcion de convenio: desc 1000	8	convenio marco	convenio2000	obj 2000	2020-05-07 04:00:00+00	2020-05-31 04:00:00+00	desc 2000	t	2020-05-06 17:20:17.275+00	2020-05-06 20:52:35.72+00
6	51	Fw7suGvEWd3SGHtXn-kiOKjt.pdf	Convenio de convenio 1000	descripcion de convenio: descripcion	8	convenio marco	convenio 1000	objetivo 1000	2020-01-29 04:00:00+00	2020-08-30 04:00:00+00	descripcion	t	2020-08-02 00:10:49.292+00	2020-09-27 00:09:57.284+00
5	52	20iZL9FySJHuYr4nRkfO4fAZ.pdf	Convenio de convenio 1	descripcion de convenio: desc 1	8	convenio marco	convenio 1	objetivo1	2020-06-27 04:00:00+00	2020-06-28 04:00:00+00	desc 1	t	2020-06-27 16:32:09.109+00	2020-09-30 01:27:03.905+00
7	58	05pQJNe1yUriSq0EpCP7o6Dh.pdf	Convenio de CONVENIO 1	descripcion de convenio: descripcion del convenio	8	convenio marco	CONVENIO 1	objetivo 1	2020-10-03 04:00:00+00	2020-10-10 04:00:00+00	descripcion del convenio	t	2020-10-04 03:18:52.435+00	2020-10-04 03:18:52.493+00
\.


--
-- TOC entry 3433 (class 0 OID 18406)
-- Dependencies: 220
-- Data for Name: curso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.curso_archivos (id_curso_archivo, id_curso, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	3	Dl6WiHPezu7i7T9s7M8f9Gxg.pdf	ANDROID NIVEL I	gigi	7	t	2019-12-19 19:29:33.992+00	2019-12-19 19:29:34.058+00
3	5	dQbekaENEf0yHMgTXkCj9mKl.pdf	show	descri show 1	7	t	2020-06-05 22:55:00.9+00	2020-06-05 22:55:01.002+00
4	5	LCAlFNtvE_xG5bA9D6kd3euY.pdf	Invoice_447050377	descri invoice 1	7	t	2020-06-05 22:55:00.905+00	2020-06-05 22:55:01.026+00
5	2	to6GZUV9qbYV2E70H-CX7wLS.pdf	show1000	show titu2	7	t	2020-06-26 05:33:57.424+00	2020-09-29 14:10:57.457+00
6	6	ejL-FFblPrrLVFmJYi3KPHQA.pdf	diploma-ingles-2	descripcion1	10	t	2020-10-04 04:41:45.8+00	2020-10-04 04:41:45.868+00
7	6	GmZ6FUcSxoEvJ7KAOYxgUEQ9.pdf	diploma-ingles-1	descripcion2	10	t	2020-10-04 04:41:45.801+00	2020-10-04 04:41:45.869+00
\.


--
-- TOC entry 3435 (class 0 OID 18414)
-- Dependencies: 222
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cursos (id_curso, id_proyecto, titulo, objetivo, lugar, resumen, asistentes, fechaini, fechafin, horas, estado, "createdAt", "updatedAt") FROM stdin;
3	52	titu1	obj1	La Paz	resumen curso titu1	100	2019-12-04 04:00:00+00	2019-12-12 04:00:00+00	60	t	2019-12-19 19:29:33.96+00	2020-06-26 05:21:03.093+00
2	52	titu2	ob2	La Paz	resumen titu2	100	2019-12-05 04:00:00+00	2019-12-21 04:00:00+00	50	t	2019-12-19 19:26:17.868+00	2020-06-26 05:34:46.381+00
5	52	titulo curso prueba 1	objetivo prueba 1	lugar prueba 1	resumen1 titulo prueba1	100	2020-06-05 04:00:00+00	2020-06-13 04:00:00+00	10	f	2020-06-05 22:55:00.835+00	2020-09-29 15:36:22.898+00
6	58	CURSO 1	objetivo curso	La Paz	resumen	11	2020-10-04 04:00:00+00	2020-10-11 04:00:00+00	10	t	2020-10-04 04:41:45.719+00	2020-10-04 04:41:45.719+00
\.


--
-- TOC entry 3437 (class 0 OID 18426)
-- Dependencies: 224
-- Data for Name: evento_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento_archivos (id_evento_archivo, id_evento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
3	4	Mbjh-ngm_G__rlisiecjr7Vg.pdf	show	bd show titu4	11	t	2020-06-26 05:42:57.078+00	2020-06-26 05:42:57.117+00
1	2	dUyc97YPptOFXPSkS8gaSuN1.pdf	tuna plant prueba1	descri1 prueba1 jajaja	7	t	2020-02-25 20:43:39.813+00	2020-02-25 20:43:39.835+00
4	8	q5aW6WpQ3ewJcyHy2TXHrYY_.pdf	diploma-ingles	descripcion	11	t	2020-10-04 04:42:40.422+00	2020-10-04 04:42:40.449+00
\.


--
-- TOC entry 3439 (class 0 OID 18434)
-- Dependencies: 226
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos (id_evento, id_proyecto, titulo, objetivo, lugar, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
2	52	titu2	obj2	Cochabamba	2019-12-05 04:00:00+00	2019-12-13 04:00:00+00	resumen2	t	2019-12-20 04:13:41.256+00	2020-06-26 05:40:02.503+00
4	52	titu4	obj4	La Paz	2019-12-05 04:00:00+00	2019-12-14 04:00:00+00	jeje	t	2019-12-20 04:18:20.643+00	2020-06-26 05:42:57.059+00
3	52	titu3	obje3	Santa Cruz	2019-12-04 04:00:00+00	2019-12-12 04:00:00+00	resumen3	f	2019-12-20 04:15:15.104+00	2020-09-29 15:36:58.297+00
8	58	EVENTO 1	objetivo evento	La Paz	2020-10-04 04:00:00+00	2020-10-16 04:00:00+00	Resumen	t	2020-10-04 04:42:40.388+00	2020-10-04 04:42:40.388+00
\.


--
-- TOC entry 3441 (class 0 OID 18446)
-- Dependencies: 228
-- Data for Name: expo_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expo_archivos (id_expo_archivo, id_exposicion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	Gy-HYs_zegJGuJwYTICl2pxz.pdf	Whatever, Wherever,...	descripcion1	7	t	2020-02-25 21:38:07.455+00	2020-02-25 21:38:07.472+00
2	2	V8JZSYowsxl5ltHAMFHS6HPg.pdf	tuna plant	jaja1	7	t	2020-02-26 04:23:02.823+00	2020-02-26 04:23:02.861+00
3	2	Qj-a8qI2Yeg8-0IEC_wlo7Q-.pdf	show cambio	show expo2 desc	13	t	2020-06-26 06:01:16.577+00	2020-06-27 15:42:02.513+00
4	3	yPpiBUUEkclQ66qsHDWm0zY9.pdf	diploma-linux	descripcion	13	t	2020-10-04 04:49:07.978+00	2020-10-04 04:49:08.031+00
\.


--
-- TOC entry 3443 (class 0 OID 18454)
-- Dependencies: 230
-- Data for Name: exposiciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exposiciones (id_exposicion, id_proyecto, titulo, tema, objetivo, lugar, asistentes, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
2	52	exposicion2	SObre virus	enseñar	La Paz	100	2020-02-07 04:00:00+00	2020-02-15 04:00:00+00	se hablara acerca de virus, ademas que habra premios	t	2020-02-26 04:23:02.773+00	2020-06-26 06:01:16.557+00
1	52	exposicion1	a	obje1	La Paz	10	2020-02-05 04:00:00+00	2020-02-13 04:00:00+00	resumen11	f	2020-02-25 21:38:07.418+00	2020-09-29 15:37:10.878+00
3	58	EXPOSICION	cuidado del agua	objetivo	La Paz	100	2020-10-04 04:00:00+00	2020-10-16 04:00:00+00	Resumen	t	2020-10-04 04:49:07.949+00	2020-10-04 04:49:07.949+00
\.


--
-- TOC entry 3445 (class 0 OID 18466)
-- Dependencies: 232
-- Data for Name: expositores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expositores (id_expositor, id_curso, nombres, apellidos, estado, "createdAt", "updatedAt") FROM stdin;
1	5	nombre expo 1	\N	t	2020-06-05 22:55:00.89+00	2020-06-05 22:55:00.89+00
2	5	nombre expo 2		t	2020-06-05 22:55:00.891+00	2020-06-05 22:55:00.891+00
5	3	juanito1 expo	\N	t	2020-06-26 05:21:03.122+00	2020-06-26 05:21:03.122+00
9	2	expos 1 juan titu2	\N	t	2020-06-26 05:34:46.41+00	2020-06-26 05:34:46.41+00
10	2	expos2 titu2	\N	t	2020-06-26 05:34:46.414+00	2020-06-26 05:34:46.414+00
11	6	expo1		t	2020-10-04 04:41:45.788+00	2020-10-04 04:41:45.788+00
12	6	expo2		t	2020-10-04 04:41:45.791+00	2020-10-04 04:41:45.791+00
\.


--
-- TOC entry 3486 (class 0 OID 19060)
-- Dependencies: 273
-- Data for Name: financiamientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.financiamientos (id_financiamiento, id_proyecto, fuente, aporte, observacion, estado, "createdAt", "updatedAt") FROM stdin;
2	58	Exterior	30		t	2020-10-17 22:39:45.875+00	2020-10-17 23:03:00.167+00
1	58	UMSA	70	obs1	t	2020-10-17 22:01:24.95+00	2020-10-17 23:03:00.168+00
\.


--
-- TOC entry 3447 (class 0 OID 18474)
-- Dependencies: 234
-- Data for Name: fotografias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fotografias (id_fotografia, imagen, descripcion, numero, estado, "createdAt", "updatedAt", tipo) FROM stdin;
1	photo_default.png	fotografia por default.	1	t	2019-09-09 08:04:50.089+00	2020-05-27 22:24:06.822+00	foto
18	vDwY_BfgDjyH1BPTV0zCLvvh.jpeg	Fotografia de Boris Vargas	1	t	2020-05-27 22:50:21.612+00	2020-05-27 22:50:21.654+00	foto
19	LqUue8Ly_r1KQYjp5-sA5CVs.jpg	Fotografia de Monica Moraes	1	t	2020-05-28 14:42:13.719+00	2020-05-28 14:42:13.76+00	foto
20	YVeQqUxewtFvQXcfLc1uYUBc.png	Fotografia de Alvaro Garitano	1	t	2020-05-28 16:35:39.87+00	2020-05-28 16:35:39.907+00	foto
22	logo-pdf.jpg	Fotografia default pdf	1	t	2020-06-29 03:28:42.023+00	2020-06-29 03:28:42.131+00	foto
70	YVeQqUxewtFvQXcfLc1uYUBc.png	Fotografia de juan1 perez	1	f	2020-09-01 04:59:21.425+00	2020-09-03 04:19:43.333+00	foto
71	L5XM69iauFfSZCXuPVzXKhw0.png	Fotografia de juan1 perez	2	f	2020-09-03 04:19:42.864+00	2020-09-07 16:07:20.756+00	foto
72	_cNSdsf-dFEYamq0P0zFM7j5.png	Fotografia de juan1 perez	3	t	2020-09-07 16:07:20.52+00	2020-09-22 19:47:47.597+00	foto
\.


--
-- TOC entry 3449 (class 0 OID 18486)
-- Dependencies: 236
-- Data for Name: inv_proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_proyectos (id_inv_proyecto, id_proyecto, id_investigador, estado, "createdAt", "updatedAt") FROM stdin;
2	1	1	t	2019-09-30 14:34:42.019+00	2019-09-30 14:39:16.21+00
50	51	1	t	2020-05-08 02:44:35.663+00	2020-05-08 02:44:35.663+00
51	52	12	t	2020-05-28 22:30:48.154+00	2020-05-28 22:30:48.154+00
52	52	13	t	2020-05-28 22:30:48.163+00	2020-05-28 22:30:48.163+00
53	53	13	t	2020-10-01 00:33:55.76+00	2020-10-01 00:33:55.76+00
54	53	12	t	2020-10-01 00:33:55.762+00	2020-10-01 00:33:55.762+00
55	54	12	t	2020-10-01 00:44:00.643+00	2020-10-01 00:44:00.643+00
56	54	13	t	2020-10-01 00:44:00.646+00	2020-10-01 00:44:00.646+00
57	55	13	t	2020-10-01 00:46:56.142+00	2020-10-01 00:46:56.142+00
58	55	1	t	2020-10-01 00:46:56.143+00	2020-10-01 00:46:56.143+00
59	56	13	t	2020-10-01 00:54:00.428+00	2020-10-01 00:54:00.428+00
60	57	13	t	2020-10-01 01:27:11.082+00	2020-10-01 01:27:11.082+00
61	58	13	t	2020-10-04 03:07:31.482+00	2020-10-04 03:07:31.482+00
62	58	12	t	2020-10-04 03:07:31.483+00	2020-10-04 03:07:31.483+00
\.


--
-- TOC entry 3451 (class 0 OID 18494)
-- Dependencies: 238
-- Data for Name: inv_tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_tipos (id_inv_tipo, tipo, estado, "createdAt", "updatedAt", descripcion) FROM stdin;
1	Titular	t	2019-09-30 14:00:28.507+00	2019-09-30 14:01:36.597+00	descripcion cambiada
2	Asociado con proyecto	t	2019-10-01 13:52:11.63+00	2019-10-01 13:52:11.63+00	Tiene un proyecto asociado
3	Asociado por invitacion	t	2019-10-01 13:52:39.088+00	2019-10-01 13:52:39.088+00	invitado por la UMSA, por tiempo determinado
\.


--
-- TOC entry 3453 (class 0 OID 18502)
-- Dependencies: 240
-- Data for Name: investigadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigadores (id_investigador, id_persona, id_inv_tipo, estado, "createdAt", "updatedAt") FROM stdin;
2	2	1	t	2019-09-30 14:19:13.81+00	2019-09-30 14:19:13.81+00
1	3	2	t	2019-09-30 14:07:52.433+00	2019-09-30 14:08:50.281+00
12	32	3	t	2019-10-02 14:14:06.983+00	2019-10-02 17:46:53.032+00
13	33	3	t	2019-10-02 17:49:26.018+00	2019-10-02 17:49:26.018+00
\.


--
-- TOC entry 3455 (class 0 OID 18510)
-- Dependencies: 242
-- Data for Name: lugar_desarrollos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lugar_desarrollos (id_lugar_desarrollo, id_proyecto, departamento, provincia, municipio, localidad, latmax, lonmax, latmin, lonmin, estado, "createdAt", "updatedAt") FROM stdin;
6	52	Oruro	Litoral	Rurrenabaque	Nose	1.00000000	1.00000000	2.00000000	2.00000000	f	2020-06-26 04:38:37.179+00	2020-09-29 15:36:06.089+00
5	52	La Paz	Aroma	municipio prueba	localidad prueba	1.00000010	-1.00000000	10.05000000	10.06000000	t	2020-06-05 19:47:16.153+00	2020-09-29 15:46:11.077+00
7	58	La Paz	Sud Yungas	Coroico	Yolosita	1.00000000	-1.00000000	10.05000000	10.06000000	t	2020-10-04 04:00:02.383+00	2020-10-04 04:00:02.383+00
\.


--
-- TOC entry 3457 (class 0 OID 18518)
-- Dependencies: 244
-- Data for Name: nota_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_archivos (id_nota_archivo, id_nota_prensa, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	6	atqCveIkR5QD18JPTTNLoQWh.pdf	Whatever, Wherever,...	hhhh	7	t	2020-02-25 21:27:04.897+00	2020-02-25 21:27:04.939+00
2	6	133EsiU3O8Ade6npq6umVFHp.pdf	show1	show descripcion convenio1	12	t	2020-06-26 05:54:49.619+00	2020-09-28 00:11:11.483+00
3	7	mGA2ype-ZDCoUFCx3N4sEPBw.pdf	diploma-iot	descripcion	12	t	2020-10-04 04:43:32.465+00	2020-10-04 04:43:32.488+00
\.


--
-- TOC entry 3459 (class 0 OID 18526)
-- Dependencies: 246
-- Data for Name: nota_prensas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_prensas (id_nota_prensa, id_proyecto, titulo, objetivo, lugar, prensa, resumen, estado, "createdAt", "updatedAt", fecha) FROM stdin;
6	52	convenio1	obje1	La Paz	prensa11	998989899	f	2020-02-25 21:27:04.862+00	2020-09-29 15:37:03.95+00	2020-02-25 04:00:00+00
7	58	NOTA DE PRENSA 1	objetivo nota	La Paz	prensa	resumen	t	2020-10-04 04:43:32.432+00	2020-10-04 04:43:32.432+00	2020-10-04 04:00:00+00
\.


--
-- TOC entry 3461 (class 0 OID 18537)
-- Dependencies: 248
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
17	51	te4sQK7OM8noRP7uimFx6a6h.pdf	diploma-bootstrap	desc1	3	t	2020-08-02 00:15:37.139+00	2020-08-02 00:15:37.224+00	solicitud
18	51	3dHtKXcUHRzfgib_-dV9oA6B.pdf	diploma-bd	desc2	3	f	2020-08-02 00:15:37.141+00	2020-09-27 00:00:53.761+00	solicitud
19	58	Hxh54pkO6KN5pABmg2NAOAqA.pdf	diploma-docker	Solicitud BIOETICA rapido	5	t	2020-10-04 03:13:00.151+00	2020-10-04 03:13:00.219+00	solicitud
\.


--
-- TOC entry 3463 (class 0 OID 18545)
-- Dependencies: 250
-- Data for Name: personas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personas (id_persona, id_fotografia, paterno, materno, nombres, sexo, estado_civil, fec_nacimiento, pais, provincia, direccion1, correo, telefono, grado_academico, estado, "createdAt", "updatedAt", ci, url, ciudad, direccion2, celular, lenguaje, formacion_pro, formacion_adi, habilidades, conclusion, tema, color) FROM stdin;
3	20	Garitano	Zavala	Alvaro	Masculino	Casado	1988-01-05 04:00:00+00	BO	Murillo	Calacoto	p2ecologia@outlook.com	22222222	Ph. D.	t	2019-09-09 04:52:01.047628+00	2020-09-27 19:22:27.197+00	0000003	\N	CH	\N	\N	\N	\N	\N	\N	\N		theme-orange
32	72	Acha	Cordero	Dario	\N	\N	\N	\N	\N	\N	p3ecologia@outlook.es	\N	Ph. D.	t	2019-10-02 14:13:04.331+00	2020-10-20 13:46:42.134+00	3374109	\N	LP	\N	\N	\N	\N	\N	\N	\N		theme-cyan
33	1	Amurrio	Ordoñez	Patricia Janneth	\N	\N	\N	\N	\N	\N	p4ecologia@outlook.es	\N	M. Sc.	t	2019-10-02 17:49:12.962+00	2020-10-20 13:47:14.444+00	333225	\N	SC	\N	\N	\N	\N	\N	\N	\N		theme-cyan
1	18	Vargas	Paucara	Boris	Masculino	Soltero	1996-01-12 04:00:00+00	BO	Murillo	Mallasa	borisvargaspaucara@gmail.com	60514138	Lic.	t	2019-09-09 04:44:24.860882+00	2020-10-20 13:48:58.621+00	9884972	\N	LP	\N	60514138	es_BO	Estudie lalaa	\N	\N	\N		theme-cyan
2	19	Moraes	Ramirez	Monica	Femenino	Casado	1986-01-05 04:00:00+00	BO	Murillo	Obrajes	p1ecologia@outlook.es	00000000	Ph. D.	t	2019-09-09 04:46:55.187564+00	2020-10-22 11:36:01.774+00	183792	\N	LP	\N	\N	\N	\N	\N	\N	\N		theme-blue
\.


--
-- TOC entry 3465 (class 0 OID 18559)
-- Dependencies: 252
-- Data for Name: peti_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peti_archivos (id_peti_archivo, id_peticion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
8	8	FPkX0eVamVC796gGdivP0i4F.pdf	diploma-scrum	descripcion escrum	16	t	2020-09-28 23:20:12.158+00	2020-09-28 23:20:12.284+00
11	9	sE5_3sBpXhEOCZ7ql1LeuX3I.pdf	diploma-bd	desc1	16	t	2020-09-28 23:42:34.231+00	2020-09-28 23:42:34.294+00
12	9	v2AyWI35nr2Od-cxFJcKoQHJ.pdf	diploma-bd-2017	desc2	16	t	2020-09-28 23:42:34.235+00	2020-09-28 23:42:34.297+00
14	9	lAc1gmmKqU7TLXMRR4avxhaH.pdf	diploma-postman	descripcion200	16	t	2020-09-28 23:44:43.168+00	2020-09-28 23:44:43.219+00
13	9	VE5N5-TlRQr5ECmSvSoSi5P_.pdf	diploma-prework	descripcion2	16	t	2020-09-28 23:44:43.164+00	2020-09-28 23:44:43.22+00
16	9	KTTy8fKutPfNYUQ39sVOa5b_.pdf	diploma-algoritmos	desc20	16	t	2020-09-28 23:51:20.322+00	2020-09-28 23:51:20.378+00
15	9	uq0vb8Tw-CHoQxmo6JVrKq2h.pdf	diploma-angular	desc10	16	t	2020-09-28 23:51:20.317+00	2020-09-28 23:51:20.381+00
10	8	Pmf1iRXxbSsrOzxQVBbGJTVs.pdf	diploma-zoomm	descripcion zoom	16	t	2020-09-28 23:40:43.029+00	2020-09-29 14:23:37.868+00
9	8	CdcZfuSVA4TH4QU04pivgRhV.pdf	diploma-redess	descripcion de redes	16	t	2020-09-28 23:38:40.929+00	2020-09-29 14:24:41.643+00
7	8	LURCaijV6V_vCvcUkNjOaxQB.pdf	diploma-dockerr	descripcion docker	16	t	2020-09-25 14:23:55.022+00	2020-09-29 14:25:35.598+00
17	10	_NTdLmW15jeFB--iGDZez-lK.pdf	diploma-scrum	descripcion scrum	16	t	2020-10-04 05:05:17.291+00	2020-10-04 05:05:17.339+00
\.


--
-- TOC entry 3467 (class 0 OID 18567)
-- Dependencies: 254
-- Data for Name: peticiones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peticiones (id_peticion, id_proyecto, id_investigador, tipo, motivos, detalle, estado, "createdAt", "updatedAt") FROM stdin;
8	1	1	Peticiones de información	motivo1	detalle1	f	2020-09-25 14:23:54.99+00	2020-09-28 23:54:22.474+00
9	52	12	Consultas	peticion prueba	detalles peticion	t	2020-09-28 23:42:34.205+00	2020-09-28 23:53:54.908+00
10	58	12	Peticiones de información	Necesito para un documento	Los detalles	t	2020-10-04 05:05:17.262+00	2020-10-04 05:05:17.262+00
\.


--
-- TOC entry 3469 (class 0 OID 18578)
-- Dependencies: 256
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
100	57	SRY-CvhBX_V5kcYgoIM7HstF.pdf	diploma-aprender	Formulario	1	t	2020-10-01 01:27:11.096+00	2020-10-01 01:27:11.185+00
101	57	Ethyzg40JTGvgE8Gw7ZmtR4W.pdf	diploma-angular	Proyecto inextenso	1	t	2020-10-01 01:27:11.097+00	2020-10-01 01:27:11.192+00
67	51	Rda1A7Ge2WL_PTxFoES3gmnH.pdf	show	Archivos necesarios para la creacion de proyecto	1	t	2020-05-08 02:44:35.673+00	2020-09-26 23:21:14.055+00
81	51	ePtFePuuanui9tNjjee21e37.pdf	diploma-scrum	desc3	7	t	2020-08-13 21:42:09.953+00	2020-09-27 00:29:53.128+00
82	51	uOFkBGuK27h3Q6TGzO0txU_R.pdf	diploma-sql-mysql-2016	desc2	7	t	2020-08-13 21:42:09.931+00	2020-09-27 00:30:12.976+00
80	51	el4vuetMQK4BNloWrAzE6WVj.pdf	diploma-sql-mysql	desc1	7	f	2020-08-13 21:42:09.93+00	2020-09-27 00:31:03.076+00
79	51	WW_KOsBL5QRGcag51PU-8NWs.pdf	diploma-algoritmos	Descrip3	6	f	2020-08-13 19:18:12.083+00	2020-09-27 00:37:59.998+00
78	51	6xUW1q04dM7qpbq2WrFNUv1r.pdf	diploma-angular	Descrip2	6	f	2020-08-13 19:18:12.083+00	2020-09-29 15:57:43.93+00
83	1	cCOQPfH0tantAb2cplDiRC0U.pdf	diploma-algoritmos	Resolucion RR	1	t	2020-09-30 02:45:04.564+00	2020-09-30 02:45:04.647+00
84	1	ckz1a_BGOtsSxh4wS1wmAkBn.pdf	diploma-angular	desc1 angular principal RRHH	1	t	2020-09-30 02:47:20.161+00	2020-09-30 02:47:20.216+00
85	1	FDNL2qblDrWKTcuJD6rk0Hrg.pdf	diploma-ingles-2	descr RRHH principal	1	t	2020-09-30 02:48:42.177+00	2020-09-30 02:48:42.243+00
86	1	LH-aOA1wNlIbutaNdOfJYob0.pdf	diploma-algoritmos	desc otros	7	t	2020-09-30 02:49:00.865+00	2020-09-30 02:49:00.912+00
89	53	Jby3h4JZySkUvkLfYLmf5oZG.pdf	diploma-bd-2017	Proyecto Extenso	1	t	2020-10-01 00:33:55.795+00	2020-10-01 00:33:55.877+00
88	53	WMCqs9twDHH7a1GRMqKQd-Ca.pdf	diploma-bd	Formulario	1	t	2020-10-01 00:33:55.777+00	2020-10-01 00:33:55.879+00
87	53	LImo7aLvbCNfpA9w19xaF_or.pdf	diploma-docker	Resolucion C. C.	1	t	2020-10-01 00:33:55.767+00	2020-10-01 00:33:55.882+00
90	54	\N	diploma-algoritmos	Resolucion C. C.	1	t	2020-10-01 00:44:00.649+00	2020-10-01 00:44:00.649+00
91	54	\N	diploma-aprender	Formulario	1	t	2020-10-01 00:44:00.655+00	2020-10-01 00:44:00.655+00
92	54	\N	diploma-avanzado-redes	Proyecto Extenso	1	t	2020-10-01 00:44:00.667+00	2020-10-01 00:44:00.667+00
93	55	\N		Resolucion C. C.	1	t	2020-10-01 00:46:56.149+00	2020-10-01 00:46:56.149+00
94	55	\N	diploma-electronica	Formulario	1	t	2020-10-01 00:46:56.16+00	2020-10-01 00:46:56.16+00
95	55	\N	diploma-bootstrap	Proyecto Extenso	1	t	2020-10-01 00:46:56.172+00	2020-10-01 00:46:56.172+00
96	56	\N	diploma-bd-2017	Resolucion C. C.	1	t	2020-10-01 00:54:00.431+00	2020-10-01 00:54:00.431+00
98	56	\N	diploma-fundamentos-circuitos	Formulario	1	t	2020-10-01 00:54:00.437+00	2020-10-01 00:54:00.437+00
97	56	\N	diploma-ingles-facil-speaking	Proyecto Extenso	1	t	2020-10-01 00:54:00.452+00	2020-10-01 00:54:00.452+00
99	57	dE8n_gIyv47mRU0px3no4X8Y.pdf	diploma-avanzado-redes	Resolucion C.C	1	t	2020-10-01 01:27:11.087+00	2020-10-01 01:27:11.183+00
103	58	ZG95Ax4LQILGQ3PUFlMBd5Mi.pdf	diploma-aprender	RESOLUCION C.C.	1	t	2020-10-04 03:07:31.496+00	2020-10-04 03:07:31.6+00
102	58	BUY0URYdBb0YUvvE7IIyUOIr.pdf	diploma-angular	Formulario	1	t	2020-10-04 03:07:31.5+00	2020-10-04 03:07:31.61+00
104	58	YcAtHgbxNkQALU0N_5bZRy9_.pdf	diploma-algoritmos	inextenso	1	t	2020-10-04 03:07:31.5+00	2020-10-04 03:07:31.612+00
105	58	kXHoKa7OOdcxmPdCoZQwLGVi.pdf	diploma-zoom	descripcion otro	7	t	2020-10-04 03:26:59.128+00	2020-10-04 03:26:59.17+00
106	58	enKLMV-v24YefQuSB2b4q7pw.pdf	diploma-linux	descripcion cierre	6	t	2020-10-04 03:34:14.426+00	2020-10-04 03:34:14.48+00
\.


--
-- TOC entry 3471 (class 0 OID 18586)
-- Dependencies: 258
-- Data for Name: proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proyectos (id_proyecto, id_adm, id_coordinador, titulo, fechaini, fechafin, estado, "createdAt", "updatedAt", proceso, carrera, n_instituto, tipo, area, tipo_p, carga_h, moneda, financiamiento) FROM stdin;
56	1	2	Assessing the risk of extinction of plants and updating Key Biodiversity Areas in the Tropical Andes	2018-01-01 04:00:00+00	2020-06-18 04:00:00+00	pendiente	2020-10-01 00:54:00.398+00	2020-10-20 13:52:26.923+00	0	\N	\N	\N	\N	\N	\N	\N	\N
55	1	2	Bioremedicacion de las zonas de Huatajata y bahia Cohana del lago Titicaca y revalorizacion cultural economica de la totora	2018-10-04 04:00:00+00	2021-10-04 04:00:00+00	inactivo	2020-10-01 00:46:56.11+00	2020-10-20 13:53:46.516+00	0	\N	\N	\N	\N	\N	\N	\N	\N
54	1	2	Cooperacion tecnica ambiental para la planificacion de la conservacion de los espacios naturales del municipio de La Paz	2018-09-06 04:00:00+00	2021-10-14 04:00:00+00	cerrado	2020-10-01 00:44:00.61+00	2020-10-20 13:55:02.743+00	0	\N	\N	\N	\N	\N	\N	\N	\N
1	1	2	Conservacion de especie endemica Syagrus yungasensis: Practicas de propagacion (Proyecto Plantas Endemicas)	2019-09-01 04:00:00+00	2019-11-29 04:00:00+00	cerrado	2019-09-30 14:25:27.22+00	2020-10-04 03:05:56.307+00	20	\N	\N	\N	\N	\N	\N	\N	\N
51	1	2	Cultivos marginados en Iberoamerica Red CULTIMA CYTED	2020-05-01 04:00:00+00	2020-05-31 04:00:00+00	cerrado	2020-05-08 02:44:35.543+00	2020-10-04 03:06:01.034+00	40	\N	\N	\N	\N	\N	\N	\N	\N
58	1	1	Diagnostico de la biodiversidad acuatica laguna Moa, La Paz Bolivia	2020-10-03 04:00:00+00	2020-10-04 04:00:00+00	activo	2020-10-04 03:07:31.419+00	2020-10-17 22:01:24.827+00	15	Biologia	Instituto de Ecologia	basica	Biologia	Investigacion	100	USD	100
57	1	2	Dieta, tiempo de transito intestinal, consistencia fecal y contenido en materia seca de las heces en Ateles chamek en semilibertad.	2020-09-02 04:00:00+00	2020-10-02 04:00:00+00	cerrado	2020-10-01 01:27:11.049+00	2020-10-19 14:20:34.292+00	0	\N	\N	\N	\N	\N	\N	\N	\N
52	1	1	Crecimiento y supervivencia de caimanes en el sistema del lago Moa. Bases para el manejo en sistemas de granjas de levante	2020-05-28 04:00:00+00	2020-05-29 04:00:00+00	activo	2020-05-28 22:30:48.085+00	2020-10-20 14:04:32.488+00	55	\N	\N	\N	\N	\N	\N	\N	\N
53	1	1	Construccion y validacion de un metodo de capacitacion sobre el manejo del conflicto con micromamiferos y sus implicancias en la salud publica, dirigido a ..	2012-05-09 04:00:00+00	2020-09-30 04:00:00+00	cerrado	2020-10-01 00:33:55.696+00	2020-10-20 14:04:51.049+00	0	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- TOC entry 3473 (class 0 OID 18596)
-- Dependencies: 260
-- Data for Name: publi_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publi_archivos (id_publi_archivo, id_publicacion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	oS_AUFieA2eGSeV55WUCzu-s.pdf	libro100	desc10	14	t	2020-06-26 07:15:02.37+00	2020-06-27 17:48:33.306+00
2	2	UxcSpk1yXzrjPpX-qX5BH3Rh.pdf	diploma-sql-mysql	descripcion1	14	t	2020-10-04 04:15:26.519+00	2020-10-04 04:15:26.606+00
3	2	y9epx4yrGcTCRNNVu70NPw4x.pdf	diploma-sql-mysql-2016	descripcion2	14	t	2020-10-04 04:15:26.522+00	2020-10-04 04:15:26.602+00
\.


--
-- TOC entry 3475 (class 0 OID 18604)
-- Dependencies: 262
-- Data for Name: publicaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publicaciones (id_publicacion, id_proyecto, id_coordinador, titulo, fecha, contenido, estado, "createdAt", "updatedAt", tipo) FROM stdin;
2	58	1	TITULO 1	2020-10-04 04:00:00+00	contenido	t	2020-10-04 04:15:26.416+00	2020-10-04 04:15:26.416+00	Artículo
1	52	1	DIeta, tiempo de transito intestinal consistencia fecal	2020-06-26 04:00:00+00	El mono araña negro (Ateles chamel), es una de las especies de primate que esta en peligro de extincion ...	t	2020-06-26 07:15:02.31+00	2020-09-29 15:46:00.434+00	Libro
\.


--
-- TOC entry 3477 (class 0 OID 18616)
-- Dependencies: 264
-- Data for Name: segui_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.segui_archivos (id_segui_archivo, id_seguimiento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	xLDGcKZo6pkbfOyxUTr7u3Dh.pdf	diploma-algoritmos	desc1	15	t	2020-09-24 15:40:21.611+00	2020-09-24 15:40:21.7+00
3	2	H1XmYMXpd39SjgMrdUp9j3NG.pdf	diploma-typescript	desc2	15	t	2020-09-24 22:13:37.805+00	2020-09-24 22:13:37.936+00
2	2	msk4hfQOEzGXShLCcO6nOo34.pdf	diploma-zoom	desc1	15	t	2020-09-24 22:13:37.804+00	2020-09-24 22:13:37.937+00
4	3	ckjOhDZEXfE3KOOIbr3sjyCR.pdf	diploma-zoom	descripcion1	15	t	2020-10-04 05:13:30.103+00	2020-10-04 05:13:30.194+00
5	3	6_CVEgex9xvKjNKDsvNqsyoL.pdf	diploma-bd-2017	descipcion	15	t	2020-10-04 05:18:31.752+00	2020-10-04 05:18:31.831+00
6	3	GCFzPJ7rPzJ_vKlwBDTpRUvv.pdf	diploma-bd-2017	descri2	15	t	2020-10-04 05:18:45.257+00	2020-10-04 05:18:45.36+00
\.


--
-- TOC entry 3479 (class 0 OID 18624)
-- Dependencies: 266
-- Data for Name: seguimientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seguimientos (id_seguimiento, id_proyecto, id_director, tipo, revision, observaciones, estado, "createdAt", "updatedAt", proceso) FROM stdin;
1	52	2	Inicio	primera revision de documentos.	Falta los siguientes documentos:\n- uno\n- dos	t	2020-09-24 15:40:21.475+00	2020-09-29 17:52:44.754+00	55
2	1	2	Ejecucion	lalala \nrevi	ob\nob1	t	2020-09-24 22:13:37.755+00	2020-09-29 18:01:06.704+00	20
3	58	2	Inicio	revision de documentos principales	ninguna observacion	t	2020-10-04 05:13:30.06+00	2020-10-04 05:13:30.06+00	15
\.


--
-- TOC entry 3481 (class 0 OID 18635)
-- Dependencies: 268
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
10	Cursos	Archivo de Cursos	t	2020-05-03 21:51:01.170459+00	2020-05-03 21:51:01.170459+00
11	Eventos	Archivo de Eventos	t	2020-05-03 21:51:14.517132+00	2020-05-03 21:51:14.517132+00
8	Convenios	Archivo de convenio	t	2020-05-03 21:43:25.36632+00	2020-05-03 21:43:25.36632+00
9	Contratados	Archivo de contratado	t	2020-05-03 21:43:46.238677+00	2020-05-03 21:43:46.238677+00
12	Notas de prensa	Archivo de no tas de prensa	t	2020-05-03 21:51:41.531575+00	2020-05-03 21:51:41.531575+00
13	Exposiciones	Archivo de exposiciones	t	2020-05-03 21:52:29.646938+00	2020-05-03 21:52:29.646938+00
14	publicaciones	Archivo de publicaciones	t	2020-06-26 07:03:32.278416+00	2020-06-26 07:03:32.278416+00
15	seguimientos	Archivo de seguimientos	t	2020-09-23 17:32:52.538736+00	2020-09-23 17:32:52.538736+00
16	peticiones	Archivo de peticiones de investigadores	t	2020-09-24 23:49:26.160558+00	2020-09-24 23:49:26.160558+00
17	final	Archivo de proyecto final	t	2020-09-24 23:49:26.160558+00	2020-09-24 23:49:26.160558+00
\.


--
-- TOC entry 3484 (class 0 OID 19044)
-- Dependencies: 271
-- Data for Name: unidades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidades (id_unidad, id_proyecto, nombre, observacion, estado, "createdAt", "updatedAt") FROM stdin;
1	58	uni1	ob1	t	2020-10-17 22:01:24.93+00	2020-10-17 23:03:00.133+00
2	58	uni2	ob2	t	2020-10-17 23:03:00.135+00	2020-10-17 23:03:00.135+00
\.


--
-- TOC entry 3528 (class 0 OID 0)
-- Dependencies: 203
-- Name: adm_rol_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_rol_id_rol_seq', 3, true);


--
-- TOC entry 3529 (class 0 OID 0)
-- Dependencies: 205
-- Name: adm_usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_id_usuario_seq', 29, true);


--
-- TOC entry 3530 (class 0 OID 0)
-- Dependencies: 207
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_roles_id_adm_usuario_rol_seq', 70, true);


--
-- TOC entry 3531 (class 0 OID 0)
-- Dependencies: 209
-- Name: autores_id_autor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.autores_id_autor_seq', 4, true);


--
-- TOC entry 3532 (class 0 OID 0)
-- Dependencies: 211
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_comentario_seq', 1, true);


--
-- TOC entry 3533 (class 0 OID 0)
-- Dependencies: 213
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contra_archivos_id_contra_archivo_seq', 8, true);


--
-- TOC entry 3534 (class 0 OID 0)
-- Dependencies: 215
-- Name: contratados_id_contratado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contratados_id_contratado_seq', 7, true);


--
-- TOC entry 3535 (class 0 OID 0)
-- Dependencies: 217
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conv_archivos_id_conv_archivo_seq', 10, true);


--
-- TOC entry 3536 (class 0 OID 0)
-- Dependencies: 219
-- Name: convenios_id_convenio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.convenios_id_convenio_seq', 7, true);


--
-- TOC entry 3537 (class 0 OID 0)
-- Dependencies: 221
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.curso_archivos_id_curso_archivo_seq', 7, true);


--
-- TOC entry 3538 (class 0 OID 0)
-- Dependencies: 223
-- Name: cursos_id_curso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cursos_id_curso_seq', 6, true);


--
-- TOC entry 3539 (class 0 OID 0)
-- Dependencies: 225
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_archivos_id_evento_archivos_seq', 4, true);


--
-- TOC entry 3540 (class 0 OID 0)
-- Dependencies: 227
-- Name: eventos_id_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_id_evento_seq', 8, true);


--
-- TOC entry 3541 (class 0 OID 0)
-- Dependencies: 229
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expo_archivos_id_expo_archivo_seq', 4, true);


--
-- TOC entry 3542 (class 0 OID 0)
-- Dependencies: 231
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exposiciones_id_exposicion_seq', 3, true);


--
-- TOC entry 3543 (class 0 OID 0)
-- Dependencies: 233
-- Name: expositores_id_expositor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expositores_id_expositor_seq', 12, true);


--
-- TOC entry 3544 (class 0 OID 0)
-- Dependencies: 272
-- Name: financiamientos_id_financiamiento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.financiamientos_id_financiamiento_seq', 2, true);


--
-- TOC entry 3545 (class 0 OID 0)
-- Dependencies: 235
-- Name: fotografia_id_fotografia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fotografia_id_fotografia_seq', 72, true);


--
-- TOC entry 3546 (class 0 OID 0)
-- Dependencies: 237
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_proyectos_id_inv_proyecto_seq', 62, true);


--
-- TOC entry 3547 (class 0 OID 0)
-- Dependencies: 239
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_tipos_id_inv_tipo_seq', 3, true);


--
-- TOC entry 3548 (class 0 OID 0)
-- Dependencies: 241
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.investigadores_id_investigador_seq', 13, true);


--
-- TOC entry 3549 (class 0 OID 0)
-- Dependencies: 243
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lugar_desarrollos_id_lugar_desarrollo_seq', 7, true);


--
-- TOC entry 3550 (class 0 OID 0)
-- Dependencies: 245
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_archivos_id_nota_archivo_seq', 3, true);


--
-- TOC entry 3551 (class 0 OID 0)
-- Dependencies: 247
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_prensas_id_nota_prensa_seq', 7, true);


--
-- TOC entry 3552 (class 0 OID 0)
-- Dependencies: 249
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permiso_archivos_id_permiso_archivo_seq', 19, true);


--
-- TOC entry 3553 (class 0 OID 0)
-- Dependencies: 251
-- Name: persona_id_persona_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.persona_id_persona_seq', 33, true);


--
-- TOC entry 3554 (class 0 OID 0)
-- Dependencies: 253
-- Name: peti_archivo_id_peti_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peti_archivo_id_peti_archivo_seq', 17, true);


--
-- TOC entry 3555 (class 0 OID 0)
-- Dependencies: 255
-- Name: peticiones_id_peticion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peticiones_id_peticion_seq', 10, true);


--
-- TOC entry 3556 (class 0 OID 0)
-- Dependencies: 257
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proy_archivos_id_proy_archivo_seq', 106, true);


--
-- TOC entry 3557 (class 0 OID 0)
-- Dependencies: 259
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proyectos_id_proyecto_seq', 58, true);


--
-- TOC entry 3558 (class 0 OID 0)
-- Dependencies: 261
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publi_archivos_id_publi_archivo_seq', 3, true);


--
-- TOC entry 3559 (class 0 OID 0)
-- Dependencies: 263
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publicaciones_id_publicacion_seq', 2, true);


--
-- TOC entry 3560 (class 0 OID 0)
-- Dependencies: 265
-- Name: segui_archivos_id_segui_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.segui_archivos_id_segui_archivo_seq', 6, true);


--
-- TOC entry 3561 (class 0 OID 0)
-- Dependencies: 267
-- Name: seguimientos_id_seguimiento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seguimientos_id_seguimiento_seq', 3, true);


--
-- TOC entry 3562 (class 0 OID 0)
-- Dependencies: 269
-- Name: tipos_id_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipos_id_tipo_seq', 17, true);


--
-- TOC entry 3563 (class 0 OID 0)
-- Dependencies: 270
-- Name: unidades_id_unidad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidades_id_unidad_seq', 2, true);


--
-- TOC entry 3156 (class 2606 OID 18688)
-- Name: adm_roles adm_rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 3158 (class 2606 OID 18690)
-- Name: adm_roles adm_rol_rol_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_rol_rol_key UNIQUE (rol);


--
-- TOC entry 3160 (class 2606 OID 18692)
-- Name: adm_usuarios adm_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 3164 (class 2606 OID 18694)
-- Name: adm_usuario_roles adm_usuario_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_pkey PRIMARY KEY (id_adm_usuario_rol);


--
-- TOC entry 3162 (class 2606 OID 18696)
-- Name: adm_usuarios adm_usuario_usuario_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_usuario_key UNIQUE (usuario);


--
-- TOC entry 3166 (class 2606 OID 18698)
-- Name: autores autores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_pkey PRIMARY KEY (id_autor);


--
-- TOC entry 3168 (class 2606 OID 18702)
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (id_comentario);


--
-- TOC entry 3170 (class 2606 OID 18704)
-- Name: contra_archivos contra_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_pkey PRIMARY KEY (id_contra_archivo);


--
-- TOC entry 3172 (class 2606 OID 18706)
-- Name: contratados contratados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_pkey PRIMARY KEY (id_contratado);


--
-- TOC entry 3174 (class 2606 OID 18708)
-- Name: conv_archivos conv_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_pkey PRIMARY KEY (id_conv_archivo);


--
-- TOC entry 3176 (class 2606 OID 18710)
-- Name: convenios convenios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_pkey PRIMARY KEY (id_convenio);


--
-- TOC entry 3178 (class 2606 OID 18712)
-- Name: curso_archivos curso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_pkey PRIMARY KEY (id_curso_archivo);


--
-- TOC entry 3180 (class 2606 OID 18714)
-- Name: cursos cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id_curso);


--
-- TOC entry 3182 (class 2606 OID 18716)
-- Name: evento_archivos evento_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_pkey PRIMARY KEY (id_evento_archivo);


--
-- TOC entry 3184 (class 2606 OID 18718)
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id_evento);


--
-- TOC entry 3186 (class 2606 OID 18720)
-- Name: expo_archivos expo_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_pkey PRIMARY KEY (id_expo_archivo);


--
-- TOC entry 3188 (class 2606 OID 18722)
-- Name: exposiciones exposiciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_pkey PRIMARY KEY (id_exposicion);


--
-- TOC entry 3190 (class 2606 OID 18724)
-- Name: expositores expositores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_pkey PRIMARY KEY (id_expositor);


--
-- TOC entry 3234 (class 2606 OID 19068)
-- Name: financiamientos financiamientos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.financiamientos
    ADD CONSTRAINT financiamientos_pkey PRIMARY KEY (id_financiamiento);


--
-- TOC entry 3192 (class 2606 OID 18726)
-- Name: fotografias fotografia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias
    ADD CONSTRAINT fotografia_pkey PRIMARY KEY (id_fotografia);


--
-- TOC entry 3194 (class 2606 OID 18728)
-- Name: inv_proyectos inv_proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_pkey PRIMARY KEY (id_inv_proyecto);


--
-- TOC entry 3196 (class 2606 OID 18730)
-- Name: inv_tipos inv_tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos
    ADD CONSTRAINT inv_tipos_pkey PRIMARY KEY (id_inv_tipo);


--
-- TOC entry 3198 (class 2606 OID 18732)
-- Name: investigadores investigadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_pkey PRIMARY KEY (id_investigador);


--
-- TOC entry 3200 (class 2606 OID 18734)
-- Name: lugar_desarrollos lugar_desarrollos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_pkey PRIMARY KEY (id_lugar_desarrollo);


--
-- TOC entry 3202 (class 2606 OID 18736)
-- Name: nota_archivos nota_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_pkey PRIMARY KEY (id_nota_archivo);


--
-- TOC entry 3204 (class 2606 OID 18738)
-- Name: nota_prensas nota_prensas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_pkey PRIMARY KEY (id_nota_prensa);


--
-- TOC entry 3206 (class 2606 OID 18740)
-- Name: permiso_archivos permiso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_pkey PRIMARY KEY (id_permiso_archivo);


--
-- TOC entry 3208 (class 2606 OID 18742)
-- Name: personas persona_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_correo_key UNIQUE (correo);


--
-- TOC entry 3210 (class 2606 OID 18744)
-- Name: personas persona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_pkey PRIMARY KEY (id_persona);


--
-- TOC entry 3212 (class 2606 OID 18746)
-- Name: personas persona_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_telefono_key UNIQUE (telefono);


--
-- TOC entry 3214 (class 2606 OID 18748)
-- Name: peti_archivos peti_archivo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivo_pkey PRIMARY KEY (id_peti_archivo);


--
-- TOC entry 3216 (class 2606 OID 18750)
-- Name: peticiones peticiones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_pkey PRIMARY KEY (id_peticion);


--
-- TOC entry 3218 (class 2606 OID 18752)
-- Name: proy_archivos proy_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_pkey PRIMARY KEY (id_proy_archivo);


--
-- TOC entry 3220 (class 2606 OID 18754)
-- Name: proyectos proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id_proyecto);


--
-- TOC entry 3222 (class 2606 OID 18756)
-- Name: publi_archivos publi_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_pkey PRIMARY KEY (id_publi_archivo);


--
-- TOC entry 3224 (class 2606 OID 18758)
-- Name: publicaciones publicaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_pkey PRIMARY KEY (id_publicacion);


--
-- TOC entry 3226 (class 2606 OID 18760)
-- Name: segui_archivos segui_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_pkey PRIMARY KEY (id_segui_archivo);


--
-- TOC entry 3228 (class 2606 OID 18762)
-- Name: seguimientos seguimientos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_pkey PRIMARY KEY (id_seguimiento);


--
-- TOC entry 3230 (class 2606 OID 18764)
-- Name: tipos tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id_tipo);


--
-- TOC entry 3232 (class 2606 OID 19052)
-- Name: unidades unidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_pkey PRIMARY KEY (id_unidad);


--
-- TOC entry 3235 (class 2606 OID 18767)
-- Name: adm_usuarios adm_usuario_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3236 (class 2606 OID 18772)
-- Name: adm_usuario_roles adm_usuario_roles_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.adm_roles(id_rol);


--
-- TOC entry 3237 (class 2606 OID 18777)
-- Name: adm_usuario_roles adm_usuario_roles_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.adm_usuarios(id_usuario);


--
-- TOC entry 3238 (class 2606 OID 18782)
-- Name: autores autores_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3239 (class 2606 OID 18787)
-- Name: autores autores_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3240 (class 2606 OID 18797)
-- Name: comentarios comentarios_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3241 (class 2606 OID 18802)
-- Name: comentarios comentarios_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3242 (class 2606 OID 18807)
-- Name: contra_archivos contra_archivos_id_contratado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_contratado_fkey FOREIGN KEY (id_contratado) REFERENCES public.contratados(id_contratado);


--
-- TOC entry 3243 (class 2606 OID 18812)
-- Name: contra_archivos contra_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3244 (class 2606 OID 18817)
-- Name: contratados contratados_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3245 (class 2606 OID 18822)
-- Name: contratados contratados_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3246 (class 2606 OID 18827)
-- Name: conv_archivos conv_archivos_id_convenio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_convenio_fkey FOREIGN KEY (id_convenio) REFERENCES public.convenios(id_convenio);


--
-- TOC entry 3247 (class 2606 OID 18832)
-- Name: conv_archivos conv_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3248 (class 2606 OID 18837)
-- Name: convenios convenios_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3249 (class 2606 OID 18842)
-- Name: convenios convenios_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3250 (class 2606 OID 18847)
-- Name: curso_archivos curso_archivos_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3251 (class 2606 OID 18852)
-- Name: curso_archivos curso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3252 (class 2606 OID 18857)
-- Name: cursos cursos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3253 (class 2606 OID 18862)
-- Name: evento_archivos evento_archivos_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id_evento);


--
-- TOC entry 3254 (class 2606 OID 18867)
-- Name: evento_archivos evento_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3255 (class 2606 OID 18872)
-- Name: eventos eventos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3256 (class 2606 OID 18877)
-- Name: expo_archivos expo_archivos_id_exposicion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_exposicion_fkey FOREIGN KEY (id_exposicion) REFERENCES public.exposiciones(id_exposicion);


--
-- TOC entry 3257 (class 2606 OID 18882)
-- Name: expo_archivos expo_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3258 (class 2606 OID 18887)
-- Name: exposiciones exposiciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3259 (class 2606 OID 18892)
-- Name: expositores expositores_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3288 (class 2606 OID 19069)
-- Name: financiamientos financiamientos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.financiamientos
    ADD CONSTRAINT financiamientos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3260 (class 2606 OID 18897)
-- Name: inv_proyectos inv_proyectos_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3261 (class 2606 OID 18902)
-- Name: inv_proyectos inv_proyectos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3262 (class 2606 OID 18907)
-- Name: investigadores investigadores_id_inv_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_inv_tipo_fkey FOREIGN KEY (id_inv_tipo) REFERENCES public.inv_tipos(id_inv_tipo);


--
-- TOC entry 3263 (class 2606 OID 18912)
-- Name: investigadores investigadores_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3264 (class 2606 OID 18917)
-- Name: lugar_desarrollos lugar_desarrollos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3265 (class 2606 OID 18922)
-- Name: nota_archivos nota_archivos_id_nota_prensa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_nota_prensa_fkey FOREIGN KEY (id_nota_prensa) REFERENCES public.nota_prensas(id_nota_prensa);


--
-- TOC entry 3266 (class 2606 OID 18927)
-- Name: nota_archivos nota_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3267 (class 2606 OID 18932)
-- Name: nota_prensas nota_prensas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3268 (class 2606 OID 18937)
-- Name: permiso_archivos permiso_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3269 (class 2606 OID 18942)
-- Name: permiso_archivos permiso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3270 (class 2606 OID 18947)
-- Name: personas persona_id_fotografia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_id_fotografia_fkey FOREIGN KEY (id_fotografia) REFERENCES public.fotografias(id_fotografia);


--
-- TOC entry 3271 (class 2606 OID 18952)
-- Name: peti_archivos peti_archivo_id_peticion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivo_id_peticion_fkey FOREIGN KEY (id_peticion) REFERENCES public.peticiones(id_peticion);


--
-- TOC entry 3272 (class 2606 OID 18957)
-- Name: peti_archivos peti_archivo_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivo_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3273 (class 2606 OID 18962)
-- Name: peticiones peticiones_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3274 (class 2606 OID 18967)
-- Name: peticiones peticiones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3275 (class 2606 OID 18972)
-- Name: proy_archivos proy_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3276 (class 2606 OID 18977)
-- Name: proy_archivos proy_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3277 (class 2606 OID 18982)
-- Name: proyectos proyectos_id_adm_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_adm_rol_fkey FOREIGN KEY (id_adm) REFERENCES public.adm_usuario_roles(id_adm_usuario_rol);


--
-- TOC entry 3278 (class 2606 OID 18987)
-- Name: proyectos proyectos_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3279 (class 2606 OID 18992)
-- Name: publi_archivos publi_archivos_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3280 (class 2606 OID 18997)
-- Name: publi_archivos publi_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3281 (class 2606 OID 19002)
-- Name: publicaciones publicaciones_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3282 (class 2606 OID 19007)
-- Name: publicaciones publicaciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3283 (class 2606 OID 19012)
-- Name: segui_archivos segui_archivos_id_seguimiento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_id_seguimiento_fkey FOREIGN KEY (id_seguimiento) REFERENCES public.seguimientos(id_seguimiento);


--
-- TOC entry 3284 (class 2606 OID 19017)
-- Name: segui_archivos segui_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3285 (class 2606 OID 19022)
-- Name: seguimientos seguimientos_id_director_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_id_director_fkey FOREIGN KEY (id_director) REFERENCES public.personas(id_persona);


--
-- TOC entry 3286 (class 2606 OID 19027)
-- Name: seguimientos seguimientos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3287 (class 2606 OID 19053)
-- Name: unidades unidades_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


-- Completed on 2020-10-23 09:01:32 -04

--
-- PostgreSQL database dump complete
--

