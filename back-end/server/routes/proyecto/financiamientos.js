const financiamientosController = require('../../controllers').financiamientos;  
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/financiamiento', financiamientosController.create);
    app.put('/api/financiamiento/:id_financiamiento', financiamientosController.update);
    app.get('/api/financiamientos', financiamientosController.getAll);
    app.get('/api/financiamientos/:id_proyecto', financiamientosController.getAllByIdProyecto);

    app.get('/api/financiamiento/:id_financiamiento', financiamientosController.getById);
    app.delete('/api/financiamiento/:id_financiamiento', financiamientosController.deleteFinanciamiento)
    app.delete('/api/financiamientos/:id_proyecto', financiamientosController.deleteFinanciamientosByIdProyecto)
}