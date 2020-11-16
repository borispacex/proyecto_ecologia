const investigadores = require('../models').investigadores;
const personas = require('../models').personas;
const inv_tipos = require('../models').inv_tipos;
const fotografias = require('../models').fotografias;

investigadores.belongsTo(personas, { foreignKey: 'id_persona' });
investigadores.belongsTo(inv_tipos, { foreignKey: 'id_inv_tipo' });


// ---------------- METODOS ---------------
// crear nuevo investigador
function create(req, res) {
    var body = req.body;
    investigadores.create(body)
        .then(investigador => {
            res.status(200).send({ investigador });
        })
        .catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar investigador
function update(req, res) {
    var id = req.params.id_investigador;
    var body = req.body;
    investigadores.findByPk(id)
        .then(investigador => {
            investigador.update(body)
                .then(() => {
                    res.status(200).send({ investigador });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el investigador', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el investigador', err });
        });
}
// Listar todos los investigadores
function getAll(req, res) {
    investigadores.findAll({
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            },
            { model: inv_tipos }
        ]
    })
        .then(investigadores => {
            res.status(200).send({ investigadores });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los investigadores' }, err);
        });
}
// Listar todos los investigadores activos
function getAllActivos(req, res) {
    investigadores.findAll({
        where: { estado: true },
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            },
            { model: inv_tipos }
        ]
    })
        .then(investigadores => {
            res.status(200).send({ investigadores });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los investigadores' }, err);
        });
}
// Listar todos los investigadores
function getAllByIdInvTipo(req, res) {
    var id = req.params.id_inv_tipo;
    investigadores.findAll({
        where: { id_inv_tipo: id },
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            },
            { model: inv_tipos }
        ]
    })
        .then(investigadores => {
            res.status(200).send({ investigadores });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los investigadores' }, err);
        });
}
// funcion para investigador por id
function getById(req, res) {
    var id = req.params.id_investigador;
    investigadores.findByPk(id, {
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            },
            { model: inv_tipos }
        ]
    })
        .then(investigador => {
            res.status(200).send({ investigador });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar un investigador', err });
        })
}
// funcion para buscar un investigador por id_persona
function getByIdPersona(req, res) {
    var id = req.params.id_persona;
    investigadores.findOne({
        where: { id_persona: id },
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            },
            { model: inv_tipos }
        ]
    })
    .then(investigador => {
        res.status(200).send({ investigador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un investigador', err });
    })
}
// funcion para buscar un investigador por id_persona y id_inv_tipo
function getByIdPersonaAndIdInvTipo(req, res) {
    var idPersona = req.params.id_persona;
    var idInvTipo = req.params.id_inv_tipo
    investigadores.findOne({
        where: { 
            id_persona: idPersona,
            id_inv_tipo: idInvTipo
        },
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            },
            { model: inv_tipos }
        ]
    })
    .then(investigador => {
        res.status(200).send({ investigador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un investigador', err });
    })
}
// EXPORTAMOS
module.exports = {
    create,
    update,
    getAll,
    getAllActivos,
    getAllByIdInvTipo,
    getById,
    getByIdPersona,
    getByIdPersonaAndIdInvTipo
}
