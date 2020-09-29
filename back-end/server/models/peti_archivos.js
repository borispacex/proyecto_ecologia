// interface
module.exports = (sequelize, DataTypes) => {
    const peti_archivos = sequelize.define('peti_archivos', {
        id_peti_archivo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_peticion: DataTypes.INTEGER,
        // archivo
        archivo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return peti_archivos;
}