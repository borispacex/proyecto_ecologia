// interface
module.exports = (sequelize, DataTypes) => {
    const proyectos = sequelize.define('proyectos', {
        id_proyecto: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_adm: DataTypes.INTEGER,
        id_coordinador: DataTypes.INTEGER,
        titulo: DataTypes.STRING,
        proceso: DataTypes.INTEGER,
        fechaini: DataTypes.DATE,
        fechafin: DataTypes.DATE,
        carrera: DataTypes.STRING,
        n_instituto: DataTypes.STRING,
        tipo: DataTypes.STRING,
        area: DataTypes.STRING,
        tipo_p: DataTypes.STRING,
        carga_h: DataTypes.INTEGER,
        moneda: DataTypes.STRING,
        financiamiento: DataTypes.INTEGER,
        estado: DataTypes.STRING
    });
    return proyectos;
}