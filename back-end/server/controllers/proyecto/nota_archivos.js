const nota_archivos = require('../../models').nota_archivos;
const nota_prensas = require("../../models").nota_prensas;
const fs = require('fs');
const path = require('path');

// nota_archivos.belongsTo(nota_prensas, { foreignKey: 'id_nota_prensa' });

// crear nota_archivo
function create(req, res) {
    var body = req.body;
    nota_archivos.create(body)
        .then(nota_archivos => {
            res.status(200).send({ nota_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la nota_archivo', err });
        });
}
// actualizar nota_archivo por id_nota_archivo
function update(req, res) {
    var id = req.params.id_nota_archivo;
    var body = req.body;
    nota_archivos.findByPk(id)
        .then(nota_archivo => {
            nota_archivo.update(body)
                .then(() => {
                    res.status(200).send({ nota_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la nota_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la nota_archivo', err });
        });
}
// subir archivo a nota_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_nota_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[4];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // nota_archivo --> archivo
            nota_archivos.findByPk(id)
                .then(nota_archivo => {
                    nota_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ nota_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el nota_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la nota_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el nota_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la nota_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el nota_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una nota_archivo' });
    }
}
// funcion para mostrar la nota_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/notas_prensa/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la nota_archivo' });
        }
    })
}

// funcion para mostrar todos los nota_archivos
function getAll(req, res) {
    nota_archivos.findAll({
        // where: { estado: true }
    })
    .then(nota_archivos => {
        res.status(200).send({ nota_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las nota_archivos', err });
    })
}
// funcion para mostrar todos los nota_archivos
function getAllByEstado(req, res) {
    var status = req.params.estado;
    nota_archivos.findAll({
        where: { estado: status }
    })
    .then(nota_archivos => {
        res.status(200).send({ nota_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las nota_archivos', err });
    })
}
// funcion para nota_archivo por id
function getById(req, res) {
    var id = req.params.id_nota_archivo;
    nota_archivos.findByPk(id)
    .then(nota_archivo => {
        res.status(200).send({ nota_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una nota_archivo', err});
    })
}
// mostrar un nota_archivos por id_nota_prensa
function getAllByIdNotaPrensa(req, res) {
    var id = req.params.id_nota_prensa;
    nota_archivos.findAll({
        where: { id_nota_prensa: id }
    })
    .then(nota_archivos => {
        res.status(200).send({ nota_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un nota_archivos por id_nota_prensa', err });
    })
}
// mostrar un nota_archivos por id_nota_prensa
function getAllByIdNotaPrensaAndEstado(req, res) {
    var id = req.params.id_nota_prensa;
    var status = req.params.estado;
    nota_archivos.findAll({
        where: { id_nota_prensa: id, estado: status }
    })
    .then(nota_archivos => {
        res.status(200).send({ nota_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un nota_archivos por id_nota_prensa', err });
    })
}
// contar nota_archivos por id_nota_prensa
function countByIdNotaPrensa(req, res) {
    var id = req.params.id_nota_prensa;
    nota_archivos.count({
        where: { id_nota_prensa: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar nota_archivos por id_nota_prensa', err });
    })
}
// contar nota_archivos por id_nota_prensa
function countByIdNotaPrensaAndEstado(req, res) {
    var id = req.params.id_nota_prensa;
    var status = req.params.estado;
    nota_archivos.count({
        where: { id_nota_prensa: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar nota_archivos por id_nota_prensa', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdNotaPrensa,
    countByIdNotaPrensa,

    getAllByEstado,
    getAllByIdNotaPrensaAndEstado,
    countByIdNotaPrensaAndEstado
}