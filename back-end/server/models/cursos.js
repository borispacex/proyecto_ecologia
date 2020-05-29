// interface
module.exports = (sequelize, DataTypes) => {
    const cursos = sequelize.define('cursos', {
        id_curso: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        titulo: DataTypes.STRING,
        objetivo: DataTypes.STRING,
        lugar: DataTypes.STRING,
        expositores: DataTypes.STRING,
        asistentes: DataTypes.INTEGER,
        fechaini: DataTypes.DATE,
        fechafin: DataTypes.DATE,
        horas: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return cursos;
}