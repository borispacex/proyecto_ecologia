const contratadosController = require('../../controllers').contratados;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/contratados' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/contratado', contratadosController.create);
    app.put('/api/contratado/:id_contratado', contratadosController.update);
    app.get('/api/contratados', contratadosController.getAll);
    app.get('/api/contratados/:id_proyecto', contratadosController.getAllByIdProyecto);
    
    app.post('/api/upload-contratado/:id_contratado', md_upload, contratadosController.uploadArchivo);
    app.get('/contratados/:archivo', contratadosController.getArchivo);
    app.get('/api/contratado/:id_contratado', contratadosController.getById);
    app.get('/api/countContratadosByIdProyecto/:id_proyecto', contratadosController.countByIdProyecto);

    app.get('/api/contratadosByEstado/:estado', contratadosController.getAllByEstado);
    app.get('/api/contratadosByIdProyectoAndEstado/:id_proyecto/:estado', contratadosController.getAllByIdProyectoAndEstado);
    app.get('/api/countContratadosByIdProyectoAndEstado/:id_proyecto/:estado', contratadosController.countByIdProyectoAndEstado);
}