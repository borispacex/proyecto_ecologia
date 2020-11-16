// interface
module.exports = (sequelize, DataTypes) => {
    const exposiciones = sequelize.define('exposiciones', {
        id_exposicion: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        titulo: DataTypes.STRING,
        tema: DataTypes.STRING,
        objetivo: DataTypes.STRING,
        lugar: DataTypes.STRING,
        asistentes: DataTypes.INTEGER,
        fechaini: DataTypes.DATE,
        fechafin: DataTypes.DATE,
        resumen: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return exposiciones;
}