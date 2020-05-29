const cursos = require('../../models').cursos;
const proyectos = require('../../models').proyectos;

// cursos.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear curso
function create(req, res) {
    var body = req.body;
    cursos.create(body)
        .then(cursos => {
            res.status(200).send({ cursos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la curso', err });
        });
}
// actualizar curso
function update(req, res) {
    var id = req.params.id_curso;
    var body = req.body;
    cursos.findByPk(id)
        .then(curso => {
            curso.update(body)
                .then(() => {
                    res.status(200).send({ curso });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la curso', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la curso', err });
        });
}
// funcion para mostrar todos cursos
function getAll(req, res) {
    cursos.findAll({
        // where: { estado: true }
    })
    .then(cursos => {
        res.status(200).send({ cursos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las cursos', err });
    })
}
// funcion para curso por id
function getById(req, res) {
    var id = req.params.id_curso;
    cursos.findByPk(id)
    .then(curso => {
        res.status(200).send({ curso });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una curso', err});
    })
}
// funcion para buscar y mostrar un cursos por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    cursos.findAll({
        where: { id_proyecto: id }
    })
    .then(cursos => {
        res.status(200).send({ cursos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un cursos por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdProyecto
}