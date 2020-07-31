const expo_archivosController = require('../../controllers').expo_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/expo_archivo', expo_archivosController.create);
    app.put('/api/expo_archivo/:id_expo_archivo', expo_archivosController.update);
    app.get('/api/expo_archivos', expo_archivosController.getAll);
    app.get('/api/expo_archivos/:id_exposicion', expo_archivosController.getAllByIdExposicion);

    app.post('/api/upload-expo-archivo/:id_expo_archivo', md_upload, expo_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', expo_archivosController.getArchivo);
    app.get('/:archivo', expo_archivosController.getArchivo);
    app.get('/api/expo_archivo/:id_expo_archivo', expo_archivosController.getById);
    app.get('/api/countExpoArchivosByIdExposicion/:id_exposicion', expo_archivosController.countByIdExposicion);

}