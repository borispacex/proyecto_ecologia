const eventosController = require('../../controllers').eventos;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/evento', eventosController.create);
    app.put('/api/evento/:id_evento', eventosController.update);
    app.get('/api/eventos', eventosController.getAll);
    app.get('/api/eventos/:id_proyecto', eventosController.getAllByIdProyecto);
    
    app.get('/api/evento/:id_evento', eventosController.getById);
    app.get('/api/countEventosByIdProyecto/:id_proyecto', eventosController.countByIdProyecto);

    app.get('/api/eventosByEstado/:estado', eventosController.getAllByEstado);
    app.get('/api/eventosByIdProyectoAndEstado/:id_proyecto/:estado', eventosController.getAllByIdProyectoAndEstado);
    app.get('/api/countEventosByIdProyectoAndEstado/:id_proyecto/:estado', eventosController.countByIdProyectoAndEstado);
}