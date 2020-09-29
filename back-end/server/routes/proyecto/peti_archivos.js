const peti_archivosController = require('../../controllers').peti_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/peticiones' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/peti_archivo', peti_archivosController.create);
    app.put('/api/peti_archivo/:id_peti_archivo', peti_archivosController.update);
    app.get('/api/peti_archivos', peti_archivosController.getAll);
    app.get('/api/peti_archivosByEstado', peti_archivosController.getAllByEstado);
    app.get('/api/peti_archivos/:id_peticion', peti_archivosController.getAllByIdPeticion);

    app.post('/api/upload-peti-archivo/:id_peti_archivo', md_upload, peti_archivosController.uploadArchivo);
    app.get('/peticiones/:archivo', peti_archivosController.getArchivo);
    app.get('/api/peti_archivo/:id_peti_archivo', peti_archivosController.getById);
    app.get('/api/countSeguiArchivosByIdPeticion/:id_peticion', peti_archivosController.countByIdPeticion);
}