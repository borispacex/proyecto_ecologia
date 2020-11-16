const cursosController = require('../../controllers').cursos;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/curso', cursosController.create);
    app.put('/api/curso/:id_curso', cursosController.update);
    app.get('/api/cursos', cursosController.getAll);
    app.get('/api/cursos/:id_proyecto', cursosController.getAllByIdProyecto);
    
    app.get('/api/curso/:id_curso', cursosController.getById);
    app.get('/api/countCursosByIdProyecto/:id_proyecto', cursosController.countByIdProyecto);

    app.get('/api/cursosByEstado/:estado', cursosController.getAllByEstado);
    app.get('/api/cursosByIdProyectoAndEstado/:id_proyecto/:estado', cursosController.getAllByIdProyectoAndEstado);
    app.get('/api/countCursosByIdProyectoAndEstado/:id_proyecto/:estado', cursosController.countByIdProyectoAndEstado);
}