--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.2

-- Started on 2020-12-07 01:36:54 -04

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
-- TOC entry 202 (class 1259 OID 19890)
-- Name: adm_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_roles (
    id_rol integer NOT NULL,
    rol character varying(50) NOT NULL,
    descripcion character varying(2000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.adm_roles OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 19899)
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
-- TOC entry 3535 (class 0 OID 0)
-- Dependencies: 203
-- Name: adm_roles_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_roles_id_rol_seq OWNED BY public.adm_roles.id_rol;


--
-- TOC entry 204 (class 1259 OID 19901)
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
-- TOC entry 205 (class 1259 OID 19907)
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
-- TOC entry 3536 (class 0 OID 0)
-- Dependencies: 205
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_roles_id_adm_usuario_rol_seq OWNED BY public.adm_usuario_roles.id_adm_usuario_rol;


--
-- TOC entry 206 (class 1259 OID 19909)
-- Name: adm_usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adm_usuarios (
    id_usuario integer NOT NULL,
    id_persona integer NOT NULL,
    usuario character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    recordatorio character varying(1000),
    estado boolean DEFAULT true NOT NULL,
    "resetPasswordToken" character varying(100),
    "resetPasswordExpires" timestamp with time zone,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.adm_usuarios OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 19918)
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
-- TOC entry 3537 (class 0 OID 0)
-- Dependencies: 207
-- Name: adm_usuarios_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuarios_id_usuario_seq OWNED BY public.adm_usuarios.id_usuario;


--
-- TOC entry 208 (class 1259 OID 19920)
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
-- TOC entry 209 (class 1259 OID 19926)
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
-- TOC entry 3538 (class 0 OID 0)
-- Dependencies: 209
-- Name: autores_id_autor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.autores_id_autor_seq OWNED BY public.autores.id_autor;


--
-- TOC entry 210 (class 1259 OID 19928)
-- Name: basica_tecnicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.basica_tecnicas (
    id_basica_tecnica integer NOT NULL,
    id_proyecto integer NOT NULL,
    tipo character varying(200),
    area character varying(500),
    tipo_p character varying(200),
    carga_h integer,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.basica_tecnicas OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 19937)
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
-- TOC entry 3539 (class 0 OID 0)
-- Dependencies: 211
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.basica_tecnicas_id_basica_tecnica_seq OWNED BY public.basica_tecnicas.id_basica_tecnica;


--
-- TOC entry 212 (class 1259 OID 19939)
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    id_comentario integer NOT NULL,
    id_persona integer NOT NULL,
    id_publicacion integer NOT NULL,
    comentario character varying(5000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 19948)
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
-- TOC entry 3540 (class 0 OID 0)
-- Dependencies: 213
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_id_comentario_seq OWNED BY public.comentarios.id_comentario;


--
-- TOC entry 214 (class 1259 OID 19950)
-- Name: contra_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contra_archivos (
    id_contra_archivo integer NOT NULL,
    id_contratado integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.contra_archivos OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 19959)
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
-- TOC entry 3541 (class 0 OID 0)
-- Dependencies: 215
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contra_archivos_id_contra_archivo_seq OWNED BY public.contra_archivos.id_contra_archivo;


--
-- TOC entry 216 (class 1259 OID 19961)
-- Name: contratados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contratados (
    id_contratado integer NOT NULL,
    id_proyecto integer NOT NULL,
    archivo character varying(100),
    nombre_archivo character varying(1000),
    descripcion_archivo character varying(2000),
    id_tipo integer NOT NULL,
    tipo character varying(200),
    nombrecompleto character varying(1500),
    ci character varying(100),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    descripcion character varying(2000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.contratados OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 19971)
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
-- TOC entry 3542 (class 0 OID 0)
-- Dependencies: 217
-- Name: contratados_id_contratado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contratados_id_contratado_seq OWNED BY public.contratados.id_contratado;


--
-- TOC entry 218 (class 1259 OID 19973)
-- Name: conv_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conv_archivos (
    id_conv_archivo integer NOT NULL,
    id_convenio integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    tipo character varying(200),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.conv_archivos OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 19982)
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
-- TOC entry 3543 (class 0 OID 0)
-- Dependencies: 219
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conv_archivos_id_conv_archivo_seq OWNED BY public.conv_archivos.id_conv_archivo;


--
-- TOC entry 220 (class 1259 OID 19984)
-- Name: convenios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.convenios (
    id_convenio integer NOT NULL,
    id_proyecto integer NOT NULL,
    archivo character varying(100),
    nombre_archivo character varying(1000),
    descripcion_archivo character varying(2000),
    id_tipo integer NOT NULL,
    tipo character varying(200),
    titulo character varying(1500),
    objetivo character varying(1500),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    descripcion character varying(2000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.convenios OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 19994)
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
-- TOC entry 3544 (class 0 OID 0)
-- Dependencies: 221
-- Name: convenios_id_convenio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.convenios_id_convenio_seq OWNED BY public.convenios.id_convenio;


--
-- TOC entry 222 (class 1259 OID 19996)
-- Name: curso_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.curso_archivos (
    id_curso_archivo integer NOT NULL,
    id_curso integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.curso_archivos OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 20005)
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
-- TOC entry 3545 (class 0 OID 0)
-- Dependencies: 223
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.curso_archivos_id_curso_archivo_seq OWNED BY public.curso_archivos.id_curso_archivo;


--
-- TOC entry 224 (class 1259 OID 20007)
-- Name: cursos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cursos (
    id_curso integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(2000),
    objetivo character varying(3000),
    lugar character varying(1500),
    resumen character varying(5000),
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
-- TOC entry 225 (class 1259 OID 20017)
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
-- TOC entry 3546 (class 0 OID 0)
-- Dependencies: 225
-- Name: cursos_id_curso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cursos_id_curso_seq OWNED BY public.cursos.id_curso;


--
-- TOC entry 226 (class 1259 OID 20019)
-- Name: evento_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento_archivos (
    id_evento_archivo integer NOT NULL,
    id_evento integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.evento_archivos OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 20028)
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
-- TOC entry 3547 (class 0 OID 0)
-- Dependencies: 227
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_archivos_id_evento_archivos_seq OWNED BY public.evento_archivos.id_evento_archivo;


--
-- TOC entry 228 (class 1259 OID 20030)
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos (
    id_evento integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(3000),
    objetivo character varying(3000),
    lugar character varying(1000),
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    resumen character varying(5000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.eventos OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 20040)
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
-- TOC entry 3548 (class 0 OID 0)
-- Dependencies: 229
-- Name: eventos_id_evento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eventos_id_evento_seq OWNED BY public.eventos.id_evento;


--
-- TOC entry 230 (class 1259 OID 20042)
-- Name: expo_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expo_archivos (
    id_expo_archivo integer NOT NULL,
    id_exposicion integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.expo_archivos OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 20051)
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
-- TOC entry 3549 (class 0 OID 0)
-- Dependencies: 231
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expo_archivos_id_expo_archivo_seq OWNED BY public.expo_archivos.id_expo_archivo;


--
-- TOC entry 232 (class 1259 OID 20053)
-- Name: exposiciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exposiciones (
    id_exposicion integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(2000),
    tema character varying(2000),
    objetivo character varying(2000),
    lugar character varying(3000),
    asistentes integer,
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    resumen character varying(5000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.exposiciones OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 20063)
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
-- TOC entry 3550 (class 0 OID 0)
-- Dependencies: 233
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exposiciones_id_exposicion_seq OWNED BY public.exposiciones.id_exposicion;


--
-- TOC entry 234 (class 1259 OID 20065)
-- Name: expositores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expositores (
    id_expositor integer NOT NULL,
    id_curso integer NOT NULL,
    nombres character varying(1000),
    apellidos character varying(1000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.expositores OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 20074)
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
-- TOC entry 3551 (class 0 OID 0)
-- Dependencies: 235
-- Name: expositores_id_expositor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expositores_id_expositor_seq OWNED BY public.expositores.id_expositor;


--
-- TOC entry 236 (class 1259 OID 20076)
-- Name: financiamientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.financiamientos (
    id_financiamiento integer NOT NULL,
    id_proyecto integer NOT NULL,
    fuente character varying(2000),
    aporte integer,
    observacion character varying(5000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.financiamientos OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 20085)
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
-- TOC entry 3552 (class 0 OID 0)
-- Dependencies: 237
-- Name: financiamientos_id_financiamiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.financiamientos_id_financiamiento_seq OWNED BY public.financiamientos.id_financiamiento;


--
-- TOC entry 238 (class 1259 OID 20087)
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
-- TOC entry 239 (class 1259 OID 20098)
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
-- TOC entry 3553 (class 0 OID 0)
-- Dependencies: 239
-- Name: fotografias_id_fotografia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fotografias_id_fotografia_seq OWNED BY public.fotografias.id_fotografia;


--
-- TOC entry 240 (class 1259 OID 20100)
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
-- TOC entry 241 (class 1259 OID 20106)
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
-- TOC entry 3554 (class 0 OID 0)
-- Dependencies: 241
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_proyectos_id_inv_proyecto_seq OWNED BY public.inv_proyectos.id_inv_proyecto;


--
-- TOC entry 242 (class 1259 OID 20108)
-- Name: inv_tipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inv_tipos (
    id_inv_tipo integer NOT NULL,
    tipo character varying(100),
    descripcion character varying(2000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.inv_tipos OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 20117)
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
-- TOC entry 3555 (class 0 OID 0)
-- Dependencies: 243
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_tipos_id_inv_tipo_seq OWNED BY public.inv_tipos.id_inv_tipo;


--
-- TOC entry 244 (class 1259 OID 20119)
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
-- TOC entry 245 (class 1259 OID 20125)
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
-- TOC entry 3556 (class 0 OID 0)
-- Dependencies: 245
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.investigadores_id_investigador_seq OWNED BY public.investigadores.id_investigador;


--
-- TOC entry 246 (class 1259 OID 20127)
-- Name: lugar_desarrollos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lugar_desarrollos (
    id_lugar_desarrollo integer NOT NULL,
    id_proyecto integer NOT NULL,
    departamento character varying(500),
    provincia character varying(500),
    municipio character varying(500),
    localidad character varying(500),
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
-- TOC entry 247 (class 1259 OID 20136)
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
-- TOC entry 3557 (class 0 OID 0)
-- Dependencies: 247
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lugar_desarrollos_id_lugar_desarrollo_seq OWNED BY public.lugar_desarrollos.id_lugar_desarrollo;


--
-- TOC entry 248 (class 1259 OID 20138)
-- Name: nota_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota_archivos (
    id_nota_archivo integer NOT NULL,
    id_nota_prensa integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.nota_archivos OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 20147)
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
-- TOC entry 3558 (class 0 OID 0)
-- Dependencies: 249
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_archivos_id_nota_archivo_seq OWNED BY public.nota_archivos.id_nota_archivo;


--
-- TOC entry 250 (class 1259 OID 20149)
-- Name: nota_prensas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota_prensas (
    id_nota_prensa integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(3000),
    objetivo character varying(4000),
    lugar character varying(1000),
    prensa character varying(1000),
    fecha timestamp with time zone,
    resumen character varying(5000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.nota_prensas OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 20158)
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
-- TOC entry 3559 (class 0 OID 0)
-- Dependencies: 251
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_prensas_id_nota_prensa_seq OWNED BY public.nota_prensas.id_nota_prensa;


--
-- TOC entry 252 (class 1259 OID 20160)
-- Name: permiso_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permiso_archivos (
    id_permiso_archivo integer NOT NULL,
    id_proyecto integer NOT NULL,
    tipo character varying(100),
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.permiso_archivos OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 20169)
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
-- TOC entry 3560 (class 0 OID 0)
-- Dependencies: 253
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permiso_archivos_id_permiso_archivo_seq OWNED BY public.permiso_archivos.id_permiso_archivo;


--
-- TOC entry 254 (class 1259 OID 20171)
-- Name: personas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personas (
    id_persona integer NOT NULL,
    id_fotografia integer DEFAULT 1 NOT NULL,
    paterno character varying(100) NOT NULL,
    materno character varying(100),
    nombres character varying(100) NOT NULL,
    ci character varying(20) NOT NULL,
    sexo character varying(20),
    estado_civil character varying(50),
    url character varying(200),
    fec_nacimiento timestamp without time zone,
    ciudad character varying(100),
    provincia character varying(100),
    pais character varying(100),
    direccion1 character varying(1000),
    direccion2 character varying(1000),
    correo character varying(100) NOT NULL,
    telefono character varying(20),
    celular character varying(20),
    lenguaje character varying(500),
    grado_academico character varying(200),
    formacion_pro text,
    formacion_adi text,
    habilidades text,
    conclusion text,
    tema character varying(50) DEFAULT ''::character varying NOT NULL,
    color character varying(50) DEFAULT 'theme-cyan'::character varying NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    archivo character varying(100)
);


ALTER TABLE public.personas OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 20183)
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
-- TOC entry 3561 (class 0 OID 0)
-- Dependencies: 255
-- Name: personas_id_persona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personas_id_persona_seq OWNED BY public.personas.id_persona;


--
-- TOC entry 256 (class 1259 OID 20185)
-- Name: peti_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peti_archivos (
    id_peti_archivo integer NOT NULL,
    id_peticion integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.peti_archivos OWNER TO postgres;

--
-- TOC entry 257 (class 1259 OID 20194)
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
-- TOC entry 3562 (class 0 OID 0)
-- Dependencies: 257
-- Name: peti_archivos_id_peti_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peti_archivos_id_peti_archivo_seq OWNED BY public.peti_archivos.id_peti_archivo;


--
-- TOC entry 258 (class 1259 OID 20196)
-- Name: peticiones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peticiones (
    id_peticion integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_investigador integer NOT NULL,
    tipo character varying(100),
    motivos character varying(5000),
    detalle character varying(5000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.peticiones OWNER TO postgres;

--
-- TOC entry 259 (class 1259 OID 20205)
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
-- TOC entry 3563 (class 0 OID 0)
-- Dependencies: 259
-- Name: peticiones_id_peticion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peticiones_id_peticion_seq OWNED BY public.peticiones.id_peticion;


--
-- TOC entry 260 (class 1259 OID 20207)
-- Name: proy_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proy_archivos (
    id_proy_archivo integer NOT NULL,
    id_proyecto integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.proy_archivos OWNER TO postgres;

--
-- TOC entry 261 (class 1259 OID 20216)
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
-- TOC entry 3564 (class 0 OID 0)
-- Dependencies: 261
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proy_archivos_id_proy_archivo_seq OWNED BY public.proy_archivos.id_proy_archivo;


--
-- TOC entry 262 (class 1259 OID 20218)
-- Name: proyectos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proyectos (
    id_proyecto integer NOT NULL,
    id_adm integer NOT NULL,
    id_coordinador integer NOT NULL,
    titulo character varying(2000),
    proceso integer DEFAULT 0,
    fechaini timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    fechafin timestamp with time zone,
    carrera character varying(500) DEFAULT 'Biologia'::character varying,
    n_instituto character varying(500) DEFAULT 'Instituto de Ecologia'::character varying,
    tipo character varying(300),
    area character varying(300),
    tipo_p character varying(300),
    carga_h integer,
    moneda character varying(100),
    financiamiento integer,
    estado character varying(100) DEFAULT 'activo'::character varying NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    objetivo character varying(10000),
    resumen character varying(20000)
);


ALTER TABLE public.proyectos OWNER TO postgres;

--
-- TOC entry 263 (class 1259 OID 20231)
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
-- TOC entry 3565 (class 0 OID 0)
-- Dependencies: 263
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proyectos_id_proyecto_seq OWNED BY public.proyectos.id_proyecto;


--
-- TOC entry 264 (class 1259 OID 20233)
-- Name: publi_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publi_archivos (
    id_publi_archivo integer NOT NULL,
    id_publicacion integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.publi_archivos OWNER TO postgres;

--
-- TOC entry 265 (class 1259 OID 20242)
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
-- TOC entry 3566 (class 0 OID 0)
-- Dependencies: 265
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publi_archivos_id_publi_archivo_seq OWNED BY public.publi_archivos.id_publi_archivo;


--
-- TOC entry 266 (class 1259 OID 20244)
-- Name: publicaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publicaciones (
    id_publicacion integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_coordinador integer NOT NULL,
    titulo character varying(2000),
    fecha timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    contenido character varying(2000),
    tipo character varying(100),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    autores character varying(1000),
    resumen character varying(3000)
);


ALTER TABLE public.publicaciones OWNER TO postgres;

--
-- TOC entry 267 (class 1259 OID 20254)
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
-- TOC entry 3567 (class 0 OID 0)
-- Dependencies: 267
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publicaciones_id_publicacion_seq OWNED BY public.publicaciones.id_publicacion;


--
-- TOC entry 268 (class 1259 OID 20256)
-- Name: segui_archivos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.segui_archivos (
    id_segui_archivo integer NOT NULL,
    id_seguimiento integer NOT NULL,
    archivo character varying(100),
    nombre character varying(1000),
    descripcion character varying(2000),
    id_tipo integer NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.segui_archivos OWNER TO postgres;

--
-- TOC entry 269 (class 1259 OID 20265)
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
-- TOC entry 3568 (class 0 OID 0)
-- Dependencies: 269
-- Name: segui_archivos_id_segui_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.segui_archivos_id_segui_archivo_seq OWNED BY public.segui_archivos.id_segui_archivo;


--
-- TOC entry 270 (class 1259 OID 20267)
-- Name: seguimientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seguimientos (
    id_seguimiento integer NOT NULL,
    id_proyecto integer NOT NULL,
    id_director integer NOT NULL,
    tipo character varying(100),
    revision character varying(4000),
    observaciones character varying(5000),
    proceso integer,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.seguimientos OWNER TO postgres;

--
-- TOC entry 271 (class 1259 OID 20276)
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
-- TOC entry 3569 (class 0 OID 0)
-- Dependencies: 271
-- Name: seguimientos_id_seguimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seguimientos_id_seguimiento_seq OWNED BY public.seguimientos.id_seguimiento;


--
-- TOC entry 272 (class 1259 OID 20278)
-- Name: tipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipos (
    id_tipo integer NOT NULL,
    nombre character varying(500) NOT NULL,
    descripcion character varying(2000) NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.tipos OWNER TO postgres;

--
-- TOC entry 273 (class 1259 OID 20287)
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
-- TOC entry 3570 (class 0 OID 0)
-- Dependencies: 273
-- Name: tipos_id_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipos_id_tipo_seq OWNED BY public.tipos.id_tipo;


--
-- TOC entry 274 (class 1259 OID 20289)
-- Name: unidades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidades (
    id_unidad integer NOT NULL,
    id_proyecto integer NOT NULL,
    nombre character varying(1000),
    observacion character varying(5000),
    estado boolean DEFAULT true NOT NULL,
    "createdAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.unidades OWNER TO postgres;

--
-- TOC entry 275 (class 1259 OID 20298)
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
-- TOC entry 3571 (class 0 OID 0)
-- Dependencies: 275
-- Name: unidades_id_unidad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unidades_id_unidad_seq OWNED BY public.unidades.id_unidad;


--
-- TOC entry 3029 (class 2604 OID 20300)
-- Name: adm_roles id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles ALTER COLUMN id_rol SET DEFAULT nextval('public.adm_roles_id_rol_seq'::regclass);


--
-- TOC entry 3033 (class 2604 OID 20301)
-- Name: adm_usuario_roles id_adm_usuario_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles ALTER COLUMN id_adm_usuario_rol SET DEFAULT nextval('public.adm_usuario_roles_id_adm_usuario_rol_seq'::regclass);


--
-- TOC entry 3037 (class 2604 OID 20302)
-- Name: adm_usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.adm_usuarios_id_usuario_seq'::regclass);


--
-- TOC entry 3041 (class 2604 OID 20303)
-- Name: autores id_autor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores ALTER COLUMN id_autor SET DEFAULT nextval('public.autores_id_autor_seq'::regclass);


--
-- TOC entry 3045 (class 2604 OID 20304)
-- Name: basica_tecnicas id_basica_tecnica; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas ALTER COLUMN id_basica_tecnica SET DEFAULT nextval('public.basica_tecnicas_id_basica_tecnica_seq'::regclass);


--
-- TOC entry 3049 (class 2604 OID 20305)
-- Name: comentarios id_comentario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id_comentario SET DEFAULT nextval('public.comentarios_id_comentario_seq'::regclass);


--
-- TOC entry 3053 (class 2604 OID 20306)
-- Name: contra_archivos id_contra_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos ALTER COLUMN id_contra_archivo SET DEFAULT nextval('public.contra_archivos_id_contra_archivo_seq'::regclass);


--
-- TOC entry 3058 (class 2604 OID 20307)
-- Name: contratados id_contratado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados ALTER COLUMN id_contratado SET DEFAULT nextval('public.contratados_id_contratado_seq'::regclass);


--
-- TOC entry 3062 (class 2604 OID 20308)
-- Name: conv_archivos id_conv_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos ALTER COLUMN id_conv_archivo SET DEFAULT nextval('public.conv_archivos_id_conv_archivo_seq'::regclass);


--
-- TOC entry 3067 (class 2604 OID 20309)
-- Name: convenios id_convenio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios ALTER COLUMN id_convenio SET DEFAULT nextval('public.convenios_id_convenio_seq'::regclass);


--
-- TOC entry 3071 (class 2604 OID 20310)
-- Name: curso_archivos id_curso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos ALTER COLUMN id_curso_archivo SET DEFAULT nextval('public.curso_archivos_id_curso_archivo_seq'::regclass);


--
-- TOC entry 3076 (class 2604 OID 20311)
-- Name: cursos id_curso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos ALTER COLUMN id_curso SET DEFAULT nextval('public.cursos_id_curso_seq'::regclass);


--
-- TOC entry 3080 (class 2604 OID 20312)
-- Name: evento_archivos id_evento_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos ALTER COLUMN id_evento_archivo SET DEFAULT nextval('public.evento_archivos_id_evento_archivos_seq'::regclass);


--
-- TOC entry 3085 (class 2604 OID 20313)
-- Name: eventos id_evento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos ALTER COLUMN id_evento SET DEFAULT nextval('public.eventos_id_evento_seq'::regclass);


--
-- TOC entry 3089 (class 2604 OID 20314)
-- Name: expo_archivos id_expo_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos ALTER COLUMN id_expo_archivo SET DEFAULT nextval('public.expo_archivos_id_expo_archivo_seq'::regclass);


--
-- TOC entry 3094 (class 2604 OID 20315)
-- Name: exposiciones id_exposicion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones ALTER COLUMN id_exposicion SET DEFAULT nextval('public.exposiciones_id_exposicion_seq'::regclass);


--
-- TOC entry 3098 (class 2604 OID 20316)
-- Name: expositores id_expositor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores ALTER COLUMN id_expositor SET DEFAULT nextval('public.expositores_id_expositor_seq'::regclass);


--
-- TOC entry 3102 (class 2604 OID 20317)
-- Name: financiamientos id_financiamiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.financiamientos ALTER COLUMN id_financiamiento SET DEFAULT nextval('public.financiamientos_id_financiamiento_seq'::regclass);


--
-- TOC entry 3108 (class 2604 OID 20318)
-- Name: fotografias id_fotografia; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias ALTER COLUMN id_fotografia SET DEFAULT nextval('public.fotografias_id_fotografia_seq'::regclass);


--
-- TOC entry 3112 (class 2604 OID 20319)
-- Name: inv_proyectos id_inv_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos ALTER COLUMN id_inv_proyecto SET DEFAULT nextval('public.inv_proyectos_id_inv_proyecto_seq'::regclass);


--
-- TOC entry 3116 (class 2604 OID 20320)
-- Name: inv_tipos id_inv_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos ALTER COLUMN id_inv_tipo SET DEFAULT nextval('public.inv_tipos_id_inv_tipo_seq'::regclass);


--
-- TOC entry 3120 (class 2604 OID 20321)
-- Name: investigadores id_investigador; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores ALTER COLUMN id_investigador SET DEFAULT nextval('public.investigadores_id_investigador_seq'::regclass);


--
-- TOC entry 3124 (class 2604 OID 20322)
-- Name: lugar_desarrollos id_lugar_desarrollo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos ALTER COLUMN id_lugar_desarrollo SET DEFAULT nextval('public.lugar_desarrollos_id_lugar_desarrollo_seq'::regclass);


--
-- TOC entry 3128 (class 2604 OID 20323)
-- Name: nota_archivos id_nota_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos ALTER COLUMN id_nota_archivo SET DEFAULT nextval('public.nota_archivos_id_nota_archivo_seq'::regclass);


--
-- TOC entry 3132 (class 2604 OID 20324)
-- Name: nota_prensas id_nota_prensa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas ALTER COLUMN id_nota_prensa SET DEFAULT nextval('public.nota_prensas_id_nota_prensa_seq'::regclass);


--
-- TOC entry 3136 (class 2604 OID 20325)
-- Name: permiso_archivos id_permiso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos ALTER COLUMN id_permiso_archivo SET DEFAULT nextval('public.permiso_archivos_id_permiso_archivo_seq'::regclass);


--
-- TOC entry 3143 (class 2604 OID 20326)
-- Name: personas id_persona; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas ALTER COLUMN id_persona SET DEFAULT nextval('public.personas_id_persona_seq'::regclass);


--
-- TOC entry 3147 (class 2604 OID 20327)
-- Name: peti_archivos id_peti_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos ALTER COLUMN id_peti_archivo SET DEFAULT nextval('public.peti_archivos_id_peti_archivo_seq'::regclass);


--
-- TOC entry 3151 (class 2604 OID 20328)
-- Name: peticiones id_peticion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones ALTER COLUMN id_peticion SET DEFAULT nextval('public.peticiones_id_peticion_seq'::regclass);


--
-- TOC entry 3155 (class 2604 OID 20329)
-- Name: proy_archivos id_proy_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos ALTER COLUMN id_proy_archivo SET DEFAULT nextval('public.proy_archivos_id_proy_archivo_seq'::regclass);


--
-- TOC entry 3163 (class 2604 OID 20330)
-- Name: proyectos id_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos ALTER COLUMN id_proyecto SET DEFAULT nextval('public.proyectos_id_proyecto_seq'::regclass);


--
-- TOC entry 3167 (class 2604 OID 20331)
-- Name: publi_archivos id_publi_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos ALTER COLUMN id_publi_archivo SET DEFAULT nextval('public.publi_archivos_id_publi_archivo_seq'::regclass);


--
-- TOC entry 3172 (class 2604 OID 20332)
-- Name: publicaciones id_publicacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones ALTER COLUMN id_publicacion SET DEFAULT nextval('public.publicaciones_id_publicacion_seq'::regclass);


--
-- TOC entry 3176 (class 2604 OID 20333)
-- Name: segui_archivos id_segui_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos ALTER COLUMN id_segui_archivo SET DEFAULT nextval('public.segui_archivos_id_segui_archivo_seq'::regclass);


--
-- TOC entry 3180 (class 2604 OID 20334)
-- Name: seguimientos id_seguimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos ALTER COLUMN id_seguimiento SET DEFAULT nextval('public.seguimientos_id_seguimiento_seq'::regclass);


--
-- TOC entry 3184 (class 2604 OID 20335)
-- Name: tipos id_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos ALTER COLUMN id_tipo SET DEFAULT nextval('public.tipos_id_tipo_seq'::regclass);


--
-- TOC entry 3188 (class 2604 OID 20336)
-- Name: unidades id_unidad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades ALTER COLUMN id_unidad SET DEFAULT nextval('public.unidades_id_unidad_seq'::regclass);


--
-- TOC entry 3456 (class 0 OID 19890)
-- Dependencies: 202
-- Data for Name: adm_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_roles (id_rol, rol, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	admin	Administrador del sistema	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
2	director	Director del instituto de Ecologia	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
3	investigador	Investigador del Instituto de Ecologia	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
\.


--
-- TOC entry 3458 (class 0 OID 19901)
-- Dependencies: 204
-- Data for Name: adm_usuario_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuario_roles (id_adm_usuario_rol, id_usuario, id_rol, estado, "createdAt", "updatedAt") FROM stdin;
1	1	1	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
2	2	1	t	2020-10-23 13:32:01.209+00	2020-10-23 13:32:01.209+00
3	2	2	t	2020-10-23 13:32:01.21+00	2020-10-23 13:32:01.21+00
5	3	3	t	2020-10-23 14:07:23.909+00	2020-10-23 14:07:23.909+00
6	4	3	t	2020-10-23 14:08:13.409+00	2020-10-23 14:08:13.409+00
7	5	3	t	2020-10-23 14:09:00.312+00	2020-10-23 14:09:00.312+00
8	6	3	t	2020-10-23 14:10:18.585+00	2020-10-23 14:10:18.585+00
9	7	3	t	2020-10-23 14:11:09.515+00	2020-10-23 14:11:09.515+00
10	8	3	t	2020-10-23 14:12:00.029+00	2020-10-23 14:12:00.029+00
11	9	3	t	2020-10-23 14:14:03.064+00	2020-10-23 14:14:03.064+00
12	10	3	t	2020-10-23 14:18:46.552+00	2020-10-23 14:18:46.552+00
13	11	2	t	2020-10-23 14:19:38.029+00	2020-10-23 14:19:38.029+00
14	11	3	t	2020-10-23 14:19:38.03+00	2020-10-23 14:19:38.03+00
15	12	3	t	2020-10-23 14:20:36.656+00	2020-10-23 14:20:36.656+00
16	13	3	t	2020-10-23 14:21:19.167+00	2020-10-23 14:21:19.167+00
17	14	3	t	2020-10-23 14:22:08.289+00	2020-10-23 14:22:08.289+00
18	15	3	t	2020-10-23 14:23:11.747+00	2020-10-23 14:23:11.747+00
19	16	3	t	2020-10-23 14:24:14.061+00	2020-10-23 14:24:14.061+00
20	17	3	t	2020-10-23 14:25:50.836+00	2020-10-23 14:25:50.836+00
21	18	3	t	2020-10-23 14:26:43.935+00	2020-10-23 14:26:43.935+00
22	19	3	t	2020-10-23 18:39:20.61+00	2020-10-23 18:39:20.61+00
23	20	3	t	2020-10-23 18:40:01.543+00	2020-10-23 18:40:01.543+00
24	21	3	t	2020-10-23 18:44:41.989+00	2020-10-23 18:44:41.989+00
25	22	3	t	2020-10-23 18:45:17.911+00	2020-10-23 18:45:17.911+00
26	23	3	t	2020-10-23 18:49:06.401+00	2020-10-23 18:49:06.401+00
27	24	3	t	2020-10-23 18:49:46.555+00	2020-10-23 18:49:46.555+00
28	25	3	t	2020-10-23 18:50:25.945+00	2020-10-23 18:50:25.945+00
29	26	3	t	2020-10-23 18:50:59.007+00	2020-10-23 18:50:59.007+00
30	27	3	t	2020-10-23 18:51:40.42+00	2020-10-23 18:51:40.42+00
31	28	3	t	2020-10-23 18:52:17.335+00	2020-10-23 18:52:17.335+00
32	29	3	t	2020-10-23 18:52:52.952+00	2020-10-23 18:52:52.952+00
33	30	3	t	2020-10-23 18:53:37.368+00	2020-10-23 18:53:37.368+00
34	31	3	t	2020-10-23 18:54:09.444+00	2020-10-23 18:54:09.444+00
35	32	3	t	2020-10-23 18:54:39.401+00	2020-10-23 18:54:39.401+00
36	33	3	t	2020-10-23 18:55:04.094+00	2020-10-23 18:55:04.094+00
37	34	3	t	2020-10-23 18:55:33.564+00	2020-10-23 18:55:33.564+00
38	35	3	t	2020-10-23 18:56:10.314+00	2020-10-23 18:56:10.314+00
39	36	3	t	2020-10-23 18:56:41.681+00	2020-10-23 18:56:41.681+00
40	37	3	t	2020-10-23 18:57:05.582+00	2020-10-23 18:57:05.582+00
41	38	3	t	2020-10-23 18:57:40.587+00	2020-10-23 18:57:40.587+00
42	39	3	t	2020-10-23 18:58:05.055+00	2020-10-23 18:58:05.055+00
43	40	3	t	2020-10-23 18:58:34.294+00	2020-10-23 18:58:34.294+00
44	41	3	t	2020-10-23 18:59:01.817+00	2020-10-23 18:59:01.817+00
45	42	3	t	2020-10-23 18:59:40.24+00	2020-10-23 18:59:40.24+00
46	43	3	t	2020-10-23 19:00:17.139+00	2020-10-23 19:00:17.139+00
47	44	3	t	2020-10-23 19:00:47.688+00	2020-10-23 19:00:47.688+00
48	45	3	t	2020-10-23 19:01:16.935+00	2020-10-23 19:01:16.935+00
49	46	3	t	2020-10-23 19:01:57.878+00	2020-10-23 19:01:57.878+00
50	47	3	t	2020-10-23 19:02:25.899+00	2020-10-23 19:02:25.899+00
51	48	3	t	2020-10-23 19:03:03.235+00	2020-10-23 19:03:03.235+00
52	49	3	t	2020-10-23 19:03:37.306+00	2020-10-23 19:03:37.306+00
53	50	3	t	2020-10-23 19:05:01.253+00	2020-10-23 19:05:01.253+00
54	51	3	t	2020-10-23 19:05:32.071+00	2020-10-23 19:05:32.071+00
55	52	3	t	2020-10-23 19:05:56.797+00	2020-10-23 19:05:56.797+00
56	53	3	t	2020-10-23 19:06:24.607+00	2020-10-23 19:06:24.607+00
57	54	3	t	2020-10-23 19:07:36.495+00	2020-10-23 19:07:36.495+00
58	55	3	t	2020-10-23 19:08:22.934+00	2020-10-23 19:08:22.934+00
59	56	3	t	2020-10-23 19:08:49.486+00	2020-10-23 19:08:49.486+00
60	57	3	t	2020-10-23 19:11:44.059+00	2020-10-23 19:11:44.059+00
61	58	3	t	2020-10-26 21:50:48.883+00	2020-10-26 21:50:48.883+00
4	2	3	t	2020-10-23 13:32:01.213+00	2020-11-20 10:00:57.308+00
\.


--
-- TOC entry 3460 (class 0 OID 19909)
-- Dependencies: 206
-- Data for Name: adm_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuarios (id_usuario, id_persona, usuario, password, recordatorio, estado, "resetPasswordToken", "resetPasswordExpires", "createdAt", "updatedAt") FROM stdin;
1	1	admin	$2b$10$WjuICcMcKpWFduvTSwR3suHdQaDQ2GqN2Au.dzr77gQJ/ifcqMSWa	\N	t	\N	\N	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
2	2	9884972	$2b$10$CDCS3sO/qrGUfKzZ9E92IuTnjkJSRqnisRNobac1ojk.0b6nY821y	\N	t	\N	\N	2020-10-23 13:32:01.124+00	2020-10-23 13:32:01.124+00
3	3	3374109	$2b$10$aSdGOH4JJQ3QGupWGaM66eC1y1DxYswFQi3mHbshiX3JcqOpOhNf.	\N	t	\N	\N	2020-10-23 14:07:23.817+00	2020-10-23 14:07:23.817+00
4	4	333225	$2b$10$NW1CrP.vxn9Co/tbWoBkwu17ClOgLlGKcXYgzxK1OEaHFkFdM8xu.	\N	t	\N	\N	2020-10-23 14:08:13.323+00	2020-10-23 14:08:13.323+00
5	5	221242	$2b$10$GUwcNiiVTjinoytQ4PCgJuHtrhW2MmhU9X78Jwt3R7qhgXb9FDUaW	\N	t	\N	\N	2020-10-23 14:09:00.219+00	2020-10-23 14:09:00.219+00
6	6	3376712	$2b$10$Kp2Faom8KAad7wIlgAC8vuEmsaTaWDOghgOe4D50zp4iuCDfDbF/C	\N	t	\N	\N	2020-10-23 14:10:18.499+00	2020-10-23 14:10:18.499+00
7	7	4746052	$2b$10$TBdutpuNecTHZj.WPg3EjunMkC84FRl3ezDilNva/9PrzJdksE5je	\N	t	\N	\N	2020-10-23 14:11:09.409+00	2020-10-23 14:11:09.409+00
8	8	464519	$2b$10$Z3vMxHjg3wQi/63koKwsWOZHaAxIbCeYLfon1KnBLstyRh/ZtADZu	\N	t	\N	\N	2020-10-23 14:11:59.939+00	2020-10-23 14:11:59.939+00
9	9	1316562	$2b$10$D8FYJiHuC3OZgYLsY7IPPO40vs.C/ynR5ag6iYF41eMI4G/VHI3QW	\N	t	\N	\N	2020-10-23 14:14:02.981+00	2020-10-23 14:14:02.981+00
10	10	4805941	$2b$10$MiNvKsG61tDNx4vdjSRCYOzsmhtG2R8RD/66vMmaeY/CXfqTBVldK	\N	t	\N	\N	2020-10-23 14:18:46.461+00	2020-10-23 14:18:46.461+00
11	11	476807	$2b$10$OJjaTARLU8O9b4lbMCjNmOuxDzE.f3XbZVxsQYHcKRDilYeL0T7e6	\N	t	\N	\N	2020-10-23 14:19:37.939+00	2020-10-23 14:19:37.939+00
12	12	E0024263	$2b$10$9vrirk8/hWMCF.FfHbA5d.B44Ubw4VAmCvnOSNPJezO.uPbnmEvca	\N	t	\N	\N	2020-10-23 14:20:36.565+00	2020-10-23 14:20:36.565+00
13	13	2227535	$2b$10$6QrUGgQdTsKe0SovdUQo2OeHWoQt2VvXT3MfYp3WIqPhw4PL0FZum	\N	t	\N	\N	2020-10-23 14:21:19.081+00	2020-10-23 14:21:19.081+00
14	14	2017842	$2b$10$rpzg9wftyop2y8Hr/9NwK.k/fdjUnYWF4sRuNxLYV3j0qKmsjH0XG	\N	t	\N	\N	2020-10-23 14:22:08.203+00	2020-10-23 14:22:08.203+00
15	15	3368666	$2b$10$hX1Ej/fnw6/sVrYP1QIEhucOvH1OQZQeICVQ1pUGJpyCD18krJ56S	\N	t	\N	\N	2020-10-23 14:23:11.664+00	2020-10-23 14:23:11.664+00
16	16	489921	$2b$10$wqmcXTaXxLrZNOaNtMv9VOn.bOcxjt09bmtUG1Lu2mDQ2tUc0LkMO	\N	t	\N	\N	2020-10-23 14:24:13.98+00	2020-10-23 14:24:13.98+00
17	17	2726683-1J	$2b$10$a39EgjmVzZVvkXu5Tdv3/eXpgBkNcP98nmD/ZyOFC2vSpJ5aSNR.6	\N	t	\N	\N	2020-10-23 14:25:50.752+00	2020-10-23 14:25:50.752+00
18	18	467484	$2b$10$2moicyjpLBxOztpPIuM2xu/eqXGzu2nNQCqNwotMW1k9OHv8tFTDm	\N	t	\N	\N	2020-10-23 14:26:43.849+00	2020-10-23 14:26:43.849+00
19	19	1356193	$2b$10$k0Zf/X3mHvEtUNkDOB49MOX3g5HegeKhhnG/Bow/lmwPGHfegW.ZG	\N	t	\N	\N	2020-10-23 18:39:20.521+00	2020-10-23 18:39:20.521+00
20	20	3820243	$2b$10$3bE8sSCWni.P5jFTaKFGVegu6P2oQJNMhVALDP7pjvmUGyOueLfbK	\N	t	\N	\N	2020-10-23 18:40:01.46+00	2020-10-23 18:40:01.46+00
21	21	9999001	$2b$10$vYz4LQcfG.KjKdk7ZPU0L.3kNlPqVglLwh5Nnk5mzPmD8gfSl6OUK	\N	t	\N	\N	2020-10-23 18:44:41.903+00	2020-10-23 18:44:41.903+00
22	22	9999002	$2b$10$rg26WIZw8DcLU5FOQXrYfuDooMn6YoNAKvXZoWYoazz3NxK7/rtGy	\N	t	\N	\N	2020-10-23 18:45:17.817+00	2020-10-23 18:45:17.817+00
23	23	1282003	$2b$10$VpNP1cO.zuOSwBr5UU3ngOdY68p9eUq8f5SYOYGX.1rt355mR6.9.	\N	t	\N	\N	2020-10-23 18:49:06.308+00	2020-10-23 18:49:06.308+00
24	24	1922004	$2b$10$eFhXUwz6qXi5.6wPyL2SgOoc8Hh6p19GEg.adte0.m.H3z/QuUkfK	\N	t	\N	\N	2020-10-23 18:49:46.471+00	2020-10-23 18:49:46.471+00
25	25	1821005	$2b$10$kKz5Zn4FbI2DnhmmTdU5iuNAF00LMqInR01OLsbhdwi3Z3S9yBN5W	\N	t	\N	\N	2020-10-23 18:50:25.862+00	2020-10-23 18:50:25.862+00
26	26	3381006	$2b$10$aHR6aOyfB1BSKJzLJkaxi.ypm0A3BMqr2Mkgc.hsG2oXbYR2f07LW	\N	t	\N	\N	2020-10-23 18:50:58.922+00	2020-10-23 18:50:58.922+00
27	27	4927007	$2b$10$njn5n3/W2cqotuI01svd5uMDx199u6i90ea93t7898jVY.GdvvzNK	\N	t	\N	\N	2020-10-23 18:51:40.325+00	2020-10-23 18:51:40.325+00
28	28	3822008	$2b$10$Gka2HGRiKcBLVtmIRSuEjOeh/M5tdpDbL.5RDGhHiLAbnihml/46W	\N	t	\N	\N	2020-10-23 18:52:17.25+00	2020-10-23 18:52:17.25+00
29	29	2829009	$2b$10$Zpvp79/feVC44a5TH3JxHuuhez/QEmCibB1SOzIECzNcVfwM0nMU6	\N	t	\N	\N	2020-10-23 18:52:52.864+00	2020-10-23 18:52:52.864+00
30	30	3937010	$2b$10$ufX7pWv03FJkHZAw3o5.feh4e0Rxka8HNZTcQrT3HsU8fZJ8ZzN9q	\N	t	\N	\N	2020-10-23 18:53:37.283+00	2020-10-23 18:53:37.283+00
31	31	1272011	$2b$10$YBVsZh20jwwN9myuO2B7puVzgNwQ9fCbnzaOaplAPweGPyK/Q0s5i	\N	t	\N	\N	2020-10-23 18:54:09.362+00	2020-10-23 18:54:09.362+00
32	32	1482012	$2b$10$u8Szl9ZX.YZpvxozW7DpVev/vpUHQ5ZpIoPin1bwZ1XBpYvMgLdTS	\N	t	\N	\N	2020-10-23 18:54:39.318+00	2020-10-23 18:54:39.318+00
33	33	3937013	$2b$10$K79ZUqsilYVB6KsNZFngU.OnH.oJ.Y9bdkUu9y/Di44.42sNGA6xG	\N	t	\N	\N	2020-10-23 18:55:04.013+00	2020-10-23 18:55:04.013+00
34	34	5927014	$2b$10$B8aupnfIFglDCjIa/OnOg.VcdYnGhfVvRZGblAWug0GKf3NUP/q6O	\N	t	\N	\N	2020-10-23 18:55:33.48+00	2020-10-23 18:55:33.48+00
35	35	4922015	$2b$10$3eBt5McpCL/6J.buPC3BB.V0N48maHACsTZsOr73iYpyNHE/TuoIi	\N	t	\N	\N	2020-10-23 18:56:10.23+00	2020-10-23 18:56:10.23+00
36	36	3212016	$2b$10$b3busJgQ91AsG2SnK9idzebo/zOAUfcGChIMHHnG4tNdcg0Rj3Xoa	\N	t	\N	\N	2020-10-23 18:56:41.598+00	2020-10-23 18:56:41.598+00
37	37	4827017	$2b$10$xjVT4OlhP56aVMImP17Wv.3cIqx95wHImhlQrqSjal/tsqUcpwaaK	\N	t	\N	\N	2020-10-23 18:57:05.499+00	2020-10-23 18:57:05.499+00
38	38	3927018	$2b$10$3prdA1CO4HPSdsl7Ff4vl.FUoN4Kbta8oaFpvNSc5SP9/Kj5x9iwy	\N	t	\N	\N	2020-10-23 18:57:40.493+00	2020-10-23 18:57:40.493+00
39	39	1827019	$2b$10$O6gQ2OXyXnuIrP0Ph8lzvepXQDfRZmj5Uo6DOCCCrpfosMwneyWc2	\N	t	\N	\N	2020-10-23 18:58:04.972+00	2020-10-23 18:58:04.972+00
40	40	2937020	$2b$10$z5folC61BCZrNsf7wYxsg.sKV7iZsTeWUyD8Y/QLJqNvr0qk.CiR2	\N	t	\N	\N	2020-10-23 18:58:34.198+00	2020-10-23 18:58:34.198+00
41	41	3928021	$2b$10$sbJc4ZMjLjYEAsTGJ7rkx.I5sCpkZ.btvSg9jczXVXU2deiptonJy	\N	t	\N	\N	2020-10-23 18:59:01.734+00	2020-10-23 18:59:01.734+00
42	42	3972022	$2b$10$a96KolM9lvMjG5NXsdg2Ue67//xsfbkcRHem1DTajCo.CZXcQryUa	\N	t	\N	\N	2020-10-23 18:59:40.158+00	2020-10-23 18:59:40.158+00
43	43	1827023	$2b$10$uWsLoVSSxMT.TXGKVg./DeiEtKwlwVa0vqjmrRS36FlIsNXvwDW22	\N	t	\N	\N	2020-10-23 19:00:17.055+00	2020-10-23 19:00:17.055+00
44	44	3927024	$2b$10$j/cbyUz3Cmjrg/PXyxWscORA58ciFTja24H9qvd55L813YM./0nnO	\N	t	\N	\N	2020-10-23 19:00:47.606+00	2020-10-23 19:00:47.606+00
45	45	4827025	$2b$10$KWoavsZdBlcSEdy9Sgz1iuwVssenvKwjcbfEvUnN52NocFtSUWYJS	\N	t	\N	\N	2020-10-23 19:01:16.846+00	2020-10-23 19:01:16.846+00
46	46	3927026	$2b$10$v15sHjJtn2AxJb5gYR2M7eQW/DSlzq7bAvOZoJWXq5o4SZ7Yx7b6S	\N	t	\N	\N	2020-10-23 19:01:57.795+00	2020-10-23 19:01:57.795+00
47	47	4928027	$2b$10$uPeUKeqDcH.UwZcBe3pyceDnWX3mIe7WzpL8.41l4Pxn8DX1HGAmm	\N	t	\N	\N	2020-10-23 19:02:25.813+00	2020-10-23 19:02:25.813+00
48	48	5827028	$2b$10$y7qxPGYgq5FOKHxHV9oi/uIAuMbpU.QZf4WB.0K9glFVXDwz60rDW	\N	t	\N	\N	2020-10-23 19:03:03.152+00	2020-10-23 19:03:03.152+00
49	49	5820029	$2b$10$Dws.Ne5nvY5l7sjQNBw5Q.2tYnFv28CIsKCLZNEiSRFVLEyl4zvAa	\N	t	\N	\N	2020-10-23 19:03:37.223+00	2020-10-23 19:03:37.223+00
50	50	4820030	$2b$10$9FkT6yQCDPfXfUMOXzsxbOzcoruUomwV4rHskFlM2reHu5kSMctYa	\N	t	\N	\N	2020-10-23 19:05:01.166+00	2020-10-23 19:05:01.166+00
51	51	5027031	$2b$10$m64eGH8MG.pSt/tIaTzW7eXcg6kvwJipXHVIvgHhc806Ci3ZM1a7q	\N	t	\N	\N	2020-10-23 19:05:31.987+00	2020-10-23 19:05:31.987+00
52	52	4927033	$2b$10$vCyibm9Ijdo8un0qHukL/.b2UIRhvpFZMGGnElLh.Jf5b9LuMKNtu	\N	t	\N	\N	2020-10-23 19:05:56.714+00	2020-10-23 19:05:56.714+00
53	53	1828034	$2b$10$DSOCS6y2DwoHzKRD5hQl8unZl2SbYGKYhMpS/AmPRkK5MUhYFlQJG	\N	t	\N	\N	2020-10-23 19:06:24.523+00	2020-10-23 19:06:24.523+00
54	54	5820035	$2b$10$K2MrPhPWHQ8VW/9aBPip4uy10Du.k9JPSKghtco.tIhqx/94D7zr2	\N	t	\N	\N	2020-10-23 19:07:36.411+00	2020-10-23 19:07:36.411+00
55	55	1827036	$2b$10$I47.ky4PVifXRbATxZo6bO3BGxx41xSK9lyiQ.OcnAMyjb6c2wFVq	\N	t	\N	\N	2020-10-23 19:08:22.851+00	2020-10-23 19:08:22.851+00
56	56	6826037	$2b$10$5xCB0pSYYK9KOJ7M2HlgremeUxLub7uBHqpITbcKHmSLdSxxmKGTi	\N	t	\N	\N	2020-10-23 19:08:49.402+00	2020-10-23 19:08:49.402+00
57	57	8928038	$2b$10$fs07ZBGepqnmOHJNJwjxFe/lUCDUQPHLgCotVv6EHnIvdBuFIfRB6	\N	t	\N	\N	2020-10-23 19:11:43.966+00	2020-10-23 19:11:43.966+00
58	58	327132	$2b$10$nHRUboljZL90rSG9JwC00O/S03uvokAZQ2CFaQi5s3vbUxhuAVxbe	\N	t	\N	\N	2020-10-26 21:50:48.781+00	2020-10-26 21:50:48.781+00
\.


--
-- TOC entry 3462 (class 0 OID 19920)
-- Dependencies: 208
-- Data for Name: autores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.autores (id_autor, id_investigador, id_publicacion, estado, "createdAt", "updatedAt") FROM stdin;
30	5	18	t	2020-11-25 05:22:49.071+00	2020-11-25 05:22:49.071+00
31	5	19	t	2020-11-25 05:34:09.296+00	2020-11-25 05:34:09.296+00
32	5	20	t	2020-12-03 21:51:01.92+00	2020-12-03 21:51:01.92+00
\.


--
-- TOC entry 3464 (class 0 OID 19928)
-- Dependencies: 210
-- Data for Name: basica_tecnicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.basica_tecnicas (id_basica_tecnica, id_proyecto, tipo, area, tipo_p, carga_h, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3466 (class 0 OID 19939)
-- Dependencies: 212
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (id_comentario, id_persona, id_publicacion, comentario, estado, "createdAt", "updatedAt") FROM stdin;
4	6	20	buen proyecto	t	2020-12-06 23:57:11.801+00	2020-12-06 23:57:11.801+00
6	11	20	comentario de prueba actualizada 3	t	2020-12-07 00:34:49.933+00	2020-12-07 00:44:13.864+00
3	6	20	hola	f	2020-12-06 23:55:54.36+00	2020-12-07 00:45:14.683+00
5	6	20	hola actualizada 2 actualizada....	t	2020-12-06 23:58:08.444+00	2020-12-07 01:20:46.792+00
7	6	20	comentario prueba... actualizada 2	f	2020-12-07 01:15:20.614+00	2020-12-07 01:28:52.336+00
\.


--
-- TOC entry 3468 (class 0 OID 19950)
-- Dependencies: 214
-- Data for Name: contra_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contra_archivos (id_contra_archivo, id_contratado, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3470 (class 0 OID 19961)
-- Dependencies: 216
-- Data for Name: contratados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contratados (id_contratado, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, nombrecompleto, ci, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3472 (class 0 OID 19973)
-- Dependencies: 218
-- Data for Name: conv_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conv_archivos (id_conv_archivo, id_convenio, archivo, nombre, descripcion, id_tipo, tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3474 (class 0 OID 19984)
-- Dependencies: 220
-- Data for Name: convenios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convenios (id_convenio, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, titulo, objetivo, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3476 (class 0 OID 19996)
-- Dependencies: 222
-- Data for Name: curso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.curso_archivos (id_curso_archivo, id_curso, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	G24NI13fInJ5aHAqYvkjsWkH.pdf	documento-curso	Descripcion	10	t	2020-12-07 03:10:00.551+00	2020-12-07 03:10:00.641+00
\.


--
-- TOC entry 3478 (class 0 OID 20007)
-- Dependencies: 224
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cursos (id_curso, id_proyecto, titulo, objetivo, lugar, resumen, asistentes, fechaini, fechafin, horas, estado, "createdAt", "updatedAt") FROM stdin;
1	15	Curso sobre Biologia	Hacer difusion del proyecto de investigación	La Paz	Resumen	100	2020-12-09 04:00:00+00	2020-12-17 04:00:00+00	50	t	2020-12-07 03:10:00.5+00	2020-12-07 03:10:00.5+00
\.


--
-- TOC entry 3480 (class 0 OID 20019)
-- Dependencies: 226
-- Data for Name: evento_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento_archivos (id_evento_archivo, id_evento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3482 (class 0 OID 20030)
-- Dependencies: 228
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos (id_evento, id_proyecto, titulo, objetivo, lugar, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3484 (class 0 OID 20042)
-- Dependencies: 230
-- Data for Name: expo_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expo_archivos (id_expo_archivo, id_exposicion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3486 (class 0 OID 20053)
-- Dependencies: 232
-- Data for Name: exposiciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exposiciones (id_exposicion, id_proyecto, titulo, tema, objetivo, lugar, asistentes, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3488 (class 0 OID 20065)
-- Dependencies: 234
-- Data for Name: expositores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expositores (id_expositor, id_curso, nombres, apellidos, estado, "createdAt", "updatedAt") FROM stdin;
1	1	Garitano		t	2020-12-07 03:10:00.543+00	2020-12-07 03:10:00.543+00
2	1	Moraes		t	2020-12-07 03:10:00.544+00	2020-12-07 03:10:00.544+00
\.


--
-- TOC entry 3490 (class 0 OID 20076)
-- Dependencies: 236
-- Data for Name: financiamientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.financiamientos (id_financiamiento, id_proyecto, fuente, aporte, observacion, estado, "createdAt", "updatedAt") FROM stdin;
1	11	IDH	350000		t	2020-10-29 01:42:05.844+00	2020-10-29 01:43:03.926+00
2	2	UMSA	85714		t	2020-10-29 01:49:13.035+00	2020-10-29 01:50:10.879+00
3	2	Exterior	284285	\N	t	2020-10-29 01:49:13.035+00	2020-10-29 01:50:10.884+00
4	3	Contraparte	23800	Salarios personal y apoyo logistico	t	2020-10-29 01:53:50.826+00	2020-10-29 01:55:50.149+00
5	3	Apoyo directo a UMSA	94080		t	2020-10-29 01:53:50.829+00	2020-10-29 01:55:50.148+00
6	3	Apoyo a traves de la Red de Parques Naturales	67320		t	2020-10-29 01:55:09.484+00	2020-10-29 01:55:50.15+00
7	3	Contraparte	11800	Salario personal y apoyo logistico	t	2020-10-29 01:55:09.484+00	2020-10-29 01:55:50.159+00
8	15	IFM	0	\N	t	2020-10-29 02:12:53.597+00	2020-10-29 02:12:53.597+00
9	15	CIPAM	0		t	2020-10-29 02:12:53.602+00	2020-10-29 02:12:53.602+00
\.


--
-- TOC entry 3492 (class 0 OID 20087)
-- Dependencies: 238
-- Data for Name: fotografias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fotografias (id_fotografia, imagen, descripcion, numero, estado, tipo, "createdAt", "updatedAt") FROM stdin;
2	logo-pdf.jpg	Archivo PDF por default	0	t	imagen	2020-10-23 13:23:56.99004+00	2020-10-23 13:23:56.99004+00
1	photo_default.png	Fotografia por default	0	f	foto	2020-10-23 13:16:53.813598+00	2020-10-23 14:27:54.261+00
4	H5DK77geluxQpOsynNwk5Ypg.jpg	Fotografia de Mónica Graciela Moraes	1	t	foto	2020-10-23 21:03:30.679+00	2020-10-23 21:03:30.717+00
5	-bKTzUw4En_3i0syFPOmbubh.jpeg	Fotografia de Luis Álvaro Garitano-Zavala	1	t	foto	2020-10-23 21:05:27.294+00	2020-10-23 21:05:27.326+00
6	x8h6PMscLvGKKabSFP0BlAK7.jpeg	Fotografia de Darío Achá	1	t	foto	2020-10-23 21:07:12.681+00	2020-10-23 21:07:12.709+00
7	7wZ2mxo96DamrLnou2kWRyoP.png	Fotografia de Adriana Rico	1	t	foto	2020-10-27 15:12:48.207+00	2020-10-27 15:12:48.245+00
8	1N5_pr_xHkx2Ykt1NsO3vTj6.jpeg	Fotografia de Guillermina Miranda	1	t	foto	2020-10-27 15:20:43.968+00	2020-10-27 15:20:43.992+00
9	lRwVQm5r2m9cW8Cn9GsZSExF.jpeg	Fotografia de Eddy Octavio Martinez	1	t	foto	2020-10-27 15:23:41.323+00	2020-10-27 15:23:41.364+00
3	pWY0LZa7CcyEtAdnN6u0TU24.jpg	Fotografia de Boris Vargas	1	f	foto	2020-10-23 14:27:53.887+00	2020-11-16 15:21:20.326+00
12	hGIehFguR46a1gByn5ovCgxH.jpeg	Fotografia de Boris Vargas	2	f	foto	2020-11-16 15:21:19.981+00	2020-11-16 15:59:55.308+00
13	ij6ljxeieYWb23PDRbJRhMe1.jpg	Fotografia de Boris Vargas	3	f	foto	2020-11-16 15:59:54.989+00	2020-11-16 18:42:03.974+00
15	S1EZ7lbgX72BP06-PxgympiS.jpg	Fotografia de Boris Vargas	5	t	foto	2020-11-16 18:43:25.862+00	2020-11-16 18:43:26.017+00
14	z2KfB51w0JSXFM5OwXpSBGtH.jpeg	Fotografia de Boris Vargas	4	f	foto	2020-11-16 18:42:03.573+00	2020-11-16 18:43:26.067+00
\.


--
-- TOC entry 3494 (class 0 OID 20100)
-- Dependencies: 240
-- Data for Name: inv_proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_proyectos (id_inv_proyecto, id_proyecto, id_investigador, estado, "createdAt", "updatedAt") FROM stdin;
1	1	20	t	2020-10-23 19:31:09.537+00	2020-10-23 19:31:09.537+00
2	1	21	t	2020-10-23 19:31:09.537+00	2020-10-23 19:31:09.537+00
3	2	22	t	2020-10-23 20:23:59.188+00	2020-10-23 20:23:59.188+00
4	2	23	t	2020-10-23 20:23:59.189+00	2020-10-23 20:23:59.189+00
5	2	9	t	2020-10-23 20:23:59.194+00	2020-10-23 20:23:59.194+00
6	2	24	t	2020-10-23 20:23:59.201+00	2020-10-23 20:23:59.201+00
7	3	25	t	2020-10-23 20:32:26.533+00	2020-10-23 20:32:26.533+00
8	4	12	t	2020-10-23 20:44:43.421+00	2020-10-23 20:44:43.421+00
9	4	27	t	2020-10-23 20:44:43.421+00	2020-10-23 20:44:43.421+00
10	4	26	t	2020-10-23 20:44:43.427+00	2020-10-23 20:44:43.427+00
11	4	28	t	2020-10-23 20:44:43.422+00	2020-10-23 20:44:43.422+00
12	5	29	t	2020-10-23 20:53:55.627+00	2020-10-23 20:53:55.627+00
13	5	30	t	2020-10-23 20:53:55.628+00	2020-10-23 20:53:55.628+00
14	6	31	t	2020-10-26 00:30:06.825+00	2020-10-26 00:30:06.825+00
15	6	32	t	2020-10-26 00:30:06.836+00	2020-10-26 00:30:06.836+00
16	6	33	t	2020-10-26 00:30:06.843+00	2020-10-26 00:30:06.843+00
17	6	34	t	2020-10-26 00:30:06.846+00	2020-10-26 00:30:06.846+00
18	6	30	t	2020-10-26 00:30:06.85+00	2020-10-26 00:30:06.85+00
19	6	36	t	2020-10-26 00:30:06.863+00	2020-10-26 00:30:06.863+00
20	6	35	t	2020-10-26 00:30:06.847+00	2020-10-26 00:30:06.847+00
21	6	37	t	2020-10-26 00:30:06.876+00	2020-10-26 00:30:06.876+00
22	7	38	t	2020-10-26 02:43:28.051+00	2020-10-26 02:43:28.051+00
23	8	39	t	2020-10-26 04:02:33.303+00	2020-10-26 04:02:33.303+00
24	8	40	t	2020-10-26 04:02:33.312+00	2020-10-26 04:02:33.312+00
25	9	41	t	2020-10-26 04:31:14.314+00	2020-10-26 04:31:14.314+00
26	9	42	t	2020-10-26 04:31:14.314+00	2020-10-26 04:31:14.314+00
28	10	43	t	2020-10-26 16:30:03.871+00	2020-10-26 16:30:03.871+00
29	11	13	t	2020-10-26 21:21:18.038+00	2020-10-26 21:21:18.038+00
30	11	44	t	2020-10-26 21:21:18.049+00	2020-10-26 21:21:18.049+00
31	11	45	t	2020-10-26 21:21:18.05+00	2020-10-26 21:21:18.05+00
32	11	46	t	2020-10-26 21:21:18.051+00	2020-10-26 21:21:18.051+00
33	11	47	t	2020-10-26 21:21:18.051+00	2020-10-26 21:21:18.051+00
34	12	16	t	2020-10-26 21:32:56.943+00	2020-10-26 21:32:56.943+00
35	12	26	t	2020-10-26 21:32:56.943+00	2020-10-26 21:32:56.943+00
36	12	49	t	2020-10-26 21:32:56.945+00	2020-10-26 21:32:56.945+00
37	12	50	t	2020-10-26 21:32:56.946+00	2020-10-26 21:32:56.946+00
38	13	29	t	2020-10-26 21:53:33.83+00	2020-10-26 21:53:33.83+00
39	13	51	t	2020-10-26 21:53:33.831+00	2020-10-26 21:53:33.831+00
40	13	57	t	2020-10-26 21:53:33.832+00	2020-10-26 21:53:33.832+00
41	15	52	t	2020-10-27 13:28:29.49+00	2020-10-27 13:28:29.49+00
42	15	53	t	2020-10-27 13:28:29.491+00	2020-10-27 13:28:29.491+00
43	16	11	t	2020-10-27 13:39:03.749+00	2020-10-27 13:39:03.749+00
45	18	12	t	2020-10-27 14:15:45.75+00	2020-10-27 14:15:45.75+00
46	18	26	t	2020-10-27 14:15:45.751+00	2020-10-27 14:15:45.751+00
47	18	45	t	2020-10-27 14:15:45.751+00	2020-10-27 14:15:45.751+00
48	18	55	t	2020-10-27 14:15:45.758+00	2020-10-27 14:15:45.758+00
49	19	2	t	2020-10-27 14:24:54.747+00	2020-10-27 14:24:54.747+00
50	19	56	t	2020-10-27 14:24:54.753+00	2020-10-27 14:24:54.753+00
51	20	2	t	2020-10-27 14:45:26.662+00	2020-10-27 14:45:26.662+00
52	20	9	t	2020-10-27 14:45:26.665+00	2020-10-27 14:45:26.665+00
53	20	24	t	2020-10-27 14:45:26.679+00	2020-10-27 14:45:26.679+00
54	21	2	t	2020-10-27 14:49:30.21+00	2020-10-27 14:49:30.21+00
55	21	9	t	2020-10-27 14:49:30.217+00	2020-10-27 14:49:30.217+00
56	23	21	t	2020-11-17 01:23:57.907+00	2020-11-17 01:23:57.907+00
\.


--
-- TOC entry 3496 (class 0 OID 20108)
-- Dependencies: 242
-- Data for Name: inv_tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_tipos (id_inv_tipo, tipo, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Titular	Trabaja con proyectos	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
2	Asociado con proyecto	Tiene un proyecto asociado	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
3	Asociado por invitación	Invitado por la UMSA, por tiempo determinado	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
\.


--
-- TOC entry 3498 (class 0 OID 20119)
-- Dependencies: 244
-- Data for Name: investigadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigadores (id_investigador, id_persona, id_inv_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	2	3	t	2020-10-23 13:32:01.217+00	2020-10-23 13:32:01.217+00
2	3	1	t	2020-10-23 14:07:23.905+00	2020-10-23 14:07:23.905+00
3	4	1	t	2020-10-23 14:08:13.407+00	2020-10-23 14:08:13.407+00
4	5	1	t	2020-10-23 14:09:00.31+00	2020-10-23 14:09:00.31+00
5	6	1	t	2020-10-23 14:10:18.584+00	2020-10-23 14:10:18.584+00
6	7	1	t	2020-10-23 14:11:09.51+00	2020-10-23 14:11:09.51+00
7	8	1	t	2020-10-23 14:12:00.026+00	2020-10-23 14:12:00.026+00
8	9	1	t	2020-10-23 14:14:03.063+00	2020-10-23 14:14:03.063+00
9	10	1	t	2020-10-23 14:18:46.55+00	2020-10-23 14:18:46.55+00
10	11	1	t	2020-10-23 14:19:38.03+00	2020-10-23 14:19:38.03+00
11	12	1	t	2020-10-23 14:20:36.656+00	2020-10-23 14:20:36.656+00
12	13	1	t	2020-10-23 14:21:19.165+00	2020-10-23 14:21:19.165+00
13	14	1	t	2020-10-23 14:22:08.287+00	2020-10-23 14:22:08.287+00
14	15	1	t	2020-10-23 14:23:11.745+00	2020-10-23 14:23:11.745+00
15	16	1	t	2020-10-23 14:24:14.06+00	2020-10-23 14:24:14.06+00
16	17	1	t	2020-10-23 14:25:50.835+00	2020-10-23 14:25:50.835+00
17	18	2	t	2020-10-23 14:26:43.933+00	2020-10-23 14:26:43.933+00
18	19	2	t	2020-10-23 18:39:20.609+00	2020-10-23 18:39:20.609+00
19	20	3	t	2020-10-23 18:40:01.542+00	2020-10-23 18:40:01.542+00
20	21	3	t	2020-10-23 18:44:41.988+00	2020-10-23 18:44:41.988+00
21	22	3	t	2020-10-23 18:45:17.91+00	2020-10-23 18:45:17.91+00
22	23	2	t	2020-10-23 18:49:06.398+00	2020-10-23 18:49:06.398+00
23	24	3	t	2020-10-23 18:49:46.554+00	2020-10-23 18:49:46.554+00
24	25	3	t	2020-10-23 18:50:25.945+00	2020-10-23 18:50:25.945+00
25	26	3	t	2020-10-23 18:50:59.006+00	2020-10-23 18:50:59.006+00
26	27	3	t	2020-10-23 18:51:40.418+00	2020-10-23 18:51:40.418+00
27	28	3	t	2020-10-23 18:52:17.335+00	2020-10-23 18:52:17.335+00
28	29	3	t	2020-10-23 18:52:52.951+00	2020-10-23 18:52:52.951+00
29	30	3	t	2020-10-23 18:53:37.367+00	2020-10-23 18:53:37.367+00
30	31	3	t	2020-10-23 18:54:09.443+00	2020-10-23 18:54:09.443+00
31	32	3	t	2020-10-23 18:54:39.4+00	2020-10-23 18:54:39.4+00
32	33	3	t	2020-10-23 18:55:04.093+00	2020-10-23 18:55:04.093+00
33	34	3	t	2020-10-23 18:55:33.562+00	2020-10-23 18:55:33.562+00
34	35	3	t	2020-10-23 18:56:10.313+00	2020-10-23 18:56:10.313+00
35	36	2	t	2020-10-23 18:56:41.68+00	2020-10-23 18:56:41.68+00
36	37	3	t	2020-10-23 18:57:05.581+00	2020-10-23 18:57:05.581+00
37	38	3	t	2020-10-23 18:57:40.586+00	2020-10-23 18:57:40.586+00
38	39	3	t	2020-10-23 18:58:05.055+00	2020-10-23 18:58:05.055+00
39	40	3	t	2020-10-23 18:58:34.289+00	2020-10-23 18:58:34.289+00
40	41	3	t	2020-10-23 18:59:01.816+00	2020-10-23 18:59:01.816+00
41	42	3	t	2020-10-23 18:59:40.238+00	2020-10-23 18:59:40.238+00
42	43	3	t	2020-10-23 19:00:17.136+00	2020-10-23 19:00:17.136+00
43	44	3	t	2020-10-23 19:00:47.687+00	2020-10-23 19:00:47.687+00
44	45	3	t	2020-10-23 19:01:16.931+00	2020-10-23 19:01:16.931+00
45	46	3	t	2020-10-23 19:01:57.876+00	2020-10-23 19:01:57.876+00
46	47	2	t	2020-10-23 19:02:25.897+00	2020-10-23 19:02:25.897+00
47	48	3	t	2020-10-23 19:03:03.235+00	2020-10-23 19:03:03.235+00
48	49	1	t	2020-10-23 19:03:37.305+00	2020-10-23 19:03:37.305+00
49	50	3	t	2020-10-23 19:05:01.252+00	2020-10-23 19:05:01.252+00
50	51	3	t	2020-10-23 19:05:32.069+00	2020-10-23 19:05:32.069+00
51	52	3	t	2020-10-23 19:05:56.797+00	2020-10-23 19:05:56.797+00
52	53	3	t	2020-10-23 19:06:24.605+00	2020-10-23 19:06:24.605+00
53	54	3	t	2020-10-23 19:07:36.495+00	2020-10-23 19:07:36.495+00
54	55	3	t	2020-10-23 19:08:22.931+00	2020-10-23 19:08:22.931+00
55	56	3	t	2020-10-23 19:08:49.486+00	2020-10-23 19:08:49.486+00
56	57	3	t	2020-10-23 19:11:44.058+00	2020-10-23 19:11:44.058+00
57	58	3	t	2020-10-26 21:50:48.872+00	2020-10-26 21:50:48.872+00
\.


--
-- TOC entry 3500 (class 0 OID 20127)
-- Dependencies: 246
-- Data for Name: lugar_desarrollos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lugar_desarrollos (id_lugar_desarrollo, id_proyecto, departamento, provincia, municipio, localidad, latmax, lonmax, latmin, lonmin, estado, "createdAt", "updatedAt") FROM stdin;
1	3	La Paz	Pedro Domingo Murillo	La Paz	La Paz	-16.53797250	-68.06823938	-16.53798170	-68.06823000	t	2020-10-29 01:32:27.507+00	2020-11-04 18:41:20.097+00
2	15	La Paz	Aroma	La Paz	La Paz	-16.53781688	-68.06832082	-16.53787345	-68.06848444	t	2020-10-29 02:14:03.926+00	2020-12-07 03:04:34.334+00
\.


--
-- TOC entry 3502 (class 0 OID 20138)
-- Dependencies: 248
-- Data for Name: nota_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_archivos (id_nota_archivo, id_nota_prensa, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3504 (class 0 OID 20149)
-- Dependencies: 250
-- Data for Name: nota_prensas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_prensas (id_nota_prensa, id_proyecto, titulo, objetivo, lugar, prensa, fecha, resumen, estado, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3506 (class 0 OID 20160)
-- Dependencies: 252
-- Data for Name: permiso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permiso_archivos (id_permiso_archivo, id_proyecto, tipo, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	solicitud	kysS55m9gccjtl3zBEwEfmwq.pdf	SolicitudRefrendarResolucionBiologia	solicitud a Biologia	5	t	2020-10-23 20:07:22.266+00	2020-10-23 20:07:22.331+00
2	1	otorgacion	WSzDZx9oAbxPbICjtGTi7GDZ.pdf	AprobacionRefrendarResolucionBiologia	otorgacion Biologia	5	t	2020-10-23 20:08:32.865+00	2020-10-23 20:08:32.92+00
3	3	solicitud	l4XI2cfrp-pU0sdKryRwijKX.pdf	Solicitud Subvension	resumen de solicitud subvension	7	t	2020-10-23 20:38:57.424+00	2020-10-23 20:38:57.481+00
4	10	solicitud	2CPJB9J_LIwNKhj7QPhZGhRl.pdf	SolicitudRefrendarResolucion	documento Solicitud	5	t	2020-10-26 18:31:22.718+00	2020-10-26 18:31:22.771+00
5	10	otorgacion	js-3R6cZwd9CtkjhK6fdPt3u.pdf	AprobacionRefrendarResolucion	documento de otorgación de aprobación	5	t	2020-10-26 18:32:11.374+00	2020-10-26 18:32:11.417+00
7	12	otorgacion	UYyKrJf5VmJfmyLVpBYQuMjC.pdf	OtorgacionRefrendarResolucion	documento Aprobacion	5	t	2020-10-26 21:34:45.891+00	2020-10-26 21:34:45.958+00
6	12	solicitud	f9vlHNum4KqayJxspgfeEST1.pdf	SolicitudRefrendarResolucion	documento solicitud	5	t	2020-10-26 21:34:16.913+00	2020-10-26 21:35:01.133+00
8	12	solicitud	Uzf-H7styl2XrwD5JolmedcK.pdf	SolicitudAprobacionProyectosDeInvestigacion	documento solicitud de cierre de proyecto	6	t	2020-10-26 21:36:41.588+00	2020-10-26 21:36:41.642+00
9	13	solicitud	TtJwqfvrSXn_HPFFFh8wJiBn.pdf	SolicitudRefrendarResolucion	Solicitud	5	t	2020-10-26 21:57:28.245+00	2020-10-26 21:57:28.291+00
10	13	otorgacion	AEsbWXmNn0O-9fGoS3E7pyZh.pdf	OtorgacionRefrendarResolucion	Aprobacion de Refrendar Resolucion	5	t	2020-10-26 21:57:54.75+00	2020-10-26 21:57:54.823+00
11	16	solicitud	LG8Fcm9gbfC9uxCjsiJQI8uf.pdf	SolicitudRefrensarResolucion	documento solicitud	5	t	2020-10-27 13:57:42.286+00	2020-10-27 13:57:42.331+00
12	16	otorgacion	zvL2OlT1Mtaf07R704DMcYw8.pdf	OtorgacionRefrensarResolucion	documento aprobación	5	t	2020-10-27 13:58:17.748+00	2020-10-27 13:58:17.857+00
13	19	solicitud	dgRH7h1P7id2qobQA1Tx--AO.pdf	SolicitudRefrendarResolucion	documento solicitud	5	t	2020-10-27 14:26:42.61+00	2020-10-27 14:26:42.658+00
14	19	otorgacion	YM4ESXfQI57iFSveulyuHejl.pdf	OtorgacionRefrendarResolucion	documento de aprobacion	5	t	2020-10-27 14:27:05.443+00	2020-10-27 14:27:05.489+00
15	22	solicitud	W1JDtPVCTdD_1WG6LCvJJAUx.pdf	SolicitudaprobarEjecucion	documento solicitud bioetica	5	t	2020-10-27 15:36:01.334+00	2020-10-27 15:36:01.377+00
16	22	otorgacion	HjQHSwXfWld6aRPL4l0AGd25.pdf	OtorgacionAprobarEjecucion	aprobacion de biotetica	5	t	2020-10-27 15:36:16.781+00	2020-10-27 15:36:16.83+00
\.


--
-- TOC entry 3508 (class 0 OID 20171)
-- Dependencies: 254
-- Data for Name: personas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personas (id_persona, id_fotografia, paterno, materno, nombres, ci, sexo, estado_civil, url, fec_nacimiento, ciudad, provincia, pais, direccion1, direccion2, correo, telefono, celular, lenguaje, grado_academico, formacion_pro, formacion_adi, habilidades, conclusion, tema, color, estado, "createdAt", "updatedAt", archivo) FROM stdin;
4	1	Amurrio	Ordoñez	Patricia Janneth	333225	\N	\N	\N	\N	\N	\N	\N	\N	\N	pamurrio@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:08:13.296+00	2020-10-23 14:08:13.296+00	\N
5	1	García	Estigarribia	Emilia	221242	\N	\N	\N	\N	\N	\N	\N	\N	\N	egarciae@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:09:00.189+00	2020-10-23 14:09:00.189+00	\N
7	1	Maldonado	Goyzueta	Carla Brenda	4746052	\N	\N	\N	\N	\N	\N	\N	\N	\N	cmaldonado@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:11:09.377+00	2020-10-23 14:11:09.377+00	\N
8	1	Marín	Pantoja	Rubén Reynaldo	464519	\N	\N	\N	\N	\N	\N	\N	\N	\N	rmarin@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:11:59.911+00	2020-10-23 14:11:59.911+00	\N
10	1	Molina	Arzabe	Carlos Israel	4805941	\N	\N	\N	\N	\N	\N	\N	\N	\N	cmolinaa@fcpn.edu.bo	\N	\N	\N	D. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:18:46.433+00	2020-10-23 14:18:46.433+00	\N
12	1	Naoki		Kázuya	E0024263	\N	\N	\N	\N	\N	\N	\N	\N	\N	knaoki@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:20:36.537+00	2020-10-23 14:20:36.537+00	\N
13	1	Osorio	Zamora	Francisco Gerardo	2227535	\N	\N	\N	\N	\N	\N	\N	\N	\N	fosorio@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:21:19.047+00	2020-10-23 14:21:19.047+00	\N
14	1	Pacheco	Acosta	Luis Fernando	2017842	\N	\N	\N	\N	\N	\N	\N	\N	\N	lpacheco@fcpn.edu.bo	\N	\N	\N	D. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:22:08.173+00	2020-10-23 14:22:08.173+00	\N
15	1	Pérez	Béjar	María Esther	3368666	\N	\N	\N	\N	\N	\N	\N	\N	\N	eperez@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:23:11.632+00	2020-10-23 14:23:11.632+00	\N
16	1	Pinto	Mendieta	Julio Jorge	489921	\N	\N	\N	\N	\N	\N	\N	\N	\N	jpinto@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:24:13.953+00	2020-10-23 14:24:13.953+00	\N
18	1	Valenzuela	Celis	Julieta Esther	467484	\N	\N	\N	\N	\N	\N	\N	\N	\N	evalenzuela@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:26:43.822+00	2020-10-23 14:26:43.822+00	\N
19	1	Lopez	Calderon	Ramiro	1356193	\N	\N	\N	\N	\N	\N	\N	\N	\N	rlopez@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:39:20.484+00	2020-10-23 18:39:20.484+00	\N
20	1	Saavedra	Agramont	Francisco	3820243	\N	\N	\N	\N	\N	\N	\N	\N	\N	fsaavedra@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:40:01.428+00	2020-10-23 18:40:01.428+00	\N
21	1	Tognelli		Marcelo	9999001	\N	\N	\N	\N	\N	\N	\N	\N	\N	001@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:44:41.878+00	2020-10-23 18:44:41.878+00	\N
22	1	Arellano		Stephanie	9999002	\N	\N	\N	\N	\N	\N	\N	\N	\N	002@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:45:17.784+00	2020-10-23 18:45:17.784+00	\N
23	1	Lazzaro		Xavier	1282003	\N	\N	\N	\N	\N	\N	\N	\N	\N	003@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:49:06.28+00	2020-10-23 18:49:06.28+00	\N
24	1	Quezada		Jorge	1922004	\N	\N	\N	\N	\N	\N	\N	\N	\N	004@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:49:46.446+00	2020-10-23 18:49:46.446+00	\N
25	1	Morales	B.	Isabel	1821005	\N	\N	\N	\N	\N	\N	\N	\N	\N	005@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:50:25.835+00	2020-10-23 18:50:25.835+00	\N
26	1	Ginart		Daniel	3381006	\N	\N	\N	\N	\N	\N	\N	\N	\N	006@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:50:58.896+00	2020-10-23 18:50:58.896+00	\N
27	1	Moya	D.	M. Isabel	4927007	\N	\N	\N	\N	\N	\N	\N	\N	\N	007@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:51:40.302+00	2020-10-23 18:51:40.302+00	\N
28	1	Roldan		Alejandra	3822008	\N	\N	\N	\N	\N	\N	\N	\N	\N	008@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:52:17.225+00	2020-10-23 18:52:17.225+00	\N
29	1	Lopez		Heidy	2829009	\N	\N	\N	\N	\N	\N	\N	\N	\N	009@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:52:52.841+00	2020-10-23 18:52:52.841+00	\N
30	1	Zenteno		Freddy	3937010	\N	\N	\N	\N	\N	\N	\N	\N	\N	010@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:53:37.257+00	2020-10-23 18:53:37.257+00	\N
31	1	Gallegos		Silvia	1272011	\N	\N	\N	\N	\N	\N	\N	\N	\N	011@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:54:09.334+00	2020-10-23 18:54:09.334+00	\N
32	1	Hurtado		Rosember	1482012	\N	\N	\N	\N	\N	\N	\N	\N	\N	012@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:54:39.293+00	2020-10-23 18:54:39.293+00	\N
33	1	Arranzola		Susana	3937013	\N	\N	\N	\N	\N	\N	\N	\N	\N	013@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:55:03.988+00	2020-10-23 18:55:03.988+00	\N
34	1	Vargas		Viviana	5927014	\N	\N	\N	\N	\N	\N	\N	\N	\N	014@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:55:33.451+00	2020-10-23 18:55:33.451+00	\N
35	1	Cornejo		Maritza	4922015	\N	\N	\N	\N	\N	\N	\N	\N	\N	015@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:56:10.2+00	2020-10-23 18:56:10.2+00	\N
36	1	Toledo		Gabriel	3212016	\N	\N	\N	\N	\N	\N	\N	\N	\N	016@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:56:41.572+00	2020-10-23 18:56:41.572+00	\N
37	1	Paniagua		Narel	4827017	\N	\N	\N	\N	\N	\N	\N	\N	\N	017@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:57:05.473+00	2020-10-23 18:57:05.473+00	\N
38	1	Cadima		Ximena	3927018	\N	\N	\N	\N	\N	\N	\N	\N	\N	018@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:57:40.47+00	2020-10-23 18:57:40.47+00	\N
39	1	Mendoza		Magaly	1827019	\N	\N	\N	\N	\N	\N	\N	\N	\N	019@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:58:04.943+00	2020-10-23 18:58:04.943+00	\N
40	1	Martin		Ruben	2937020	\N	\N	\N	\N	\N	\N	\N	\N	\N	020@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:58:34.176+00	2020-10-23 18:58:34.176+00	\N
41	1	Apaza		Roberto	3928021	\N	\N	\N	\N	\N	\N	\N	\N	\N	021@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:59:01.709+00	2020-10-23 18:59:01.709+00	\N
42	1	Blasón	Bayo	Laura	3972022	\N	\N	\N	\N	\N	\N	\N	\N	\N	022@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 18:59:40.129+00	2020-10-23 18:59:40.129+00	\N
43	1	Llorente	Espino	Miguel	1827023	\N	\N	\N	\N	\N	\N	\N	\N	\N	023@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:00:17.033+00	2020-10-23 19:00:17.033+00	\N
44	1	Leveau		Lucas	3927024	\N	\N	\N	\N	\N	\N	\N	\N	\N	024@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:00:47.579+00	2020-10-23 19:00:47.579+00	\N
45	1	Maldonado		Diego	4827025	\N	\N	\N	\N	\N	\N	\N	\N	\N	025@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:01:16.823+00	2020-10-23 19:01:16.823+00	\N
46	1	Revollo		Susana	3927026	\N	\N	\N	\N	\N	\N	\N	\N	\N	026@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:01:57.765+00	2020-10-23 19:01:57.765+00	\N
47	1	Negroes		Nuno	4928027	\N	\N	\N	\N	\N	\N	\N	\N	\N	027@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:02:25.786+00	2020-10-23 19:02:25.786+00	\N
48	1	Arteaga		Luis	5827028	\N	\N	\N	\N	\N	\N	\N	\N	\N	028@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:03:03.128+00	2020-10-23 19:03:03.128+00	\N
49	1	Porter		Leila	5820029	\N	\N	\N	\N	\N	\N	\N	\N	\N	029@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:03:37.201+00	2020-10-23 19:03:37.201+00	\N
50	1	Duran	Toledo	Pamela	4820030	\N	\N	\N	\N	\N	\N	\N	\N	\N	030@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:05:01.142+00	2020-10-23 19:05:01.142+00	\N
52	1	Larrea		Daniel	4927033	\N	\N	\N	\N	\N	\N	\N	\N	\N	033@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:05:56.693+00	2020-10-23 19:05:56.693+00	\N
53	1	Altimiras		Jordi	1828034	\N	\N	\N	\N	\N	\N	\N	\N	\N	034@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:06:24.496+00	2020-10-23 19:06:24.496+00	\N
54	1	Arce		Orlando	5820035	\N	\N	\N	\N	\N	\N	\N	\N	\N	035@fcpn.edu.bo	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:07:36.386+00	2020-10-23 19:07:36.386+00	\N
55	1	Alandia		Erika	1827036	\N	\N	\N	\N	\N	\N	\N	\N	\N	036@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:08:22.829+00	2020-10-23 19:08:22.829+00	\N
56	1	Salazar-Brazo		Jorge	6826037	\N	\N	\N	\N	\N	\N	\N	\N	\N	037@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:08:49.378+00	2020-10-23 19:08:49.378+00	\N
57	1	Bravo		Raiza	8928038	\N	\N	\N	\N	\N	\N	\N	\N	\N	038@fcpn.edu.bo	\N	\N	\N	Dipl.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:11:43.939+00	2020-10-23 19:11:43.939+00	\N
3	6	Achá	Cordero	Darío	3374109	\N	\N	\N	\N	\N	\N	\N	\N	\N	dacha@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:07:23.745+00	2020-10-23 21:07:12.954+00	\N
58	1	Roque		Natalio	327132	\N	\N	\N	\N	\N	\N	\N	\N	\N	032@fcpn.edu.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-26 21:50:48.751+00	2020-10-26 21:50:48.751+00	\N
9	8	Miranda	Torrez	Guillermina	1316562	\N	\N	\N	\N	\N	\N	\N	\N	\N	gmiranda@umsa.bo	\N	\N	\N	M. Sc.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:14:02.946+00	2020-10-27 15:20:44.34+00	\N
17	7	Rico	Cernohorska	Adriana	2726683-1J	\N	\N	\N	\N	\N	\N	\N	\N	\N	arico@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:25:50.72+00	2020-10-27 15:12:48.407+00	\N
51	9	Martinez	Avendaño	Eddy Octavio	5027031	\N	\N	\N	\N	\N	\N	\N	\N	\N	031@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 19:05:31.963+00	2020-10-27 15:23:41.59+00	\N
1	1	administrador	\N	usuario	00000000	\N	\N	\N	\N	\N	\N	\N	\N	\N	institutoecologiaumsa@gmail.com	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 13:16:53.813598+00	2020-11-23 01:49:35.659+00	\N
2	15	Vargas	Paucara	Boris	9884972	\N	\N	\N	\N	\N	\N	\N	\N	\N	borisvargaspaucara@gmail.com	\N	\N	\N	Lic.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 13:32:01.048+00	2020-11-25 18:47:15.423+00	\N
11	4	Moraes	Ramírez	Mónica Graciela	476807	\N	\N	\N	\N	\N	\N	\N	\N	\N	mmoraes@fcpn.edu.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-orange	t	2020-10-23 14:19:37.912+00	2020-12-07 01:30:19.885+00	\N
6	5	Garitano-Zavala	Burgos	Luis Álvaro	3376712	Masculino	\N	\N	\N	La Paz	\N	Bolivia	\N	\N	agaritanozavala@umsa.bo	\N	\N	\N	Ph. D.	\N	\N	\N	\N		theme-cyan	t	2020-10-23 14:10:18.472+00	2020-12-07 01:37:34.307+00	RNiQslnFJNxGNLBQCi11lobQ.pdf
\.


--
-- TOC entry 3510 (class 0 OID 20185)
-- Dependencies: 256
-- Data for Name: peti_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peti_archivos (id_peti_archivo, id_peticion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	NuOsgZ3eIQyTKJCo2HPPbELT.pdf	documento-peticio	Descripcion peticion.	16	t	2020-12-07 03:11:23.152+00	2020-12-07 04:11:21.229+00
\.


--
-- TOC entry 3512 (class 0 OID 20196)
-- Dependencies: 258
-- Data for Name: peticiones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peticiones (id_peticion, id_proyecto, id_investigador, tipo, motivos, detalle, estado, "createdAt", "updatedAt") FROM stdin;
1	15	52	Manifestaciones	Realizar un peticion de un archivo	Detalles de la peticion a coordinador.	t	2020-12-07 03:11:23.118+00	2020-12-07 04:11:13.208+00
\.


--
-- TOC entry 3514 (class 0 OID 20207)
-- Dependencies: 260
-- Data for Name: proy_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proy_archivos (id_proy_archivo, id_proyecto, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	gXln8dnDTdibR35ZkYyhl7fZ.pdf	Inextenso	documento inextenso	1	t	2020-10-23 20:02:33.483+00	2020-10-23 20:02:33.592+00
2	1	QkYwIL1iqXwtVwH2nN-Lh1dv.pdf	Titulo	caratula de proyecto	7	t	2020-10-23 20:03:31.682+00	2020-10-23 20:03:31.728+00
3	1	XunYp-TiyIktywXyjFrk8gUl.pdf	formulario	documento formulario	1	t	2020-10-23 20:04:41.029+00	2020-10-23 20:04:41.208+00
4	1	U9ac27V_Y_hhJ7lxMyKs4hvW.pdf	ResolucionEjecucionProyecto	Resolucion para ejecutar proyecto	1	t	2020-10-23 20:09:04.261+00	2020-10-23 20:09:04.339+00
5	2	f_FuZV65Fv5KwLkzCYJY2KBS.pdf	Inextenso	documento inextenso	1	t	2020-10-23 20:25:42.588+00	2020-10-23 20:25:42.658+00
6	2	VL2RMimUwXjedp0KOII84ij9.pdf	formulario	formulario de proyecto	1	t	2020-10-23 20:25:42.592+00	2020-10-23 20:25:42.669+00
7	2	4E6aiPKYMnmT4QC95FgmMcnm.pdf	Titulo	Caratula del proyecto	7	t	2020-10-23 20:26:07.089+00	2020-10-23 20:26:07.149+00
9	3	VdqTgwxReYGDeFOVYcZY2x4L.pdf	inextenso	documento inextenso	1	t	2020-10-23 20:33:08.675+00	2020-10-23 20:33:08.739+00
8	3	J3Uw-Z8mZHB9HKyMNJWvritW.pdf	formulario	documento formulario	1	t	2020-10-23 20:33:08.669+00	2020-10-23 20:33:08.742+00
10	3	q430iM8zB55U5ynque7QenxI.pdf	Titulo	caratula de proyecto	7	t	2020-10-23 20:33:20.064+00	2020-10-23 20:33:20.121+00
11	3	NH-Ek_PU341u5PgPx-iwNYvl.pdf	Otros	correo electronico	7	t	2020-10-23 20:34:42.286+00	2020-10-23 20:34:42.336+00
14	4	LVcIdfKx5aSnktRPdcmEBS-k.pdf	Inextenso	documento inextenso	1	t	2020-10-23 20:45:48.664+00	2020-10-23 20:45:48.746+00
12	4	N_sDkkJ7aVjBJDSego1pCwSx.pdf	fomularioMedio	documento formulario medio	1	t	2020-10-23 20:45:48.654+00	2020-10-23 20:45:48.765+00
13	4	xQJfN5kZAy0SGGQB4Jhjbao-.pdf	formularioFinal	documento formulario final	1	t	2020-10-23 20:45:48.659+00	2020-10-23 20:45:48.772+00
15	4	Tt1bZd1iwsR4C4fSa0b6HyO7.pdf	ResolucionAprobacionFinal	documento final 	6	t	2020-10-23 20:47:24.193+00	2020-10-23 20:47:24.252+00
17	5	BXoOLx_GuQnVTZGp5E48Ao2L.pdf	Inextenso	documento inextenso	1	t	2020-10-23 20:55:47.794+00	2020-10-23 20:55:47.86+00
16	5	_2Q3TM7WOCmD2EVyoK5rcVqL.pdf	formulario	documento formulario	1	t	2020-10-23 20:55:47.792+00	2020-10-23 20:55:47.86+00
18	5	9KJGMEr924RFuuN350NmxeXX.pdf	Titulo	caratula de proyecto	7	t	2020-10-23 20:56:37.096+00	2020-10-23 20:56:37.155+00
19	5	aFb4nPIiUwTir9TWoPkJr2hP.pdf	memorandum	memorandum	7	t	2020-10-23 21:01:29.633+00	2020-10-23 21:01:29.689+00
20	6	JV2MjAWZGxPIaWPFRa09CONr.pdf	Titulo	Caratula proyecto	7	t	2020-10-26 02:09:03.334+00	2020-10-26 02:09:03.419+00
21	6	s9SQ36Xir6oeKu_4EKo5pmV5.pdf	Inextenso	documento inextenso	1	t	2020-10-26 02:09:29.576+00	2020-10-26 02:09:29.624+00
22	6	FK5v8XHwJSxF2QQDbMJjHRMt.pdf	formulario	documento formulario	1	t	2020-10-26 02:09:52.072+00	2020-10-26 02:09:52.148+00
23	7	TkVyXL3CQB5A5ewnafQUJs5K.pdf	Formulario información	documento formulario	1	t	2020-10-26 02:46:02.185+00	2020-10-26 02:46:02.257+00
24	7	Sx2YQHePX7A3NWfwjLaJhbcg.pdf	Titulo	Carátula de proyecto	7	t	2020-10-26 02:46:31.28+00	2020-10-26 02:46:31.324+00
25	7	xUD7g6yVJAFseOoDr_zwrxKI.pdf	Inextenso	documento inextenso	1	t	2020-10-26 02:47:22.112+00	2020-10-26 02:47:22.156+00
26	8	5TnuED0DsflX9JCFJWWp40CM.pdf	Titulo	Carátula proyecto	7	t	2020-10-26 04:05:17.713+00	2020-10-26 04:05:17.754+00
27	8	MINOGiIWsUqsrc-MXW93lXD8.pdf	formulario	documento formulario	1	t	2020-10-26 04:06:00.721+00	2020-10-26 04:06:00.788+00
28	8	RFCM4eewdBpotnTxVJFGaArw.pdf	FormularioInformacionProyecto	documento información formulario	1	t	2020-10-26 04:06:00.721+00	2020-10-26 04:06:00.794+00
29	8	rQ_9T5HLSJlensa3obtPE80N.pdf	inextenso	documento inextenso	1	t	2020-10-26 04:06:16.972+00	2020-10-26 04:06:17.012+00
30	9	67xsgwrQiflpLdxN8xpfpaVM.pdf	Titulo	Carátula de proyecto	7	t	2020-10-26 16:01:50.496+00	2020-10-26 16:01:50.542+00
31	9	3ZBrRxOfauNP1siZyB3E4XBW.pdf	Inextenso	documento inextenso	1	t	2020-10-26 16:02:20.405+00	2020-10-26 16:02:20.473+00
32	9	92F92gLJKqq2eURHEni-HB7X.pdf	formulario	documento formulario	1	t	2020-10-26 16:02:20.407+00	2020-10-26 16:02:20.479+00
33	10	QgOyHorvSjqyN_t1pjcSnVjD.pdf	Titulo	 Carátula de proyecto	7	t	2020-10-26 18:29:38.854+00	2020-10-26 18:29:38.897+00
34	10	pAMZ1b51NR4374BaZZwjVADi.pdf	Inextenso	documento inextenso	1	t	2020-10-26 18:30:13.707+00	2020-10-26 18:30:13.774+00
35	10	JSumJJsncea5nHJOc3abmfNI.pdf	formulario	documento formulario	1	t	2020-10-26 18:30:13.714+00	2020-10-26 18:30:13.782+00
36	10	kjiLEy0VkoSxU7bQxPSTvEYv.pdf	Resolución	Resolución de ejecución de proyecto	1	t	2020-10-26 18:30:58.65+00	2020-10-26 18:30:58.693+00
37	11	i6LoUmlW8yjbbZxfZPho19Lf.pdf	Inextenso	documento inextenso	1	t	2020-10-26 21:22:19.187+00	2020-10-26 21:22:19.255+00
38	11	fyrw4Ta6vHUGNjE1nAByT61x.pdf	formulario	documento formulario final	1	t	2020-10-26 21:22:19.191+00	2020-10-26 21:22:19.265+00
39	11	U8-3Pw8Cuqw6aUbJpp51RHvf.pdf	Titulo	Carátula de proyecto	7	t	2020-10-26 21:22:40.372+00	2020-10-26 21:22:40.412+00
40	11	u7MNZ1Jp7KcQOP5nkVeHUa4u.pdf	correoSolicitudInformeFinal	correo electrónico para pedir informe final	7	t	2020-10-26 21:23:36.676+00	2020-10-26 21:23:36.725+00
41	11	YZRwjAIkcHHBTuCIOi4FTrjX.pdf	InformaFinal	documento informe tecnico final	6	t	2020-10-26 21:30:04.683+00	2020-10-26 21:30:04.807+00
42	12	NnqK4LbKPeqEFZ6huxXxM7YC.pdf	Titulo	Carátula de proyecto	7	t	2020-10-26 21:33:28.488+00	2020-10-26 21:33:28.528+00
43	12	-Vtfz6Rp7QeYsA1fVrmrQfOT.pdf	Inextenso	documento inextenso	1	t	2020-10-26 21:33:55.672+00	2020-10-26 21:33:55.754+00
44	12	w0scUd4Vy1QvfKBMIR4eG92f.pdf	formulario	documento formulario	1	t	2020-10-26 21:33:55.675+00	2020-10-26 21:33:55.778+00
45	12	ZdUS_RmtkgeSiJwSr_MFKzuL.pdf	Resolucion	Documento Resolucion Ejecucion Proyecto	1	t	2020-10-26 21:35:36.391+00	2020-10-26 21:35:36.439+00
46	13	lljN8kwTGkZWYnzyyAsHemE5.pdf	Inextenso	documento inextenso	1	t	2020-10-26 21:54:44.143+00	2020-10-26 21:54:44.213+00
47	13	XoC75mYn9CylAOwkFQhHxUFj.pdf	formulario	documento formulario	1	t	2020-10-26 21:54:44.15+00	2020-10-26 21:54:44.216+00
48	13	ZlTXfENAqsfIuUe6ku06RN3l.pdf	Titulo	carátula de proyecto	7	t	2020-10-26 21:55:19.76+00	2020-10-26 21:55:19.823+00
49	13	tNZzWSA1bnNB73XppAv5qVQT.pdf	Resolucion	Documento Resolución Ejecución de Proyecto	1	t	2020-10-26 21:57:03.84+00	2020-10-26 21:57:03.881+00
50	14	j1PsziPouIFbo9BPniC0YvJe.pdf	Titulo	Carátula de proyecto	7	t	2020-10-26 22:22:10.254+00	2020-10-26 22:22:10.297+00
53	14	LF-ljW-18kCRKrYYRUAnTeRd.pdf	formulario	documento formulario	1	t	2020-10-26 22:23:05.96+00	2020-10-26 22:23:06.04+00
51	14	DrzBgX4UDV0o7yONBAFE8DgS.pdf	Inextenso	documento inextenso	1	t	2020-10-26 22:23:05.955+00	2020-10-26 22:23:06.04+00
52	14	Gw0A7XHG68715Pnh7yVZcNiO.pdf	formulario2	documento formulario mejorado	1	t	2020-10-26 22:23:05.957+00	2020-10-26 22:23:06.044+00
54	14	suegbX2HidO1QUZw45qloUIb.pdf	correoElectronico	revision	7	t	2020-10-26 22:23:52.804+00	2020-10-26 22:23:52.853+00
55	14	F6YyNqoZ8G0XxLACFd8mucHM.pdf	Informe Final	documento del informe final	6	t	2020-10-27 13:22:39.515+00	2020-10-27 13:22:39.596+00
56	15	e5uT2l-G3VKTPmCYuHnHVU32.pdf	Inextenso	documento inextenso	1	t	2020-10-27 13:29:08.655+00	2020-10-27 13:29:08.713+00
57	15	eB-quITd3fZbbmCoxeFVFkfe.pdf	formulario	documento formulario	1	t	2020-10-27 13:29:08.648+00	2020-10-27 13:29:08.731+00
58	15	OuMz9xP1Ni7HrJ8wQoUaYXRO.pdf	Titulo	carátula de proyecto	7	t	2020-10-27 13:29:29.826+00	2020-10-27 13:29:29.882+00
59	15	08yOvX-bhsVvU1pQA_SkeZoH.pdf	Informe final	documento final	6	t	2020-10-27 13:30:07.809+00	2020-10-27 13:30:07.871+00
60	16	PUBbGc6aIFsefzTU3XWSFU3k.pdf	formulario	documento formulario	1	t	2020-10-27 13:55:54.917+00	2020-10-27 13:55:54.992+00
61	16	8sN0o5-WmD4q87wQFjLFGHza.pdf	Inextenso	documento inextenso	1	t	2020-10-27 13:55:54.922+00	2020-10-27 13:55:54.996+00
62	16	eEQxvwJj0abdQLB9zCPQRwgv.pdf	Titulo	Carátula de proyecto	7	t	2020-10-27 13:56:15.749+00	2020-10-27 13:56:15.793+00
63	16	VsYyCGwmsBU3m7b3io9Utxjw.pdf	ResolucionCierreProyecto	documento resolución de cierre de proyecto	1	t	2020-10-27 13:57:22.502+00	2020-10-27 13:57:22.567+00
64	16	kGa1J5AQ93I9Qv9PDxrbaBuO.pdf	ResolucionEjecucionProyecto	documento resolución de ejecución de proyecto	1	t	2020-10-27 13:57:22.495+00	2020-10-27 13:57:22.57+00
65	16	eyJ_uiY6UsZpbdE1y5GTpNTB.pdf	Informe final	documento informe final	6	t	2020-10-27 14:08:40.8+00	2020-10-27 14:08:40.874+00
67	18	2PxE7VOhH1-vvKm4lJW_uH0e.pdf	Titulo	carátula de proyecto	7	t	2020-10-27 14:17:06.622+00	2020-10-27 14:17:06.662+00
66	18	glBg4dFG9aWe0cJJR6luqTsm.pdf	Titulo	carátula de proyecto	7	f	2020-10-27 14:16:04.362+00	2020-10-27 14:17:17.245+00
69	18	3DvlmwEdoo5tZ3_YknLtI25U.pdf	Inextenso	documento inextenso	1	t	2020-10-27 14:18:47.511+00	2020-10-27 14:18:47.588+00
68	18	e7ah_86Ww0nOHsziAXhtkzC6.pdf	formularioFinal	documento formulario final	1	t	2020-10-27 14:18:47.503+00	2020-10-27 14:18:47.617+00
70	18	DhYTt23xU09lyrThy7TsrR7u.pdf	formulariofInicio	documento formulario inicia	1	t	2020-10-27 14:18:47.502+00	2020-10-27 14:18:47.621+00
71	18	yLwymgqMuZtuPc3uCjmvWO6G.pdf	ResolucionInformeFinal	Resolución de cierre de proyecto	1	t	2020-10-27 14:19:21.763+00	2020-10-27 14:19:21.809+00
72	18	MC9YUX7X3auCa7_gIwb7voe3.pdf	InformeFinal	documento informe final	6	t	2020-10-27 14:19:43.256+00	2020-10-27 14:19:43.371+00
73	19	OuyvveH762rHthtPfhkPgtLk.pdf	Inextenso	documento inextenso	1	t	2020-10-27 14:25:33.417+00	2020-10-27 14:25:33.475+00
74	19	ouIa12sEC7rVAf3nPkygq4C0.pdf	formulario	documento formulario	1	t	2020-10-27 14:25:33.413+00	2020-10-27 14:25:33.478+00
75	19	xozZ0TGXTE0BREknJ_dLwxiU.pdf	Titulo	carátula de proyecto	7	t	2020-10-27 14:25:47.708+00	2020-10-27 14:25:47.756+00
76	19	I9nObyhZpM6IuP0ZAnkV186J.pdf	ResolucionEjecucionProyecto	documento resolución para el inicio del proyecto de investigación	1	t	2020-10-27 14:26:23.042+00	2020-10-27 14:26:23.104+00
77	20	k9JrkM0xgjV-TS7qM8DIXW_v.pdf	Inextenso	documento inextenso	1	t	2020-10-27 14:45:55.056+00	2020-10-27 14:45:55.129+00
78	20	a2pfVprxt75BAqG4OuGYR-1F.pdf	Formulario	documento formulario	1	t	2020-10-27 14:45:55.061+00	2020-10-27 14:45:55.133+00
79	20	bx6Y-9_FnxwdyPvoBcT3seym.pdf	Caratula	carátula de proyecto	7	t	2020-10-27 14:46:21.882+00	2020-10-27 14:46:21.926+00
80	20	ZMuHI8eDhOaubN_i66vDzdcY.pdf	libro	informe fina	6	t	2020-10-27 14:47:13.518+00	2020-10-27 14:47:13.753+00
81	21	r46v-YaO1IGUXXr_JYSOMdRD.pdf	Inextenso	documento inextenso	1	t	2020-10-27 14:50:06.816+00	2020-10-27 14:50:06.88+00
82	21	vYNEz79PedPeagcs7BO4b56V.pdf	Formulario	documento formulario	1	t	2020-10-27 14:50:06.822+00	2020-10-27 14:50:06.888+00
83	21	yjiiLhvfL8fKVA7d1N54cmMV.pdf	Titulo	carátula de proyecto	7	t	2020-10-27 14:50:23.225+00	2020-10-27 14:50:23.273+00
84	21	5mpE-6jg6Hc17sJrjGacUHfL.pdf	libro	documento final	6	t	2020-10-27 14:50:33.044+00	2020-10-27 14:50:33.177+00
85	22	SxDLM8YdDolPomQILNJwWdgY.pdf	Titulo	carátula de proyecto	7	t	2020-10-27 15:31:23.094+00	2020-10-27 15:31:23.138+00
86	22	RX0q_KhMfl9MhW0YJG6tkXBl.pdf	inextenso	documento inextenso	1	t	2020-10-27 15:35:07.699+00	2020-10-27 15:35:07.747+00
87	22	cOedsGvrMHADHSKIeXBL44mb.pdf	resolucionAprobacionProyecto	documento resolucion	1	t	2020-10-27 15:35:35.532+00	2020-10-27 15:35:35.581+00
88	22	uljBsdb1zEhqqg8wxX8wxIO8.pdf	libro	informe	6	t	2020-10-27 15:37:02.347+00	2020-10-27 15:37:02.463+00
89	22	Hk60SkNsVFZnWYXUP6zXK15E.pdf	libro2	informe revisado	6	t	2020-10-27 15:37:16.691+00	2020-10-27 15:37:16.809+00
90	14	eB-quITd3fZbbmCoxeFVFkfe.pdf	pdf-prueba	pdf de prueba	7	t	2020-11-16 16:09:09.458+00	2020-11-16 16:09:10.481+00
91	14	Q-QG7Vp2SR1CYH7MqJz9Vu05.pdf	pdf-prueba	prueba de subida	7	t	2020-11-16 18:50:16.332+00	2020-11-16 18:50:17.992+00
92	14	jtYGvGlnyZlYBZCHFi8M6c6p.pdf	docker	descri docker	6	t	2020-11-16 18:56:54.119+00	2020-11-16 18:56:54.454+00
93	23	WctPmpMhWp-7_N0euwDg4oos.pdf	Formulario	documento formulario	1	t	2020-11-17 01:23:57.92+00	2020-11-17 01:23:58.022+00
94	23	COjwBkzJzgJ0nc9sxSIHnfQa.pdf	Inextenso	documento inextenso	1	t	2020-11-17 01:23:57.921+00	2020-11-17 01:23:58.023+00
95	23	i1TBbxV_SqfH1HAoAu6cMnh2.pdf	Titulo	Titulo proyecto	1	t	2020-11-17 01:24:26.957+00	2020-11-25 05:12:15.975+00
96	23	Ng-zc1xHwJFwlwKqL_d03eka.pdf	Caratula - investigacion	prueba	7	t	2020-11-17 01:25:02.946+00	2020-11-25 05:12:30.336+00
\.


--
-- TOC entry 3516 (class 0 OID 20218)
-- Dependencies: 262
-- Data for Name: proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proyectos (id_proyecto, id_adm, id_coordinador, titulo, proceso, fechaini, fechafin, carrera, n_instituto, tipo, area, tipo_p, carga_h, moneda, financiamiento, estado, "createdAt", "updatedAt", objetivo, resumen) FROM stdin;
1	1	6	Assesing the risk of extinction of plants and updating Key Biodiversity Areas in the Tropical Andes	65	2018-01-01 04:00:00+00	2020-06-01 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-23 19:31:09.505+00	2020-10-23 19:31:09.505+00	\N	\N
7	1	13	Crecimiento y supervivencia de caimanes en el sistema del lago Moa. Bases para el manejo en sistemas de granjas de levante	80	2019-06-01 04:00:00+00	2019-12-01 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-26 02:43:27.991+00	2020-10-26 02:43:27.991+00	\N	\N
5	1	10	Conservacion de especie endemica Syagrus yungasensis: Practicas de propagacion (Proyecto Plantas Endemicas)	40	2018-03-03 04:00:00+00	2021-03-04 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-23 20:53:55.581+00	2020-10-23 20:53:55.581+00	\N	\N
6	1	10	Cultivos marginados en Iberoamérica: Red CultIVA CYTED	0	2018-02-09 04:00:00+00	2022-02-09 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-26 00:30:06.731+00	2020-10-26 00:30:06.731+00	\N	\N
8	1	15	Diagnóstico de la biodiversidad acuática laguna Moa, La Paz Bolivia	90	2019-09-01 04:00:00+00	2020-03-02 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-26 04:02:33.256+00	2020-10-26 04:02:33.256+00	\N	\N
22	1	12	Propuesta para la formulación y gestión de la pesquería en comunidades Tsimane, Estación Biológica del Beni	95	2019-02-06 04:00:00+00	2030-11-01 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-27 15:06:58.669+00	2020-10-27 15:06:58.669+00	\N	\N
9	1	5	Dieta, tiempo de tránsito intestinal, consistencia feca y contenido en materia seca de las heces en Ateles chamek en semilibertad. ¿Cómo influye la evanta en estos parámetros?	90	2019-04-01 04:00:00+00	2019-12-05 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-26 04:31:14.274+00	2020-10-26 04:31:14.274+00	\N	\N
10	1	5	Dinámica estacional de las comunidades de aves y el temor de las aves en parques urbanos y cementerios de América Latina 	80	2019-03-01 04:00:00+00	2020-12-03 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-26 16:30:03.814+00	2020-10-26 16:30:03.814+00	\N	\N
12	1	48	Efectos de los transtornos antropogénicos en la salud de pequeños mamíferos en Bolivia y el riesgo de enfermedades zoonóticas	90	2019-06-05 04:00:00+00	2019-12-20 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-26 21:32:56.88+00	2020-10-26 21:32:56.88+00	\N	\N
19	1	9	Fortalecimiento de la colección científica de invertebrados	100	2018-02-06 04:00:00+00	2100-10-01 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	cerrado	2020-10-27 14:24:54.676+00	2020-10-30 13:33:38.871+00	\N	\N
4	1	16	Construccion y validacion de un metodo de capacitacion sobre el manejo del conflicto con micromamiferos y sus implicancias en la salud publica, dirigido a instituciones tecnicas y academicas del Departamento de La Paz	100	2016-08-10 04:00:00+00	2018-10-30 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	cerrado	2020-10-23 20:44:43.353+00	2020-10-30 13:35:31.378+00	\N	\N
3	1	5	Cooperacion tecnica ambiental para la planificacion de la conservacion de los espacios naturales del municipio de La Paz	70	2018-11-02 04:00:00+00	2020-04-16 04:00:00+00	Biologia	Carrera de Biologia	\N	\N	\N	224	EURO	197000	inactivo	2020-10-23 20:32:26.491+00	2020-10-29 01:55:50.03+00	Promover la cooperación internacional entre la Gerencia de Servicios de Espacios Naturales de la Diputación de Barcelona, la Universidad Mayor de San Andrés y el Gobierno Autónomo Municipal de la Paz, para mejorar las capacidades de conservación del patrimonio natural de los dos gobiernos municipales en interacción con entidades académicas, para contribuir a la consecución de los “Objetivos de Desarrollo Sostenible de la ONU (2015 – 2030)” en el marco de los objetivos establecidos por la Red mundial de Ciudades y Gobiernos Locales y Regionales (CGLU).	La ciudad de La Paz ha experimentado un enorme y desordenado crecimiento en las últimas décadas, situación, se ha expandido horizontalmente en el orden del 100% desde los 1950s. con la acelerada transformación de los ambientes periurbanos, toda la ciudadanía está perdiendo los irremplazables valores de patrimonio natural y cultural como la biodiversidad local, los agro ecosistemas, los servicios eco sistémicos de regulación, el acceso a la naturaleza, los testimonios de asentamientos prehispánicos y el valor del paisaje circundante entre otros, haciendo a la ciudad menos resiliente y más vulnerable, y arrebatando a los ciudadanos el derecho de vivir en una ciudad más sana , habitable, sostenible y ecoficiente. El GAMLP declaró como patrimonio natural paisajístico a 21 áreas, sitios y monumentos del municipio de diferente superficie tanto dentro de la marcha urbana como en la periferia, para su conservación y protección, que en total suman 3.778 ha. Pero de estas áreas protegidas apenas tres cuentan con cierto nivel de gestión municipal. El GAMLP intenta encarar el manejo de los mismos con muy pocos instrumentos técnicos de gestión y con limitados recursos humanos y financieros. El presente proyecto se basa en el concepto del intercambio de experiencias de manejo de espacios protegidos entre el GAMLP y la Red de Parques Naturales de la Diputación de Barcelona. A través de la movilización de personal técnico del GAMLP, así como estudiantes de la UMSA hacia Barcelona, y de técnicos especializados la XPN hacia La Paz, se espera brindar las bases técnicas para que el GAMLP, en el marco de un trabajo colaborativo con la UMSA, inicie una gestión adecuada de conservación del patrimonio natural y cultural de los espacios naturales municipales. La implementación de los mecanismos de gestión se enmarcará en la estructura de gobernanza del GAMLP.
11	1	16	Evaluación del riesgo de conflicto entre silvestre y actividad ganadera en los Municipios de Ixiamas y San Buenaventura	100	2016-08-01 04:00:00+00	2018-12-15 04:00:00+00	Biologia	Instituto de Ecologia	aplicada	\N	\N	232	Bs.	350000	cerrado	2020-10-26 21:21:17.98+00	2020-10-30 13:35:03.286+00	Evaluar el riesgo de conflicto de la actividad ganadera con la fauna silvestre en los municipios de San Buenaventura e Ixiamas, y definir recomendaciones para su manejo.	Cuando las interacciones entre actividades humanas y animales silvestres resultan en daños socioeconómicos o afectan la seguridad o salud de las personas se establecen los llamados conflictos. Como respuesta a estos conflictos es común que los pobladores utilicen técnicas inapropiadas de control de las poblaciones afectando la permanencia de las especies silvestres. Estos conflictos van a variar en intensidad de una región a otra, lo que se traduce en que el riesgo de que un conflicto se establezca en una zona o la seriedad del mismo, va a depender de diversas variables. En Bolivia, la actividad ganadera presenta permanente conflicto con especies silvestres. En los Municipios de Ixiamas y San Buenaventura es común el reporte de pérdida de animales por jaguares y daño por murciélagos vampiros. En este sentido para encontrar alternativas de manejo que mitiguen y reduzcan el conflicto entre ganaderos y vida silvestre, se propone evaluar las interacciones entre vida silvestre y actividad ganadera analizando el riesgo de conflicto a partir de la evaluación de las vulnerabilidades de los ganaderos y la presencia de las especies silvestres que causan daños al ganado. 
2	1	2	Bioremediacion de las zonas de huatajata y bahia Cohana del lago Titicaca y revalorizacion cultural economica de la totora	15	2018-10-03 04:00:00+00	2021-10-06 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	192	USD	370000	activo	2020-10-23 20:23:59.149+00	2020-10-29 01:50:10.779+00	Establecer una plataforma de monitoreo permanente, para identificar las fluctuaciones naturales diarias, estacionales y anuales en el Lago Titicaca	El Lago Titicaca es el último de los grandes lagos del mundo que no tiene un sistema de seguimiento y monitoreo continuo a largo plazo, ni un Observatorio de Investigaciones del Medio Ambiente. Esto a pesar de que regionalmente es el lago más grande de América del Sur y a que tiene características únicas en el mundo. El presente proyecto plantea establecer una plataforma de monitoreo permanente en el Lago Titicaca. La misma que contará con una serie de sensores automáticos para proporcionar datos de alta resolución que permitan identificar las fluctuaciones naturales diarias, estacionales y anuales del sistema. Además, se identificarán fenómenos peculiares u ocasionales, como la explosión demográfica de algas y otros cambios. Se colectarán datos climatológicos y muestras periódicas (cada 15 días) para determinar si el clima o los niveles de contaminación son responsables de las alteraciones observadas. Con todo ello se espera identificar los indicadores claves del funcionamiento del ecosistema, así como también los factores clave que controlan su buen funcionamiento o condicionan fenómenos como los “blooms” o explosiones demográficas de algas. Estos fenómenos son de particular relevancia ya que podrían constituirse en un problema serio para la conservación de la diversidad y los servicios ambientales que presta este ecosistema único en el mundo e invaluable para las sociedades boliviana y peruana. Con los datos generados se podrá construir el esquema final del diseño de las otras estaciones de monitoreo permanente del Lago Titicaca. También se identificará la periodicidad y tipos de datos necesarios para dichas nuevas estaciones. Esta experiencia permitirá también capacitar personal técnico del Ministerio de Medio Ambiente y Agua para que eventualmente puedan replicar estas estaciones.
13	1	18	Estrategias adaptativas de las anuales de verano de las regiones semiáridas de Bolivia	60	2018-01-03 04:00:00+00	2021-01-06 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-26 21:53:33.786+00	2020-10-26 21:53:33.786+00	\N	\N
15	1	5	Extensión del proyecto: Límite aeróbico en aves primitivas, distinción entre efectos filogenéticos y adaptativos en la pisacca (Nothoprocta ornata) a nivel metabólico y cardiovascular	95	2017-05-03 04:00:00+00	2019-12-05 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	256	\N	\N	activo	2020-10-27 13:28:29.439+00	2020-10-29 02:12:53.479+00	Caracterizar la respuesta de la Pisacca a situaciones de ejercicio sostenido a nivel metabólico, cardiovascular y respiratorio	Desde el año 2010 nuestro equipo de investigación ha ido trabajando con varios aspectos de la morfología cardiaca y fisiológica cardiaca y ventilatoria de la Pisacca (Nothoprocta ornata). Se han obtenido resultados que apuntan a la enorme influencia que tiene la morfología cardiaca sobre el metabolismo general de los tinamúes. Las diferentes investigaciones están completando cada vez mejor la compresión del escenario general de lo que un corazón pequeño en un ave voladora representa en su fisiología endoterma, y a partir de esto seleccionamos la importancia de estudiar la fisiología “en marcha” del corazón mediante ecocardiografía, y la relación de los parámetros fisiológicos con la actividad en tejidos clave de enzimas involucradas con la fisiología en condiciones de hipoxia. Al mismo tiempo hemos descubierto que el tamaño del corazón difiere de otras especies de aves solo a partir de estadios juveniles, lo que interpretamos como indicador que la capacidad proliferativa en el corazón de la Pisacca es inferior al de otras especies de aves, hecho que pretendemos investigar también. Finalmente un aspecto que no fue posible determinar en las investigaciones precedentes, fue la tasa metabólica en ejercicio progresivo medido en tiempo real, debido a que no pudo optimizarse la determinación de la tasa de consumo de oxígeno en flujo abierto, en esta ocasión consideramos que podremos optimizar el sistema de medición en flujo abierto para lograrlo. Para esto, establecemos una nueva alianza con el Centro de Investigación y Producción de Animales Menores (CIPAM), Departamento de Ciencia Animal, Facultad de Ciencias Agrarias y Naturales (FCAN) de la Universidad Técnica de Oruro (UTO), logrando sinergias entre su interés de experimentar con la crianza de esta especie, y las actuales dificultades por falta de personal y financiamiento para mantener Pisaccas en la UMSA.
16	1	19	Efecto de variables ambientales y rasgos funcionales foliares sobre la tasa de transpiración de Theobroma cacao bajo diferentes sistemas de producción	95	2017-09-06 04:00:00+00	2019-09-04 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-27 13:39:03.711+00	2020-10-27 14:07:53.822+00	\N	\N
20	1	22	Tracing trigger mechanisms of eutrophication and contamination of Andean aquatic ecosystems (Bolivia), Titicaca	25	2019-10-17 04:00:00+00	2021-10-15 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-27 14:45:26.619+00	2020-10-27 14:45:26.619+00	\N	\N
21	1	22	Observatorio permanente del lago Titicaca	30	2018-10-11 04:00:00+00	2021-10-08 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-10-27 14:49:30.15+00	2020-10-27 14:49:30.15+00	\N	\N
18	1	16	Fortalecimiento del Programa Boliviano sobre ecologia y evolucion de enfermedades emergentes - PBE4 - Fase II	95	2016-08-01 04:00:00+00	2018-12-15 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	inactivo	2020-10-27 14:15:45.693+00	2020-10-30 13:46:14.279+00	\N	\N
14	1	3	Evaluación de la aptitud de la tierra para tipos de utilización actual en la sub-cuenca del rio Sasanta Mayu, Ravelo Potosi	95	2018-04-03 04:00:00+00	2019-04-04 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	pendiente	2020-10-26 22:20:54.509+00	2020-11-16 14:30:07.041+00	\N	\N
23	1	1	Investigación de aguas limpias lago titicaca	0	2020-11-16 04:00:00+00	2020-11-19 04:00:00+00	Biologia	Instituto de Ecologia	\N	\N	\N	\N	\N	\N	activo	2020-11-17 01:23:57.846+00	2020-11-25 05:10:03.107+00	\N	\N
\.


--
-- TOC entry 3518 (class 0 OID 20233)
-- Dependencies: 264
-- Data for Name: publi_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publi_archivos (id_publi_archivo, id_publicacion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
19	18	WylfPpA7kw1E9REyWpb1s4Xn.pdf	Altimiras et al 2017	descripción de la publicación	14	t	2020-11-25 05:22:49.075+00	2020-11-25 05:22:49.199+00
20	19	M__-CwpBtW4shTkmbDEgNfIL.pdf	Aerobic_performance_in_tinamous_is_limited_by_thei	descripcion	14	t	2020-11-25 05:34:09.299+00	2020-11-25 05:34:09.38+00
21	20	4h_v7Eu_Dk07P3IvC0cE1wK7.pdf	Articulo2020	resumen	14	t	2020-12-03 21:51:01.938+00	2020-12-03 21:51:01.985+00
\.


--
-- TOC entry 3520 (class 0 OID 20244)
-- Dependencies: 266
-- Data for Name: publicaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publicaciones (id_publicacion, id_proyecto, id_coordinador, titulo, fecha, contenido, tipo, estado, "createdAt", "updatedAt", autores, resumen) FROM stdin;
19	15	5	Supplementary Material	2017-01-17 04:00:00+00	Jordi Altimiras Corderroure, Isa Lindgren, Lina María Giraldo-Deck, Alberto Matthei, Alvaro Garitano-Zavala et al.. 2017. “Aerobic performance in tinamous is limited by their small heart. A novel hypothesis in the evolution of avian flight”. Biology 65 (2): 305 - 326.	Artículo	t	2020-11-25 05:34:09.249+00	2020-11-25 05:34:09.249+00	Jordi Altimiras Corderroure, Isa Lindgren, Lina María Giraldo-Deck, Alberto Matthei, Alvaro Garitano-Zavala	Some biomechanical studies from fossil specimens suggest that sustained flapping flight of birds could have appeared in their Mesozoic ancestors. We challenge this idea because a suitable musculoskeletal anatomy is not the only requirement for sustained flapping flight. We propose the “heart to fly” hypothesis that states that sustained flapping flight in modern birds required an enlargement of the heart for the aerobic performance of the flight muscles and test it experimentally by studying tinamous, the living birds with the smallest hearts. The small ventricular size of tinamous reduces cardiac output without limiting perfusion pressures, but when challenged to fly, the heart is unable to support aerobic metabolism (quick exhaustion, larger lactates and post-exercise oxygen consumption and compromised thermoregulation). At the same time, cardiac growth shows a crocodilian-like pattern and is correlated with differential gene expression in MAPK kinases. We integrate this physiological evidence in a new evolutionary scenario in which the ground-up, short and not sustained flapping flight displayed by tinamous represents an intermediate step in the evolution of the aerobic sustained flapping flight of modern birds.
20	15	5	Unmasking Continental Natal Homing In Goliath Catfish From The Upper Amazon	2020-01-17 04:00:00+00	Hauser, Marilia , Fabrice Duponchelle, Theodore W Hermann, Karin E Limburg, Leandro Castello, Donald J Stewart, Gislene Torrente‐Vilara, et al.. 2020. “Unmasking Continental Natal Homing In Goliath Catfish From The Upper Amazon”. Freshwater Biology 65 (2): 325 - 336.	Artículo	t	2020-12-03 21:51:01.833+00	2020-12-03 21:51:01.833+00	Theodore W Hermann, Karin E Limburg, Leandro Castello, Donald J Stewart, Gislene Torrente‐Vilara	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, perferendis. Rerum exercitationem consequuntur earum numquam voluptate eaque, tenetur voluptatem aliquam excepturi eos dicta impedit qui mollitia blanditiis doloremque est sequi.\n\t\tAsperiores, consequuntur delectus! Dolore quis consequatur voluptatum ut aliquid recusandae voluptas sequi, distinctio non animi hic, deleniti, ea ex ad aspernatur error harum vitae architecto temporibus tempora soluta. Eos, inventore!\n\t\tDoloribus, temporibus et unde esse earum commodi rerum. Nisi molestias excepturi saepe similique libero quae alias, omnis minima expedita recusandae culpa voluptatibus aspernatur iusto distinctio enim ex esse doloremque consequatur?\n\t\tQuod quas ut minima quisquam. Numquam molestias fugit necessitatibus modi dolore, similique accusantium odio maiores, beatae, dolorem iusto adipisci corrupti. Nulla nesciunt deserunt non repellendus qui inventore facere debitis hic.\n\t\tRepellat iste sed maxime et. Modi accusantium dicta consequatur eveniet nisi quia distinctio repellendus doloribus? Nisi quis numquam repudiandae exercitationem pariatur aliquam temporibus quo. Et fugiat nemo quam commodi. Dolores.
18	15	5	Aerobic performance in tinamous is limited by their small heart. A novel hypothesis in the evolution of avian flight	2017-01-17 04:00:00+00	Jordi Altimiras Corderroure, Isa Lindgren, Lina María Giraldo-Deck, Alberto Matthei, Alvaro Garitano-Zavala et al.. 2017. “Aerobic performance in tinamous is limited by their small heart. A novel hypothesis in the evolution of avian flight”. Biology 65 (2): 300 - 346.	Artículo	t	2020-11-25 05:22:49.022+00	2020-11-25 05:22:49.022+00	Jordi Altimiras Corderroure, Isa Lindgren, Lina María Giraldo-Deck, Alberto Matthei, Alvaro Garitano-Zavala	Flight capacity is one of the most important innovations in animal evolution; it only evolved in insects, birds, mammals and the extinct pterodactyls. Given that powered flight represents a demanding aerobic activity, an efficient cardiovascular system is essential for the continuous delivery of oxygen to the pectoral muscles during flight. It is well known that the limiting step in the circulation is stroke volume (the volume of blood pumped from the ventricle to the body during each beat), which is determined by the size of the ventricle. Thus, the fresh mass of the heart represents a simple and repeatable anatomic measure of aerobic power of an animal. Although several authors have already compared heart masses across bird species, a phylogenetic comparative analysis of these comparisons is still lacking. Compiling heart sizes for 915 species and applying several statistical procedures controlling for body size and/or testing for adaptive trends in the dataset (e.g., model selection approaches, phylogenetic generalized linear models), we found that (residuals of) heart sizes are consistently associated with four categories of flight capacity. In general, our results indicate that species exhibiting continuous hovering flight (i.e., hummingbirds) have substantially larger hearts than do other groups, that species that use flapping flight and gliding show intermediate values, and that species categorized as poor flyers show the smallest values. Our study shows that at a broad scale, routine flight modes seem to have shaped the energetic requirements of birds sufficiently to be anatomically detected at the comparative level.
\.


--
-- TOC entry 3522 (class 0 OID 20256)
-- Dependencies: 268
-- Data for Name: segui_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.segui_archivos (id_segui_archivo, id_seguimiento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	psIv-ev2derPVZyDebPUEaO3.pdf	Seguimiento Inicio	documento seguimiento inicio	15	t	2020-11-25 15:20:47.14+00	2020-11-25 15:20:47.252+00
2	2	5AU5VW6aeSGwc9EyZuH_5k-Y.pdf	Seguimiento Ejecucion	documento descripcion	15	t	2020-11-25 17:51:49.729+00	2020-11-25 17:51:49.843+00
3	3	J7OGq-VsuePHR_uPFrEEAKCl.pdf	Seguimiento Ejecucion 2	documento ejecucion2	15	t	2020-11-25 17:54:39.759+00	2020-11-25 17:54:39.85+00
4	4	fKk6jkmNFPyL0pbhRToDipCD.pdf	Seguimiento Finalizacion	documento	15	t	2020-11-25 18:03:09.385+00	2020-11-25 18:03:09.445+00
\.


--
-- TOC entry 3524 (class 0 OID 20267)
-- Dependencies: 270
-- Data for Name: seguimientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seguimientos (id_seguimiento, id_proyecto, id_director, tipo, revision, observaciones, proceso, estado, "createdAt", "updatedAt") FROM stdin;
1	15	2	Inicio	Se reviso documentos de inextenso, formulario	Corregir documento inextenso falta el nombre de los investigadores	95	t	2020-11-25 15:20:47.048+00	2020-11-25 15:20:47.048+00
2	15	2	Ejecución	Publicaciones correctas	Debe realizar más avance en la difusión del proyecto de investigación.	95	t	2020-11-25 17:51:49.673+00	2020-11-25 17:51:49.673+00
3	15	2	Ejecución	Revision de los cursos hechos por la semana de aniversario.	Debe subir archivos respecto a la difusion.	95	t	2020-11-25 17:54:39.707+00	2020-11-25 17:54:39.707+00
4	15	2	Finalización	Todo listo para realizar la conclusion del proyecto.	Debes enviar nota de conclusion a dirección del IE para hacer los tramites de finalización.	95	t	2020-11-25 18:03:09.337+00	2020-11-25 18:03:09.337+00
\.


--
-- TOC entry 3526 (class 0 OID 20278)
-- Dependencies: 272
-- Data for Name: tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipos (id_tipo, nombre, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Principal	Son los archivos principales para la creación del proyecto	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
2	DGB	Archivo de direccion general de biodiversidad	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
3	SERNAP	Archivo de servicio nacional de areas protegidas	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
4	CITES	Archivo	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
5	BIOETICA	Archivo	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
6	Cierre de proyecto	Archivos necesarios para el cierre de proyecto	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
7	Otros	Cualquier tipo de archivo	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
8	Convenios	Archivo de convenios	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
9	Contratados	Archivo de contratados	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
10	Cursos	Archivo de cursos	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
11	Eventos	Archivo de eventos	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
12	Notas de prensa	Archivo de notas de prensa	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
13	Exposiciones	Archivo de Exposiciones	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
14	Publicacions	Archivo de publicaciones	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
15	Seguimientos	Archivo de seguimientos	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
16	Peticiones	Archivo de peticiones de investigadores	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
17	Final	Archivo de proyecto final	t	2020-10-23 13:16:53.813598+00	2020-10-23 13:16:53.813598+00
\.


--
-- TOC entry 3528 (class 0 OID 20289)
-- Dependencies: 274
-- Data for Name: unidades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidades (id_unidad, id_proyecto, nombre, observacion, estado, "createdAt", "updatedAt") FROM stdin;
2	11	Museo Nacional de Historia Natural	\N	t	2020-10-29 01:42:05.802+00	2020-10-29 01:43:03.871+00
1	11	Colección Boliviana de Fauna	\N	t	2020-10-29 01:42:05.795+00	2020-10-29 01:43:03.87+00
3	11	Programa para la Conservación de Murciélagos de Bolivia	\N	t	2020-10-29 01:42:05.82+00	2020-10-29 01:43:03.879+00
4	11	Asociación para la Conservación de los Ecosistemas Andino Amazónicos (ACEAA)	\N	t	2020-10-29 01:42:05.825+00	2020-10-29 01:43:03.88+00
5	2	Unidad de Calidad Ambiental del Instituto de Ecologia	\N	t	2020-10-29 01:49:13.006+00	2020-10-29 01:50:10.853+00
6	2	Instituto de Biologia Molecular y Biotecnologia	\N	t	2020-10-29 01:49:13.007+00	2020-10-29 01:50:10.862+00
8	3	Gobierno Autónomo Municipal de La Paz (GAMLP)	\N	t	2020-10-29 01:53:50.815+00	2020-10-29 01:55:50.114+00
7	3	Red de Parques Naturales (XPN) de la diputación de Barcelona (DiBa)	\N	t	2020-10-29 01:53:50.806+00	2020-10-29 01:55:50.113+00
9	15	Colección Boliviana de Fauna	\N	t	2020-10-29 02:12:53.553+00	2020-10-29 02:12:53.553+00
10	15	Instituto de Física, Química y Biología de la Universidad de Linkoping (Suecia)	\N	t	2020-10-29 02:12:53.557+00	2020-10-29 02:12:53.557+00
\.


--
-- TOC entry 3572 (class 0 OID 0)
-- Dependencies: 203
-- Name: adm_roles_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_roles_id_rol_seq', 3, true);


--
-- TOC entry 3573 (class 0 OID 0)
-- Dependencies: 205
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_roles_id_adm_usuario_rol_seq', 61, true);


--
-- TOC entry 3574 (class 0 OID 0)
-- Dependencies: 207
-- Name: adm_usuarios_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuarios_id_usuario_seq', 58, true);


--
-- TOC entry 3575 (class 0 OID 0)
-- Dependencies: 209
-- Name: autores_id_autor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.autores_id_autor_seq', 32, true);


--
-- TOC entry 3576 (class 0 OID 0)
-- Dependencies: 211
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.basica_tecnicas_id_basica_tecnica_seq', 1, false);


--
-- TOC entry 3577 (class 0 OID 0)
-- Dependencies: 213
-- Name: comentarios_id_comentario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_comentario_seq', 7, true);


--
-- TOC entry 3578 (class 0 OID 0)
-- Dependencies: 215
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contra_archivos_id_contra_archivo_seq', 2, true);


--
-- TOC entry 3579 (class 0 OID 0)
-- Dependencies: 217
-- Name: contratados_id_contratado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contratados_id_contratado_seq', 1, true);


--
-- TOC entry 3580 (class 0 OID 0)
-- Dependencies: 219
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conv_archivos_id_conv_archivo_seq', 6, true);


--
-- TOC entry 3581 (class 0 OID 0)
-- Dependencies: 221
-- Name: convenios_id_convenio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.convenios_id_convenio_seq', 4, true);


--
-- TOC entry 3582 (class 0 OID 0)
-- Dependencies: 223
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.curso_archivos_id_curso_archivo_seq', 1, true);


--
-- TOC entry 3583 (class 0 OID 0)
-- Dependencies: 225
-- Name: cursos_id_curso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cursos_id_curso_seq', 1, true);


--
-- TOC entry 3584 (class 0 OID 0)
-- Dependencies: 227
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_archivos_id_evento_archivos_seq', 1, false);


--
-- TOC entry 3585 (class 0 OID 0)
-- Dependencies: 229
-- Name: eventos_id_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_id_evento_seq', 1, false);


--
-- TOC entry 3586 (class 0 OID 0)
-- Dependencies: 231
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expo_archivos_id_expo_archivo_seq', 1, false);


--
-- TOC entry 3587 (class 0 OID 0)
-- Dependencies: 233
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exposiciones_id_exposicion_seq', 1, false);


--
-- TOC entry 3588 (class 0 OID 0)
-- Dependencies: 235
-- Name: expositores_id_expositor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expositores_id_expositor_seq', 2, true);


--
-- TOC entry 3589 (class 0 OID 0)
-- Dependencies: 237
-- Name: financiamientos_id_financiamiento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.financiamientos_id_financiamiento_seq', 9, true);


--
-- TOC entry 3590 (class 0 OID 0)
-- Dependencies: 239
-- Name: fotografias_id_fotografia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fotografias_id_fotografia_seq', 15, true);


--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 241
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_proyectos_id_inv_proyecto_seq', 56, true);


--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 243
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_tipos_id_inv_tipo_seq', 3, true);


--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 245
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.investigadores_id_investigador_seq', 57, true);


--
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 247
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lugar_desarrollos_id_lugar_desarrollo_seq', 2, true);


--
-- TOC entry 3595 (class 0 OID 0)
-- Dependencies: 249
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_archivos_id_nota_archivo_seq', 1, false);


--
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 251
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_prensas_id_nota_prensa_seq', 1, false);


--
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 253
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permiso_archivos_id_permiso_archivo_seq', 16, true);


--
-- TOC entry 3598 (class 0 OID 0)
-- Dependencies: 255
-- Name: personas_id_persona_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personas_id_persona_seq', 58, true);


--
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 257
-- Name: peti_archivos_id_peti_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peti_archivos_id_peti_archivo_seq', 1, true);


--
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 259
-- Name: peticiones_id_peticion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peticiones_id_peticion_seq', 1, true);


--
-- TOC entry 3601 (class 0 OID 0)
-- Dependencies: 261
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proy_archivos_id_proy_archivo_seq', 96, true);


--
-- TOC entry 3602 (class 0 OID 0)
-- Dependencies: 263
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proyectos_id_proyecto_seq', 23, true);


--
-- TOC entry 3603 (class 0 OID 0)
-- Dependencies: 265
-- Name: publi_archivos_id_publi_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publi_archivos_id_publi_archivo_seq', 21, true);


--
-- TOC entry 3604 (class 0 OID 0)
-- Dependencies: 267
-- Name: publicaciones_id_publicacion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publicaciones_id_publicacion_seq', 20, true);


--
-- TOC entry 3605 (class 0 OID 0)
-- Dependencies: 269
-- Name: segui_archivos_id_segui_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.segui_archivos_id_segui_archivo_seq', 4, true);


--
-- TOC entry 3606 (class 0 OID 0)
-- Dependencies: 271
-- Name: seguimientos_id_seguimiento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seguimientos_id_seguimiento_seq', 4, true);


--
-- TOC entry 3607 (class 0 OID 0)
-- Dependencies: 273
-- Name: tipos_id_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipos_id_tipo_seq', 17, true);


--
-- TOC entry 3608 (class 0 OID 0)
-- Dependencies: 275
-- Name: unidades_id_unidad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidades_id_unidad_seq', 10, true);


--
-- TOC entry 3190 (class 2606 OID 20339)
-- Name: adm_roles adm_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_roles_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 3192 (class 2606 OID 20341)
-- Name: adm_roles adm_roles_rol_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_roles_rol_key UNIQUE (rol);


--
-- TOC entry 3194 (class 2606 OID 20343)
-- Name: adm_usuario_roles adm_usuario_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_pkey PRIMARY KEY (id_adm_usuario_rol);


--
-- TOC entry 3196 (class 2606 OID 20345)
-- Name: adm_usuarios adm_usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuarios_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 3198 (class 2606 OID 20347)
-- Name: adm_usuarios adm_usuarios_usuario_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuarios_usuario_key UNIQUE (usuario);


--
-- TOC entry 3200 (class 2606 OID 20349)
-- Name: autores autores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_pkey PRIMARY KEY (id_autor);


--
-- TOC entry 3202 (class 2606 OID 20351)
-- Name: basica_tecnicas basica_tecnicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_pkey PRIMARY KEY (id_basica_tecnica);


--
-- TOC entry 3204 (class 2606 OID 20353)
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (id_comentario);


--
-- TOC entry 3206 (class 2606 OID 20355)
-- Name: contra_archivos contra_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_pkey PRIMARY KEY (id_contra_archivo);


--
-- TOC entry 3208 (class 2606 OID 20357)
-- Name: contratados contratados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_pkey PRIMARY KEY (id_contratado);


--
-- TOC entry 3210 (class 2606 OID 20359)
-- Name: conv_archivos conv_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_pkey PRIMARY KEY (id_conv_archivo);


--
-- TOC entry 3212 (class 2606 OID 20361)
-- Name: convenios convenios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_pkey PRIMARY KEY (id_convenio);


--
-- TOC entry 3214 (class 2606 OID 20363)
-- Name: curso_archivos curso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_pkey PRIMARY KEY (id_curso_archivo);


--
-- TOC entry 3216 (class 2606 OID 20365)
-- Name: cursos cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id_curso);


--
-- TOC entry 3218 (class 2606 OID 20367)
-- Name: evento_archivos evento_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_pkey PRIMARY KEY (id_evento_archivo);


--
-- TOC entry 3220 (class 2606 OID 20369)
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id_evento);


--
-- TOC entry 3222 (class 2606 OID 20371)
-- Name: expo_archivos expo_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_pkey PRIMARY KEY (id_expo_archivo);


--
-- TOC entry 3224 (class 2606 OID 20373)
-- Name: exposiciones exposiciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_pkey PRIMARY KEY (id_exposicion);


--
-- TOC entry 3226 (class 2606 OID 20375)
-- Name: expositores expositores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_pkey PRIMARY KEY (id_expositor);


--
-- TOC entry 3228 (class 2606 OID 20377)
-- Name: financiamientos financiamientos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.financiamientos
    ADD CONSTRAINT financiamientos_pkey PRIMARY KEY (id_financiamiento);


--
-- TOC entry 3230 (class 2606 OID 20379)
-- Name: fotografias fotografias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias
    ADD CONSTRAINT fotografias_pkey PRIMARY KEY (id_fotografia);


--
-- TOC entry 3232 (class 2606 OID 20381)
-- Name: inv_proyectos inv_proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_pkey PRIMARY KEY (id_inv_proyecto);


--
-- TOC entry 3234 (class 2606 OID 20383)
-- Name: inv_tipos inv_tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos
    ADD CONSTRAINT inv_tipos_pkey PRIMARY KEY (id_inv_tipo);


--
-- TOC entry 3236 (class 2606 OID 20385)
-- Name: investigadores investigadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_pkey PRIMARY KEY (id_investigador);


--
-- TOC entry 3238 (class 2606 OID 20387)
-- Name: lugar_desarrollos lugar_desarrollos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_pkey PRIMARY KEY (id_lugar_desarrollo);


--
-- TOC entry 3240 (class 2606 OID 20389)
-- Name: nota_archivos nota_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_pkey PRIMARY KEY (id_nota_archivo);


--
-- TOC entry 3242 (class 2606 OID 20391)
-- Name: nota_prensas nota_prensas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_pkey PRIMARY KEY (id_nota_prensa);


--
-- TOC entry 3244 (class 2606 OID 20393)
-- Name: permiso_archivos permiso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_pkey PRIMARY KEY (id_permiso_archivo);


--
-- TOC entry 3246 (class 2606 OID 20395)
-- Name: personas personas_celular_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_celular_key UNIQUE (celular);


--
-- TOC entry 3248 (class 2606 OID 20397)
-- Name: personas personas_ci_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_ci_key UNIQUE (ci);


--
-- TOC entry 3250 (class 2606 OID 20399)
-- Name: personas personas_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_correo_key UNIQUE (correo);


--
-- TOC entry 3252 (class 2606 OID 20401)
-- Name: personas personas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_pkey PRIMARY KEY (id_persona);


--
-- TOC entry 3254 (class 2606 OID 20403)
-- Name: personas personas_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_telefono_key UNIQUE (telefono);


--
-- TOC entry 3256 (class 2606 OID 20405)
-- Name: peti_archivos peti_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivos_pkey PRIMARY KEY (id_peti_archivo);


--
-- TOC entry 3258 (class 2606 OID 20407)
-- Name: peticiones peticiones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_pkey PRIMARY KEY (id_peticion);


--
-- TOC entry 3260 (class 2606 OID 20409)
-- Name: proy_archivos proy_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_pkey PRIMARY KEY (id_proy_archivo);


--
-- TOC entry 3262 (class 2606 OID 20411)
-- Name: proyectos proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id_proyecto);


--
-- TOC entry 3264 (class 2606 OID 20413)
-- Name: publi_archivos publi_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_pkey PRIMARY KEY (id_publi_archivo);


--
-- TOC entry 3266 (class 2606 OID 20415)
-- Name: publicaciones publicaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_pkey PRIMARY KEY (id_publicacion);


--
-- TOC entry 3268 (class 2606 OID 20417)
-- Name: segui_archivos segui_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_pkey PRIMARY KEY (id_segui_archivo);


--
-- TOC entry 3270 (class 2606 OID 20419)
-- Name: seguimientos seguimientos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_pkey PRIMARY KEY (id_seguimiento);


--
-- TOC entry 3272 (class 2606 OID 20421)
-- Name: tipos tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id_tipo);


--
-- TOC entry 3274 (class 2606 OID 20423)
-- Name: unidades unidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_pkey PRIMARY KEY (id_unidad);


--
-- TOC entry 3275 (class 2606 OID 20424)
-- Name: adm_usuario_roles adm_usuario_roles_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.adm_roles(id_rol);


--
-- TOC entry 3276 (class 2606 OID 20429)
-- Name: adm_usuario_roles adm_usuario_roles_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.adm_usuarios(id_usuario);


--
-- TOC entry 3277 (class 2606 OID 20434)
-- Name: adm_usuarios adm_usuarios_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuarios_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3278 (class 2606 OID 20439)
-- Name: autores autores_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3279 (class 2606 OID 20444)
-- Name: autores autores_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3280 (class 2606 OID 20449)
-- Name: basica_tecnicas basica_tecnicas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3281 (class 2606 OID 20454)
-- Name: comentarios comentarios_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3282 (class 2606 OID 20459)
-- Name: comentarios comentarios_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3283 (class 2606 OID 20464)
-- Name: contra_archivos contra_archivos_id_contratado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_contratado_fkey FOREIGN KEY (id_contratado) REFERENCES public.contratados(id_contratado);


--
-- TOC entry 3284 (class 2606 OID 20469)
-- Name: contra_archivos contra_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3285 (class 2606 OID 20474)
-- Name: contratados contratados_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3286 (class 2606 OID 20479)
-- Name: contratados contratados_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3287 (class 2606 OID 20484)
-- Name: conv_archivos conv_archivos_id_convenio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_convenio_fkey FOREIGN KEY (id_convenio) REFERENCES public.convenios(id_convenio);


--
-- TOC entry 3288 (class 2606 OID 20489)
-- Name: conv_archivos conv_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3289 (class 2606 OID 20494)
-- Name: convenios convenios_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3290 (class 2606 OID 20499)
-- Name: convenios convenios_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3291 (class 2606 OID 20504)
-- Name: curso_archivos curso_archivos_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3292 (class 2606 OID 20509)
-- Name: curso_archivos curso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3293 (class 2606 OID 20514)
-- Name: cursos cursos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3294 (class 2606 OID 20519)
-- Name: evento_archivos evento_archivos_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id_evento);


--
-- TOC entry 3295 (class 2606 OID 20524)
-- Name: evento_archivos evento_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3296 (class 2606 OID 20529)
-- Name: eventos eventos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3297 (class 2606 OID 20534)
-- Name: expo_archivos expo_archivos_id_exposicion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_exposicion_fkey FOREIGN KEY (id_exposicion) REFERENCES public.exposiciones(id_exposicion);


--
-- TOC entry 3298 (class 2606 OID 20539)
-- Name: expo_archivos expo_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3299 (class 2606 OID 20544)
-- Name: exposiciones exposiciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3300 (class 2606 OID 20549)
-- Name: expositores expositores_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expositores
    ADD CONSTRAINT expositores_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3301 (class 2606 OID 20554)
-- Name: financiamientos financiamientos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.financiamientos
    ADD CONSTRAINT financiamientos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3302 (class 2606 OID 20559)
-- Name: inv_proyectos inv_proyectos_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3303 (class 2606 OID 20564)
-- Name: inv_proyectos inv_proyectos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3304 (class 2606 OID 20569)
-- Name: investigadores investigadores_id_inv_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_inv_tipo_fkey FOREIGN KEY (id_inv_tipo) REFERENCES public.inv_tipos(id_inv_tipo);


--
-- TOC entry 3305 (class 2606 OID 20574)
-- Name: investigadores investigadores_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3306 (class 2606 OID 20579)
-- Name: lugar_desarrollos lugar_desarrollos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3307 (class 2606 OID 20584)
-- Name: nota_archivos nota_archivos_id_nota_prensa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_nota_prensa_fkey FOREIGN KEY (id_nota_prensa) REFERENCES public.nota_prensas(id_nota_prensa);


--
-- TOC entry 3308 (class 2606 OID 20589)
-- Name: nota_archivos nota_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3309 (class 2606 OID 20594)
-- Name: nota_prensas nota_prensas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3310 (class 2606 OID 20599)
-- Name: permiso_archivos permiso_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3311 (class 2606 OID 20604)
-- Name: permiso_archivos permiso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3312 (class 2606 OID 20609)
-- Name: personas personas_id_fotografia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT personas_id_fotografia_fkey FOREIGN KEY (id_fotografia) REFERENCES public.fotografias(id_fotografia);


--
-- TOC entry 3313 (class 2606 OID 20614)
-- Name: peti_archivos peti_archivos_id_peticion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivos_id_peticion_fkey FOREIGN KEY (id_peticion) REFERENCES public.peticiones(id_peticion);


--
-- TOC entry 3314 (class 2606 OID 20619)
-- Name: peti_archivos peti_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peti_archivos
    ADD CONSTRAINT peti_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3315 (class 2606 OID 20624)
-- Name: peticiones peticiones_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3316 (class 2606 OID 20629)
-- Name: peticiones peticiones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticiones
    ADD CONSTRAINT peticiones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3317 (class 2606 OID 20634)
-- Name: proy_archivos proy_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3318 (class 2606 OID 20639)
-- Name: proy_archivos proy_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3319 (class 2606 OID 20644)
-- Name: proyectos proyectos_id_adm_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_adm_fkey FOREIGN KEY (id_adm) REFERENCES public.personas(id_persona);


--
-- TOC entry 3320 (class 2606 OID 20649)
-- Name: proyectos proyectos_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3321 (class 2606 OID 20654)
-- Name: publi_archivos publi_archivos_id_publicacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_publicacion_fkey FOREIGN KEY (id_publicacion) REFERENCES public.publicaciones(id_publicacion);


--
-- TOC entry 3322 (class 2606 OID 20659)
-- Name: publi_archivos publi_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publi_archivos
    ADD CONSTRAINT publi_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3323 (class 2606 OID 20664)
-- Name: publicaciones publicaciones_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3324 (class 2606 OID 20669)
-- Name: publicaciones publicaciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3325 (class 2606 OID 20674)
-- Name: segui_archivos segui_archivos_id_seguimiento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_id_seguimiento_fkey FOREIGN KEY (id_seguimiento) REFERENCES public.seguimientos(id_seguimiento);


--
-- TOC entry 3326 (class 2606 OID 20679)
-- Name: segui_archivos segui_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segui_archivos
    ADD CONSTRAINT segui_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3327 (class 2606 OID 20684)
-- Name: seguimientos seguimientos_id_director_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_id_director_fkey FOREIGN KEY (id_director) REFERENCES public.personas(id_persona);


--
-- TOC entry 3328 (class 2606 OID 20689)
-- Name: seguimientos seguimientos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seguimientos
    ADD CONSTRAINT seguimientos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3329 (class 2606 OID 20694)
-- Name: unidades unidades_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidades
    ADD CONSTRAINT unidades_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


-- Completed on 2020-12-07 01:36:56 -04

--
-- PostgreSQL database dump complete
--

