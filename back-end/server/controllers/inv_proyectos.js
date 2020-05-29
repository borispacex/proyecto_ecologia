const inv_proyectos = require('../models').inv_proyectos;
const investigadores = require("../models").investigadores;
const proyectos = require("../models").proyectos;
const personas = require("../models").personas;
const inv_tipos = require('../models').inv_tipos;
const fotografias = require('../models').fotografias;


inv_proyectos.belongsTo(proyectos, { foreignKey: 'id_proyecto' });
inv_proyectos.belongsTo(investigadores, { foreignKey: 'id_investigador' });


// ---------------- METODOS ---------------
// crear nuevo inv_proyecto
function create(req, res) {
    var body = req.body;
    inv_proyectos.create(body)
        .then(inv_proyecto => {
            res.status(200).send({ inv_proyecto });
        })
        .catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar inv_proyecto
function update(req, res) {
    var id = req.params.id_inv_proyecto;
    var body = req.body;
    inv_proyectos.findByPk(id)
        .then(inv_proyecto => {
            inv_proyecto.update(body)
                .then(() => {
                    res.status(200).send({ inv_proyecto });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el inv_proyecto', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el inv_proyecto', err });
        });
}
// Listar todos los inv_proyectos
function getAll(req, res) {
    inv_proyectos.findAll({
        include: [
            { model: proyectos },
            {
                model: investigadores,
                include: [
                    { 
                        model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            }
        ]
    })
        .then(inv_proyectos => {
            res.status(200).send({ inv_proyectos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los inv_proyectos' }, err);
        });
}
// funcion para inv_proyecto por id
function getById(req, res) {
    var id = req.params.id_inv_proyecto;
    inv_proyectos.findByPk(id, {
        include: [
            { model: proyectos },
            {
                model: investigadores,
                include: [
                    { 
                        model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ] 
                    }
                ]
            }
        ]
    })
        .then(inv_proyecto => {
            res.status(200).send({ inv_proyecto });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar un inv_proyecto', err });
        })
}
// funcion para buscar y mostrar un inv_proyectos por id_proyecto --
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    inv_proyectos.findAll({
        where: { id_proyecto: id },
        include: [
            {
                model: investigadores,
                include: [
                    { 
                        model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    },
                    { model: inv_tipos }
                ]
            }
        ]
    })
    .then(inv_proyectos => {
        res.status(200).send({ inv_proyectos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un inv_proyectos por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un inv_proyectos por id_investigador
function getAllByIdInvestigador(req, res) {
    var id = req.params.id_investigador;
    inv_proyectos.findAll({
        where: { id_investigador: id },
        include: [
            { model: proyectos },
            {
                model: investigadores,
                include: [
                    { 
                        model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            }
        ]
    })
    .then(inv_proyectos => {
        res.status(200).send({ inv_proyectos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un inv_proyectos por id_proyecto', err });
    })
}
// EXPORTAMOS
module.exports = {
    create,
    update,
    getAll,
    getAllByIdProyecto,
    getAllByIdInvestigador,
    getById
}
