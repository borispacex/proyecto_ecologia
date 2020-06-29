const publicacionesController = require('../../controllers').publicaciones;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/publicacion', publicacionesController.create);
    app.put('/api/publicacion/:id_publicacion', publicacionesController.update);
    app.get('/api/publicaciones', publicacionesController.getAll);
    app.get('/api/publicaciones-proy/:id_proyecto', publicacionesController.getAllByIdProyecto);
    app.get('/api/publicaciones-inv/:id_coordinador', publicacionesController.getAllByIdCoordinador);

    app.get('/api/publicacion/:id_publicacion', publicacionesController.getById);
}