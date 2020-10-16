// import crypto from 'crypto';
const personas = require('../../models').personas;
const proyectos = require('../../models').proyectos;
require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = (app) => {
  app.get('/api/proyectoCreado/:id_persona/:id_proyecto', (req, res) => {
    var id = req.params.id_persona;
    personas.findByPk(id)
      .then(persona => {
        if (persona === null) {
          res.status(403).send({ message: 'La persona no se encuentra en la base de datos' });
        } else {
          var id_p = req.params.id_proyecto;
          proyectos.findByPk(id_p)
            .then(proyecto => {
              if (proyecto === null) {
                res.status(403).send({ message: 'El proyecto no se encuentra en la base de datos' });
              } else {
                const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'institutoecologiaumsa@gmail.com',   // `${process.env.EMAIL_ADDRESS}`
                    pass: '1234umsa'  // `${process.env.EMAIL_PASSWORD}`
                  },
                });
                const mailOptions = {
                  from: 'institutoecologiaumsa@gmail.com',
                  to: `${persona.correo}`,
                  subject: 'proyecto de investigacion',
                  text:
                    'Hola, ' + `${persona.nombres}` + ' ' + `${persona.paterno}` + ' ' + `${persona.materno}` + '!\n\n'
                    + 'Usted acaba de unirse al proyecto "' + `${proyecto.titulo}` + '" como COORDINADOR, recibira informacion acerca de los cambios que halla en ella.\n\n'
                    + 'Nos vemos pronto!\n\n'
                    + 'Instituto de Ecologia, Proyectos de investigacion.\n'
                };
                transporter.sendMail(mailOptions, (err, response) => {
                  if (err) {
                    console.error('Hubo un error: ', err);
                  } else {
                    console.log('Correo electronico enviado');
                    res.status(200).send({ message: 'correo electrónico enviado', response });
                  }
                });
              }
            });
        }
      });
  });
};