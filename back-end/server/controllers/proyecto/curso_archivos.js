const curso_archivos = require('../../models').curso_archivos;
const cursos = require("../../models").cursos;
const fs = require('fs');
const path = require('path');

// curso_archivos.belongsTo(cursos, { foreignKey: 'id_curso });

// crear curso_archivo
function create(req, res) {
    var body = req.body;
    curso_archivos.create(body)
        .then(curso_archivos => {
            res.status(200).send({ curso_archivos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la curso_archivo', err });
        });
}
// actualizar curso_archivo por id_curso_archivo
function update(req, res) {
    var id = req.params.id_curso_archivo;
    var body = req.body;
    curso_archivos.findByPk(id)
        .then(curso_archivo => {
            curso_archivo.update(body)
                .then(() => {
                    res.status(200).send({ curso_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la curso_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la curso_archivo', err });
        });
}
// subir archivo a curso_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_curso_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        var file_split = file_path.split('/');
        var file_name = file_split[4];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // curso_archivo --> archivo
            curso_archivos.findByPk(id)
                .then(curso_archivo => {
                    curso_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ curso_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el curso_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la curso_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el curso_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la curso_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el curso_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una curso_archivo' });
    }
}
// funcion para mostrar la curso_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/cursos/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la curso_archivo' });
        }
    })
}

// funcion para mostrar todos los curso_archivos
function getAll(req, res) {
    curso_archivos.findAll({
        // where: { estado: true }
    })
    .then(curso_archivos => {
        res.status(200).send({ curso_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las curso_archivos', err });
    })
}
// funcion para curso_archivo por id
function getById(req, res) {
    var id = req.params.id_curso_archivo;
    curso_archivos.findByPk(id)
    .then(curso_archivo => {
        res.status(200).send({ curso_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una curso_archivo', err});
    })
}
// mostrar un curso_archivos por id_proyecto
function getAllByIdCurso(req, res) {
    var id = req.params.id_curso;
    curso_archivos.findAll({
        where: { id_curso: id }
    })
    .then(curso_archivos => {
        res.status(200).send({ curso_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un curso_archivos por id_curso', err });
    })
}
// contar curso_archivos por id_proyecto
function countByIdCurso(req, res) {
    var id = req.params.id_curso;
    curso_archivos.count({
        where: { id_curso: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar curso_archivos por id_curso', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByIdCurso,
    countByIdCurso
}