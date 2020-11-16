// interface
module.exports = (sequelize, DataTypes) => {
    const expositores = sequelize.define('expositores', {
        id_expositor: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_curso: DataTypes.INTEGER,
        nombres: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return expositores;
}