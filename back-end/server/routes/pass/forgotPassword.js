// import crypto from 'crypto';
const crypto = require('crypto');
const usuarios = require('../../models').adm_usuarios; // --> aqui esta password
const personas = require('../../models').personas;    // --> aqui esta email: correo
require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = (app) => {
  app.post('/api/forgotPassword', (req, res) => {
    if (req.body.correo === '') {
      res.status(400).send({ message: 'correo electronico requerido' });
    }
    personas.findOne({
      where: {
        correo: req.body.correo
      },
    }).then((persona) => {
      if (persona === null) {
        res.status(403).send({ message: 'correo electronico no se encuentra en la base de datos' });
      } else {
        usuarios.findOne({
          where: {
            id_persona: persona.id_persona
          }
        }).then((usuario) => {
          const token = crypto.randomBytes(20).toString('hex');
          usuario.update({
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 3600000, // quitar un 0
          });

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
            subject: 'Enlace para restablecer contraseña',
            text:
              'Está recibiendo esto porque usted (u otra persona) ha solicitado restablecer la contraseña de su cuenta.\n\n'
              + 'Haga clic en el siguiente enlace o péguelo en su navegador para completar el proceso dentro de una hora de haberlo recibido.:\n\n'
              + `http://localhost:4200/update-password/${token}\n\n`
              + 'Si no solicitó esto, ignore este correo electrónico y su contraseña permanecerá sin cambios.\n'
          };
          console.log('correo enviado');
          console.log('....', mailOptions);
          console.log('transssssss', transporter);

          transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
              console.error('Hubo un error: ', err);
            } else {
              console.log('Correo electronico de recuperacion enviado');
              res.status(200).send({ message: 'correo electrónico de recuperación enviado', response });
            }
          });
        });
      }
    });
  });
};