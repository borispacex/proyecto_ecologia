// interface
module.exports = (sequelize, DataTypes) => {
    const investigadores = sequelize.define('investigadores', {
        id_investigador: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_persona: DataTypes.INTEGER,
        id_inv_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return investigadores;
}