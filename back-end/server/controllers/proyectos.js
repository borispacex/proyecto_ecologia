const proyectos = require('../models').proyectos;
const personas = require('../models').personas;
const investigadores = require('../models').investigadores;
const fotografias = require('../models').fotografias;

proyectos.belongsTo(personas, { foreignKey: 'id_adm' });
proyectos.belongsTo(investigadores, { foreignKey: 'id_coordinador' });

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

// ---------------- METODOS ---------------
// crear nuevo proyecto
function create(req, res) {
    var body = req.body;
    proyectos.create(body)
        .then(proyecto => {
            res.status(200).send({ proyecto });
        })
        .catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar proyecto
function update(req, res) {
    var id = req.params.id_proyecto;
    var body = req.body;
    proyectos.findByPk(id)
        .then(proyecto => {
            proyecto.update(body)
                .then(() => {
                    res.status(200).send({ proyecto });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el proyecto', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el proyecto', err });
        });
}
// Listar todos los proyectos
function getAll(req, res) {
    proyectos.findAll({
        include: [
            { model: personas },
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
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
        });
}
// Listar todos los proyectos por estado: activo, inactivo, pendiente, cerrado
function getAllByEstado(req, res) {
    var status = req.params.estado;
    proyectos.findAll({
        where: { estado: status },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
        });
}
// funcion para proyecto por id
function getById(req, res) {
    var id = req.params.id_proyecto;
    proyectos.findByPk(id,
        {
            include: [
                { model: personas },
                {
                    model: investigadores,
                    include: [
                        { model: personas,
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
        .then(proyecto => {
            res.status(200).send({ proyecto });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar un proyecto', err });
        })
}
// funcion para buscar y mostrar un proyectos por id_proyecto
function getAllByIdPersonaAdm(req, res) {
    var id = req.params.id_persona_adm;
    proyectos.findAll({
        where: { id_adm: id },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    .then(proyectos => {
        res.status(200).send({ proyectos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un proyectos por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un proyectos por id_investigador
function getAllByIdCoordinador(req, res) {
    var id = req.params.id_coordinador;
    proyectos.findAll({
        where: { id_coordinador: id },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    .then(proyectos => {
        res.status(200).send({ proyectos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un proyectos por id_proyecto', err });
    })
}
// funcion para obtener proyectos por id_coordinador y estado
function getAllByIdCoordinadorAndStatus(req, res) {
    var id = req.params.id_coordinador;
    var status = req.params.estado;
    proyectos.findAll({
        where: { id_coordinador: id, estado: status },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    .then(proyectos => {
        res.status(200).send({ proyectos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un proyectos por id_proyecto', err });
    })
}
// funcion para obtener proyecto por id y estado
function getByIdAndStatus(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    proyectos.findOne(
        {
            where: { id_proyecto: id, estado: status },
            include: [
                { model: personas },
                {
                    model: investigadores,
                    include: [
                        { model: personas,
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
        .then(proyecto => {
            res.status(200).send({ proyecto });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar un proyecto', err });
        })
}
// Listar todos los proyectos entre dos fechas, fechaini
function getAllBetweenDatesIni(req, res) {
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    proyectos.findAll({
        where: {
            fechaini: {
                [Op.between]: [startDate, endDate]
            }
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}
// Listar todos los proyectos entre dos fechas, fechaini
function getAllBetweenDatesFin(req, res) {
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    proyectos.findAll({
        where: {
            fechafin: {
                [Op.between]: [startDate, endDate]
            }
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}

// Listar todos los proyectos entre dos fechas, fechaini, estado
function getAllBetweenDatesIniAndStatus(req, res) {
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    var status = req.params.estado;
    proyectos.findAll({
        where: {
            fechaini: {
                [Op.between]: [startDate, endDate]
            },
            estado: status
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}

// Listar todos los proyectos entre dos fechas, fechafin, estado.
function getAllBetweenDatesFinAndStatus(req, res) {
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    var status = req.params.estado;
    proyectos.findAll({
        where: {
            fechafin: {
                [Op.between]: [startDate, endDate]
            },
            estado: status
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}

// Listar todos los proyectos entre dos fechas
function getAllBetweenProccess(req, res) {
    var startProccess = req.params.procesoini;
    var endProccess = req.params.procesofin;
    proyectos.findAll({
        where: {
            proceso: {
                [Op.between]: [startProccess, endProccess]
            }
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}
// Listar todos los proyectos entre dos fechas
function getAllBetweenProccessAndStatus(req, res) {
    var startProccess = req.params.procesoini;
    var endProccess = req.params.procesofin;
    var status = req.params.estado;
    proyectos.findAll({
        where: {
            proceso: {
                [Op.between]: [startProccess, endProccess]
            },
            estado: status
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}
// Listar todos los proyectos entre dos fechas, fechaini, y procesos
function getAllBetweenProccessAndBetweenDatesIni(req, res) {
    var startProccess = req.params.procesoini;
    var endProccess = req.params.procesofin;
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    proyectos.findAll({
        where: {
            proceso: {
                [Op.between]: [startProccess, endProccess]
            },
            fechaini: {
                [Op.between]: [startDate, endDate]
            }
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}

// Listar todos los proyectos entre dos fechas, fechaini, y procesos
function getAllBetweenProccessAndBetweenDatesFin(req, res) {
    var startProccess = req.params.procesoini;
    var endProccess = req.params.procesofin;
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    proyectos.findAll({
        where: {
            proceso: {
                [Op.between]: [startProccess, endProccess]
            },
            fechafin: {
                [Op.between]: [startDate, endDate]
            }
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}


function getAllBetweenProccessBetweenDatesIniAndStatus(req, res) {
    var startProccess = req.params.procesoini;
    var endProccess = req.params.procesofin;
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    var status = req.params.estado;
    proyectos.findAll({
        where: {
            proceso: {
                [Op.between]: [startProccess, endProccess]
            },
            fechaini: {
                [Op.between]: [startDate, endDate]
            },
            estado: status
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}

// Listar todos los proyectos entre dos fechas, fechafin, y procesos, estado
function getAllBetweenProccessBetweenDatesFinAndStatus(req, res) {
    var startProccess = req.params.procesoini;
    var endProccess = req.params.procesofin;
    var startDate = req.params.fechaini;
    var endDate = req.params.fechafin;
    var status = req.params.estado;
    proyectos.findAll({
        where: {
            proceso: {
                [Op.between]: [startProccess, endProccess]
            },
            fechafin: {
                [Op.between]: [startDate, endDate]
            },
            estado: status
         },
        include: [
            { model: personas },
            {
                model: investigadores,
                include: [
                    { model: personas,
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
    }).then(proyectos => {
        res.status(200).send({ proyectos });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los proyectos' }, err);
    });
}


// EXPORTAMOS
module.exports = {
    create,
    update,
    getAll,
    getAllByEstado,
    getAllByIdPersonaAdm,
    getAllByIdCoordinador,
    getById,
    getAllByIdCoordinadorAndStatus,
    getByIdAndStatus,
    getAllBetweenDatesIni,
    getAllBetweenDatesFin,
    getAllBetweenDatesIniAndStatus,
    getAllBetweenDatesFinAndStatus,
    getAllBetweenProccess,
    getAllBetweenProccessAndStatus,
    getAllBetweenProccessAndBetweenDatesIni,
    getAllBetweenProccessAndBetweenDatesFin,
    getAllBetweenProccessBetweenDatesIniAndStatus,
    getAllBetweenProccessBetweenDatesFinAndStatus
}
