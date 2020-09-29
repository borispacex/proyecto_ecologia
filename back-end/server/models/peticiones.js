// interface
module.exports = (sequelize, DataTypes) => {
    const peticiones = sequelize.define('peticiones', {
        id_peticion: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        id_investigador: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        motivos: DataTypes.STRING,
        detalle: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return peticiones;
}