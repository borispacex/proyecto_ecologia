// interface
module.exports = (sequelize, DataTypes) => {
    const adm_roles = sequelize.define('adm_roles', {
        id_rol: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        rol: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return adm_roles;
}