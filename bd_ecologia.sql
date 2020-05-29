--
-- PostgreSQL database dump
--

-- Dumped from database version 11.6
-- Dumped by pg_dump version 11.3

-- Started on 2020-05-10 16:55:19 -04

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

SET default_with_oids = false;

--
-- TOC entry 203 (class 1259 OID 17048)
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
-- TOC entry 202 (class 1259 OID 17046)
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
-- TOC entry 3582 (class 0 OID 0)
-- Dependencies: 202
-- Name: adm_rol_id_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_rol_id_rol_seq OWNED BY public.adm_roles.id_rol;


--
-- TOC entry 201 (class 1259 OID 17030)
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
-- TOC entry 200 (class 1259 OID 17028)
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
-- TOC entry 3583 (class 0 OID 0)
-- Dependencies: 200
-- Name: adm_usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_id_usuario_seq OWNED BY public.adm_usuarios.id_usuario;


--
-- TOC entry 205 (class 1259 OID 17080)
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
-- TOC entry 204 (class 1259 OID 17078)
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
-- TOC entry 3584 (class 0 OID 0)
-- Dependencies: 204
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adm_usuario_roles_id_adm_usuario_rol_seq OWNED BY public.adm_usuario_roles.id_adm_usuario_rol;


--
-- TOC entry 227 (class 1259 OID 18134)
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
-- TOC entry 226 (class 1259 OID 18132)
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
-- TOC entry 3585 (class 0 OID 0)
-- Dependencies: 226
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.basica_tecnicas_id_basica_tecnica_seq OWNED BY public.basica_tecnicas.id_basica_tecnica;


--
-- TOC entry 225 (class 1259 OID 18113)
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
-- TOC entry 224 (class 1259 OID 18111)
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
-- TOC entry 3586 (class 0 OID 0)
-- Dependencies: 224
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contra_archivos_id_contra_archivo_seq OWNED BY public.contra_archivos.id_contra_archivo;


--
-- TOC entry 223 (class 1259 OID 18088)
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
-- TOC entry 222 (class 1259 OID 18086)
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
-- TOC entry 3587 (class 0 OID 0)
-- Dependencies: 222
-- Name: contratados_id_contratado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contratados_id_contratado_seq OWNED BY public.contratados.id_contratado;


--
-- TOC entry 221 (class 1259 OID 18067)
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
-- TOC entry 220 (class 1259 OID 18065)
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
-- TOC entry 3588 (class 0 OID 0)
-- Dependencies: 220
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conv_archivos_id_conv_archivo_seq OWNED BY public.conv_archivos.id_conv_archivo;


--
-- TOC entry 219 (class 1259 OID 18042)
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
-- TOC entry 218 (class 1259 OID 18040)
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
-- TOC entry 3589 (class 0 OID 0)
-- Dependencies: 218
-- Name: convenios_id_convenio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.convenios_id_convenio_seq OWNED BY public.convenios.id_convenio;


--
-- TOC entry 233 (class 1259 OID 18189)
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
-- TOC entry 232 (class 1259 OID 18187)
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
-- TOC entry 3590 (class 0 OID 0)
-- Dependencies: 232
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.curso_archivos_id_curso_archivo_seq OWNED BY public.curso_archivos.id_curso_archivo;


--
-- TOC entry 231 (class 1259 OID 18169)
-- Name: cursos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cursos (
    id_curso integer NOT NULL,
    id_proyecto integer NOT NULL,
    titulo character varying(100),
    objetivo character varying(100),
    lugar character varying(100),
    expositores character varying(255),
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
-- TOC entry 230 (class 1259 OID 18167)
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
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 230
-- Name: cursos_id_curso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cursos_id_curso_seq OWNED BY public.cursos.id_curso;


--
-- TOC entry 237 (class 1259 OID 18230)
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
-- TOC entry 236 (class 1259 OID 18228)
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
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 236
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_archivos_id_evento_archivos_seq OWNED BY public.evento_archivos.id_evento_archivo;


--
-- TOC entry 235 (class 1259 OID 18210)
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
-- TOC entry 234 (class 1259 OID 18208)
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
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 234
-- Name: eventos_id_evento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eventos_id_evento_seq OWNED BY public.eventos.id_evento;


--
-- TOC entry 245 (class 1259 OID 18311)
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
-- TOC entry 244 (class 1259 OID 18309)
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
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 244
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expo_archivos_id_expo_archivo_seq OWNED BY public.expo_archivos.id_expo_archivo;


--
-- TOC entry 243 (class 1259 OID 18291)
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
-- TOC entry 242 (class 1259 OID 18289)
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
-- TOC entry 3595 (class 0 OID 0)
-- Dependencies: 242
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exposiciones_id_exposicion_seq OWNED BY public.exposiciones.id_exposicion;


--
-- TOC entry 197 (class 1259 OID 16995)
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
-- TOC entry 196 (class 1259 OID 16993)
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
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 196
-- Name: fotografia_id_fotografia_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fotografia_id_fotografia_seq OWNED BY public.fotografias.id_fotografia;


--
-- TOC entry 213 (class 1259 OID 17529)
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
-- TOC entry 212 (class 1259 OID 17527)
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
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 212
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_proyectos_id_inv_proyecto_seq OWNED BY public.inv_proyectos.id_inv_proyecto;


--
-- TOC entry 207 (class 1259 OID 17440)
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
-- TOC entry 206 (class 1259 OID 17438)
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
-- TOC entry 3598 (class 0 OID 0)
-- Dependencies: 206
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inv_tipos_id_inv_tipo_seq OWNED BY public.inv_tipos.id_inv_tipo;


--
-- TOC entry 209 (class 1259 OID 17451)
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
-- TOC entry 208 (class 1259 OID 17449)
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
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 208
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.investigadores_id_investigador_seq OWNED BY public.investigadores.id_investigador;


--
-- TOC entry 229 (class 1259 OID 18153)
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
-- TOC entry 228 (class 1259 OID 18151)
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
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 228
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lugar_desarrollos_id_lugar_desarrollo_seq OWNED BY public.lugar_desarrollos.id_lugar_desarrollo;


--
-- TOC entry 241 (class 1259 OID 18270)
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
-- TOC entry 240 (class 1259 OID 18268)
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
-- TOC entry 3601 (class 0 OID 0)
-- Dependencies: 240
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_archivos_id_nota_archivo_seq OWNED BY public.nota_archivos.id_nota_archivo;


--
-- TOC entry 239 (class 1259 OID 18251)
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
-- TOC entry 238 (class 1259 OID 18249)
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
-- TOC entry 3602 (class 0 OID 0)
-- Dependencies: 238
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_prensas_id_nota_prensa_seq OWNED BY public.nota_prensas.id_nota_prensa;


--
-- TOC entry 217 (class 1259 OID 18021)
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
-- TOC entry 216 (class 1259 OID 18019)
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
-- TOC entry 3603 (class 0 OID 0)
-- Dependencies: 216
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permiso_archivos_id_permiso_archivo_seq OWNED BY public.permiso_archivos.id_permiso_archivo;


--
-- TOC entry 199 (class 1259 OID 17007)
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
    conclusion text
);


ALTER TABLE public.personas OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 17005)
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
-- TOC entry 3604 (class 0 OID 0)
-- Dependencies: 198
-- Name: persona_id_persona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.persona_id_persona_seq OWNED BY public.personas.id_persona;


--
-- TOC entry 247 (class 1259 OID 18643)
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
-- TOC entry 246 (class 1259 OID 18641)
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
-- TOC entry 3605 (class 0 OID 0)
-- Dependencies: 246
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proy_archivos_id_proy_archivo_seq OWNED BY public.proy_archivos.id_proy_archivo;


--
-- TOC entry 211 (class 1259 OID 17486)
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
    "updatedAt" timestamp with time zone DEFAULT ('now'::text)::timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.proyectos OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 17484)
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
-- TOC entry 3606 (class 0 OID 0)
-- Dependencies: 210
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proyectos_id_proyecto_seq OWNED BY public.proyectos.id_proyecto;


--
-- TOC entry 215 (class 1259 OID 18010)
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
-- TOC entry 214 (class 1259 OID 18008)
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
-- TOC entry 3607 (class 0 OID 0)
-- Dependencies: 214
-- Name: tipos_id_tipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipos_id_tipo_seq OWNED BY public.tipos.id_tipo;


--
-- TOC entry 3210 (class 2604 OID 17051)
-- Name: adm_roles id_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles ALTER COLUMN id_rol SET DEFAULT nextval('public.adm_rol_id_rol_seq'::regclass);


--
-- TOC entry 3214 (class 2604 OID 17083)
-- Name: adm_usuario_roles id_adm_usuario_rol; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles ALTER COLUMN id_adm_usuario_rol SET DEFAULT nextval('public.adm_usuario_roles_id_adm_usuario_rol_seq'::regclass);


--
-- TOC entry 3206 (class 2604 OID 17033)
-- Name: adm_usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.adm_usuario_id_usuario_seq'::regclass);


--
-- TOC entry 3261 (class 2604 OID 18137)
-- Name: basica_tecnicas id_basica_tecnica; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas ALTER COLUMN id_basica_tecnica SET DEFAULT nextval('public.basica_tecnicas_id_basica_tecnica_seq'::regclass);


--
-- TOC entry 3257 (class 2604 OID 18116)
-- Name: contra_archivos id_contra_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos ALTER COLUMN id_contra_archivo SET DEFAULT nextval('public.contra_archivos_id_contra_archivo_seq'::regclass);


--
-- TOC entry 3252 (class 2604 OID 18091)
-- Name: contratados id_contratado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados ALTER COLUMN id_contratado SET DEFAULT nextval('public.contratados_id_contratado_seq'::regclass);


--
-- TOC entry 3248 (class 2604 OID 18070)
-- Name: conv_archivos id_conv_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos ALTER COLUMN id_conv_archivo SET DEFAULT nextval('public.conv_archivos_id_conv_archivo_seq'::regclass);


--
-- TOC entry 3243 (class 2604 OID 18045)
-- Name: convenios id_convenio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios ALTER COLUMN id_convenio SET DEFAULT nextval('public.convenios_id_convenio_seq'::regclass);


--
-- TOC entry 3274 (class 2604 OID 18192)
-- Name: curso_archivos id_curso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos ALTER COLUMN id_curso_archivo SET DEFAULT nextval('public.curso_archivos_id_curso_archivo_seq'::regclass);


--
-- TOC entry 3269 (class 2604 OID 18172)
-- Name: cursos id_curso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos ALTER COLUMN id_curso SET DEFAULT nextval('public.cursos_id_curso_seq'::regclass);


--
-- TOC entry 3283 (class 2604 OID 18233)
-- Name: evento_archivos id_evento_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos ALTER COLUMN id_evento_archivo SET DEFAULT nextval('public.evento_archivos_id_evento_archivos_seq'::regclass);


--
-- TOC entry 3278 (class 2604 OID 18213)
-- Name: eventos id_evento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos ALTER COLUMN id_evento SET DEFAULT nextval('public.eventos_id_evento_seq'::regclass);


--
-- TOC entry 3300 (class 2604 OID 18314)
-- Name: expo_archivos id_expo_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos ALTER COLUMN id_expo_archivo SET DEFAULT nextval('public.expo_archivos_id_expo_archivo_seq'::regclass);


--
-- TOC entry 3295 (class 2604 OID 18294)
-- Name: exposiciones id_exposicion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones ALTER COLUMN id_exposicion SET DEFAULT nextval('public.exposiciones_id_exposicion_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 16998)
-- Name: fotografias id_fotografia; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias ALTER COLUMN id_fotografia SET DEFAULT nextval('public.fotografia_id_fotografia_seq'::regclass);


--
-- TOC entry 3231 (class 2604 OID 17532)
-- Name: inv_proyectos id_inv_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos ALTER COLUMN id_inv_proyecto SET DEFAULT nextval('public.inv_proyectos_id_inv_proyecto_seq'::regclass);


--
-- TOC entry 3218 (class 2604 OID 17443)
-- Name: inv_tipos id_inv_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos ALTER COLUMN id_inv_tipo SET DEFAULT nextval('public.inv_tipos_id_inv_tipo_seq'::regclass);


--
-- TOC entry 3222 (class 2604 OID 17454)
-- Name: investigadores id_investigador; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores ALTER COLUMN id_investigador SET DEFAULT nextval('public.investigadores_id_investigador_seq'::regclass);


--
-- TOC entry 3265 (class 2604 OID 18156)
-- Name: lugar_desarrollos id_lugar_desarrollo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos ALTER COLUMN id_lugar_desarrollo SET DEFAULT nextval('public.lugar_desarrollos_id_lugar_desarrollo_seq'::regclass);


--
-- TOC entry 3291 (class 2604 OID 18273)
-- Name: nota_archivos id_nota_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos ALTER COLUMN id_nota_archivo SET DEFAULT nextval('public.nota_archivos_id_nota_archivo_seq'::regclass);


--
-- TOC entry 3287 (class 2604 OID 18254)
-- Name: nota_prensas id_nota_prensa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas ALTER COLUMN id_nota_prensa SET DEFAULT nextval('public.nota_prensas_id_nota_prensa_seq'::regclass);


--
-- TOC entry 3239 (class 2604 OID 18024)
-- Name: permiso_archivos id_permiso_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos ALTER COLUMN id_permiso_archivo SET DEFAULT nextval('public.permiso_archivos_id_permiso_archivo_seq'::regclass);


--
-- TOC entry 3201 (class 2604 OID 17010)
-- Name: personas id_persona; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas ALTER COLUMN id_persona SET DEFAULT nextval('public.persona_id_persona_seq'::regclass);


--
-- TOC entry 3304 (class 2604 OID 18646)
-- Name: proy_archivos id_proy_archivo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos ALTER COLUMN id_proy_archivo SET DEFAULT nextval('public.proy_archivos_id_proy_archivo_seq'::regclass);


--
-- TOC entry 3226 (class 2604 OID 17489)
-- Name: proyectos id_proyecto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos ALTER COLUMN id_proyecto SET DEFAULT nextval('public.proyectos_id_proyecto_seq'::regclass);


--
-- TOC entry 3235 (class 2604 OID 18013)
-- Name: tipos id_tipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos ALTER COLUMN id_tipo SET DEFAULT nextval('public.tipos_id_tipo_seq'::regclass);


--
-- TOC entry 3532 (class 0 OID 17048)
-- Dependencies: 203
-- Data for Name: adm_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_roles (id_rol, rol, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Administrador	Administrador del sistema	t	2019-09-09 01:04:46.766357-04	2019-09-09 01:04:46.766357-04
2	Director	Director del instituto de Ecologia	t	2019-09-09 01:04:59.237731-04	2019-09-09 01:04:59.237731-04
3	Investigador	Investigador del Instituto de Ecologia	t	2019-09-09 01:05:09.888365-04	2019-09-09 01:05:09.888365-04
\.


--
-- TOC entry 3534 (class 0 OID 17080)
-- Dependencies: 205
-- Data for Name: adm_usuario_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuario_roles (id_adm_usuario_rol, id_usuario, id_rol, estado, "createdAt", "updatedAt") FROM stdin;
3	3	3	t	2019-09-09 13:27:15.474194-04	2019-09-09 13:27:15.474194-04
2	2	2	t	2019-09-09 13:27:12.909651-04	2019-10-02 13:44:29.867-04
4	2	3	t	2019-09-09 16:26:16.862347-04	2019-10-02 13:44:29.873-04
66	28	2	t	2019-10-02 10:13:04.434-04	2019-10-02 13:44:44.612-04
1	1	1	t	2019-09-09 13:27:10.3653-04	2019-09-09 13:27:10.3653-04
67	28	3	t	2019-10-02 10:14:06.978-04	2019-10-02 13:47:24.651-04
68	29	1	t	2019-10-02 13:49:13.087-04	2019-10-02 13:49:13.087-04
69	29	2	t	2019-10-02 13:49:19.21-04	2019-10-02 13:49:19.21-04
70	29	3	t	2019-10-02 13:49:26.016-04	2019-10-02 13:49:26.016-04
\.


--
-- TOC entry 3530 (class 0 OID 17030)
-- Dependencies: 201
-- Data for Name: adm_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adm_usuarios (id_usuario, id_persona, usuario, password, recordatorio, estado, "createdAt", "updatedAt", "resetPasswordToken", "resetPasswordExpires") FROM stdin;
2	2	director	$2b$10$gbAG5QNDQsclsF1Li5uZ4uvXpWwS0a9FvKia06VD0JPDo6.KrKj9K	ecologia	t	2019-09-09 05:28:06.945-04	2019-09-25 13:53:17.075-04	\N	\N
3	3	investigador	$2b$10$vgD2OX2rBGDHePS7cK7i2Ol9ANKeoxBrZFJJ/9kjJ2y/rONwfcRcW	ecologia	t	2019-09-09 05:28:28.757-04	2019-09-25 14:44:22.653-04	\N	\N
28	32	001	$2b$10$PYyaLJqhHpr9e/sv7IVCLeHNry10B1N311iKlfZQ3/z9FqIfCRYPa	\N	t	2019-10-02 10:13:04.351-04	2019-10-02 10:13:04.351-04	\N	\N
29	33	002	$2b$10$TKO70f4qiua6/ilzQ0FGM.Y4gg58eAE9nTgJiJleBqJ2gZjJJtx5S	\N	t	2019-10-02 13:49:12.999-04	2019-10-02 13:49:12.999-04	\N	\N
1	1	admin	$2b$10$nFPLCv/2owXGYE6AWRRdUOntR72VCHHM4mnNmejKHVbkT/ySO2xCK	perrito	t	2019-09-09 05:27:19.174-04	2020-05-08 16:31:27.72-04	cc7e715bf5078bd2555ae5b2a89c1b93e110d46d	16:08:16.855+00
\.


--
-- TOC entry 3556 (class 0 OID 18134)
-- Dependencies: 227
-- Data for Name: basica_tecnicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.basica_tecnicas (id_basica_tecnica, id_proyecto, tipo, area, tipo_p, carga_h, unidades, estado, "createdAt", "updatedAt") FROM stdin;
3	2	basica	nose	nose1	20	\N	t	2019-12-19 14:46:42.057-04	2019-12-19 14:46:42.057-04
4	2	basica	Nose1	Nose2	100	\N	t	2019-12-20 05:07:34.489-04	2019-12-20 05:07:34.489-04
2	2	basica	a	b	10	\N	f	2019-12-19 14:42:39.495-04	2019-12-19 14:42:39.495-04
\.


--
-- TOC entry 3554 (class 0 OID 18113)
-- Dependencies: 225
-- Data for Name: contra_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contra_archivos (id_contra_archivo, id_contratado, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
2	4	UjroFMc589ruK0GSXBhitRtF.pdf	Whatever, Wherever,...	descri personal2	9	t	2020-02-25 22:37:44.25-04	2020-02-25 22:37:44.266-04
1	3	SnOzTq66vSBEvJRfeqlhx3Xh.pdf	tuna plant10	descri1 tuna1 personal rrhh	9	t	2020-02-25 22:27:01.707-04	2020-05-06 00:02:50.104-04
\.


--
-- TOC entry 3552 (class 0 OID 18088)
-- Dependencies: 223
-- Data for Name: contratados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contratados (id_contratado, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, nombrecompleto, ci, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
4	1	K0USyRIRPuF5qeB9L83v-nAB.pdf	Contrado de personal RRHH	Contrado de personal RRHH	9	04	Boris Lopez Perez	123456	2020-02-01 00:00:00-04	2020-02-02 00:00:00-04	Descripcion Personal 2	t	2020-02-25 22:37:44.188-04	2020-05-06 16:46:59.303-04
3	1	DiVAk2SrNZovYXfHImgatUZ6.pdf	Contrado de personal RRHH10	Contrado de personal RRHH	9	04	Boris Vargas Juanez11	9884972	2020-02-06 00:00:00-04	2020-02-14 00:00:00-04	Areglar computadoras y verificar servidor	t	2020-02-25 22:27:01.621-04	2020-05-06 17:03:58.136-04
\.


--
-- TOC entry 3550 (class 0 OID 18067)
-- Dependencies: 221
-- Data for Name: conv_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conv_archivos (id_conv_archivo, id_convenio, archivo, nombre, descripcion, id_tipo, tipo, estado, "createdAt", "updatedAt") FROM stdin;
3	3	w4kee-xw6EPbqOiF2PKM9iS8.pdf	tuna plant1	descr1 arcivo	8	\N	t	2020-02-25 22:23:42.479-04	2020-05-06 00:02:04.374-04
2	2	Be_pr1faSdvoPBQDdlxoqQKt.pdf	Whatever, Wherever,...1	descr what1	8	\N	t	2020-02-25 19:32:21.97-04	2020-05-06 00:02:25.804-04
4	4	cVqc47mNYYBMRkz_zvjHBXBW.pdf	Practica7	desc prac7 	8	\N	t	2020-05-06 13:20:17.416-04	2020-05-06 13:20:17.449-04
\.


--
-- TOC entry 3548 (class 0 OID 18042)
-- Dependencies: 219
-- Data for Name: convenios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convenios (id_convenio, id_proyecto, archivo, nombre_archivo, descripcion_archivo, id_tipo, tipo, titulo, objetivo, fechaini, fechafin, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
3	1	Ird4mK6g-Ac62r_MD5CEwnBe.pdf	Contrado de convenio	Contrado de convenio	8	convenio marco	convenio1	obje1	2020-02-06 00:00:00-04	2020-02-14 00:00:00-04	descri1 convenio	t	2020-02-25 22:23:42.418-04	2020-02-25 22:23:42.457-04
1	1	UIB7Cd-nQjfOqqgYS-yO2ZuI.pdf	Contrado de convenio11	Contrado de convenio	8	convenio marco	convenio1	obje1	2020-02-20 00:00:00-04	2020-02-29 00:00:00-04	descrip1	t	2020-02-25 19:23:37.756-04	2020-05-06 00:01:48.96-04
2	1	D0H9FfWHW3yl4LbzL7f_00H5.pdf	Contrado de convenio	Contrado de convenio	8	convenio marco	convenio11	obje1	2020-02-20 00:00:00-04	2020-02-29 00:00:00-04	descrip1	t	2020-02-25 19:32:21.902-04	2020-02-25 19:32:21.952-04
4	1	QkbDeITD1bshkIxJYgjy1s2z.pdf	Convenio de convenio1000	descripcion de convenio: desc 1000	8	convenio marco	convenio2000	obj 2000	2020-05-07 00:00:00-04	2020-05-31 00:00:00-04	desc 2000	t	2020-05-06 13:20:17.275-04	2020-05-06 16:52:35.72-04
\.


--
-- TOC entry 3562 (class 0 OID 18189)
-- Dependencies: 233
-- Data for Name: curso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.curso_archivos (id_curso_archivo, id_curso, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	3	Dl6WiHPezu7i7T9s7M8f9Gxg.pdf	ANDROID NIVEL I	gigi	7	t	2019-12-19 15:29:33.992-04	2019-12-19 15:29:34.058-04
2	4	kwlmrxEkZkgzxZgNKY-7mHM3.pdf	Whatever, Wherever,...	descrip1 prueba1	7	t	2020-02-25 16:41:12.868-04	2020-02-25 16:41:12.899-04
\.


--
-- TOC entry 3560 (class 0 OID 18169)
-- Dependencies: 231
-- Data for Name: cursos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cursos (id_curso, id_proyecto, titulo, objetivo, lugar, expositores, asistentes, fechaini, fechafin, horas, estado, "createdAt", "updatedAt") FROM stdin;
1	2	titu1	obje1	La Paz	\N	100	2019-12-04 00:00:00-04	2019-12-05 00:00:00-04	50	t	2019-12-19 15:12:49.3-04	2019-12-19 15:12:49.3-04
3	2	titu1	obj1	La Paz	\N	100	2019-12-04 00:00:00-04	2019-12-12 00:00:00-04	60	t	2019-12-19 15:29:33.96-04	2019-12-19 15:29:33.96-04
4	2	titulo prueba1	HAcer la prueba	Mallasa	\N	10	2020-02-06 00:00:00-04	2020-02-14 00:00:00-04	100	t	2020-02-25 16:41:12.805-04	2020-02-25 16:41:12.805-04
2	2	titu2	ob2	La Paz	\N	100	2019-12-05 00:00:00-04	2019-12-21 00:00:00-04	50	f	2019-12-19 15:26:17.868-04	2019-12-19 15:26:17.868-04
\.


--
-- TOC entry 3566 (class 0 OID 18230)
-- Dependencies: 237
-- Data for Name: evento_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento_archivos (id_evento_archivo, id_evento, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	7	dUyc97YPptOFXPSkS8gaSuN1.pdf	tuna plant prueba1	descri1 prueba1 jajaja	7	t	2020-02-25 16:43:39.813-04	2020-02-25 16:43:39.835-04
\.


--
-- TOC entry 3564 (class 0 OID 18210)
-- Dependencies: 235
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.eventos (id_evento, id_proyecto, titulo, objetivo, lugar, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
1	2	titu	obje1	La Paz	2019-12-04 00:00:00-04	2019-12-06 00:00:00-04	jaja1	t	2019-12-20 00:04:13.928-04	2019-12-20 00:04:13.928-04
2	2	titu2	obj2	Cochabamba	2019-12-05 00:00:00-04	2019-12-13 00:00:00-04	resumen2	t	2019-12-20 00:13:41.256-04	2019-12-20 00:13:41.256-04
3	2	titu3	obje3	Santa Cruz	2019-12-04 00:00:00-04	2019-12-12 00:00:00-04	resumen3	t	2019-12-20 00:15:15.104-04	2019-12-20 00:15:15.104-04
4	2	titu4	obj4	La Paz	2019-12-05 00:00:00-04	2019-12-14 00:00:00-04	jeje	t	2019-12-20 00:18:20.643-04	2019-12-20 00:18:20.643-04
5	2	titu5	obj5	La Paz	2019-12-05 00:00:00-04	2019-12-28 00:00:00-04	resumen5	t	2019-12-20 00:20:56.877-04	2019-12-20 00:20:56.877-04
6	2	titu6	ob6	La Paz	2019-12-20 00:00:00-04	2019-12-29 00:00:00-04	resumen1	t	2019-12-20 00:24:46.876-04	2019-12-20 00:24:46.876-04
7	2	evento1 prueba1	objetivo prueba1	La Paz	2020-02-06 00:00:00-04	2020-02-14 00:00:00-04	evento1 resumen prueba1 jajajaja	f	2020-02-25 16:43:39.776-04	2020-02-25 16:43:39.776-04
\.


--
-- TOC entry 3574 (class 0 OID 18311)
-- Dependencies: 245
-- Data for Name: expo_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expo_archivos (id_expo_archivo, id_exposicion, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	1	Gy-HYs_zegJGuJwYTICl2pxz.pdf	Whatever, Wherever,...	descripcion1	7	t	2020-02-25 17:38:07.455-04	2020-02-25 17:38:07.472-04
2	2	V8JZSYowsxl5ltHAMFHS6HPg.pdf	tuna plant	jaja1	7	t	2020-02-26 00:23:02.823-04	2020-02-26 00:23:02.861-04
\.


--
-- TOC entry 3572 (class 0 OID 18291)
-- Dependencies: 243
-- Data for Name: exposiciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exposiciones (id_exposicion, id_proyecto, titulo, tema, objetivo, lugar, asistentes, fechaini, fechafin, resumen, estado, "createdAt", "updatedAt") FROM stdin;
1	2	exposicion1	a	obje1	La Paz	10	2020-02-05 00:00:00-04	2020-02-13 00:00:00-04	resumen1	t	2020-02-25 17:38:07.418-04	2020-02-25 17:38:07.418-04
2	2	exposicion2	SObre virus	enseñar	La Paz	100	2020-02-07 00:00:00-04	2020-02-15 00:00:00-04	se hablara acerca de virus, ademas que habra premios	t	2020-02-26 00:23:02.773-04	2020-02-26 00:23:02.773-04
\.


--
-- TOC entry 3526 (class 0 OID 16995)
-- Dependencies: 197
-- Data for Name: fotografias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fotografias (id_fotografia, imagen, descripcion, numero, estado, "createdAt", "updatedAt", tipo) FROM stdin;
1	photo_default.png	fotografia por default.	1	t	2019-09-09 04:04:50.089-04	2020-04-30 10:19:33-04	foto
\.


--
-- TOC entry 3542 (class 0 OID 17529)
-- Dependencies: 213
-- Data for Name: inv_proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_proyectos (id_inv_proyecto, id_proyecto, id_investigador, estado, "createdAt", "updatedAt") FROM stdin;
2	1	1	t	2019-09-30 10:34:42.019-04	2019-09-30 10:39:16.21-04
3	2	12	t	2019-10-09 14:42:28.347-04	2019-10-09 14:42:28.347-04
6	18	12	t	2019-10-20 20:05:50.926-04	2019-10-20 20:05:50.926-04
7	18	13	t	2019-10-20 20:05:50.956-04	2019-10-20 20:05:50.956-04
8	24	12	t	2019-10-20 20:21:19.097-04	2019-10-20 20:21:19.097-04
9	24	13	t	2019-10-20 20:21:19.111-04	2019-10-20 20:21:19.111-04
10	25	12	t	2019-10-22 10:35:42.042-04	2019-10-22 10:35:42.042-04
11	25	13	t	2019-10-22 10:35:42.05-04	2019-10-22 10:35:42.05-04
12	26	13	t	2019-10-22 10:58:20.102-04	2019-10-22 10:58:20.102-04
4	3	12	t	2019-10-20 20:00:56.798-04	2019-10-20 20:00:56.798-04
5	3	13	t	2019-10-20 20:00:56.799-04	2019-10-20 20:00:56.799-04
13	41	1	t	2020-04-30 19:33:36.857-04	2020-04-30 19:33:36.857-04
17	42	1	t	2020-04-30 19:39:18.123-04	2020-04-30 19:39:18.123-04
21	43	1	t	2020-04-30 19:45:52.719-04	2020-04-30 19:45:52.719-04
25	44	1	t	2020-04-30 20:11:31.623-04	2020-04-30 20:11:31.623-04
29	45	1	t	2020-04-30 20:31:20.364-04	2020-04-30 20:31:20.364-04
33	46	1	t	2020-04-30 22:59:42.862-04	2020-04-30 22:59:42.862-04
37	47	1	t	2020-04-30 23:04:58.425-04	2020-04-30 23:04:58.425-04
41	48	1	t	2020-04-30 23:08:13.049-04	2020-04-30 23:08:13.049-04
45	49	1	t	2020-04-30 23:14:52-04	2020-04-30 23:14:52-04
49	50	1	t	2020-04-30 23:18:24.366-04	2020-04-30 23:18:24.366-04
50	51	1	t	2020-05-07 22:44:35.663-04	2020-05-07 22:44:35.663-04
\.


--
-- TOC entry 3536 (class 0 OID 17440)
-- Dependencies: 207
-- Data for Name: inv_tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inv_tipos (id_inv_tipo, tipo, estado, "createdAt", "updatedAt", descripcion) FROM stdin;
1	Titular	t	2019-09-30 10:00:28.507-04	2019-09-30 10:01:36.597-04	descripcion cambiada
2	Asociado con proyecto	t	2019-10-01 09:52:11.63-04	2019-10-01 09:52:11.63-04	Tiene un proyecto asociado
3	Asociado por invitacion	t	2019-10-01 09:52:39.088-04	2019-10-01 09:52:39.088-04	invitado por la UMSA, por tiempo determinado
\.


--
-- TOC entry 3538 (class 0 OID 17451)
-- Dependencies: 209
-- Data for Name: investigadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.investigadores (id_investigador, id_persona, id_inv_tipo, estado, "createdAt", "updatedAt") FROM stdin;
2	2	1	t	2019-09-30 10:19:13.81-04	2019-09-30 10:19:13.81-04
1	3	2	t	2019-09-30 10:07:52.433-04	2019-09-30 10:08:50.281-04
12	32	3	t	2019-10-02 10:14:06.983-04	2019-10-02 13:46:53.032-04
13	33	3	t	2019-10-02 13:49:26.018-04	2019-10-02 13:49:26.018-04
\.


--
-- TOC entry 3558 (class 0 OID 18153)
-- Dependencies: 229
-- Data for Name: lugar_desarrollos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lugar_desarrollos (id_lugar_desarrollo, id_proyecto, departamento, provincia, municipio, localidad, latmax, lonmax, latmin, lonmin, estado, "createdAt", "updatedAt") FROM stdin;
3	2	BE	Antonio Vaca Díez	nose1	nose2	1.20000000	2.10000000	2.10000000	2.10000000	t	2019-12-19 14:57:14.835-04	2019-12-19 14:57:14.835-04
4	2	BE	Cercado	La Paz	Mallasa	1.20000000	1.20000000	1.20000000	1.30000000	f	2020-02-25 15:58:33.533-04	2020-02-25 15:58:33.533-04
\.


--
-- TOC entry 3570 (class 0 OID 18270)
-- Dependencies: 241
-- Data for Name: nota_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_archivos (id_nota_archivo, id_nota_prensa, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
1	6	atqCveIkR5QD18JPTTNLoQWh.pdf	Whatever, Wherever,...	hhhh	7	t	2020-02-25 17:27:04.897-04	2020-02-25 17:27:04.939-04
\.


--
-- TOC entry 3568 (class 0 OID 18251)
-- Dependencies: 239
-- Data for Name: nota_prensas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota_prensas (id_nota_prensa, id_proyecto, titulo, objetivo, lugar, prensa, resumen, estado, "createdAt", "updatedAt", fecha) FROM stdin;
6	2	convenio1	obje1	La Paz	\N	998989899	t	2020-02-25 17:27:04.862-04	2020-02-25 17:27:04.862-04	2020-02-25 00:00:00-04
\.


--
-- TOC entry 3546 (class 0 OID 18021)
-- Dependencies: 217
-- Data for Name: permiso_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permiso_archivos (id_permiso_archivo, id_proyecto, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt", tipo) FROM stdin;
2	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 09:26:46.322-04	2019-12-19 09:26:46.322-04	otorgacion
3	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 09:27:51.854-04	2019-12-19 09:27:51.854-04	solicitud
4	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	3	t	2019-12-19 09:30:14.944-04	2019-12-19 09:30:14.944-04	solicitud
5	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 09:31:00.441-04	2019-12-19 09:31:00.441-04	solicitud
6	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	2	t	2019-12-19 09:34:12.164-04	2019-12-19 09:34:12.164-04	otorgacion
7	1	A2s0llOfftnl-J0qyIkOgCid.pdf	document1	desc	2	t	2019-12-19 09:35:04.494-04	2019-12-19 09:35:04.558-04	solicitud
1	1	rbUuVjThA82Y_wrsem3yinjz.pdf	sin pdf	desc	4	t	2019-12-18 16:11:05.038-04	2019-12-18 16:14:41.201-04	otorgacion
8	1	rbUuVjThA82Y_wrsem3yinjz.pdf	document10	lele1	3	t	2019-12-19 09:36:33.358-04	2020-05-05 20:28:34.942-04	otorgacion
\.


--
-- TOC entry 3528 (class 0 OID 17007)
-- Dependencies: 199
-- Data for Name: personas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personas (id_persona, id_fotografia, paterno, materno, nombres, sexo, estado_civil, fec_nacimiento, pais, provincia, direccion1, correo, telefono, grado_academico, estado, "createdAt", "updatedAt", ci, url, ciudad, direccion2, celular, lenguaje, formacion_pro, formacion_adi, habilidades, conclusion) FROM stdin;
32	1	perez		juan1	\N	\N	\N	\N	\N	\N	p3ecologia@outlook.es	\N	Ph. D.	t	2019-10-02 10:13:04.331-04	2019-10-02 10:13:04.331-04	001	\N	LP	\N	\N	\N	\N	\N	\N	\N
2	1	Moraes	Ramirez	Monica	Femenino	Casado	1986-01-05 00:00:00-04	BO	Murillo	Obrajes	p1ecologia@outlook.es	00000000	Ph. D.	t	2019-09-09 00:46:55.187564-04	2019-09-24 11:32:31.626-04	0000002	\N	LP	\N	\N	\N	\N	\N	\N	\N
3	1	Garitano	Zavala	Alvaro	Masculino	Casado	1988-01-05 00:00:00-04	BO	Murillo	Calacoto	p2ecologia@outlook.com	22222222	Ph. D.	t	2019-09-09 00:52:01.047628-04	2020-04-30 00:59:47.769-04	0000003	\N	CH	\N	\N	\N	\N	\N	\N	\N
33	1	perez		juanito22	\N	\N	\N	\N	\N	\N	p4ecologia@outlook.es	\N	M. Sc.	t	2019-10-02 13:49:12.962-04	2020-04-30 10:23:41.621-04	002	\N	SC	\N	\N	\N	\N	\N	\N	\N
1	1	Vargas	Paucara	Boris	Masculino	Soltero	1996-01-12 00:00:00-04	BO	Murillo	Mallasa	borisvargaspaucara@gmail.com	60514138	Estudiante	t	2019-09-09 00:44:24.860882-04	2020-05-07 19:57:44.506-04	0000001	\N	LP	\N	60514138	es_BO	Estudie lalaa	\N	\N	\N
\.


--
-- TOC entry 3576 (class 0 OID 18643)
-- Dependencies: 247
-- Data for Name: proy_archivos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proy_archivos (id_proy_archivo, id_proyecto, archivo, nombre, descripcion, id_tipo, estado, "createdAt", "updatedAt") FROM stdin;
58	50	6MeHJyxzTtiygPPmXXMsmAL5.pdf	ANDROID NIVEL I	Archivos necesarios para la creacion de proyecto	1	t	2020-04-30 23:18:24.374-04	2020-04-30 23:18:24.537-04
59	50	TykxuDeEkvpHSL1BnJAdEG0I.pdf	show	Archivos necesarios para la creacion de proyecto	1	t	2020-04-30 23:18:24.375-04	2020-04-30 23:18:24.56-04
60	50	IPb-HWUdeO9oIerQZm96xlnI.pdf	Practica5	Archivos necesarios para la creacion de proyecto	1	t	2020-04-30 23:18:24.39-04	2020-04-30 23:18:24.712-04
57	1	6MeHJyxzTtiygPPmXXMsmAL5.pdf	mismo3	desc3	1	t	2020-04-30 22:49:36-04	2020-04-30 22:49:36-04
17	1	6MeHJyxzTtiygPPmXXMsmAL5.pdf	mismo1	desc1	1	t	2020-04-30 21:40:21.188371-04	2020-05-05 17:36:29.22-04
56	1	6MeHJyxzTtiygPPmXXMsmAL5.pdf	mismo22	desc2	1	t	2020-04-30 22:48:38.283-04	2020-05-05 20:28:21.353-04
62	1	hqTixlaJnPVJEqPFwP0NgSVj.pdf	Practica5	prac5	6	t	2020-05-02 01:05:03.495-04	2020-05-05 20:28:47.844-04
61	1	LIig_NQhngE7RUKLrf40Adrg.pdf	show	certificado	7	t	2020-05-01 23:02:37.24-04	2020-05-05 20:28:57.601-04
63	1	65mL0ZUVs_b6iYM-HCVfAOYA.pdf	Practica8	desc prac8	7	t	2020-05-06 10:29:13.368-04	2020-05-06 10:29:13.498-04
64	1	nAy8nSg5ZtaLYegSvtXZih4s.pdf	Practica7	desc prac7	6	t	2020-05-06 10:31:39.819-04	2020-05-06 10:31:39.889-04
65	1	NA1KIM-NBV1cEwEx_L6ioGta.pdf	Practica7	desc prac7 otros	7	t	2020-05-06 10:32:22.369-04	2020-05-06 10:32:22.421-04
67	51	Rda1A7Ge2WL_PTxFoES3gmnH.pdf	show	Archivos necesarios para la creacion de proyecto	1	t	2020-05-07 22:44:35.673-04	2020-05-07 22:44:35.9-04
66	51	4B4nePZADYuYhwqSCuVlGvcF.pdf	Practica7	Archivos necesarios para la creacion de proyecto	1	t	2020-05-07 22:44:35.673-04	2020-05-07 22:44:36.037-04
68	51	BgHcebmW6K10fF6hYmvRfmlj.pdf	Practica8	Archivos necesarios para la creacion de proyecto	1	t	2020-05-07 22:44:35.676-04	2020-05-07 22:44:36.044-04
\.


--
-- TOC entry 3540 (class 0 OID 17486)
-- Dependencies: 211
-- Data for Name: proyectos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proyectos (id_proyecto, id_adm, id_coordinador, titulo, fechaini, fechafin, estado, "createdAt", "updatedAt") FROM stdin;
2	1	1	proyecto2	2019-10-05 20:00:00-04	2019-11-03 20:00:00-04	inactivo	2019-10-09 14:36:23.058-04	2019-10-09 14:36:23.058-04
3	1	1	proyecto3	2019-10-05 20:00:00-04	2019-11-03 20:00:00-04	pendiente	2019-10-09 14:42:28.312-04	2019-10-09 14:42:28.312-04
24	1	1	proyecto6	2019-10-30 20:00:00-04	2019-11-11 20:00:00-04	cerrado	2019-10-20 20:21:19.053-04	2019-10-20 20:21:19.053-04
18	1	1	admin	2019-10-20 20:00:00-04	2019-10-31 20:00:00-04	activo	2019-10-20 20:05:50.871-04	2019-10-20 20:05:50.871-04
25	1	1	proyecto 7	2019-10-30 20:00:00-04	2019-11-22 20:00:00-04	activo	2019-10-22 10:35:41.967-04	2019-10-22 10:35:41.967-04
26	1	1	proyecto 8 sin archivos	2019-10-01 00:00:00-04	2019-11-30 00:00:00-04	activo	2019-10-22 10:58:20.035-04	2020-04-30 10:55:50.625-04
1	1	2	Renovacion de agua	2019-09-01 00:00:00-04	2019-11-29 00:00:00-04	activo	2019-09-30 10:25:27.22-04	2020-04-30 11:00:05.093-04
41	1	2	proyecto 100	2020-04-01 00:00:00-04	2020-04-30 00:00:00-04	activo	2020-04-30 19:33:36.705-04	2020-04-30 19:33:36.705-04
42	1	2	proyecto 101	2020-01-02 00:00:00-04	2020-04-29 00:00:00-04	activo	2020-04-30 19:39:18.079-04	2020-04-30 19:39:18.079-04
43	1	2	PROYECTO 102	2020-01-05 00:00:00-04	2020-04-25 00:00:00-04	activo	2020-04-30 19:45:52.678-04	2020-04-30 19:45:52.678-04
44	1	2	PROYECTO 103	2020-01-01 00:00:00-04	2020-04-15 00:00:00-04	activo	2020-04-30 20:11:31.549-04	2020-04-30 20:11:31.549-04
45	1	2	PROYECTO 200	2020-01-10 00:00:00-04	2020-04-30 00:00:00-04	activo	2020-04-30 20:31:20.294-04	2020-04-30 20:31:20.294-04
46	1	2	PROYECTO 300	2020-01-03 00:00:00-04	2020-04-23 00:00:00-04	activo	2020-04-30 22:59:42.811-04	2020-04-30 22:59:42.811-04
47	1	2	PROYECTO 301	2019-10-31 00:00:00-04	2019-11-29 00:00:00-04	activo	2020-04-30 23:04:58.396-04	2020-04-30 23:04:58.396-04
48	1	2	proyecto 302	2019-10-31 00:00:00-04	2019-11-29 00:00:00-04	activo	2020-04-30 23:08:13.009-04	2020-04-30 23:08:13.009-04
49	1	2	proyecto 104	2019-10-31 00:00:00-04	2019-12-05 00:00:00-04	activo	2020-04-30 23:14:51.96-04	2020-04-30 23:14:51.96-04
50	1	2	Proyecto 400	2019-10-31 00:00:00-04	2019-12-05 00:00:00-04	activo	2020-04-30 23:18:24.321-04	2020-04-30 23:18:24.321-04
51	1	2	proyecto prueba 100	2020-05-01 00:00:00-04	2020-05-31 00:00:00-04	activo	2020-05-07 22:44:35.543-04	2020-05-07 22:45:56.335-04
\.


--
-- TOC entry 3544 (class 0 OID 18010)
-- Dependencies: 215
-- Data for Name: tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipos (id_tipo, nombre, descripcion, estado, "createdAt", "updatedAt") FROM stdin;
1	Principal	Son los archivos principales para la creación del proyecto	t	2019-12-18 11:53:22.007415-04	2019-12-18 11:53:22.007415-04
2	DGB	Archivo de direccion general de biodiversidad	t	2019-12-18 11:53:22.007415-04	2019-12-18 11:53:22.007415-04
3	SERNAP	Archivo de servicio nacional de areas protegidas	t	2019-12-18 11:53:22.007415-04	2019-12-18 11:53:22.007415-04
4	CITES	Archivo	t	2019-12-18 11:53:22.007415-04	2019-12-18 11:53:22.007415-04
5	BIOETICA	Archivo	t	2019-12-18 11:53:22.007415-04	2019-12-18 11:53:22.007415-04
6	Cierre de proyecto	Archivos necesarios para el cierre de proyecto	t	2019-12-18 11:53:22.007415-04	2019-12-18 11:53:22.007415-04
7	Otros	Cualquier tipo de archivo	t	2019-12-18 11:53:22.007415-04	2019-12-18 11:53:22.007415-04
8	Convenio	Archivo de convenio	t	2020-05-03 17:43:25.36632-04	2020-05-03 17:43:25.36632-04
9	Contratado	Archivo de contratado	t	2020-05-03 17:43:46.238677-04	2020-05-03 17:43:46.238677-04
10	Cursos	Archivo de Cursos	t	2020-05-03 17:51:01.170459-04	2020-05-03 17:51:01.170459-04
11	Evento	Archivo de Eventos	t	2020-05-03 17:51:14.517132-04	2020-05-03 17:51:14.517132-04
12	Nota de prensa	Archivo de no tas de prensa	t	2020-05-03 17:51:41.531575-04	2020-05-03 17:51:41.531575-04
13	Exposicion	Archivo de exposiciones	t	2020-05-03 17:52:29.646938-04	2020-05-03 17:52:29.646938-04
\.


--
-- TOC entry 3608 (class 0 OID 0)
-- Dependencies: 202
-- Name: adm_rol_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_rol_id_rol_seq', 3, true);


--
-- TOC entry 3609 (class 0 OID 0)
-- Dependencies: 200
-- Name: adm_usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_id_usuario_seq', 29, true);


--
-- TOC entry 3610 (class 0 OID 0)
-- Dependencies: 204
-- Name: adm_usuario_roles_id_adm_usuario_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adm_usuario_roles_id_adm_usuario_rol_seq', 70, true);


--
-- TOC entry 3611 (class 0 OID 0)
-- Dependencies: 226
-- Name: basica_tecnicas_id_basica_tecnica_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.basica_tecnicas_id_basica_tecnica_seq', 4, true);


--
-- TOC entry 3612 (class 0 OID 0)
-- Dependencies: 224
-- Name: contra_archivos_id_contra_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contra_archivos_id_contra_archivo_seq', 2, true);


--
-- TOC entry 3613 (class 0 OID 0)
-- Dependencies: 222
-- Name: contratados_id_contratado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contratados_id_contratado_seq', 4, true);


--
-- TOC entry 3614 (class 0 OID 0)
-- Dependencies: 220
-- Name: conv_archivos_id_conv_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conv_archivos_id_conv_archivo_seq', 4, true);


--
-- TOC entry 3615 (class 0 OID 0)
-- Dependencies: 218
-- Name: convenios_id_convenio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.convenios_id_convenio_seq', 4, true);


--
-- TOC entry 3616 (class 0 OID 0)
-- Dependencies: 232
-- Name: curso_archivos_id_curso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.curso_archivos_id_curso_archivo_seq', 2, true);


--
-- TOC entry 3617 (class 0 OID 0)
-- Dependencies: 230
-- Name: cursos_id_curso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cursos_id_curso_seq', 4, true);


--
-- TOC entry 3618 (class 0 OID 0)
-- Dependencies: 236
-- Name: evento_archivos_id_evento_archivos_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_archivos_id_evento_archivos_seq', 1, true);


--
-- TOC entry 3619 (class 0 OID 0)
-- Dependencies: 234
-- Name: eventos_id_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_id_evento_seq', 7, true);


--
-- TOC entry 3620 (class 0 OID 0)
-- Dependencies: 244
-- Name: expo_archivos_id_expo_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expo_archivos_id_expo_archivo_seq', 2, true);


--
-- TOC entry 3621 (class 0 OID 0)
-- Dependencies: 242
-- Name: exposiciones_id_exposicion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exposiciones_id_exposicion_seq', 2, true);


--
-- TOC entry 3622 (class 0 OID 0)
-- Dependencies: 196
-- Name: fotografia_id_fotografia_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fotografia_id_fotografia_seq', 14, true);


--
-- TOC entry 3623 (class 0 OID 0)
-- Dependencies: 212
-- Name: inv_proyectos_id_inv_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_proyectos_id_inv_proyecto_seq', 50, true);


--
-- TOC entry 3624 (class 0 OID 0)
-- Dependencies: 206
-- Name: inv_tipos_id_inv_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inv_tipos_id_inv_tipo_seq', 3, true);


--
-- TOC entry 3625 (class 0 OID 0)
-- Dependencies: 208
-- Name: investigadores_id_investigador_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.investigadores_id_investigador_seq', 13, true);


--
-- TOC entry 3626 (class 0 OID 0)
-- Dependencies: 228
-- Name: lugar_desarrollos_id_lugar_desarrollo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lugar_desarrollos_id_lugar_desarrollo_seq', 4, true);


--
-- TOC entry 3627 (class 0 OID 0)
-- Dependencies: 240
-- Name: nota_archivos_id_nota_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_archivos_id_nota_archivo_seq', 1, true);


--
-- TOC entry 3628 (class 0 OID 0)
-- Dependencies: 238
-- Name: nota_prensas_id_nota_prensa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_prensas_id_nota_prensa_seq', 6, true);


--
-- TOC entry 3629 (class 0 OID 0)
-- Dependencies: 216
-- Name: permiso_archivos_id_permiso_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permiso_archivos_id_permiso_archivo_seq', 8, true);


--
-- TOC entry 3630 (class 0 OID 0)
-- Dependencies: 198
-- Name: persona_id_persona_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.persona_id_persona_seq', 33, true);


--
-- TOC entry 3631 (class 0 OID 0)
-- Dependencies: 246
-- Name: proy_archivos_id_proy_archivo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proy_archivos_id_proy_archivo_seq', 68, true);


--
-- TOC entry 3632 (class 0 OID 0)
-- Dependencies: 210
-- Name: proyectos_id_proyecto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proyectos_id_proyecto_seq', 51, true);


--
-- TOC entry 3633 (class 0 OID 0)
-- Dependencies: 214
-- Name: tipos_id_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipos_id_tipo_seq', 13, true);


--
-- TOC entry 3321 (class 2606 OID 17056)
-- Name: adm_roles adm_rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 3323 (class 2606 OID 17058)
-- Name: adm_roles adm_rol_rol_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_roles
    ADD CONSTRAINT adm_rol_rol_key UNIQUE (rol);


--
-- TOC entry 3317 (class 2606 OID 17038)
-- Name: adm_usuarios adm_usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 3325 (class 2606 OID 17088)
-- Name: adm_usuario_roles adm_usuario_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_pkey PRIMARY KEY (id_adm_usuario_rol);


--
-- TOC entry 3319 (class 2606 OID 17040)
-- Name: adm_usuarios adm_usuario_usuario_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_usuario_key UNIQUE (usuario);


--
-- TOC entry 3347 (class 2606 OID 18145)
-- Name: basica_tecnicas basica_tecnicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_pkey PRIMARY KEY (id_basica_tecnica);


--
-- TOC entry 3345 (class 2606 OID 18121)
-- Name: contra_archivos contra_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_pkey PRIMARY KEY (id_contra_archivo);


--
-- TOC entry 3343 (class 2606 OID 18100)
-- Name: contratados contratados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_pkey PRIMARY KEY (id_contratado);


--
-- TOC entry 3341 (class 2606 OID 18075)
-- Name: conv_archivos conv_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_pkey PRIMARY KEY (id_conv_archivo);


--
-- TOC entry 3339 (class 2606 OID 18054)
-- Name: convenios convenios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_pkey PRIMARY KEY (id_convenio);


--
-- TOC entry 3353 (class 2606 OID 18197)
-- Name: curso_archivos curso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_pkey PRIMARY KEY (id_curso_archivo);


--
-- TOC entry 3351 (class 2606 OID 18181)
-- Name: cursos cursos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_pkey PRIMARY KEY (id_curso);


--
-- TOC entry 3357 (class 2606 OID 18238)
-- Name: evento_archivos evento_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_pkey PRIMARY KEY (id_evento_archivo);


--
-- TOC entry 3355 (class 2606 OID 18222)
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id_evento);


--
-- TOC entry 3365 (class 2606 OID 18319)
-- Name: expo_archivos expo_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_pkey PRIMARY KEY (id_expo_archivo);


--
-- TOC entry 3363 (class 2606 OID 18303)
-- Name: exposiciones exposiciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_pkey PRIMARY KEY (id_exposicion);


--
-- TOC entry 3309 (class 2606 OID 17004)
-- Name: fotografias fotografia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fotografias
    ADD CONSTRAINT fotografia_pkey PRIMARY KEY (id_fotografia);


--
-- TOC entry 3333 (class 2606 OID 17537)
-- Name: inv_proyectos inv_proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_pkey PRIMARY KEY (id_inv_proyecto);


--
-- TOC entry 3327 (class 2606 OID 17448)
-- Name: inv_tipos inv_tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_tipos
    ADD CONSTRAINT inv_tipos_pkey PRIMARY KEY (id_inv_tipo);


--
-- TOC entry 3329 (class 2606 OID 17459)
-- Name: investigadores investigadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_pkey PRIMARY KEY (id_investigador);


--
-- TOC entry 3349 (class 2606 OID 18161)
-- Name: lugar_desarrollos lugar_desarrollos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_pkey PRIMARY KEY (id_lugar_desarrollo);


--
-- TOC entry 3361 (class 2606 OID 18278)
-- Name: nota_archivos nota_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_pkey PRIMARY KEY (id_nota_archivo);


--
-- TOC entry 3359 (class 2606 OID 18262)
-- Name: nota_prensas nota_prensas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_pkey PRIMARY KEY (id_nota_prensa);


--
-- TOC entry 3337 (class 2606 OID 18029)
-- Name: permiso_archivos permiso_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_pkey PRIMARY KEY (id_permiso_archivo);


--
-- TOC entry 3311 (class 2606 OID 17020)
-- Name: personas persona_correo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_correo_key UNIQUE (correo);


--
-- TOC entry 3313 (class 2606 OID 17018)
-- Name: personas persona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_pkey PRIMARY KEY (id_persona);


--
-- TOC entry 3315 (class 2606 OID 17549)
-- Name: personas persona_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_telefono_key UNIQUE (telefono);


--
-- TOC entry 3367 (class 2606 OID 18651)
-- Name: proy_archivos proy_archivos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_pkey PRIMARY KEY (id_proy_archivo);


--
-- TOC entry 3331 (class 2606 OID 17495)
-- Name: proyectos proyectos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_pkey PRIMARY KEY (id_proyecto);


--
-- TOC entry 3335 (class 2606 OID 18018)
-- Name: tipos tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id_tipo);


--
-- TOC entry 3369 (class 2606 OID 17041)
-- Name: adm_usuarios adm_usuario_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuarios
    ADD CONSTRAINT adm_usuario_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3371 (class 2606 OID 17094)
-- Name: adm_usuario_roles adm_usuario_roles_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.adm_roles(id_rol);


--
-- TOC entry 3370 (class 2606 OID 17089)
-- Name: adm_usuario_roles adm_usuario_roles_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adm_usuario_roles
    ADD CONSTRAINT adm_usuario_roles_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.adm_usuarios(id_usuario);


--
-- TOC entry 3388 (class 2606 OID 18146)
-- Name: basica_tecnicas basica_tecnicas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basica_tecnicas
    ADD CONSTRAINT basica_tecnicas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3386 (class 2606 OID 18122)
-- Name: contra_archivos contra_archivos_id_contratado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_contratado_fkey FOREIGN KEY (id_contratado) REFERENCES public.contratados(id_contratado);


--
-- TOC entry 3387 (class 2606 OID 18127)
-- Name: contra_archivos contra_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contra_archivos
    ADD CONSTRAINT contra_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3384 (class 2606 OID 18101)
-- Name: contratados contratados_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3385 (class 2606 OID 18106)
-- Name: contratados contratados_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratados
    ADD CONSTRAINT contratados_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3382 (class 2606 OID 18076)
-- Name: conv_archivos conv_archivos_id_convenio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_convenio_fkey FOREIGN KEY (id_convenio) REFERENCES public.convenios(id_convenio);


--
-- TOC entry 3383 (class 2606 OID 18081)
-- Name: conv_archivos conv_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conv_archivos
    ADD CONSTRAINT conv_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3380 (class 2606 OID 18055)
-- Name: convenios convenios_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3381 (class 2606 OID 18060)
-- Name: convenios convenios_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenios
    ADD CONSTRAINT convenios_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3391 (class 2606 OID 18198)
-- Name: curso_archivos curso_archivos_id_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_curso_fkey FOREIGN KEY (id_curso) REFERENCES public.cursos(id_curso);


--
-- TOC entry 3392 (class 2606 OID 18203)
-- Name: curso_archivos curso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso_archivos
    ADD CONSTRAINT curso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3390 (class 2606 OID 18182)
-- Name: cursos cursos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT cursos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3394 (class 2606 OID 18239)
-- Name: evento_archivos evento_archivos_id_evento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_evento_fkey FOREIGN KEY (id_evento) REFERENCES public.eventos(id_evento);


--
-- TOC entry 3395 (class 2606 OID 18244)
-- Name: evento_archivos evento_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento_archivos
    ADD CONSTRAINT evento_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3393 (class 2606 OID 18223)
-- Name: eventos eventos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3400 (class 2606 OID 18320)
-- Name: expo_archivos expo_archivos_id_exposicion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_exposicion_fkey FOREIGN KEY (id_exposicion) REFERENCES public.exposiciones(id_exposicion);


--
-- TOC entry 3401 (class 2606 OID 18325)
-- Name: expo_archivos expo_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expo_archivos
    ADD CONSTRAINT expo_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3399 (class 2606 OID 18304)
-- Name: exposiciones exposiciones_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exposiciones
    ADD CONSTRAINT exposiciones_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3377 (class 2606 OID 17543)
-- Name: inv_proyectos inv_proyectos_id_investigador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_investigador_fkey FOREIGN KEY (id_investigador) REFERENCES public.investigadores(id_investigador);


--
-- TOC entry 3376 (class 2606 OID 17538)
-- Name: inv_proyectos inv_proyectos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inv_proyectos
    ADD CONSTRAINT inv_proyectos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3373 (class 2606 OID 17465)
-- Name: investigadores investigadores_id_inv_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_inv_tipo_fkey FOREIGN KEY (id_inv_tipo) REFERENCES public.inv_tipos(id_inv_tipo);


--
-- TOC entry 3372 (class 2606 OID 17460)
-- Name: investigadores investigadores_id_persona_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.investigadores
    ADD CONSTRAINT investigadores_id_persona_fkey FOREIGN KEY (id_persona) REFERENCES public.personas(id_persona);


--
-- TOC entry 3389 (class 2606 OID 18162)
-- Name: lugar_desarrollos lugar_desarrollos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugar_desarrollos
    ADD CONSTRAINT lugar_desarrollos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3397 (class 2606 OID 18279)
-- Name: nota_archivos nota_archivos_id_nota_prensa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_nota_prensa_fkey FOREIGN KEY (id_nota_prensa) REFERENCES public.nota_prensas(id_nota_prensa);


--
-- TOC entry 3398 (class 2606 OID 18284)
-- Name: nota_archivos nota_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_archivos
    ADD CONSTRAINT nota_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3396 (class 2606 OID 18263)
-- Name: nota_prensas nota_prensas_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota_prensas
    ADD CONSTRAINT nota_prensas_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3378 (class 2606 OID 18030)
-- Name: permiso_archivos permiso_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3379 (class 2606 OID 18035)
-- Name: permiso_archivos permiso_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso_archivos
    ADD CONSTRAINT permiso_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3368 (class 2606 OID 17023)
-- Name: personas persona_id_fotografia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personas
    ADD CONSTRAINT persona_id_fotografia_fkey FOREIGN KEY (id_fotografia) REFERENCES public.fotografias(id_fotografia);


--
-- TOC entry 3402 (class 2606 OID 18652)
-- Name: proy_archivos proy_archivos_id_proyecto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_proyecto_fkey FOREIGN KEY (id_proyecto) REFERENCES public.proyectos(id_proyecto);


--
-- TOC entry 3403 (class 2606 OID 18657)
-- Name: proy_archivos proy_archivos_id_tipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proy_archivos
    ADD CONSTRAINT proy_archivos_id_tipo_fkey FOREIGN KEY (id_tipo) REFERENCES public.tipos(id_tipo);


--
-- TOC entry 3374 (class 2606 OID 17496)
-- Name: proyectos proyectos_id_adm_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_adm_rol_fkey FOREIGN KEY (id_adm) REFERENCES public.adm_usuario_roles(id_adm_usuario_rol);


--
-- TOC entry 3375 (class 2606 OID 17501)
-- Name: proyectos proyectos_id_coordinador_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proyectos
    ADD CONSTRAINT proyectos_id_coordinador_fkey FOREIGN KEY (id_coordinador) REFERENCES public.investigadores(id_investigador);


-- Completed on 2020-05-10 16:55:20 -04

--
-- PostgreSQL database dump complete
--

