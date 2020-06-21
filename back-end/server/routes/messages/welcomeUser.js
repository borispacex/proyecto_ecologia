// import crypto from 'crypto';
const personas = require('../../models').personas;
require('dotenv').config();
const nodemailer = require('nodemailer');
// const url = 'http://localhost:4200';
const url = 'https://umsa-ecologia.xyz';

module.exports = (app) => {
    app.get('/api/bienvenidoUser/:id_persona', (req, res) => {
        var id = req.params.id_persona;
        personas.findByPk(id)
            .then(persona => {
                if (persona === null) {
                    res.status(403).send({ message: 'la persona no se encuentra en la base de datos' });
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
                        subject: 'Bienvenido al Instituto de Ecologia',
                        text:
                            'Bienvenido ' + `${persona.nombres}` + ' ' + `${persona.paterno}` + ' ' + `${persona.materno}` + '!\n\n'
                            + 'Gracias por unirte al equipo de usuarios del instituto de Ecologia. No es necesario que hagas nada al recibir este correo, simplemente queriamos enviarte un saludo y decirte que recibiras novedades en este correo.\n\n'
                            + 'Te recomendamos cambiar tu contraseña para mayor seguridad.\n\n'
                            + 'Ingresa a este enlace para acceder al sistema: \n'
                            + `${url}\n\n`
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
    });
};