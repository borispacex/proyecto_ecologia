// interface
module.exports = (sequelize, DataTypes) => {
    const contra_archivos = sequelize.define('contra_archivos', {
        id_contra_archivo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_contratado: DataTypes.INTEGER,
        // archivo
        archivo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return contra_archivos;
}