const peti_archivos = require('../../models').peti_archivos;
const peticiones = require("../../models").peticiones;
const fs = require('fs');
const path = require('path');

peti_archivos.belongsTo(peticiones, { foreignKey: 'id_peticion' });

// crear peti_archivo
function create(req, res) {
    var body = req.body;
    peti_archivos.create(body)
        .then(peti_archivo => {
            res.status(200).send({ peti_archivo });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la peti_archivo', err });
        });
}
// actualizar peti_archivo por id_peti_archivo
function update(req, res) {
    var id = req.params.id_peti_archivo;
    var body = req.body;
    peti_archivos.findByPk(id)
        .then(peti_archivo => {
            peti_archivo.update(body)
                .then(() => {
                    res.status(200).send({ peti_archivo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la peti_archivo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la peti_archivo', err });
        });
}
// subir archivo a peti_archivo
function uploadArchivo(req, res) {
    var id = req.params.id_peti_archivo;
    if (req.files) {
        var file_path = req.files.documento.path;        //documento: es con lo que busco
        console.log('---------------------------------------->', file_path);
        var file_split = file_path.split('/');
        var file_name = file_split[4];
        var ext_split = file_name.split('.');
        var file_ext = ext_split[1];
        if (file_ext == 'pdf' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'jpeg') {
            var documento = {};
            documento.archivo = file_name; // peti_archivo --> archivo
            peti_archivos.findByPk(id)
                .then(peti_archivo => {
                    peti_archivo.update(documento)
                        .then( () => {
                            res.status(200).send({ peti_archivo });
                        })
                        .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el peti_archivo', err });
                            })
                            res.status(500).send({ message: 'OCurrio un error al actualizar la peti_archivo', err });
                        });
                })
                .catch(err => {
                    fs.unlink(file_path, (err) => {
                        if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el peti_archivo', err });
                    })
                    res.status(500).send({ message: 'Ocurrio un error al buscar la peti_archivo', err });
                });
        } else {
            fs.unlink(file_path, (err) => {
                if (err) res.status(500).send({ message: 'Ocurrio un error al eliminar el peti_archivo', err });
            })
            res.status(500).send({ message: 'La extension no es valida' });
        }
    } else {
        res.status(400).send({ message: 'Debe seleccionar una peti_archivo' });
    }
}
// funcion para mostrar la peti_archivo false: thumb, true: normal
function getArchivo(req, res) {
    var archivo = req.params.archivo; // la variable se llama archivo
    var path_documento = './server/uploads/archivos/peticiones/' + archivo;
    fs.exists(path_documento, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_documento));
        } else {
            res.status(500).send({ message: 'No se encuentra la peti_archivo' });
        }
    })
}

// funcion para mostrar todos los peti_archivos
function getAll(req, res) {
    peti_archivos.findAll({
        // where: { estado: true }
    })
    .then(peti_archivos => {
        res.status(200).send({ peti_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las seguimiento archivos', err });
    })
}
// funcion para mostrar todos los peti_archivos cuando son true
function getAllByEstado(req, res) {
    var status = req.params.estado; 
    peti_archivos.findAll({
        where: { estado: status }
    })
    .then(peti_archivos => {
        res.status(200).send({ peti_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las seguimiento archivos', err });
    })
}
// funcion para peti_archivo por id
function getById(req, res) {
    var id = req.params.id_peti_archivo;
    peti_archivos.findByPk(id)
    .then(peti_archivo => {
        res.status(200).send({ peti_archivo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una peti_archivo', err});
    })
}
// mostrar un peti_archivos por id_peticion
function getAllByIdPeticion(req, res) {
    var id = req.params.id_peticion;
    peti_archivos.findAll({
        where: { id_peticion: id }
    })
    .then(peti_archivos => {
        res.status(200).send({ peti_archivos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un peti_archivos por id_peticion', err });
    })
}
// contar peti_archivos por id_peticion
function countByIdPeticion(req, res) {
    var id = req.params.id_peticion;
    peti_archivos.count({
        where: { id_peticion: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar peti_archivos por id_peticion', err });
    })
}

module.exports = {
    create,
    update,
    uploadArchivo,
    getArchivo,
    getById,
    getAll,
    getAllByEstado,
    getAllByIdPeticion,
    countByIdPeticion
}