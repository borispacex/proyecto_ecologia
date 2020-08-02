const contratados = require('../../models').contratados;
const proyectos = require("../../models").proyectos;
const fs = require('fs');
const path = require('path');

// contratados.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear contratado
function create(req, res) {
    var body = req.body;
    contratados.create(body)
        .then(contratados => {
            res.status(200).send({ contratados });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la contratado', err });
        });
}
// actualizar contratado por id_contratado
function update(req, res) {
    var id = req.params.id_contratado;
    var body = req.body;
    contratados.findByPk(id)
        .then(contratado => {
            contratado.update(body)
                .then(() => {
                    res.status(200).send({ contratado });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la contratado', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la contratado', err });
        });
}
// subir archivo a contratado
function uploadArchivo(req, res) {
    var id = req.params.id_contratado;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[3];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // contratado --> archivo
            contratados.findByPk(id)
                .then(contratado => {
                    contratado.update(documento)
                        .then( () => {
                            res.status(200).send({ contratado });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el contratado', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la contratado', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el contratado', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la contratado', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el contratado', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una contratado' });
    }
}
// funcion para mostrar la contratado false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la contratado' });
        }
    })
}

// funcion para mostrar todos los contratados
function getAll(req, res) {
    contratados.findAll({
        // where: { estado: true }
    })
    .then(contratados => {
        res.status(200).send({ contratados });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las contratados', err });
    })
}
// funcion para contratado por id
function getById(req, res) {
    var id = req.params.id_contratado;
    contratados.findByPk(id)
    .then(contratado => {
        res.status(200).send({ contratado });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una contratado', err});
    })
}
// mostrar un contratados por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    contratados.findAll({
        where: { id_proyecto: id }
    })
    .then(contratados => {
        res.status(200).send({ contratados });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un contratados por id_proyecto', err });
    })
}
// contar contratados por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    contratados.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un contratados por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdProyecto,
    countByIdProyecto
}