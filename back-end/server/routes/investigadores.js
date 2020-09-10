const investigadoresController = require('../controllers').investigadores;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/investigador', md_auth.auth, investigadoresController.create);
    app.put('/api/investigador/:id_investigador', md_auth.auth, investigadoresController.update);
    app.get('/api/investigadores', investigadoresController.getAll);
    app.get('/api/investigadoresActivos', investigadoresController.getAllActivos);
    app.get('/api/investigadoresByIdInvTipo/:id_inv_tipo', md_auth.auth, investigadoresController.getAllByIdInvTipo);
    app.get('/api/investigador/:id_investigador', md_auth.auth, investigadoresController.getById);
    app.get('/api/investigadorByIdPersona/:id_persona', md_auth.auth, investigadoresController.getByIdPersona);
    app.get('/api/investigadorByIdPersonaAndidInvTipo/:id_persona/:id_inv_tipo', md_auth.auth, investigadoresController.getByIdPersonaAndIdInvTipo);
}