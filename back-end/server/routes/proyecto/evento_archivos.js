const evento_archivosController = require('../../controllers').evento_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/evento_archivo', evento_archivosController.create);
    app.put('/api/evento_archivo/:id_evento_archivo', evento_archivosController.update);
    app.get('/api/evento_archivos', evento_archivosController.getAll);
    app.get('/api/evento_archivos/:id_evento', evento_archivosController.getAllByIdEvento);

    app.post('/api/upload-evento-archivo/:id_evento_archivo', md_upload, evento_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', evento_archivosController.getArchivo);
    app.get('/:archivo', evento_archivosController.getArchivo);
    app.get('/api/evento_archivo/:id_evento_archivo', evento_archivosController.getById);
    app.get('/api/countEventoArchivosByIdEvento/:id_evento', evento_archivosController.countByIdEvento);

}