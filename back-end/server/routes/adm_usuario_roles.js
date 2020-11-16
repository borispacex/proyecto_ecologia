const adm_usuario_rolesController = require('../controllers').adm_usuario_roles;
const md_auth = require('../authenticated/authenticated');

// configuracion el express
module.exports = (app) => {
    app.post('/api/adm_usuario_rol', md_auth.auth, adm_usuario_rolesController.create);
    app.put('/api/adm_usuario_rol/:id_adm_usuario_rol', md_auth.auth, adm_usuario_rolesController.update);
    app.get('/api/getByUsuario/:id_usuario', adm_usuario_rolesController.getByUsuario);
    app.get('/api/getByRolesIdUsuario/:id_usuario', md_auth.auth, adm_usuario_rolesController.getByRolesIdUsuario);
    app.get('/api/getRolByIdUsuarioIdRol/:id_usuario/:id_rol', md_auth.auth, adm_usuario_rolesController.getRolByIdUsuarioIdRol);

    app.get('/api/adm_usuario_rolesByIdUsuarioIdRolAndEstado/:id_usuario/:id_rol/:estado', md_auth.auth, adm_usuario_rolesController.getRolByIdUsuarioIdRolAndEstado);
    app.get('/api/adm_usuario_rolesByIdUsuarioAndEstado/:id_usuario/:estado', md_auth.auth, adm_usuario_rolesController.getByRolesIdUsuarioAndEstado);
}