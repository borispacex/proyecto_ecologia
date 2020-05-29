const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/dist/front-end'));

// cabeceras
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});



// RUTAS
require('./server/routes/usuarios')(app);
require('./server/routes/fotografias')(app);
require('./server/routes/personas')(app);
require('./server/routes/adm_roles')(app);
require('./server/routes/adm_usuario_roles')(app);

require('./server/routes/pass/forgotPassword')(app);
require('./server/routes/pass/resetPassword')(app);
require('./server/routes/pass/updatePasswordViaEmail')(app);

require('./server/routes/inv_tipos')(app);
require('./server/routes/investigadores')(app);
require('./server/routes/inv_proyectos')(app);
require('./server/routes/proy_archivos')(app);
require('./server/routes/proyectos')(app);

// proyecto
require('./server/routes/proyecto/permiso_archivos')(app);
require('./server/routes/proyecto/convenios')(app);
require('./server/routes/proyecto/contratados')(app);
require('./server/routes/proyecto/conv_archivos')(app);
require('./server/routes/proyecto/contra_archivos')(app);
require('./server/routes/proyecto/basica_tecnicas')(app);
require('./server/routes/proyecto/lugar_desarrollos')(app);
require('./server/routes/proyecto/cursos')(app);
require('./server/routes/proyecto/eventos')(app);
require('./server/routes/proyecto/nota_prensas')(app);
require('./server/routes/proyecto/exposiciones')(app);
require('./server/routes/proyecto/curso_archivos')(app);
require('./server/routes/proyecto/evento_archivos')(app);
require('./server/routes/proyecto/nota_archivos')(app);
require('./server/routes/proyecto/expo_archivos')(app);

// mensajes
require('./server/routes/messages/welcomeUser')(app);
require('./server/routes/messages/createProject')(app);

app.get('*', (req, res) => {
    res.status(200).send({ message: 'Bienvenido al servidor NODEJS' });
})

// exportamos app
module.exports = app;
