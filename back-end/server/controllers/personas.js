const personas = require('../models').personas;
const fotografias = require('../models').fotografias;
const fs = require('fs');
const path = require('path');

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

// subir archivo a persona
function uploadArchivo(req, res) {
    var id = req.params.id_persona;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[4];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf') {
            var documento = {};
            documento.archivo = file_name; // persona --> archivo
            personas.findByPk(id)
                .then(persona => {
                    persona.update(documento)
                        .then(() => {
                            res.status(200).send({ persona });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el persona', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la persona', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el persona', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la persona', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el persona', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una persona' });
    }
}

// funcion para mostrar 
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/profiles/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la persona archivo' });
        }
    })
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
    getById,
    uploadArchivo,
    getArchivo
}