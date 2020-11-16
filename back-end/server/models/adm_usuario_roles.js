// interface
module.exports = (sequelize, DataTypes) => {
    const adm_usuario_roles = sequelize.define('adm_usuario_roles', {
        id_adm_usuario_rol: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_usuario: DataTypes.INTEGER,
        id_rol: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return adm_usuario_roles;
}