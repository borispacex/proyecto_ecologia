const peticionesController = require('../../controllers').peticiones;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/peticion', peticionesController.create);
    app.put('/api/peticion/:id_peticion', peticionesController.update);
    app.get('/api/peticiones', peticionesController.getAll);
    app.get('/api/peticionesByEstado/:estado', peticionesController.getAllByEstado);
    app.get('/api/peticiones-proy/:id_proyecto', peticionesController.getAllByIdProyecto);
    app.get('/api/peticiones-dir/:id_investigador', peticionesController.getAllByIdInvestigador);
    
    app.get('/api/peticion/:id_peticion', peticionesController.getById);
    app.get('/api/countPeticionesByIdProyecto/:id_proyecto', peticionesController.countByIdProyecto);
}