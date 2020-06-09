const unidadesController = require('../../controllers').unidades;  

// configuracion el express
module.exports = (app) => {
    app.post('/api/unidad', unidadesController.create);
    app.put('/api/unidad/:id_unidad', unidadesController.update);
    app.get('/api/unidades', unidadesController.getAll);
    app.get('/api/unidades/:id_basica_tecnica', unidadesController.getAllByIdBasicaTecnica);

    app.get('/api/unidad/:id_unidad', unidadesController.getById);
}