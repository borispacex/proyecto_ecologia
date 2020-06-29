const basica_tecnicasController = require('../../controllers').basica_tecnicas;  
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/basica_tecnica', basica_tecnicasController.create);
    app.put('/api/basica_tecnica/:id_basica_tecnica', basica_tecnicasController.update);
    app.get('/api/basica_tecnicas', basica_tecnicasController.getAll);
    app.get('/api/basica_tecnicas/:id_proyecto', basica_tecnicasController.getAllByIdProyecto);

    app.get('/api/basica_tecnica/:id_basica_tecnica', basica_tecnicasController.getById);
}