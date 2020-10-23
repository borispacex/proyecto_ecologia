const peticionesController = require('../../controllers').peticiones;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/peticion', peticionesController.create);
    app.put('/api/peticion/:id_peticion', peticionesController.update);
    app.get('/api/peticiones', peticionesController.getAll);
    app.get('/api/peticionesByEstado/:estado', peticionesController.getAllByEstado);
    app.get('/api/peticiones-proy/:id_proyecto', peticionesController.getAllByIdProyecto);
    app.get('/api/peticiones-proy-inv/:id_proyecto/:id_investigador', peticionesController.getAllByIdProyectoAndIdInvestigador);
    app.get('/api/peticiones-dir/:id_investigador', peticionesController.getAllByIdInvestigador);
    
    app.get('/api/peticion/:id_peticion', peticionesController.getById);
    app.get('/api/countPeticionesByIdProyecto/:id_proyecto', peticionesController.countByIdProyecto);

    app.get('/api/peticionesByIdInvestigadorAndEstado/:id_investigador/:estado', peticionesController.getAllByIdInvestigadorAndEstado);
    app.get('/api/peticionesByIdProyectoAndEstado/:id_proyecto/:estado', peticionesController.getAllByIdProyectoAndEstado);
    app.get('/api/countPeticionesByIdProyectoAndEstado/:id_proyecto/:estado', peticionesController.countByIdProyectoAndEstado);
}