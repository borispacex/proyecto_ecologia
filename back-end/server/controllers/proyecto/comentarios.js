const comentarios = require('../../models').comentarios;
const publicaciones = require('../../models').publicaciones;
const personas = require('../../models').personas;
const fotografias = require('../../models').fotografias;

comentarios.belongsTo(publicaciones, { foreignKey: 'id_publicacion' });
comentarios.belongsTo(personas, { foreignKey: 'id_persona' })

// crear comentario
function create(req, res) {
    var body = req.body;
    comentarios.create(body)
        .then(comentario => {
            res.status(200).send({ comentario });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la comentario', err });
        });
}
// actualizar comentario
function update(req, res) {
    var id = req.params.id_comentario;
    var body = req.body;
    comentarios.findByPk(id)
        .then(comentario => {
            comentario.update(body)
                .then(() => {
                    res.status(200).send({ comentario });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la comentario', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la comentario', err });
        });
}
// funcion para mostrar todos comentarios
function getAll(req, res) {
    comentarios.findAll({
        where: { estado: true },
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
            },
            { model: publicaciones }
        ]
            
        
    })
    .then(comentarios => {
        res.status(200).send({ comentarios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las comentarios', err });
    })
}
// funcion para mostrar todos comentarios
function getAllByEstado(req, res) {
    var status = req.params.estado;
    comentarios.findAll({
        where: { estado: status },
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
            },
            { model: publicaciones }
        ]
            
        
    })
    .then(comentarios => {
        res.status(200).send({ comentarios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las comentarios', err });
    })
}
// funcion para comentario por id
function getById(req, res) {
    var id = req.params.id_comentario;
    comentarios.findByPk(id)
    .then(comentario => {
        res.status(200).send({ comentario });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una comentario', err});
    })
}
// funcion para buscar y mostrar un comentarios por id_publicacion
function getAllByIdPublicacion(req, res) {
    var id = req.params.id_publicacion;
    comentarios.findAll({
        where: { id_publicacion: id },
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
            },
            { model: publicaciones }
        ]
    })
    .then(comentarios => {
        res.status(200).send({ comentarios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un comentarios por id_publicacion', err });
    })
}
// funcion para buscar y mostrar un comentarios por id_publicacion
function getAllByIdPublicacionAndEstado(req, res) {
    var id = req.params.id_publicacion;
    var status = req.params.estado;
    comentarios.findAll({
        where: { id_publicacion: id, estado: status },
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
            },
            { model: publicaciones }
        ]
    })
    .then(comentarios => {
        res.status(200).send({ comentarios });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un comentarios por id_publicacion', err });
    })
}
// funcion para contar comentarios por id_publicacion
function countByIdPublicacion(req, res) {
    var id = req.params.id_publicacion;
    comentarios.count({
        where: { id_publicacion: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar un comentarios por id_proyecto', err });
    })
}
// funcion para contar comentarios por id_publicacion
function countByIdPublicacionAndEstado(req, res) {
    var id = req.params.id_publicacion;
    var status = req.params.estado;
    comentarios.count({
        where: { id_publicacion: id, estado: status }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar un comentarios por id_proyecto', err });
    })
}


module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdPublicacion,
    countByIdPublicacion,

    getAllByEstado,
    getAllByIdPublicacionAndEstado,
    countByIdPublicacionAndEstado
}