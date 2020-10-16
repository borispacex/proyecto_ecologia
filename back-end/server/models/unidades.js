// interface
module.exports = (sequelize, DataTypes) => {
    const unidades = sequelize.define('unidades', {
        id_unidad: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
        observacion: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return unidades;
}