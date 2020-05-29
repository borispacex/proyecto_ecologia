const conv_archivos = require('../../models').conv_archivos;
const convenios = require("../../models").convenios;
const fs = require('fs');
const path = require('path');

// conv_archivos.belongsTo(convenios, { foreignKey: 'id_convenio' });

// crear conv_archivo
function create(req, res) {
    var body = req.body;
    conv_archivos.create(body)
        .then(conv_archivos => {
            res.status(200).send({ conv_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la conv_archivo', err });
        });
}
// actualizar conv_archivo por id_conv_archivo
function update(req, res) {
    var id = req.params.id_conv_archivo;
    var body = req.body;
    conv_archivos.findByPk(id)
        .then(conv_archivo => {
            conv_archivo.update(body)
                .then(() => {
                    res.status(200).send({ conv_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la conv_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la conv_archivo', err });
        });
}
// subir archivo a conv_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_conv_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[3];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // conv_archivo --> archivo
            conv_archivos.findByPk(id)
                .then(conv_archivo => {
                    conv_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ conv_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el conv_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la conv_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el conv_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la conv_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el conv_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una conv_archivo' });
    }
}
// funcion para mostrar la conv_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la conv_archivo' });
        }
    })
}

// funcion para mostrar todos los conv_archivos
function getAll(req, res) {
    conv_archivos.findAll({
        // where: { estado: true }
    })
    .then(conv_archivos => {
        res.status(200).send({ conv_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las conv_archivos', err });
    })
}
// funcion para conv_archivo por id
function getById(req, res) {
    var id = req.params.id_conv_archivo;
    conv_archivos.findByPk(id)
    .then(conv_archivo => {
        res.status(200).send({ conv_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una conv_archivo', err});
    })
}
// mostrar un conv_archivos por id_convenio
function getAllByIdConvenio(req, res) {
    var id = req.params.id_convenio;
    conv_archivos.findAll({
        where: { id_convenio: id }
    })
    .then(conv_archivos => {
        res.status(200).send({ conv_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un conv_archivos por id_convenio', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdConvenio
}