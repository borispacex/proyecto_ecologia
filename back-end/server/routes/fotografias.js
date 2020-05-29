const fotografiasController = require('../controllers').fotografias;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({uploadDir: './server/uploads/fotografias'});

// configuracion el express
module.exports = (app) => {
    app.post('/api/fotografia', md_auth.auth, fotografiasController.create);
    // app.post('/api/fotografia', fotografiasController.create);

    app.put('/api/fotografia/:id', md_auth.auth, fotografiasController.update);
    // app.put('/api/fotografia/:id_fotografia', fotografiasController.update);

    // app.post('/api/upload-fotografia/:id', [md_auth.auth, md_upload], fotografiasController.uploadFotografia);
    app.post('/api/upload-fotografia/:id_fotografia', md_upload, fotografiasController.uploadFotografia);

    app.get('/api/get-fotografia/:fotografia/:thumb', fotografiasController.getFotografia);
    app.get('/api/fotografia/:id_fotografia', fotografiasController.getById);

    app.get('/api/fotografias-admin', md_auth.auth, fotografiasController.getAllAdmin);
    // app.get('/api/fotografias-admin', fotografiasController.getAllAdmin);

    app.get('/api/fotografias', fotografiasController.getAll);

}