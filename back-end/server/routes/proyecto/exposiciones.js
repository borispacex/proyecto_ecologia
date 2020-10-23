const exposicionesController = require('../../controllers').exposiciones;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/exposicion', exposicionesController.create);
    app.put('/api/exposicion/:id_exposicion', exposicionesController.update);
    app.get('/api/exposiciones', exposicionesController.getAll);
    app.get('/api/exposiciones/:id_proyecto', exposicionesController.getAllByIdProyecto);
    
    app.get('/api/exposicion/:id_exposicion', exposicionesController.getById);
    app.get('/api/countExposicionesByIdProyecto/:id_proyecto', exposicionesController.countByIdProyecto);

    app.get('/api/exposicionesByEstado/:estado', exposicionesController.getAllByEstado);
    app.get('/api/exposicionesByIdProyectoAndEstado/:id_proyecto/:estado', exposicionesController.getAllByIdProyectoAndEstado);
    app.get('/api/countExposicionesByIdProyectoAndEstado/:id_proyecto/:estado', exposicionesController.countByIdProyectoAndEstado);
}