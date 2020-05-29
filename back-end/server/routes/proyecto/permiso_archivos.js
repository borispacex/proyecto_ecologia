const permiso_archivosController = require('../../controllers').permiso_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/permiso_archivo', permiso_archivosController.create);
    app.put('/api/permiso_archivo/:id_permiso_archivo', permiso_archivosController.update);
    app.get('/api/permiso_archivos', permiso_archivosController.getAll);
    app.get('/api/permiso_archivos/:id_proyecto', permiso_archivosController.getAllByIdProyecto);

    app.post('/api/upload-permiso-archivo/:id_permiso_archivo', md_upload, permiso_archivosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', permiso_archivosController.getArchivo);
    app.get('/:archivo', permiso_archivosController.getArchivo);
    app.get('/api/permiso_archivo/:id_permiso_archivo', permiso_archivosController.getById);
}