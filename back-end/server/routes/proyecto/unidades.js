const unidadesController = require('../../controllers').unidades;  
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/unidad', unidadesController.create);
    app.put('/api/unidad/:id_unidad', unidadesController.update);
    app.get('/api/unidades', unidadesController.getAll);
    app.get('/api/unidades/:id_basica_tecnica', unidadesController.getAllByIdBasicaTecnica);

    app.get('/api/unidad/:id_unidad', unidadesController.getById);
    app.delete('/api/unidad/:id_unidad', unidadesController.deleteUnidad)
    app.delete('/api/unidades/:id_basica_tecnica', unidadesController.deleteUnidadByIdBasicaTecnica)
}