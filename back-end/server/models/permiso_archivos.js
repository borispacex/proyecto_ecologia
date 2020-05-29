// interface
module.exports = (sequelize, DataTypes) => {
    const permiso_archivos = sequelize.define('permiso_archivos', {
        id_permiso_archivo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        tipo: DataTypes.STRING,         // tipo de permiso: solicitud u otorgacion
        // archivo
        archivo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return permiso_archivos;
}