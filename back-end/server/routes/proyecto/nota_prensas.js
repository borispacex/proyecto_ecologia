const nota_prensasController = require('../../controllers').nota_prensas;
const md_auth = require('../../authenticated/authenticated');


// configuracion el express
module.exports = (app) => {
    app.post('/api/nota_prensa', nota_prensasController.create);
    app.put('/api/nota_prensa/:id_nota_prensa', nota_prensasController.update);
    app.get('/api/nota_prensas', nota_prensasController.getAll);
    app.get('/api/nota_prensas/:id_proyecto', nota_prensasController.getAllByIdProyecto);
    
    app.get('/api/nota_prensa/:id_nota_prensa', nota_prensasController.getById);
    app.get('/api/countNotaPrensasByIdProyecto/:id_proyecto', nota_prensasController.countByIdProyecto);

    app.get('/api/nota_prensasByEstado/:estado', nota_prensasController.getAllByEstado);
    app.get('/api/nota_prensasByIdProyectoAndEstado/:id_proyecto/:estado', nota_prensasController.getAllByIdProyectoAndEstado);
    app.get('/api/countNotaPrensasByIdProyectoAndEstado/:id_proyecto/:estado', nota_prensasController.countByIdProyectoAndEstado);
}