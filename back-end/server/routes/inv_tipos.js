const inv_tiposController = require('../controllers').inv_tipos;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/inv_tipo', inv_tiposController.create);
    app.put('/api/inv_tipo/:id_inv_tipo', inv_tiposController.update);
    app.get('/api/inv_tipos', inv_tiposController.getAll);
    app.get('/api/inv_tipo/:id_inv_tipo', inv_tiposController.getById);

}