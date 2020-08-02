const basica_tecnicas = require('./../../models').basica_tecnicas;
const proyectos = require('../../models').proyectos;

basica_tecnicas.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear basica_tecnica
function create(req, res) {
    var body = req.body;
    basica_tecnicas.create(body)
        .then(basica_tecnicas => {
            res.status(200).send({ basica_tecnicas });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la basica_tecnica', err });
        });
}
// actualizar basica_tecnica
function update(req, res) {
    var id = req.params.id_basica_tecnica;
    var body = req.body;
    basica_tecnicas.findByPk(id)
        .then(basica_tecnica => {
            basica_tecnica.update(body)
                .then(() => {
                    res.status(200).send({ basica_tecnica });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la basica_tecnica', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la basica_tecnica', err });
        });
}
// funcion para mostrar todos basica_tecnicas
function getAll(req, res) {
    basica_tecnicas.findAll({
        // where: { estado: true }
    })
    .then(basica_tecnicas => {
        res.status(200).send({ basica_tecnicas });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las basica_tecnicas', err });
    })
}
// funcion para basica_tecnica por id
function getById(req, res) {
    var id = req.params.id_basica_tecnica;
    basica_tecnicas.findByPk(id)
    .then(basica_tecnica => {
        res.status(200).send({ basica_tecnica });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una basica_tecnica', err});
    })
}
// funcion para buscar y mostrar un basica_tecnicas por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    basica_tecnicas.findAll({
        where: { id_proyecto: id }
    })
    .then(basica_tecnicas => {
        res.status(200).send({ basica_tecnicas });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un basica_tecnicas por id_proyecto', err });
    })
}
// funcion para contar basica_tecnicas por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    basica_tecnicas.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar un basica_tecnicas por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdProyecto,
    countByIdProyecto
}