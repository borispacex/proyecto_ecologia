const permiso_archivos = require('../../models').permiso_archivos;
const proyectos = require("../../models").proyectos;
const fs = require('fs');
const path = require('path');

// permiso_archivos.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear permiso_archivo
function create(req, res) {
    var body = req.body;
    permiso_archivos.create(body)
        .then(permiso_archivos => {
            res.status(200).send({ permiso_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la permiso_archivo', err });
        });
}
// actualizar permiso_archivo por id_permiso_archivo
function update(req, res) {
    var id = req.params.id_permiso_archivo;
    var body = req.body;
    permiso_archivos.findByPk(id)
        .then(permiso_archivo => {
            permiso_archivo.update(body)
                .then(() => {
                    res.status(200).send({ permiso_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la permiso_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la permiso_archivo', err });
        });
}
// subir archivo a permiso_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_permiso_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[3];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // permiso_archivo --> archivo
            permiso_archivos.findByPk(id)
                .then(permiso_archivo => {
                    permiso_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ permiso_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el permiso_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la permiso_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el permiso_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la permiso_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el permiso_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una permiso_archivo' });
    }
}
// funcion para mostrar la permiso_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la permiso_archivo' });
        }
    })
}

// funcion para mostrar todos los permiso_archivos
function getAll(req, res) {
    permiso_archivos.findAll({
        // where: { estado: true }
    })
    .then(permiso_archivos => {
        res.status(200).send({ permiso_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las permiso_archivos', err });
    })
}
// funcion para permiso_archivo por id
function getById(req, res) {
    var id = req.params.id_permiso_archivo;
    permiso_archivos.findByPk(id)
    .then(permiso_archivo => {
        res.status(200).send({ permiso_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una permiso_archivo', err});
    })
}
// mostrar un permiso_archivos por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    permiso_archivos.findAll({
        where: { id_proyecto: id }
    })
    .then(permiso_archivos => {
        res.status(200).send({ permiso_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un permiso_archivos por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdProyecto
}