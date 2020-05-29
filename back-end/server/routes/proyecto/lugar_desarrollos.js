const lugar_desarrollosController = require('../../controllers').lugar_desarrollos;  

// configuracion el express
module.exports = (app) => {
    app.post('/api/lugar_desarrollo', lugar_desarrollosController.create);
    app.put('/api/lugar_desarrollo/:id_lugar_desarrollo', lugar_desarrollosController.update);
    app.get('/api/lugar_desarrollos', lugar_desarrollosController.getAll);
    app.get('/api/lugar_desarrollos/:id_proyecto', lugar_desarrollosController.getAllByIdProyecto);

    app.get('/api/lugar_desarrollo/:id_lugar_desarrollo', lugar_desarrollosController.getById);
}