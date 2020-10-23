const expositoresController = require('../../controllers').expositores;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/expositor', expositoresController.create);
    app.put('/api/expositor/:id_expositor', expositoresController.update);
    app.get('/api/expositores', expositoresController.getAll);
    app.get('/api/expositores/:id_curso', expositoresController.getAllByIdCurso);

    app.get('/api/expositor/:id_expositor', expositoresController.getById);
    app.delete('/api/expositor/:id_expositor', expositoresController.deleteExpositor);
    app.delete('/api/expositores/:id_curso', expositoresController.deleteExpositoresByIdCurso);

    app.get('/api/expositoresByEstado/:estado', expositoresController.getAllByEstado);
    app.get('/api/expositoresByIdCursoAndEstado/:id_curso/:estado', expositoresController.getAllByIdCursoAndEstado);
    app.get('/api/countExpositoresByIdCurso/:id_curso', expositoresController.countByIdCurso);
    app.get('/api/countExpositoresByIdCursoAndEstado/:id_curso/:estado', expositoresController.countByIdCursoAndEstado);
}