const usuarios = require('./usuarios');
const fotografias = require('./fotografias');
const personas = require('./personas');
const adm_roles = require('./adm_roles');
const adm_usuario_roles = require('./adm_usuario_roles');

const inv_tipos = require('./inv_tipos');
const investigadores = require('./investigadores');
const inv_proyectos = require('./inv_proyectos');
const proy_archivos = require('./proy_archivos');
const proyectos = require('./proyectos');

const basica_tecnicas = require('./proyecto/basica_tecnicas');
const lugar_desarrollos = require('./proyecto/lugar_desarrollos');
const cursos = require('./proyecto/cursos');
const eventos = require('./proyecto/eventos');
const nota_prensas = require('./proyecto/nota_prensas');
const exposiciones = require('./proyecto/exposiciones');
const curso_archivos = require('./proyecto/curso_archivos');
const evento_archivos = require('./proyecto/evento_archivos');
const nota_archivos = require('./proyecto/nota_archivos');
const expo_archivos = require('./proyecto/expo_archivos');
const permiso_archivos = require('./proyecto/permiso_archivos');
const convenios = require('./proyecto/convenios');
const contratados = require('./proyecto/contratados');
const conv_archivos = require('./proyecto/conv_archivos');
const contra_archivos = require('./proyecto/contra_archivos');

module.exports = {
    usuarios,
    fotografias,
    personas,
    adm_roles,
    adm_usuario_roles,
    inv_tipos,
    investigadores,
    inv_proyectos,
    proy_archivos,
    proyectos,
    basica_tecnicas,
    lugar_desarrollos,
    cursos,
    eventos,
    nota_prensas,
    exposiciones,
    curso_archivos,
    evento_archivos,
    nota_archivos,
    expo_archivos,
    permiso_archivos,
    convenios,
    contratados,
    conv_archivos,
    contra_archivos
}