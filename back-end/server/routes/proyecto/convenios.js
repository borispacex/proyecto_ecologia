const conveniosController = require('../../controllers').convenios;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/convenios' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/convenio', conveniosController.create);
    app.put('/api/convenio/:id_convenio', conveniosController.update);
    app.get('/api/convenios', conveniosController.getAll);
    app.get('/api/convenios/:id_proyecto', conveniosController.getAllByIdProyecto);
    
    app.post('/api/upload-convenio/:id_convenio', md_upload, conveniosController.uploadArchivo);
    app.get('/convenios/:archivo', conveniosController.getArchivo);
    app.get('/api/convenio/:id_convenio', conveniosController.getById);
    app.get('/api/countConveniosByIdProyecto/:id_proyecto', conveniosController.countByIdProyecto);

    app.get('/api/conveniosByEstado/:estado', conveniosController.getAllByEstado);
    app.get('/api/conveniosByIdProyectoAndEstado/:id_proyecto/:estado', conveniosController.getAllByIdProyectoAndEstado);
    app.get('/api/countConveniosByIdProyectoAndEstado/:id_proyecto/:estado', conveniosController.countByIdProyectoAndEstado);
}