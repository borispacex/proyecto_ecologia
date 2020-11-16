// interface
module.exports = (sequelize, DataTypes) => {
    const comentarios = sequelize.define('comentarios', {
        id_comentario: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_persona: DataTypes.INTEGER,
        id_publicacion: DataTypes.INTEGER,
        comentario: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return comentarios;
}