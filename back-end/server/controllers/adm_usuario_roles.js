const adm_usuario_roles = require('../models').adm_usuario_roles;
const usuarios = require("../models").adm_usuarios;
const adm_roles = require("../models").adm_roles;

adm_usuario_roles.belongsTo(usuarios, { foreignKey: "id_usuario" });
adm_usuario_roles.belongsTo(adm_roles, { foreignKey: "id_rol" });

// crear nuevo adm_usuario_rol
function create(req, res) {
    var body = req.body;
    adm_usuario_roles.create(body)
        .then(adm_usuario_rol => {
            res.status(200).send({ adm_usuario_rol });
        })
        .catch(err => {
            res.status(500).send({ nessage: 'Ocurrio un error al crear adm usuario rol', err })
        });
}
// actualizar usuario
function update(req, res) {
    var id_adm_usuario_rol = req.params.id_adm_usuario_rol;
    var body = req.body;
    adm_usuario_roles.findByPk(id_adm_usuario_rol)
        .then(adm_usuario_rol => {
            adm_usuario_rol.update(body)
                .then(() => {
                    res.status(200).send({ adm_usuario_rol });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el adm usuario rol', err });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el usuario' });
        });
}
function getByUsuario(req, res) {
    var id = req.params.id_usuario;
    adm_usuario_roles.findAll({
        where: {
            id_usuario: id,
            estado: true
        },
        include: [
            { model: adm_roles },
            { model: usuarios }
        ]
    })
        .then(adm_usuario_roles => {
            res.status(200).send({ adm_usuario_roles });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios', err });
        });
}
function getByRolesIdUsuario(req, res) {
    var id = req.params.id_usuario;
    adm_usuario_roles.findAll({
        where: {
            id_usuario: id
        },
        include: [
            {
                model: adm_roles,
                attributes: [
                    "id_rol",
                    "rol"
                ]
            }
        ]
    })
        .then(adm_usuario_roles => {
            res.status(200).send({ adm_usuario_roles });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios', err });
        });
}
function getRolByIdUsuarioIdRol(req, res) {
    var id = req.params.id_usuario;
    var idRol = req.params.id_rol;
    adm_usuario_roles.findOne({
        where: {
            id_usuario: id,
            id_rol: idRol
        },
        include: [
            {
                model: adm_roles,
                attributes: [
                    "id_rol",
                    "rol"
                ]
            }
        ]
    }).then(adm_usuario_role => {
        res.status(200).send({ adm_usuario_role });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios', err });
    });
}

module.exports = {
    create,
    update,
    getByUsuario,
    getByRolesIdUsuario,
    getRolByIdUsuarioIdRol
}