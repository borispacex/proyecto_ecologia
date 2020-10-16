const nota_archivosController = require('../../controllers').nota_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/notas_prensa' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/nota_archivo', nota_archivosController.create);
    app.put('/api/nota_archivo/:id_nota_archivo', nota_archivosController.update);
    app.get('/api/nota_archivos', nota_archivosController.getAll);
    app.get('/api/nota_archivos/:id_nota_prensa', nota_archivosController.getAllByIdNotaPrensa);

    app.post('/api/upload-nota-archivo/:id_nota_archivo', md_upload, nota_archivosController.uploadArchivo);
    app.get('/notas_prensa/:archivo', nota_archivosController.getArchivo);
    app.get('/api/nota_archivo/:id_nota_archivo', nota_archivosController.getById);
    app.get('/api/countNotaArchivosByIdNotaPrensa/:id_nota_prensa', nota_archivosController.countByIdNotaPrensa);

}