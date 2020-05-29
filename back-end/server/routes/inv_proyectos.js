const inv_proyectosController = require('../controllers').inv_proyectos;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/inv_proyecto', md_auth.auth, inv_proyectosController.create);
    app.put('/api/inv_proyecto/:id_inv_proyecto', md_auth.auth, inv_proyectosController.update);
    app.get('/api/inv_proyectos', md_auth.auth, inv_proyectosController.getAll);
    app.get('/api/inv_proyectosByIdProyecto/:id_proyecto', md_auth.auth, inv_proyectosController.getAllByIdProyecto);
    app.get('/api/inv_proyectosByIdInvestigador/:id_investigador', md_auth.auth, inv_proyectosController.getAllByIdInvestigador);
    app.get('/api/inv_proyecto/:id_inv_proyecto', md_auth.auth, inv_proyectosController.getById);

}