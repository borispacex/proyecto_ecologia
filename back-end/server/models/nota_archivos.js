// interface
module.exports = (sequelize, DataTypes) => {
    const nota_archivos = sequelize.define('nota_archivos', {
        id_nota_archivo: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_nota_prensa: DataTypes.INTEGER,
        // archivo
        archivo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        id_tipo: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    });
    return nota_archivos;
}