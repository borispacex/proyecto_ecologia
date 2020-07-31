const expo_archivos = require('../../models').expo_archivos;
const exposiciones = require("../../models").exposiciones;
const fs = require('fs');
const path = require('path');

// expo_archivos.belongsTo(exposiciones, { foreignKey: 'id_exposicion' });

// crear expo_archivo
function create(req, res) {
    var body = req.body;
    expo_archivos.create(body)
        .then(expo_archivos => {
            res.status(200).send({ expo_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la expo_archivo', err });
        });
}
// actualizar expo_archivo por id_expo_archivo
function update(req, res) {
    var id = req.params.id_expo_archivo;
    var body = req.body;
    expo_archivos.findByPk(id)
        .then(expo_archivo => {
            expo_archivo.update(body)
                .then(() => {
                    res.status(200).send({ expo_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la expo_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la expo_archivo', err });
        });
}
// subir archivo a expo_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_expo_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[3];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // expo_archivo --> archivo
            expo_archivos.findByPk(id)
                .then(expo_archivo => {
                    expo_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ expo_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el expo_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la expo_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el expo_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la expo_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el expo_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una expo_archivo' });
    }
}
// funcion para mostrar la expo_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la expo_archivo' });
        }
    })
}

// funcion para mostrar todos los expo_archivos
function getAll(req, res) {
    expo_archivos.findAll({
        // where: { estado: true }
    })
    .then(expo_archivos => {
        res.status(200).send({ expo_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las expo_archivos', err });
    })
}
// funcion para expo_archivo por id
function getById(req, res) {
    var id = req.params.id_expo_archivo;
    expo_archivos.findByPk(id)
    .then(expo_archivo => {
        res.status(200).send({ expo_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una expo_archivo', err});
    })
}
// mostrar un expo_archivos por id_exposicion
function getAllByIdExposicion(req, res) {
    var id = req.params.id_exposicion;
    expo_archivos.findAll({
        where: { id_exposicion: id }
    })
    .then(expo_archivos => {
        res.status(200).send({ expo_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un expo_archivos por id_exposicion', err });
    })
}
// contar expo_archivos por id_exposicion
function countByIdExposicion(req, res) {
    var id = req.params.id_exposicion;
    expo_archivos.count({
        where: { id_exposicion: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar expo_archivos por id_exposicion', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdExposicion,
    countByIdExposicion
}