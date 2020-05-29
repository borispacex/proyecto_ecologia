const adm_rolesController = require('../controllers').usuarios;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/rol', adm_rolesController.create);
    app.put('/api/rol/:id_rol', adm_rolesController.update);
}