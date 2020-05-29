const eventosController = require('../../controllers').eventos;  

// configuracion el express
module.exports = (app) => {
    app.post('/api/evento', eventosController.create);
    app.put('/api/evento/:id_evento', eventosController.update);
    app.get('/api/eventos', eventosController.getAll);
    app.get('/api/eventos/:id_proyecto', eventosController.getAllByIdProyecto);

    app.get('/api/evento/:id_evento', eventosController.getById);
}