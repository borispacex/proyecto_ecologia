const segui_archivosController = require('../../controllers').segui_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/segui_archivo', segui_archivosController.create);
    app.put('/api/segui_archivo/:id_segui_archivo', segui_archivosController.update);
    app.get('/api/segui_archivos', segui_archivosController.getAll);
    app.get('/api/segui_archivos-true', segui_archivosController.getAllTrue);
    app.get('/api/segui_archivos/:id_seguimiento', segui_archivosController.getAllByIdSeguimiento);

    app.post('/api/upload-segui-archivo/:id_segui_archivo', md_upload, segui_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', segui_archivosController.getArchivo);
    app.get('/:archivo', segui_archivosController.getArchivo);
    app.get('/api/segui_archivo/:id_segui_archivo', segui_archivosController.getById);
    app.get('/api/countSeguiArchivosByIdseguimiento/:id_seguimiento', segui_archivosController.countByIdSeguimiento);
}