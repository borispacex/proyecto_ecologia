const exposicionesController = require('../../controllers').exposiciones;  

// configuracion el express
module.exports = (app) => {
    app.post('/api/exposicion', exposicionesController.create);
    app.put('/api/exposicion/:id_exposicion', exposicionesController.update);
    app.get('/api/exposiciones', exposicionesController.getAll);
    app.get('/api/exposiciones/:id_proyecto', exposicionesController.getAllByIdProyecto);

    app.get('/api/exposicion/:id_exposicion', exposicionesController.getById);
}