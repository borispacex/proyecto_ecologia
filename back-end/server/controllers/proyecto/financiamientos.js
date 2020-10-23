const financiamientos = require('../../models').financiamientos;
const proyectos = require('../../models').proyectos;

financiamientos.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear financiamiento
function create(req, res) {
    var body = req.body;
    financiamientos.create(body)
        .then(financiamiento => {
            res.status(200).send({ financiamiento });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la financiamiento', err });
        });
}
// actualizar financiamiento
function update(req, res) {
    var id = req.params.id_financiamiento;
    var body = req.body;
    financiamientos.findByPk(id)
        .then(financiamiento => {
            financiamiento.update(body)
                .then(() => {
                    res.status(200).send({ financiamiento });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la financiamiento', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la financiamiento', err });
        });
}
// funcion para mostrar todos financiamientos
function getAll(req, res) {
    financiamientos.findAll({
        // where: { estado: true }
    })
    .then(financiamientos => {
        res.status(200).send({ financiamientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las financiamientos', err });
    })
}
// funcion para mostrar todos financiamientos
function getAllByEstado(req, res) {
    var status = req.params.estado;
    financiamientos.findAll({
        where: { estado: status }
    })
    .then(financiamientos => {
        res.status(200).send({ financiamientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las financiamientos', err });
    })
}
// funcion para financiamiento por id
function getById(req, res) {
    var id = req.params.id_financiamiento;
    financiamientos.findByPk(id)
    .then(financiamiento => {
        res.status(200).send({ financiamiento });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una financiamiento', err});
    })
}
// funcion para buscar y mostrar un financiamientos por id_basica_tecnica
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    financiamientos.findAll({
        where: { id_proyecto: id }
    })
    .then(financiamientos => {
        res.status(200).send({ financiamientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un financiamientos por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un financiamientos por id_basica_tecnica
function getAllByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    financiamientos.findAll({
        where: { id_proyecto: id, estado: status }
    })
    .then(financiamientos => {
        res.status(200).send({ financiamientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un financiamientos por id_proyecto', err });
    })
}
// funcion para eliminar la financiamiento
function deleteFinanciamiento(req, res) {
    var id = req.params.id_financiamiento;
    financiamientos.destroy({
        where: { id_financiamiento: id }
    })
    .then(financiamiento => {
        res.status(200).send({ financiamiento });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una financiamiento por id_financiamiento', err});
    })
}
// funcion para eliminar la financiamiento por id_financiamiento_basica
function deleteFinanciamientosByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    financiamientos.destroy({
        where: { id_proyecto: id }
    })
    .then(financiamientos => {
        res.status(200).send({ financiamientos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una financiamiento por id_proyecto', err});
    })
}
// funcion contar financiamientos por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    financiamientos.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar financiamientos por id_proyecto', err });
    })
}
// funcion contar financiamientos por id_proyecto
function countByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    financiamientos.count({
        where: { id_proyecto: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar financiamientos por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdProyecto,
    deleteFinanciamiento,
    deleteFinanciamientosByIdProyecto,

    getAllByEstado,
    getAllByIdProyectoAndEstado,
    countByIdProyecto,
    countByIdProyectoAndEstado
}