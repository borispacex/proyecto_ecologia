// interface
module.exports = (sequelize, DataTypes) => {
    const seguimientos = sequelize.define('seguimientos', {
        id_seguimiento: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        id_director: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        revision: DataTypes.STRING,
        observaciones: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return seguimientos;
}