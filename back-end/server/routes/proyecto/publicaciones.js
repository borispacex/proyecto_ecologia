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
    app.get('/api/countPublicacionesByIdProyecto/:id_proyecto', publicacionesController.countByIdProyecto);

    app.get('/api/publicacionesByEstado/:estado', publicacionesController.getAllByEstado);
    app.get('/api/publicacionesByIdCoordinadorAndEstado/:id_coordinador/:estado', publicacionesController.getAllByIdCoordinadorAndEstado);
    app.get('/api/publicacionesByIdProyectoAndEstado/:id_proyecto/:estado', publicacionesController.getAllByIdProyectoAndEstado);
    app.get('/api/countPublicacionesByIdProyectoAndEstado/:id_proyecto/:estado', publicacionesController.countByIdProyectoAndEstado);
}