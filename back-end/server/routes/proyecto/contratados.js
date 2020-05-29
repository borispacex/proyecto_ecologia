const contratadosController = require('../../controllers').contratados;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos' }); // '../../../server/uploads/archivos'

// configuracion el express
module.exports = (app) => {
    app.post('/api/contratado', contratadosController.create);
    app.put('/api/contratado/:id_contratado', contratadosController.update);
    app.get('/api/contratados', contratadosController.getAll);
    app.get('/api/contratados/:id_proyecto', contratadosController.getAllByIdProyecto);

    app.post('/api/upload-contratado/:id_contratado', md_upload, contratadosController.uploadArchivo);
    app.get('/api/get-archivo/:archivo', contratadosController.getArchivo);
    app.get('/:archivo', contratadosController.getArchivo);
    app.get('/api/contratado/:id_contratado', contratadosController.getById);
}