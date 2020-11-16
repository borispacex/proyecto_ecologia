const personasController = require('../controllers').personas;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/persona', md_auth.auth, personasController.create);
    app.put('/api/persona/:id_persona', md_auth.auth, personasController.update);

    app.get('/api/personas', md_auth.auth, personasController.getAll);
    // app.get('/api/personas', personasController.getAll);
    app.get('/api/persona/:id_persona', md_auth.auth, personasController.getById);

}