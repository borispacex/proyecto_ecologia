const permiso_archivosController = require('../../controllers').permiso_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/permisos' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/permiso_archivo', permiso_archivosController.create);
    app.put('/api/permiso_archivo/:id_permiso_archivo', permiso_archivosController.update);
    app.get('/api/permiso_archivos', permiso_archivosController.getAll);
    app.get('/api/permiso_archivos/:id_proyecto', permiso_archivosController.getAllByIdProyecto);

    app.post('/api/upload-permiso-archivo/:id_permiso_archivo', md_upload, permiso_archivosController.uploadArchivo);
    app.get('/permisos/:archivo', permiso_archivosController.getArchivo);
    app.get('/api/permiso_archivo/:id_permiso_archivo', permiso_archivosController.getById);
    app.get('/api/countPermisoArchivosByIdProyecto/:id_proyecto', permiso_archivosController.countByIdProyecto);

    app.get('/api/permiso_archivosByEstado/:estado', permiso_archivosController.getAllByEstado);
    app.get('/api/permiso_archivosByIdProyectoAndEstado/:id_proyecto/:estado', permiso_archivosController.getAllByIdProyectoAndEstado);
    app.get('/api/countPermisoArchivosByIdProyectoAndEstado/:id_proyecto/:estado', permiso_archivosController.countByIdProyectoAndEstado);

}