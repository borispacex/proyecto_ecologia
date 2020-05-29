
// const bcrypt = require("bcrypt");
const Sequelize = require('sequelize');
const usuarios = require('../../models').adm_usuarios; // --> aqui esta password
const Op = Sequelize.Op;

module.exports = app => {
  app.put('/api/updatePasswordViaEmail', (req, res) => {
    usuarios.findOne({
      where: {
        id_usuario: req.body.id_usuario,        // usuario es recibido y buscamos dentro el id_usuario
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    }).then(usuario => {
      if (usuario == null) {
        res.status(403).send({ message: 'El enlace de restablecimiento de contraseña no es válido o ha expirado' });
      } else if (usuario != null) {
            usuario.update({
              password: req.body.password,
              resetPasswordToken: null,
              resetPasswordExpires: null,
            }).then(() => {
              res.status(200).send({ usuario });
            })
            .catch(err => {
                res.status(500).send({ message: 'Ocurrio un error al actualizar el usuario', err });
            });
      } else {
        res.status(401).send({ message: 'Usuario no existe en la base de datos' });
      }
    });
  });
};