const evento_archivos = require('../../models').evento_archivos;
const eventos = require("../../models").eventos;
const fs = require('fs');
const path = require('path');

evento_archivos.belongsTo(eventos, { foreignKey: 'id_evento' });

// crear evento_archivo
function create(req, res) {
    var body = req.body;
    evento_archivos.create(body)
        .then(evento_archivos => {
            res.status(200).send({ evento_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la evento_archivo', err });
        });
}
// actualizar evento_archivo por id_evento_archivo
function update(req, res) {
    var id = req.params.id_evento_archivo;
    var body = req.body;
    evento_archivos.findByPk(id)
        .then(evento_archivo => {
            evento_archivo.update(body)
                .then(() => {
                    res.status(200).send({ evento_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la evento_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la evento_archivo', err });
        });
}
// subir archivo a evento_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_evento_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[4];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // evento_archivo --> archivo
            evento_archivos.findByPk(id)
                .then(evento_archivo => {
                    evento_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ evento_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el evento_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la evento_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el evento_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la evento_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el evento_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una evento_archivo' });
    }
}
// funcion para mostrar la evento_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/eventos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la evento_archivo' });
        }
    })
}

// funcion para mostrar todos los evento_archivos
function getAll(req, res) {
    evento_archivos.findAll({
        // where: { estado: true }
    })
    .then(evento_archivos => {
        res.status(200).send({ evento_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las evento archivos', err });
    })
}
// funcion para evento_archivo por id
function getById(req, res) {
    var id = req.params.id_evento_archivo;
    evento_archivos.findByPk(id)
    .then(evento_archivo => {
        res.status(200).send({ evento_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una evento_archivo', err});
    })
}
// mostrar un evento_archivos por id_evento
function getAllByIdEvento(req, res) {
    var id = req.params.id_evento;
    evento_archivos.findAll({
        where: { id_evento: id }
    })
    .then(evento_archivos => {
        res.status(200).send({ evento_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un evento_archivos por id_evento', err });
    })
}
// contar evento_archivos por id_evento
function countByIdEvento(req, res) {
    var id = req.params.id_evento;
    evento_archivos.count({
        where: { id_evento: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar evento_archivos por id_evento', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdEvento,
    countByIdEvento
}