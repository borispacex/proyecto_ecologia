const personasController = require('../controllers').personas;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/profiles' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/persona', md_auth.auth, personasController.create);
    app.put('/api/persona/:id_persona', md_auth.auth, personasController.update);

    app.get('/api/personas', md_auth.auth, personasController.getAll);
    // app.get('/api/personas', personasController.getAll);
    app.get('/api/persona/:id_persona', md_auth.auth, personasController.getById);

    app.post('/api/upload-persona-archivo/:id_persona', md_upload, personasController.uploadArchivo);
    app.get('/profiles/:archivo', personasController.getArchivo);


}