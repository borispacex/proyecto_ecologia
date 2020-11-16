const inv_tiposController = require('../controllers').inv_tipos;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/inv_tipo', md_auth.auth, inv_tiposController.create);
    app.put('/api/inv_tipo/:id_inv_tipo', md_auth.auth, inv_tiposController.update);
    app.get('/api/inv_tipos', md_auth.auth, inv_tiposController.getAll);
    app.get('/api/inv_tipo/:id_inv_tipo', md_auth.auth, inv_tiposController.getById);

}