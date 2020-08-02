const publicaciones = require('../../models').publicaciones;
const investigadores = require('../../models').investigadores;

publicaciones.belongsTo(investigadores, { foreignKey: 'id_coordinador' });

// crear publicacion
function create(req, res) {
    var body = req.body;
    publicaciones.create(body)
        .then(publicacion => {
            res.status(200).send({ publicacion });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la publicacion', err });
        });
}
// actualizar publicacion
function update(req, res) {
    var id = req.params.id_publicacion;
    var body = req.body;
    publicaciones.findByPk(id)
        .then(publicacion => {
            publicacion.update(body)
                .then(() => {
                    res.status(200).send({ publicacion });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la publicacion', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la publicacion', err });
        });
}
// funcion para mostrar todos publicaciones
function getAll(req, res) {
    publicaciones.findAll({
        where: { estado: true }
    })
    .then(publicaciones => {
        res.status(200).send({ publicaciones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las publicaciones', err });
    });
}
// funcion para publicacion por id
function getById(req, res) {
    var id = req.params.id_publicacion;
    publicaciones.findByPk(id)
    .then(publicacion => {
        res.status(200).send({ publicacion });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una publicacion', err});
    })
}
// funcion para buscar y mostrar un publicaciones por id_investigador
function getAllByIdCoordinador(req, res) {
    var id = req.params.id_coordinador;
    publicaciones.findAll({
        where: { id_coordinador: id }
    })
    .then(publicaciones => {
        res.status(200).send({ publicaciones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un publicaciones por id_investigador', err });
    })
}
// funcion para buscar y mostrar un publicaciones por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    publicaciones.findAll({
        where: { id_proyecto: id }
    })
    .then(publicaciones => {
        res.status(200).send({ publicaciones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un publicaciones por id_proyecto', err });
    })
}
// funcion contar publicaciones por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    publicaciones.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar publicaciones por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdCoordinador,
    getAllByIdProyecto,
    countByIdProyecto
}