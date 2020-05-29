
const usuarios = require('../../models').adm_usuarios; // --> aqui esta password
const personas = require("../../models").personas;
const fotografias = require("../../models").fotografias;
const Sequelize = require('sequelize');
// const jwt = require('../../services/jwt');
const Op = Sequelize.Op;

module.exports = (app) => {
  app.get('/api/reset/:token', (req, res) => {
    usuarios.findOne({
      where: {
        resetPasswordToken: req.params.token,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
      include: [
        {
          model: personas, attributes:['paterno', 'materno', 'nombres', 'correo'],
          include : [
            { model: fotografias, attributes:['imagen'] }
          ]
        }
      ]
    }).then((usuario) => {
      if (usuario) {
        res.status(200).send({ usuario: usuario, message: 'Enlace de contraseña correcta' });
      } else {
        res.status(401).send({ message: 'El enlace ya expiro o es incorrecto' });
      }
    }).catch(err => {
      console.log('Ocurrio un error al buscar el usuario', err);
    });
  });
};