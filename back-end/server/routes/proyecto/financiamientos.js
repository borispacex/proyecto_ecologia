const financiamientosController = require('../../controllers').financiamientos;  
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/financiamiento', financiamientosController.create);
    app.put('/api/financiamiento/:id_financiamiento', financiamientosController.update);
    app.get('/api/financiamientos', financiamientosController.getAll);
    app.get('/api/financiamientos/:id_proyecto', financiamientosController.getAllByIdProyecto);

    app.get('/api/financiamiento/:id_financiamiento', financiamientosController.getById);
    app.delete('/api/financiamiento/:id_financiamiento', financiamientosController.deleteFinanciamiento);
    app.delete('/api/financiamientos/:id_proyecto', financiamientosController.deleteFinanciamientosByIdProyecto);

    app.get('/api/financiamientosByEstado/:estado', financiamientosController.getAllByEstado);
    app.get('/api/financiamientosByIdProyectoAndEstado/:id_proyecto/:estado', financiamientosController.getAllByIdProyectoAndEstado);
    app.get('/api/countFinanciamientosByIdProyecto/:id_proyecto', financiamientosController.countByIdProyecto);
    app.get('/api/countFinanciamientosByIdProyectoAndEstado/:id_proyecto/:estado', financiamientosController.countByIdProyectoAndEstado);
}