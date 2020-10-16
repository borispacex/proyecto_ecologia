const nota_prensas = require('../../models').nota_prensas;
const proyectos = require('../../models').proyectos;

nota_prensas.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear nota_prensa
function create(req, res) {
    var body = req.body;
    nota_prensas.create(body)
        .then(nota_prensas => {
            res.status(200).send({ nota_prensas });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la nota_prensa', err });
        });
}
// actualizar nota_prensa
function update(req, res) {
    var id = req.params.id_nota_prensa;
    var body = req.body;
    nota_prensas.findByPk(id)
        .then(nota_prensa => {
            nota_prensa.update(body)
                .then(() => {
                    res.status(200).send({ nota_prensa });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la nota_prensa', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la nota_prensa', err });
        });
}
// funcion para mostrar todos nota_prensas
function getAll(req, res) {
    nota_prensas.findAll({
        // where: { estado: true }
    })
    .then(nota_prensas => {
        res.status(200).send({ nota_prensas });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las nota_prensas', err });
    })
}
// funcion para nota_prensa por id
function getById(req, res) {
    var id = req.params.id_nota_prensa;
    nota_prensas.findByPk(id)
    .then(nota_prensa => {
        res.status(200).send({ nota_prensa });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una nota_prensa', err});
    })
}
// funcion para buscar y mostrar un nota_prensas por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    nota_prensas.findAll({
        where: { id_proyecto: id }
    })
    .then(nota_prensas => {
        res.status(200).send({ nota_prensas });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un nota_prensas por id_proyecto', err });
    })
}
// funcion para contar nota_prensas por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    nota_prensas.count({
        where: { id_proyecto: id, estado: true }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contador nota_prensas por id_proyecto', err });
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