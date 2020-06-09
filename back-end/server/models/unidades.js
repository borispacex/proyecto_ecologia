// interface
module.exports = (sequelize, DataTypes) => {
    const unidades = sequelize.define('unidades', {
        id_unidad: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_basica_tecnica: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return unidades;
}