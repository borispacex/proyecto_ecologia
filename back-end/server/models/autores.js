// interface
module.exports = (sequelize, DataTypes) => {
    const autores = sequelize.define('autores', {
        id_autor: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_publicacion: DataTypes.INTEGER,
        id_investigador: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return autores;
}