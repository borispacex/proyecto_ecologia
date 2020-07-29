const lugar_desarrollosController = require('../../controllers').lugar_desarrollos;
const md_auth = require('../../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/lugar_desarrollo', md_auth.auth, lugar_desarrollosController.create);
    app.put('/api/lugar_desarrollo/:id_lugar_desarrollo', md_auth.auth, lugar_desarrollosController.update);
    app.get('/api/lugar_desarrollos', md_auth.auth, lugar_desarrollosController.getAll);
    app.get('/api/lugar_desarrollos/:id_proyecto', md_auth.auth, lugar_desarrollosController.getAllByIdProyecto);

    app.get('/api/lugar_desarrollo/:id_lugar_desarrollo', md_auth.auth, lugar_desarrollosController.getById);
    app.get('/api/lugar_desarrollosByIdProyectoDepartamentAndProvince/:id_proyecto/:departamento/:provincia', md_auth.auth, lugar_desarrollosController.getAllByIdProyectoDepartamentoAndProvincia);
    app.get('/api/lugar_desarrollosByIdProyectoAndDepartament/:id_proyecto/:departamento', md_auth.auth, lugar_desarrollosController.getAllByIdProyectoAndDepartamento);
    app.get('/api/lugar_desarrollosByIdProyectoAndProvince/:id_proyecto/:provincia', md_auth.auth, lugar_desarrollosController.getAllByIdProyectoAndProvincia);

}