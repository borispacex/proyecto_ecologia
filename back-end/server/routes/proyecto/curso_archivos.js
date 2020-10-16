const curso_archivosController = require('../../controllers').curso_archivos;  
const md_auth = require('../../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/archivos/cursos' });

// configuracion el express
module.exports = (app) => {
    app.post('/api/curso_archivo', curso_archivosController.create);
    app.put('/api/curso_archivo/:id_curso_archivo', curso_archivosController.update);
    app.get('/api/curso_archivos', curso_archivosController.getAll);
    app.get('/api/curso_archivos/:id_curso', curso_archivosController.getAllByIdCurso);

    app.post('/api/upload-curso-archivo/:id_curso_archivo', md_upload, curso_archivosController.uploadArchivo);
    app.get('/cursos/:archivo', curso_archivosController.getArchivo);
    app.get('/api/curso_archivo/:id_curso_archivo', curso_archivosController.getById);
    app.get('/api/countCursoArchivosByIdCurso/:id_curso', curso_archivosController.countByIdCurso);
}