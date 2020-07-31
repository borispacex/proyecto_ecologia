const publi_archivosController = require('../../controllers').publi_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/publi_archivo', publi_archivosController.create);
    app.put('/api/publi_archivo/:id_publi_archivo', publi_archivosController.update);
    app.get('/api/publi_archivos', publi_archivosController.getAll);
    app.get('/api/publi_archivos/:id_publicacion', publi_archivosController.getAllByIdPublicacion);

    app.post('/api/upload-publi-archivo/:id_publi_archivo', md_upload, publi_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', publi_archivosController.getArchivo);
    app.get('/:archivo', publi_archivosController.getArchivo);
    app.get('/api/publi_archivo/:id_publi_archivo', publi_archivosController.getById);
    app.get('/api/countPubliArchivosByIdPublicacion/:id_publicacion', publi_archivosController.countByIdPublicacion);
}