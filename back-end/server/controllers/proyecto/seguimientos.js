const seguimientos = require('../../models').seguimientos;
const personas = require('../../models').personas;

seguimientos.belongsTo(personas, { foreignKey: 'id_director' });

// crear seguimiento
function create(req, res) {
    var body = req.body;
    seguimientos.create(body)
        .then(seguimiento => {
            res.status(200).send({ seguimiento });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la seguimiento', err });
        });
}
// actualizar seguimiento
function update(req, res) {
    var id = req.params.id_seguimiento;
    var body = req.body;
    seguimientos.findByPk(id)
        .then(seguimiento => {
            seguimiento.update(body)
                .then(() => {
                    res.status(200).send({ seguimiento });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la seguimiento', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la seguimiento', err });
        });
}
function getAll(req, res) {
    seguimientos.findAll({
    }).then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las seguimientos', err });
    });
}
// funcion para mostrar todos seguimientos
function getAllByEstado(req, res) {
    var status = req.params.estado;
    seguimientos.findAll({
        where: { estado: status }
    })
    .then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las seguimientos', err });
    });
}
// funcion para seguimiento por id
function getById(req, res) {
    var id = req.params.id_seguimiento;
    seguimientos.findByPk(id)
    .then(seguimiento => {
        res.status(200).send({ seguimiento });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una seguimiento', err});
    })
}
// funcion para buscar y mostrar un seguimientos por id_director
function getAllByIdDirector(req, res) {
    var id = req.params.id_director;
    seguimientos.findAll({
        where: { id_director: id }
    })
    .then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un seguimientos por id_investigador', err });
    })
}
// funcion para buscar y mostrar un seguimientos por id_director
function getAllByIdDirectorAndEstado(req, res) {
    var id = req.params.id_director;
    var status = req.params.estado;
    seguimientos.findAll({
        where: { id_director: id, estado: status }
    })
    .then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un seguimientos por id_investigador', err });
    })
}
// funcion para buscar y mostrar un seguimientos por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    seguimientos.findAll({
        where: { id_proyecto: id }
    })
    .then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un seguimientos por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un seguimientos por id_proyecto
function getAllByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    seguimientos.findAll({
        where: { id_proyecto: id, estado: status }
    })
    .then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un seguimientos por id_proyecto', err });
    })
}
// funcion contar seguimientos por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    seguimientos.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar seguimientos por id_proyecto', err });
    })
}
// funcion contar seguimientos por id_proyecto
function countByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    seguimientos.count({
        where: { id_proyecto: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar seguimientos por id_proyecto', err });
    })
}

// funcion para buscar y mostrar un seguimientos por id_proyecto
function getAllByIdProyectoAndTipo(req, res) {
    var id = req.params.id_proyecto;
    var tipo_s = req.params.tipo;
    seguimientos.findAll({
        where: { id_proyecto: id, tipo: tipo_s }
    })
    .then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un seguimientos por id_proyecto', err });
    })
}

// funcion para buscar y mostrar un seguimientos por id_proyecto
function getAllByIdProyectoTipoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var tipo_s = req.params.tipo;
    var status = req.params.estado;
    seguimientos.findAll({
        where: { id_proyecto: id, tipo: tipo_s, estado: status }
    })
    .then(seguimientos => {
        res.status(200).send({ seguimientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un seguimientos por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByEstado,
    getAllByIdDirector,
    getAllByIdProyecto,
    countByIdProyecto,

    getAllByIdDirectorAndEstado,
    getAllByIdProyectoAndEstado,
    countByIdProyectoAndEstado,

    getAllByIdProyectoAndTipo,
    getAllByIdProyectoTipoAndEstado
}