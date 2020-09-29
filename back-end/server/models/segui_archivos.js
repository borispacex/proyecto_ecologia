// interface
module.exports = (sequelize, DataTypes) => {
    const segui_archivos = sequelize.define('segui_archivos', {
        id_segui_archivo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_seguimiento: DataTypes.INTEGER,
        // archivo
        archivo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return segui_archivos;
}