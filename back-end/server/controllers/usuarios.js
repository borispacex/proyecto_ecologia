const usuarios = require('../models').adm_usuarios;
const personas = require("../models").personas;
const fotografias = require("../models").fotografias;

const adm_usuario_roles = require('../models').adm_usuario_roles;
const adm_roles = require("../models").adm_roles;

const investigadores = require('../models').investigaodres;

const jwt = require('../services/jwt');
// const bcrypt = require("bcrypt");

usuarios.belongsTo(personas, { foreignKey: "id_persona" });

// ---------------- METODOS ---------------
// crear nuevo usuario
function create(req, res) {
    var body = req.body;
    usuarios.create(body)
        .then(usuario => {
            res.status(200).send({ usuario });
        }).catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar usuario
function update(req, res) {
    var id_usuario = req.params.id_usuario;
    var body = req.body;
    usuarios.findByPk(id_usuario)
        .then(usuario => {
            usuario.update(body)
                .then(() => {
                    res.status(200).send({ usuario });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el usuario' });
                });
        }).catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el usuario' });
        });
}
// logearse
function login(req, res) {
    usuarios.findOne({
        where: {
            usuario: req.body.usuario
        },
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            }
        ]
    }).then(usuario => {
            if (usuario) {
                if (req.body.token) {
                    res.status(200).send({ token: jwt.createToken(usuario) });
                } else {
                    usuario.comparePassword(req.body.password, (err, isMatch) => {
                        if (isMatch && !err) {
                            res.status(200).send({ usuario: usuario });
                        } else {
                            res.status(401).send({ message: 'Acceso no autorizado' });
                        }
                    });
                }
            } else {
                res.status(401).send({ message: 'Usuario no existe' });
            }
        }).catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el usuario', err });
        });
}
// Listar todos los usuarios
function getAll(req, res) {
    adm_usuario_roles.findAll({
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    }).then(usuarios => {
        res.status(200).send({ usuarios });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
    });
}
// Listar usuarios administradores
function getAllAdministradores(req, res) {
    adm_usuario_roles.findAll({
        where: {
            id_rol: 1
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    })
        .then(usuarios => {
            res.status(200).send({ usuarios });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
        });
}
// Listar usuarios directores
function getAllDirectores(req, res) {
    adm_usuario_roles.findAll({
        where: {
            id_rol: 2
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    })
        .then(usuarios => {
            res.status(200).send({ usuarios });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
        });
}
// Listar usuarios investigadores
function getAllInvestigadores(req, res) {
    adm_usuario_roles.findAll({
        where: {
            id_rol: 3
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    })
        .then(usuarios => {
            res.status(200).send({ usuarios });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
        });
}
// Listar usuarios investigadores
function getAllInvestigadoresActivos(req, res) {
    adm_usuario_roles.findAll({
        where: {
            id_rol: 3,
            estado: true
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    })
        .then(usuarios => {
            res.status(200).send({ usuarios });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
        });
}
// Listar usuarios investigadores titular
function getAllInvestigadoresTitular(req, res) {
    adm_usuario_roles.findAll({
        where: {
            id_rol: 3
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ]
    }).then(usuarios => {
        res.status(200).send({ usuarios });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
    });
}
// Listar usuarios investigadores asociado con proyecto
function getAllInvestigadoresAsociadoProyecto(req, res) {
    adm_usuario_roles.findAll({
        where: {
            id_rol: 3        
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    }).then(usuarios => {
        res.status(200).send({ usuarios });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
    });
}
// Listar usuarios investigadores
function getAllInvestigadoresAsociadoInvitacion(req, res) {
    adm_usuario_roles.findAll({
        where: {
            id_rol: 3
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    }).then(usuarios => {
        res.status(200).send({ usuarios });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' }, err);
    });
}
// Listar usuarios by id_rol and estado
// id_rol: 1-Administrador, 2-Director, 3-Investigador
// estado: true, false
function getAllAdmUsuarioRolesByIdRolAndByEstado(req, res) {
    var idRol = req.params.id_rol;
    var status = req.params.estado;
    adm_usuario_roles.findAll({
        where: {
            id_rol: idRol,
            estado: status
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    }).then(usuarios => {
        res.status(200).send({ usuarios });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios por id_rol y estado' }, err);
    });
}
// Listar usuarios by id_rol and estado
// estado: true, false
function getAllAdmUsuarioRolesByEstado(req, res) {
    var status = req.params.estado;
    adm_usuario_roles.findAll({
        where: {
            estado: status
        },
        include: [
            { model: adm_roles },
            {
                model: usuarios,
                include: [
                    {
                        model: personas,
                        include: [
                            { model: fotografias }
                        ]
                    }
                ]
            }
        ],
    }).then(usuarios => {
        res.status(200).send({ usuarios });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios por id_rol y estado' }, err);
    });
}

// funcion para usuario por id
function getById(req, res) {
    var id = req.params.id_usuario;
    usuarios.findByPk(id, {
        include: [
            {
                model: personas,
                include: [
                    { model: fotografias }
                ]
            }
        ]
    }).then(usuario => {
        res.status(200).send({ usuario });
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar un usuario', err });
    })
}

// verificar
function verificar(req, res) {
    usuarios.findOne({
        where: {
            usuario: req.body.usuario
        }
    }).then(usuario => {
        if (usuario) {
            usuario.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    res.status(200).send({ respuesta: true});
                } else {
                    res.status(200).send({ respuesta: false});
                }
            });
        } else {
            res.status(401).send({ message: 'Usuario no existe' });
        }
    }).catch(err => {
        res.status(500).send({ message: 'Ocurrio un error al buscar el usuario', err });
    });
}

// EXPORTAMOS
module.exports = {
    create,
    update,
    login,
    getAll,
    getAllAdministradores,
    getAllDirectores,
    getAllInvestigadores,
    getAllInvestigadoresActivos,
    getAllInvestigadoresTitular,
    getAllInvestigadoresAsociadoProyecto,
    getAllInvestigadoresAsociadoInvitacion,
    getById,
    verificar,
    getAllAdmUsuarioRolesByEstado,
    getAllAdmUsuarioRolesByIdRolAndByEstado
}
