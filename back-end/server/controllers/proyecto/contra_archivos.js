const contra_archivos = require('../../models').contra_archivos;
const contratados = require("../../models").contratados;
const fs = require('fs');
const path = require('path');

// contra_archivos.belongsTo(contratados, { foreignKey: 'id_contratado' });

// crear contra_archivo
function create(req, res) {
    var body = req.body;
    contra_archivos.create(body)
        .then(contra_archivos => {
            res.status(200).send({ contra_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la contra_archivo', err });
        });
}
// actualizar contra_archivo por id_contra_archivo
function update(req, res) {
    var id = req.params.id_contra_archivo;
    var body = req.body;
    contra_archivos.findByPk(id)
        .then(contra_archivo => {
            contra_archivo.update(body)
                .then(() => {
                    res.status(200).send({ contra_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la contra_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la contra_archivo', err });
        });
}
// subir archivo a contra_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_contra_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[4];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // contra_archivo --> archivo
            contra_archivos.findByPk(id)
                .then(contra_archivo => {
                    contra_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ contra_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el contra_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la contra_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el contra_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la contra_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el contra_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una contra_archivo' });
    }
}
// funcion para mostrar la contra_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/contratados/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la contra_archivo' });
        }
    })
}

// funcion para mostrar todos los contra_archivos
function getAll(req, res) {
    contra_archivos.findAll({
        // where: { estado: true }
    })
    .then(contra_archivos => {
        res.status(200).send({ contra_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las contra_archivos', err });
    })
}
// funcion para mostrar todos los contra_archivos
function getAllByEstado(req, res) {
    var status = req.params.estado;
    contra_archivos.findAll({
        where: { estado: status }
    })
    .then(contra_archivos => {
        res.status(200).send({ contra_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las contra_archivos', err });
    })
}
// funcion para contra_archivo por id
function getById(req, res) {
    var id = req.params.id_contra_archivo;
    contra_archivos.findByPk(id)
    .then(contra_archivo => {
        res.status(200).send({ contra_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una contra_archivo', err});
    })
}
// mostrar un contra_archivos por id_contratado
function getAllByIdContratado(req, res) {
    var id = req.params.id_contratado;
    contra_archivos.findAll({
        where: { id_contratado: id }
    })
    .then(contra_archivos => {
        res.status(200).send({ contra_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un contra_archivos por id_contratado', err });
    })
}
// mostrar un contra_archivos por id_contratado
function getAllByIdContratadoAndEstado(req, res) {
    var id = req.params.id_contratado;
    var status = req.params.estado;
    contra_archivos.findAll({
        where: { id_contratado: id, estado: status }
    })
    .then(contra_archivos => {
        res.status(200).send({ contra_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un contra_archivos por id_contratado', err });
    })
}
// contar contra_archivos por id_contratado
function countByIdContratado(req, res) {
    var id = req.params.id_contratado;
    contra_archivos.count({
        where: { id_contratado: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar contra_archivos por id_contratado', err });
    })
}
// contar contra_archivos por id_contratado
function countByIdContratadoAndEstado(req, res) {
    var id = req.params.id_contratado;
    var status = req.params.estado;
    contra_archivos.count({
        where: { id_contratado: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar contra_archivos por id_contratado', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdContratado,
    countByIdContratado,

    getAllByEstado,
    getAllByIdContratadoAndEstado,
    countByIdContratadoAndEstado
}