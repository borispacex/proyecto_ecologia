const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//CREATE EXPRESS APP
const app = express();

// middlewares
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// cors permite el uso de servidores de diferentes orígenes solo para desarrollo
app.use(cors());
// app.use(express.static(__dirname + '/dist/front-end'));

// cabeceras
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
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

require('./server/routes/proyecto/expositores')(app);
require('./server/routes/proyecto/unidades')(app);

// mensajes
require('./server/routes/messages/welcomeUser')(app);
require('./server/routes/messages/createProject')(app);

// publicaciones
require('./server/routes/proyecto/publicaciones')(app);
require('./server/routes/proyecto/comentarios')(app);
require('./server/routes/proyecto/autores')(app);
require('./server/routes/proyecto/publi_archivos')(app);

require('./server/routes/proyecto/seguimientos')(app);
require('./server/routes/proyecto/segui_archivos')(app);
require('./server/routes/proyecto/peticiones')(app);
require('./server/routes/proyecto/peti_archivos')(app);

app.get('*', (req, res) => {
    res.status(200).send({ message: 'Bienvenido al servidor NODEJS' });
})

// exportamos app
module.exports = app;
