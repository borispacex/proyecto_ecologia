const lugar_desarrollos = require('../../models').lugar_desarrollos;
const proyectos = require('../../models').proyectos;

lugar_desarrollos.belongsTo(proyectos, { foreignKey: 'id_proyecto' });

// crear lugar_desarrollo
function create(req, res) {
    var body = req.body;
    lugar_desarrollos.create(body)
        .then(lugar_desarrollos => {
            res.status(200).send({ lugar_desarrollos });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio error al guardar la lugar_desarrollo', err });
        });
}
// actualizar lugar_desarrollo
function update(req, res) {
    var id = req.params.id_lugar_desarrollo;
    var body = req.body;
    lugar_desarrollos.findByPk(id)
        .then(lugar_desarrollo => {
            lugar_desarrollo.update(body)
                .then(() => {
                    res.status(200).send({ lugar_desarrollo });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar la lugar_desarrollo', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar la lugar_desarrollo', err });
        });
}
// funcion para mostrar todos lugar_desarrollos
function getAll(req, res) {
    lugar_desarrollos.findAll({
        // where: { estado: true }
    })
    .then(lugar_desarrollos => {
        res.status(200).send({ lugar_desarrollos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las lugar_desarrollos', err });
    })
}
// funcion para lugar_desarrollo por id
function getById(req, res) {
    var id = req.params.id_lugar_desarrollo;
    lugar_desarrollos.findByPk(id)
    .then(lugar_desarrollo => {
        res.status(200).send({ lugar_desarrollo });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar una lugar_desarrollo', err});
    })
}
// funcion para buscar y mostrar un lugar_desarrollos por id_proyecto
function getAllByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    lugar_desarrollos.findAll({
        where: { id_proyecto: id }
    })
    .then(lugar_desarrollos => {
        res.status(200).send({ lugar_desarrollos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un lugar_desarrollos por id_proyecto', err });
    })
}
// funcion para mostrar todos lugar_desarrollos, cuando sea departamento y provincia
function getAllByIdProyectoDepartamentoAndProvincia(req, res) {
    var id = req.params.id_proyecto;
    var department = req.params.departamento;
    var province = req.params.provincia;
    lugar_desarrollos.findAll({
        where: { id_proyecto: id, departamento: department, provincia: province }
    })
    .then(lugar_desarrollos => {
        res.status(200).send({ lugar_desarrollos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las lugar_desarrollos', err });
    })
}
// funcion para mostrar todos lugar_desarrollos, cuando sea departamento
function getAllByIdProyectoAndDepartamento(req, res) {
    var id = req.params.id_proyecto;
    var department = req.params.departamento;
    lugar_desarrollos.findAll({
        where: { id_proyecto: id, departamento: department }
    })
    .then(lugar_desarrollos => {
        res.status(200).send({ lugar_desarrollos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las lugar_desarrollos', err });
    })
}
// funcion para mostrar todos lugar_desarrollos, cuando sea provincia
function getAllByIdProyectoAndProvincia(req, res) {
    var id = req.params.id_proyecto;
    var province = req.params.provincia;
    lugar_desarrollos.findAll({
        where: { id_proyecto: id, provincia: province }
    })
    .then(lugar_desarrollos => {
        res.status(200).send({ lugar_desarrollos });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar las lugar_desarrollos', err });
    })
}
// funcion para contar lugar_desarrollos por id_proyecto
function countByIdProyecto(req, res) {
    var id = req.params.id_proyecto;
    lugar_desarrollos.count({
        where: { id_proyecto: id }
    })
    .then(contador => {
        res.status(200).send({ contador });
    })
    .catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al contar lugar_desarrollos por id_proyecto', err });
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    getAllByIdProyecto,
    getAllByIdProyectoDepartamentoAndProvincia,
    getAllByIdProyectoAndDepartamento,
    getAllByIdProyectoAndProvincia,
    countByIdProyecto
}