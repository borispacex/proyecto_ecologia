const contra_archivosController = require('../../controllers').contra_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/contra_archivo', contra_archivosController.create);
    app.put('/api/contra_archivo/:id_contra_archivo', contra_archivosController.update);
    app.get('/api/contra_archivos', contra_archivosController.getAll);
    app.get('/api/contra_archivos/:id_contratado', contra_archivosController.getAllByIdContratado);

    app.post('/api/upload-contra-archivo/:id_contra_archivo', md_upload, contra_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', contra_archivosController.getArchivo);
    app.get('/:archivo', contra_archivosController.getArchivo);
    app.get('/api/contra_archivo/:id_contra_archivo', contra_archivosController.getById);
}