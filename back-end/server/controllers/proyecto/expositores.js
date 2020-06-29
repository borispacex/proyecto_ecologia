const expositores = require('../../models').expositores;
const cursos = require('../../models').cursos;

// expositores.belongsTo(cursos, { foreignKey: 'id_curso' });

// crear expositor
function create(req, res) {
    var body = req.body;
    expositores.create(body)
        .then(expositor => {
            res.status(200).send({ expositor });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la expositor', err });
        });
}
// actualizar expositor
function update(req, res) {
    var id = req.params.id_expositor;
    var body = req.body;
    expositores.findByPk(id)
        .then(expositor => {
            expositor.update(body)
                .then(() => {
                    res.status(200).send({ expositor });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la expositor', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la expositor', err });
        });
}
// funcion para mostrar todos expositores
function getAll(req, res) {
    expositores.findAll({
        // where: { estado: true }
    })
    .then(expositores => {
        res.status(200).send({ expositores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las expositores', err });
    })
}
// funcion para expositor por id
function getById(req, res) {
    var id = req.params.id_expositor;
    expositores.findByPk(id)
    .then(expositor => {
        res.status(200).send({ expositor });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una expositor', err});
    })
}
// funcion para buscar y mostrar un expositores por id_curso
function getAllByIdCurso(req, res) {
    var id = req.params.id_curso;
    expositores.findAll({
        where: { id_curso: id }
    })
    .then(expositores => {
        res.status(200).send({ expositores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un expositores por id_curso', err });
    })
}
// funcion para eliminar la expositor
function deleteExpositor(req, res) {
    var id = req.params.id_expositor;
    expositores.destroy({
        where: { id_expositor: id }
    })
    .then(expositor => {
        res.status(200).send({ expositor });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una expositor por id_expositor', err});
    })
}
// funcion para eliminar los expositores por id_curso
function deleteExpositoresByIdCurso(req, res) {
    var id = req.params.id_curso;
    expositores.destroy({
        where: { id_curso: id }
    })
    .then(expositores => {
        res.status(200).send({ expositores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar expositores por id_curso', err});
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdCurso,
    deleteExpositor,
    deleteExpositoresByIdCurso
}