// interface
module.exports = (sequelize, DataTypes) => {
    const financiamientos = sequelize.define('financiamientos', {
        id_financiamiento: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        fuente: DataTypes.STRING,
        aporte: DataTypes.INTEGER,
        observacion: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return financiamientos;
}