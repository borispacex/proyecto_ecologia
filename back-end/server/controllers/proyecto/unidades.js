const unidades = require('../../models').unidades;
const proyectos = require('../../models').proyectos;

unidades.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear unidad
function create(req, res) {
    var body = req.body;
    unidades.create(body)
        .then(unidad => {
            res.status(200).send({ unidad });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la unidad', err });
        });
}
// actualizar unidad
function update(req, res) {
    var id = req.params.id_unidad;
    var body = req.body;
    unidades.findByPk(id)
        .then(unidad => {
            unidad.update(body)
                .then(() => {
                    res.status(200).send({ unidad });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la unidad', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la unidad', err });
        });
}
// funcion para mostrar todos unidades
function getAll(req, res) {
    unidades.findAll({
        // where: { estado: true }
    })
    .then(unidades => {
        res.status(200).send({ unidades });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las unidades', err });
    })
}
// funcion para mostrar todos unidades
function getAllByEstado(req, res) {
    var status = req.params.estado;
    unidades.findAll({
        where: { estado: status }
    })
    .then(unidades => {
        res.status(200).send({ unidades });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las unidades', err });
    })
}
// funcion para unidad por id
function getById(req, res) {
    var id = req.params.id_unidad;
    unidades.findByPk(id)
    .then(unidad => {
        res.status(200).send({ unidad });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una unidad', err});
    })
}
// funcion para buscar y mostrar un unidades por id_basica_tecnica
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    unidades.findAll({
        where: { id_proyecto: id }
    })
    .then(unidades => {
        res.status(200).send({ unidades });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un unidades por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un unidades por id_basica_tecnica
function getAllByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    unidades.findAll({
        where: { id_proyecto: id, estado: status }
    })
    .then(unidades => {
        res.status(200).send({ unidades });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un unidades por id_proyecto', err });
    })
}
// funcion para eliminar la unidad
function deleteUnidad(req, res) {
    var id = req.params.id_unidad;
    unidades.destroy({
        where: { id_unidad: id }
    })
    .then(unidad => {
        res.status(200).send({ unidad });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una unidad por id_unidad', err});
    })
}
// funcion para eliminar la unidad por id_unidad_basica
function deleteUnidadesByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    unidades.destroy({
        where: { id_proyecto: id }
    })
    .then(unidades => {
        res.status(200).send({ unidades });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una unidad por id_proyecto', err});
    })
}
// funcion contar unidades por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    unidades.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar unidades por id_proyecto', err });
    })
}
// funcion contar unidades por id_proyecto
function countByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    unidades.count({
        where: { id_proyecto: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar unidades por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdProyecto,
    deleteUnidad,
    deleteUnidadesByIdProyecto,

    getAllByIdProyectoAndEstado,
    getAllByEstado,
    countByIdProyecto,
    countByIdProyectoAndEstado
}