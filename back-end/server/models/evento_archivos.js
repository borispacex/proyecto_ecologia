// interface
module.exports = (sequelize, DataTypes) => {
    const evento_archivos = sequelize.define('evento_archivos', {
        id_evento_archivo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_evento: DataTypes.INTEGER,
        // archivo
        archivo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return evento_archivos;
}