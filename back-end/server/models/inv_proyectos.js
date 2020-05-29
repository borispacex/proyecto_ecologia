// interface
module.exports = (sequelize, DataTypes) => {
    const inv_proyectos = sequelize.define('inv_proyectos', {
        id_inv_proyecto: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        id_investigador: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return inv_proyectos;
}