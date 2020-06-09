const expositoresController = require('../../controllers').expositores;  

// configuracion el express
module.exports = (app) => {
    app.post('/api/expositor', expositoresController.create);
    app.put('/api/expositor/:id_expositor', expositoresController.update);
    app.get('/api/expositores', expositoresController.getAll);
    app.get('/api/expositores/:id_curso', expositoresController.getAllByIdCurso);

    app.get('/api/expositor/:id_expositor', expositoresController.getById);
}