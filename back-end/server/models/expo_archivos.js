// interface
module.exports = (sequelize, DataTypes) => {
    const expo_archivos = sequelize.define('expo_archivos', {
        id_expo_archivo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_exposicion: DataTypes.INTEGER,
        // archivo
        archivo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return expo_archivos;
}