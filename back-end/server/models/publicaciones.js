// interface
module.exports = (sequelize, DataTypes) => {
    const publicaciones = sequelize.define('publicaciones', {
        id_publicacion: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        id_coordinador: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        fecha: DataTypes.DATE,
        contenido: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return publicaciones;
}