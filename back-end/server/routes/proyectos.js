const proyectosController = require('../controllers').proyectos;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/proyecto', md_auth.auth, proyectosController.create);
    app.put('/api/proyecto/:id_proyecto', md_auth.auth, proyectosController.update);
    app.get('/api/proyectos', md_auth.auth, proyectosController.getAll);
    app.get('/api/proyectosByEstado/:estado', md_auth.auth, proyectosController.getAllByEstado);
    app.get('/api/proyectosByIdPersonaAdm/:id_persona_adm', md_auth.auth, proyectosController.getAllByIdPersonaAdm);
    app.get('/api/proyectosByIdCoordinador/:id_coordinador', md_auth.auth, proyectosController.getAllByIdCoordinador);
    app.get('/api/proyecto/:id_proyecto', md_auth.auth, proyectosController.getById);

    app.get('/api/proyectosByIdCoordinadorAndStatus/:id_coordinador/:estado', md_auth.auth, proyectosController.getAllByIdCoordinadorAndStatus);
    app.get('/api/proyectoByIdAndStatus/:id_proyecto/:estado', md_auth.auth, proyectosController.getByIdAndStatus);
}