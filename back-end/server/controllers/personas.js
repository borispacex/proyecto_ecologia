const personas = require('../models').personas;
const fotografias = require('../models').fotografias;

personas.belongsTo(fotografias, { foreignKey: "id_fotografia" });

// ---------------- METODOS ---------------
// crear nuevo usuario
function create(req, res) {
    var body = req.body;
    personas.create(body)
        .then(persona => {
            res.status(200).send({ persona });
        })
        .catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar usuario
function update(req, res) {
    var id = req.params.id_persona;
    var body = req.body;
    personas.findByPk(id)
        .then(persona => {
            persona.update(body)
                .then(() => {
                    res.status(200).send({ persona });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la persona', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la persona', err });
        });
}
// Listar usuarios
function getAll(req, res) {
    personas.findAll({
        include: [
            { model: fotografias }
        ]
    })
        .then(personas => {
            res.status(200).send({ personas });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar las personas', err });
        });
}
// funcion para persona por id
function getById(req, res) {
    var id = req.params.id_persona;
    personas.findByPk(id, {
        include: [
            { model: fotografias }
        ]
    })
        .then(persona => {
            res.status(200).send({ persona });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar una persona', err });
        })
}

// EXPORTAMOS
module.exports = {
    create,
    update,
    getAll,
    getById
}