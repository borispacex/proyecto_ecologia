const convenios = require('../../models').convenios;
const proyectos = require("../../models").proyectos;
const fs = require('fs');
const path = require('path');

convenios.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear convenio
function create(req, res) {
    var body = req.body;
    convenios.create(body)
        .then(convenios => {
            res.status(200).send({ convenios });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la convenio', err });
        });
}
// actualizar convenio por id_convenio
function update(req, res) {
    var id = req.params.id_convenio;
    var body = req.body;
    convenios.findByPk(id)
        .then(convenio => {
            convenio.update(body)
                .then(() => {
                    res.status(200).send({ convenio });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la convenio', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la convenio', err });
        });
}
// subir archivo a convenio
function uploadArchivo(req, res) {
    var id = req.params.id_convenio;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[4];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // convenio --> archivo
            convenios.findByPk(id)
                .then(convenio => {
                    convenio.update(documento)
                        .then( () => {
                            res.status(200).send({ convenio });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el convenio', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la convenio', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el convenio', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la convenio', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el convenio', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una convenio' });
    }
}
// funcion para mostrar la convenio false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/convenios/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la convenio' });
        }
    })
}

// funcion para mostrar todos los convenios
function getAll(req, res) {
    convenios.findAll({
        // where: { estado: true }
    })
    .then(convenios => {
        res.status(200).send({ convenios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las convenios', err });
    })
}
// funcion para mostrar todos los convenios
function getAllByEstado(req, res) {
    var status = req.params.estado;
    convenios.findAll({
        where: { estado: status }
    })
    .then(convenios => {
        res.status(200).send({ convenios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las convenios', err });
    })
}
// funcion para convenio por id
function getById(req, res) {
    var id = req.params.id_convenio;
    convenios.findByPk(id)
    .then(convenio => {
        res.status(200).send({ convenio });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una convenio', err});
    })
}
// mostrar un convenios por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    convenios.findAll({
        where: { id_proyecto: id }
    })
    .then(convenios => {
        res.status(200).send({ convenios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un convenios por id_proyecto', err });
    })
}
// mostrar un convenios por id_proyecto
function getAllByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    convenios.findAll({
        where: { id_proyecto: id, estado: status }
    })
    .then(convenios => {
        res.status(200).send({ convenios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un convenios por id_proyecto', err });
    })
}
// contar convenios por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    convenios.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar convenios por id_proyecto', err });
    })
}
// contar convenios por id_proyecto
function countByIdProyectoAndEstado(req, res) {
    var id = req.params.id_proyecto;
    var status = req.params.estado;
    convenios.count({
        where: { id_proyecto: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar convenios por id_proyecto', err });
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
    countByIdProyecto,

    getAllByEstado,
    getAllByIdProyectoAndEstado,
    countByIdProyectoAndEstado
}