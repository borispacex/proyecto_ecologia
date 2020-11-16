const peticiones = require('../../models').peticiones;
const investigadores = require('../../models').investigadores;

peticiones.belongsTo(investigadores, { foreignKey: 'id_investigador' });

// crear peticion
function create(req, res) {
    var body = req.body;
    peticiones.create(body)
        .then(peticion => {
            res.status(200).send({ peticion });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la peticion', err });
        });
}
// actualizar peticion
function update(req, res) {
    var id = req.params.id_peticion;
    var body = req.body;
    peticiones.findByPk(id)
        .then(peticion => {
            peticion.update(body)
                .then(() => {
                    res.status(200).send({ peticion });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la peticion', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la peticion', err });
        });
}
function getAll(req, res) {
    peticiones.findAll({
    }).then(peticiones => {
        res.status(200).send({ peticiones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las peticiones', err });
    });
}
// funcion para mostrar todos peticiones
function getAllByEstado(req, res) {
    var status = req.params.estado;
    peticiones.findAll({
        where: { estado: status }
    })
    .then(peticiones => {
        res.status(200).send({ peticiones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las peticiones', err });
    });
}
// funcion para peticion por id
function getById(req, res) {
    var id = req.params.id_peticion;
    peticiones.findByPk(id)
    .then(peticion => {
        res.status(200).send({ peticion });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una peticion', err});
    })
}
// funcion para buscar y mostrar un peticiones por id_investigador
function getAllByIdInvestigador(req, res) {
    var id = req.params.id_investigador;
    peticiones.findAll({
        where: { id_investigador: id }
    })
    .then(peticiones => {
        res.status(200).send({ peticiones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un peticiones por id_investigador', err });
    })
}
// funcion para buscar y mostrar un peticiones por id_investigador
function getAllByIdInvestigadorAndEstado(req, res) {
    var id = req.params.id_investigador;
    var status = req.params.estado;
    peticiones.findAll({
        where: { id_investigador: id, estado: status }
    })
    .then(peticiones => {
        res.status(200).send({ peticiones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un peticiones por id_investigador', err });
    })
}
// funcion para buscar y mostrar un peticiones por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    peticiones.findAll({
        where: { id_proyecto: id }
    })
    .then(peticiones => {
        res.status(200).send({ peticiones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un peticiones por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un peticiones por id_proyecto
function getAllByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    peticiones.findAll({
        where: { id_proyecto: id, estado: status }
    })
    .then(peticiones => {
        res.status(200).send({ peticiones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un peticiones por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un peticiones por id_proyecto
function getAllByIdProyectoAndIdInvestigador(req, res) {
    var id = req.params.id_proyecto;
    var id_inv = req.params.id_investigador;
    peticiones.findAll({
        where: { id_proyecto: id , id_investigador: id_inv }
    })
    .then(peticiones => {
        res.status(200).send({ peticiones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un peticiones por id_proyecto', err });
    })
}
// funcion contar peticiones por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    peticiones.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar peticiones por id_proyecto', err });
    })
}
// funcion contar peticiones por id_proyecto
function countByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    peticiones.count({
        where: { id_proyecto: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar peticiones por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByEstado,
    getAllByIdInvestigador,
    getAllByIdProyecto,
    getAllByIdProyectoAndIdInvestigador,
    countByIdProyecto,

    getAllByIdInvestigadorAndEstado,
    getAllByIdProyectoAndEstado,
    countByIdProyectoAndEstado
}