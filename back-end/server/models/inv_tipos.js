// interface
module.exports = (sequelize, DataTypes) => {
    const inv_tipos = sequelize.define('inv_tipos', {
        id_inv_tipo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        tipo: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return inv_tipos;
}