// interface
module.exports = (sequelize, DataTypes) => {
    const contratados = sequelize.define('contratados', {
        id_contratado: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        nombrecompleto: DataTypes.STRING,
        ci: DataTypes.STRING,
        fechaini: DataTypes.DATE,
        fechafin: DataTypes.DATE,
        descripcion: DataTypes.STRING,
        // archivo
        archivo: DataTypes.STRING,
        nombre_archivo: DataTypes.STRING,
        descripcion_archivo: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return contratados;
}