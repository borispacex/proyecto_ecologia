const conv_archivosController = require('../../controllers').conv_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/conv_archivo', conv_archivosController.create);
    app.put('/api/conv_archivo/:id_conv_archivo', conv_archivosController.update);
    app.get('/api/conv_archivos', conv_archivosController.getAll);
    app.get('/api/conv_archivos/:id_convenio', conv_archivosController.getAllByIdConvenio);

    app.post('/api/upload-conv-archivo/:id_conv_archivo', md_upload, conv_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', conv_archivosController.getArchivo);
    app.get('/:archivo', conv_archivosController.getArchivo);
    app.get('/api/conv_archivo/:id_conv_archivo', conv_archivosController.getById);
}