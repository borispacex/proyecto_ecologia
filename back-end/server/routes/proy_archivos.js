const proy_archivosController = require('../controllers').proy_archivos;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/proyectos' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/proy_archivo', proy_archivosController.create);
    app.put('/api/proy_archivo/:id_proy_archivo', proy_archivosController.update);
    app.get('/api/proy_archivos', proy_archivosController.getAll);
    app.get('/api/proy_archivosByIdProyecto/:id_proyecto', proy_archivosController.getAllByIdProyecto);

    app.get('/api/proy_archivosByIdTipo/:id_proyecto/:id_tipo', proy_archivosController.getProy_archivosByIdTipo);
    app.post('/api/upload-proyecto-archivo/:id_proy_archivo', md_upload, proy_archivosController.uploadArchivo);
    app.get('/proyectos/:archivo', proy_archivosController.getArchivo);
    app.get('/api/proy_archivo/:id_proy_archivo', proy_archivosController.getById);
    app.get('/api/countProyArchivosByIdProyecto/:id_proyecto', proy_archivosController.countByIdProyecto);

    app.get('/api/proy_archivosByIdProyectoAndEstado/:id_proyecto/:estado', proy_archivosController.getAllByIdProyectoAndEstado);
    app.get('/api/proy_archivosByEstado/:estado', proy_archivosController.getAllByEstado);
    app.get('/api/countProyArchivosByIdProyectoAndEstado/:id_proyecto/:estado', proy_archivosController.countByIdProyectoAndEstado);

}