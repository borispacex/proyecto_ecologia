// interface
module.exports = (sequelize, DataTypes) => {
    const convenios = sequelize.define('convenios', {
        id_convenio: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        objetivo: DataTypes.STRING,
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
    return convenios;
}