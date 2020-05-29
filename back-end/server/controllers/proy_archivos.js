const proy_archivos = require('../models').proy_archivos;
const proyectos = require("../models").proyectos;
const tipos = require("../models").tipos;
const fs = require('fs');
const path = require('path');

proy_archivos.belongsTo(proyectos, { foreignKey: 'id_proyecto' });
proy_archivos.belongsTo(tipos, { foreignKey: 'id_tipo' });


// ---------------- METODOS ---------------
// crear nuevo proy_archivo
function create(req, res) {
    var body = req.body;
    proy_archivos.create(body)
        .then(proy_archivo => {
            res.status(200).send({ proy_archivo });
        })
        .catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar proy_archivo
function update(req, res) {
    var id = req.params.id_proy_archivo;
    var body = req.body;
    proy_archivos.findByPk(id)
        .then(proy_archivo => {
            proy_archivo.update(body)
                .then(() => {
                    res.status(200).send({ proy_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el proy_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el proy_archivo', err });
        });
}
// subir archivo a proy_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_proy_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[3];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // proy_archivo --> archivo
            proy_archivos.findByPk(id)
                .then(proy_archivo => {
                    proy_archivo.update(documento)
                        .then(() => {
                            res.status(200).send({ proy_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el proy_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la proy_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el proy_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la proy_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el proy_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una proy_archivo' });
    }
}
// funcion para mostrar la proy_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la proy_archivo' });
        }
    })
}
// Listar todos los proy_archivos
function getAll(req, res) {
    proy_archivos.findAll({
        include: [
            { model: proyectos },
            { model: tipos }
        ]
    })
        .then(proy_archivos => {
            res.status(200).send({ proy_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los proy_archivos' }, err);
        });
}
// funcion para proy_archivo por id
function getById(req, res) {
    var id = req.params.id_proy_archivo;
    proy_archivos.findByPk(id, {
        include: [
            { model: proyectos },
            { model: tipos }
        ]
    })
        .then(proy_archivo => {
            res.status(200).send({ proy_archivo });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar un proy_archivo', err });
        })
}
// funcion para buscar y mostrar un proy_archivos por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    proy_archivos.findAll({
        where: { id_proyecto: id },
        include: [
            { model: proyectos },
            { model: tipos }
        ]
    })
    .then(proy_archivos => {
        res.status(200).send({ proy_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un proy_archivos por id_proyecto', err });
    })
}
// funcion para buscar y mostrar un proy_archivos por id_tipo
function getProy_archivosByIdTipo(req, res) {
    var id_proyecto = req.params.id_proyecto;
    var id_tipo = req.params.id_tipo;
    proy_archivos.findAll({
        where: { 'id_proyecto': id_proyecto ,id_tipo: id_tipo },
        include: [
            { model: proyectos },
            { model: tipos }
        ]
    })
    .then(proy_archivos => {
        res.status(200).send({ proy_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un proy_archivos por id_proyecto', err });
    })
}
// EXPORTAMOS
module.exports = {
    create,
    update,
    getAll,
    getAllByIdProyecto,
    getProy_archivosByIdTipo,
    getById,
    uploadArchivo,
    getArchivo
}
