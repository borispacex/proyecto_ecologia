const adm_rolesController = require('../controllers').usuarios;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/rol', md_auth.auth, adm_rolesController.create);
    app.put('/api/rol/:id_rol', md_auth.auth, adm_rolesController.update);
}