// interface
module.exports = (sequelize, DataTypes) => {
    const basica_tecnicas = sequelize.define('basica_tecnicas', {
        id_basica_tecnica: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        area: DataTypes.STRING,
        tipo_p: DataTypes.STRING,
        carga_h: DataTypes.INTEGER,
        unidades: DataTypes.STRING,
        estado: DataTypes.BOOLEAN
    });
    return basica_tecnicas;
}