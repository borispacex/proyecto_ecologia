// interface
module.exports = (sequelize, DataTypes) => {
    const tipos = sequelize.define('tipos', {
        id_tipo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return tipos;
}