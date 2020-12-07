const autores = require('../../models').autores;
const publicaciones = require('../../models').publicaciones;
const personas = require('../../models').personas;
const investigadores = require('../../models').investigadores;
const fotografias = require('../../models').fotografias;

autores.belongsTo(publicaciones, { foreignKey: 'id_publicacion' });
autores.belongsTo(investigadores, { foreignKey: 'id_investigador' })

// crear autor
function create(req, res) {
    var body = req.body;
    autores.create(body)
        .then(autor => {
            res.status(200).send({ autor });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la autor', err });
        });
}
// actualizar autor
function update(req, res) {
    var id = req.params.id_autor;
    var body = req.body;
    autores.findByPk(id)
        .then(autor => {
            autor.update(body)
                .then(() => {
                    res.status(200).send({ autor });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la autor', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la autor', err });
        });
}
// funcion para mostrar todos autores
function getAll(req, res) {
    autores.findAll({
        where: { estado: true },
        include: [
            {
                model: investigadores,
                include: [
                    { model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            },
            { model: publicaciones }
        ]
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las autores', err });
    })
}
// funcion para mostrar todos autores
function getAllByEstado(req, res) {
    var status = req.params.estado;
    autores.findAll({
        where: { estado: status },
        include: [
            {
                model: investigadores,
                include: [
                    { model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            },
            { model: publicaciones }
        ]
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las autores', err });
    })
}
// funcion para autor por id
function getById(req, res) {
    var id = req.params.id_autor;
    autores.findByPk(id)
    .then(autor => {
        res.status(200).send({ autor });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una autor', err});
    });
}
// funcion para buscar y mostrar un autores por id_publicacion
function getAllByIdPublicacion(req, res) {
    var id = req.params.id_publicacion;
    autores.findAll({
        where: { id_publicacion: id, estado: true },
        include: [
            {
                model: investigadores,
                include: [
                    { model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            },
            { model: publicaciones }
        ]
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un autores por id_publicacion', err });
    })
}
// funcion para buscar y mostrar un autores por id_publicacion
function getAllByIdPublicacionAndEstado(req, res) {
    var id = req.params.id_publicacion;
    var status = req.params.estado;
    autores.findAll({
        where: { id_publicacion: id, estado: status },
        include: [
            {
                model: investigadores,
                include: [
                    { model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            },
            { model: publicaciones }
        ]
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un autores por id_publicacion', err });
    })
}

// funcion para buscar y mostrar un autores por id_investigador
function getAllByIdInvestigador(req, res) {
    var id = req.params.id_investigador;
    autores.findAll({
        where: { id_investigador: id, estado: true },
        include: [
            {
                model: investigadores,
                include: [
                    { model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            },
            { model: publicaciones }
        ]
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un autores por id_investigador', err });
    })
}
// funcion para buscar y mostrar un autores por id_investigador
function getAllByIdInvestigadorDistinct(req, res) {
    var id = req.params.id_investigador;
    autores.findAll({
        where: { id_investigador: id, estado: true },
        include: [
            { 
                model: publicaciones,
                attributes: ['fecha'],
                group: 'fecha'
            }
        ]
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un autores por id_investigador', err });
    })
}
// funcion para buscar y mostrar un autores por id_investigador
function getAllByIdInvestigadorAndEstado(req, res) {
    var id = req.params.id_investigador;
    var status = req.params.estado;
    autores.findAll({
        where: { id_investigador: id, estado: status },
        include: [
            {
                model: investigadores,
                include: [
                    { model: personas,
                        include: [
                            { 
                                model: fotografias,
                                attributes: [
                                    "imagen"
                                ] 
                            }
                        ]
                    }
                ]
            },
            { model: publicaciones }
        ]
        
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un autores por id_investigador', err });
    })
}

// funcion para eliminar la autor
function deleteAutor(req, res) {
    var id = req.params.id_autor;
    autores.destroy({
        where: { id_autor: id }
    })
    .then(autor => {
        res.status(200).send({ autor });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una autor por id_autor', err});
    })
}
// funcion para eliminar los autores por id_publicacion
function deleteAutoresByIdPublicacion(req, res) {
    var id = req.params.id_publicacion;
    autores.destroy({
        where: { id_publicacion: id }
    })
    .then(autores => {
        res.status(200).send({ autores });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar autores por id_publicacion', err});
    })
}


module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdPublicacion,
    getAllByIdInvestigador,
    deleteAutor,
    deleteAutoresByIdPublicacion,

    getAllByEstado,
    getAllByIdPublicacionAndEstado,
    getAllByIdInvestigadorAndEstado,
    getAllByIdInvestigadorDistinct

}