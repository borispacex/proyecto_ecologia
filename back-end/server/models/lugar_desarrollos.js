// interface
module.exports = (sequelize, DataTypes) => {
    const lugar_desarrollos = sequelize.define('lugar_desarrollos', {
        id_lugar_desarrollo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_proyecto: DataTypes.INTEGER,
        departamento: DataTypes.STRING,
        provincia: DataTypes.STRING,
        municipio: DataTypes.STRING,
        localidad: DataTypes.STRING,
        latmax: DataTypes.DECIMAL(10,8),
        lonmax: DataTypes.DECIMAL(10,8),
        latmin: DataTypes.DECIMAL(10,8),
        lonmin: DataTypes.DECIMAL(10,8),
        estado: DataTypes.BOOLEAN
    });
    return lugar_desarrollos;
}