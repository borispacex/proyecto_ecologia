// interface
module.exports = (sequelize, DataTypes) => {
    const eventos = sequelize.define('eventos', {
        id_evento: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        titulo: DataTypes.STRING,
        objetivo: DataTypes.STRING,
        lugar: DataTypes.STRING,
        fechaini: DataTypes.DATE,
        fechafin: DataTypes.DATE,
        resumen: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return eventos;
}