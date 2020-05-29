// interface
module.exports = (sequelize, DataTypes) => {
    const nota_prensas = sequelize.define('nota_prensas', {
        id_nota_prensa: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        titulo: DataTypes.STRING,
        objetivo: DataTypes.STRING,
        lugar: DataTypes.STRING,
        fecha: DataTypes.DATE,
        resumen: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return nota_prensas;
}