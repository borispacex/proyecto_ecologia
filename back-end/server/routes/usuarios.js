const usuariosController = require('../controllers').usuarios;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/usuario', md_auth.auth, usuariosController.create);
    app.put('/api/usuario/:id_usuario', md_auth.auth, usuariosController.update);
    app.post('/api/login', usuariosController.login);

    app.get('/api/usuarios', md_auth.auth, usuariosController.getAll);
    app.get('/api/usuariosAdministradores', md_auth.auth, usuariosController.getAllAdministradores);
    app.get('/api/usuariosDirectores', md_auth.auth, usuariosController.getAllDirectores);
    app.get('/api/usuariosInvestigadores', md_auth.auth, usuariosController.getAllInvestigadores);
    app.get('/api/usuariosInvestigadoresActivos', md_auth.auth, usuariosController.getAllInvestigadoresActivos);
    app.get('/api/usuariosInvestigadoresTitular', md_auth.auth, usuariosController.getAllInvestigadoresTitular);
    app.get('/api/usuariosInvestigadoresAsociadoProyecto', md_auth.auth, usuariosController.getAllInvestigadoresAsociadoProyecto);
    app.get('/api/usuariosInvestigadoresAsociadoInvitacion', md_auth.auth, usuariosController.getAllInvestigadoresAsociadoInvitacion);

    // app.get('/api/usuarios', usuariosController.getAll);
    app.get('/api/usuario/:id_usuario', md_auth.auth, usuariosController.getById);

    app.post('/api/verificar-password', md_auth.auth, usuariosController.verificar);

}