const segui_archivos = require('../../models').segui_archivos;
const seguimientos = require("../../models").seguimientos;
const fs = require('fs');
const path = require('path');

segui_archivos.belongsTo(seguimientos, { foreignKey: 'id_seguimiento' });

// crear segui_archivo
function create(req, res) {
    var body = req.body;
    segui_archivos.create(body)
        .then(segui_archivo => {
            res.status(200).send({ segui_archivo });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la segui_archivo', err });
        });
}
// actualizar segui_archivo por id_segui_archivo
function update(req, res) {
    var id = req.params.id_segui_archivo;
    var body = req.body;
    segui_archivos.findByPk(id)
        .then(segui_archivo => {
            segui_archivo.update(body)
                .then(() => {
                    res.status(200).send({ segui_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la segui_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la segui_archivo', err });
        });
}
// subir archivo a segui_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_segui_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[3];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // segui_archivo --> archivo
            segui_archivos.findByPk(id)
                .then(segui_archivo => {
                    segui_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ segui_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el segui_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la segui_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el segui_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la segui_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el segui_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una segui_archivo' });
    }
}
// funcion para mostrar la segui_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la segui_archivo' });
        }
    })
}

// funcion para mostrar todos los segui_archivos
function getAll(req, res) {
    segui_archivos.findAll({
        // where: { estado: true }
    })
    .then(segui_archivos => {
        res.status(200).send({ segui_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las seguimiento archivos', err });
    })
}
// funcion para mostrar todos los segui_archivos cuando son true
function getAllTrue(req, res) {
    segui_archivos.findAll({
        where: { estado: true }
    })
    .then(segui_archivos => {
        res.status(200).send({ segui_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las seguimiento archivos', err });
    })
}
// funcion para segui_archivo por id
function getById(req, res) {
    var id = req.params.id_segui_archivo;
    segui_archivos.findByPk(id)
    .then(segui_archivo => {
        res.status(200).send({ segui_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una segui_archivo', err});
    })
}
// mostrar un segui_archivos por id_seguimiento
function getAllByIdSeguimiento(req, res) {
    var id = req.params.id_seguimiento;
    segui_archivos.findAll({
        where: { id_seguimiento: id }
    })
    .then(segui_archivos => {
        res.status(200).send({ segui_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un segui_archivos por id_seguimiento', err });
    })
}
// contar segui_archivos por id_seguimiento
function countByIdSeguimiento(req, res) {
    var id = req.params.id_seguimiento;
    segui_archivos.count({
        where: { id_seguimiento: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar segui_archivos por id_seguimiento', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllTrue,
    getAllByIdSeguimiento,
    countByIdSeguimiento
}