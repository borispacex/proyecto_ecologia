const unidades = require('../../models').unidades;
const basica_tecnicas = require('../../models').basica_tecnicas;

// unidades.belongsTo(basica_tecnicas, { foreignKey: 'id_basica_tecnica' });

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
function getAllByIdBasicaTecnica(req, res) {
    var id = req.params.id_basica_tecnica;
    unidades.findAll({
        where: { id_basica_tecnica: id }
    })
    .then(unidades => {
        res.status(200).send({ unidades });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un unidades por id_basica_tecnica', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdBasicaTecnica
}