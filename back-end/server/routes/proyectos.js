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
    app.get('/api/getAllBetweenDatesIni/:fechaini/:fechafin', md_auth.auth, proyectosController.getAllBetweenDatesIni);
    app.get('/api/getAllBetweenDatesFin/:fechaini/:fechafin', md_auth.auth, proyectosController.getAllBetweenDatesFin);
    app.get('/api/getAllBetweenDatesIniAndStatus/:fechaini/:fechafin/:estado', md_auth.auth, proyectosController.getAllBetweenDatesIniAndStatus);
    app.get('/api/getAllBetweenDatesFinAndStatus/:fechaini/:fechafin/:estado', md_auth.auth, proyectosController.getAllBetweenDatesFinAndStatus);
    app.get('/api/getAllBetweenProccess/:procesoini/:procesofin', md_auth.auth, proyectosController.getAllBetweenProccess);
    app.get('/api/getAllBetweenProccessAndStatus/:procesoini/:procesofin/:estado', md_auth.auth, proyectosController.getAllBetweenProccessAndStatus);
    app.get('/api/getAllBetweenProccessAndBetweenDatesIni/:procesoini/:procesofin/:fechaini/:fechafin', md_auth.auth, proyectosController.getAllBetweenProccessAndBetweenDatesIni);
    app.get('/api/getAllBetweenProccessAndBetweenDatesFin/:procesoini/:procesofin/:fechaini/:fechafin', md_auth.auth, proyectosController.getAllBetweenProccessAndBetweenDatesFin);
    app.get('/api/getAllBetweenProccessBetweenDatesIniAndStatus/:procesoini/:procesofin/:fechaini/:fechafin/:estado', md_auth.auth, proyectosController.getAllBetweenProccessBetweenDatesIniAndStatus);
    app.get('/api/getAllBetweenProccessBetweenDatesFinAndStatus/:procesoini/:procesofin/:fechaini/:fechafin/:estado', md_auth.auth, proyectosController.getAllBetweenProccessBetweenDatesFinAndStatus);

}