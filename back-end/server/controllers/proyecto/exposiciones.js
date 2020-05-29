const exposiciones = require('../../models').exposiciones;
const proyectos = require('../../models').proyectos;

// exposiciones.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear exposicion
function create(req, res) {
    var body = req.body;
    exposiciones.create(body)
        .then(exposiciones => {
            res.status(200).send({ exposiciones });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la exposicion', err });
        });
}
// actualizar exposicion
function update(req, res) {
    var id = req.params.id_exposicion;
    var body = req.body;
    exposiciones.findByPk(id)
        .then(exposicion => {
            exposicion.update(body)
                .then(() => {
                    res.status(200).send({ exposicion });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la exposicion', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la exposicion', err });
        });
}
// funcion para mostrar todos exposiciones
function getAll(req, res) {
    exposiciones.findAll({
        // where: { estado: true }
    })
    .then(exposiciones => {
        res.status(200).send({ exposiciones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las exposiciones', err });
    })
}
// funcion para exposicion por id
function getById(req, res) {
    var id = req.params.id_exposicion;
    exposiciones.findByPk(id)
    .then(exposicion => {
        res.status(200).send({ exposicion });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una exposicion', err});
    })
}
// funcion para buscar y mostrar un exposiciones por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    exposiciones.findAll({
        where: { id_proyecto: id }
    })
    .then(exposiciones => {
        res.status(200).send({ exposiciones });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un exposiciones por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdProyecto
}