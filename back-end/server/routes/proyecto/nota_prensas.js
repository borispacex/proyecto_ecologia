const nota_prensasController = require('../../controllers').nota_prensas;  

// configuracion el express
module.exports = (app) => {
    app.post('/api/nota_prensa', nota_prensasController.create);
    app.put('/api/nota_prensa/:id_nota_prensa', nota_prensasController.update);
    app.get('/api/nota_prensas', nota_prensasController.getAll);
    app.get('/api/nota_prensas/:id_proyecto', nota_prensasController.getAllByIdProyecto);

    app.get('/api/nota_prensa/:id_nota_prensa', nota_prensasController.getById);
}