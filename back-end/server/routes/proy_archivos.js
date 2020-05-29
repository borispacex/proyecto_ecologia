const proy_archivosController = require('../controllers').proy_archivos;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/proy_archivo', md_auth.auth, proy_archivosController.create);
    app.put('/api/proy_archivo/:id_proy_archivo', md_auth.auth, proy_archivosController.update);
    app.get('/api/proy_archivos', md_auth.auth, proy_archivosController.getAll);
    app.get('/api/proy_archivosByIdProyecto/:id_proyecto', md_auth.auth, proy_archivosController.getAllByIdProyecto);

    app.get('/api/proy_archivosByIdTipo/:id_proyecto/:id_tipo', proy_archivosController.getProy_archivosByIdTipo);

    app.post('/api/upload-proyecto-archivo/:id_proy_archivo', md_upload, proy_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', proy_archivosController.getArchivo);
    app.get('/:archivo', proy_archivosController.getArchivo);
    app.get('/api/proy_archivo/:id_proy_archivo', md_auth.auth, proy_archivosController.getById);
}