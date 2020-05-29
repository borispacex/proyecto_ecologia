const inv_tipos = require('../models').inv_tipos;

// ---------------- METODOS ---------------
// crear nuevo inv_tipo
function create(req, res) {
    var body = req.body;
    inv_tipos.create(body)
        .then(inv_tipo => {
            res.status(200).send({ inv_tipo });
        })
        .catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar inv_tipo
function update(req, res) {
    var id= req.params.id_inv_tipo;
    var body = req.body;
    inv_tipos.findByPk(id)
        .then(inv_tipo => {
            inv_tipo.update(body)
                .then(() => {
                    res.status(200).send({ inv_tipo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el inv_tipo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el inv_tipo', err });
        });
}
// Listar todos los inv_tipos
function getAll(req, res) {
    inv_tipos.findAll()
        .then(inv_tipos => {
            res.status(200).send({ inv_tipos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los inv_tipos' }, err);
        });
}
// funcion para inv_tipo por id
function getById(req, res) {
    var id = req.params.id_inv_tipo;
    inv_tipos.findByPk(id)
        .then(inv_tipo => {
            res.status(200).send({ inv_tipo });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar un inv_tipo', err });
        })
}
// EXPORTAMOS
module.exports = {
    create,
    update,
    getAll,
    getById
}
