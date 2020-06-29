const cursosController = require('../../controllers').cursos;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/curso', cursosController.create);
    app.put('/api/curso/:id_curso', cursosController.update);
    app.get('/api/cursos', cursosController.getAll);
    app.get('/api/cursos/:id_proyecto', cursosController.getAllByIdProyecto);

    app.get('/api/curso/:id_curso', cursosController.getById);
}