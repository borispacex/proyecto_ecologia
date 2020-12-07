// import crypto from 'crypto';
const personas = require('../../models').personas;
const proyectos = require('../../models').proyectos;
const seguimientos = require('../../models').seguimientos;
require('dotenv').config();
const nodemailer = require('nodemailer');
const url = require('../../global');

module.exports = (app) => {
    app.get('/api/realizarSeguimiento/:id_persona/:id_proyecto/:id_seguimiento', (req, res) => {
        var id = req.params.id_persona;
        var idP = req.params.id_proyecto;
        var idS = req.params.id_seguimiento;
        personas.findByPk(id)
            .then(persona => {
                if (persona === null) {
                    res.status(403).send({ message: 'la persona no se encuentra en la base de datos' });
                } else {
                    proyectos.findByPk(idP)
                    .then(proyecto => {
                        if (proyecto === null) {
                            res.status(403).send({ message: 'El proyecto no se encuentra en la base de datos' });
                        } else {
                            seguimientos.findByPk(idS)
                            .then(seguimiento => {
                                if (seguimiento === null) {
                                    res.status(403).send({ message: 'El seguimiento no se encuentra en la base de datos' });
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
                                        subject: 'Seguimiento Instituto de Ecologia',
                                        text:
                                            'Hola, ' + `${persona.nombres}` + ' ' + `${persona.paterno}` + ' ' + `${persona.materno}` + '!\n'
                                            + `Dirección realizó el siguiente seguimiento del proyecto de ${proyecto.titulo}.\n\n`
                                            + `Seguimiento de ${seguimiento.tipo}.\n`
                                            + `Revision: ${seguimiento.revision}.\n`
                                            + `Observaciones: ${seguimiento.observaciones}.\n\n`
                                            + 'Mas información debe acceder al sistema: \n'
                                            + `${url}\n\n`
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
                            })
                        }
                    });
                }
            });
    });
};