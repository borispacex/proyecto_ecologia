const publi_archivos = require('../../models').publi_archivos;
const publicaciones = require("../../models").publicaciones;
const fs = require('fs');
const path = require('path');

publi_archivos.belongsTo(publicaciones, { foreignKey: 'id_publicacion' });

// crear publi_archivo
function create(req, res) {
    var body = req.body;
    publi_archivos.create(body)
        .then(publi_archivo => {
            res.status(200).send({ publi_archivo });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la publi_archivo', err });
        });
}
// actualizar publi_archivo por id_publi_archivo
function update(req, res) {
    var id = req.params.id_publi_archivo;
    var body = req.body;
    publi_archivos.findByPk(id)
        .then(publi_archivo => {
            publi_archivo.update(body)
                .then(() => {
                    res.status(200).send({ publi_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la publi_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la publi_archivo', err });
        });
}
// subir archivo a publi_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_publi_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[3];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // publi_archivo --> archivo
            publi_archivos.findByPk(id)
                .then(publi_archivo => {
                    publi_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ publi_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el publi_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la publi_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el publi_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la publi_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el publi_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una publi_archivo' });
    }
}
// funcion para mostrar la publi_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la publi_archivo' });
        }
    })
}

// funcion para mostrar todos los publi_archivos
function getAll(req, res) {
    publi_archivos.findAll({
        // where: { estado: true }
    })
    .then(publi_archivos => {
        res.status(200).send({ publi_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las publicacion archivos', err });
    })
}
// funcion para publi_archivo por id
function getById(req, res) {
    var id = req.params.id_publi_archivo;
    publi_archivos.findByPk(id)
    .then(publi_archivo => {
        res.status(200).send({ publi_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una publi_archivo', err});
    })
}
// mostrar un publi_archivos por id_publicacion
function getAllByIdPublicacion(req, res) {
    var id = req.params.id_publicacion;
    publi_archivos.findAll({
        where: { id_publicacion: id }
    })
    .then(publi_archivos => {
        res.status(200).send({ publi_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un publi_archivos por id_publicacion', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdPublicacion
}