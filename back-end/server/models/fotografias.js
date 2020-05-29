// interface
module.exports = (sequelize, DataTypes) => {
    const fotografias = sequelize.define('fotografias', {
        id_fotografia: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        tipo: DataTypes.STRING,
        imagen: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return fotografias;
}