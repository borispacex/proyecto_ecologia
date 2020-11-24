// interface
module.exports = (sequelize, DataTypes) => {
    const personas = sequelize.define('personas', {
        id_persona: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_fotografia: DataTypes.INTEGER,
        paterno: DataTypes.STRING,
        materno: DataTypes.STRING,
        nombres: DataTypes.STRING,
        ci: DataTypes.STRING,
        sexo: DataTypes.STRING,
        estado_civil: DataTypes.STRING,
        fec_nacimiento: DataTypes.DATE,
        pais: DataTypes.STRING,
        ciudad: DataTypes.STRING,
        provincia: DataTypes.STRING,
        direccion1: DataTypes.STRING,
        direccion2: DataTypes.STRING,
        correo: DataTypes.STRING,
        telefono: DataTypes.STRING,
        celular: DataTypes.STRING,
        lenguaje: DataTypes.STRING,
        grado_academico: DataTypes.STRING,
        formacion_pro: DataTypes.TEXT,
        formacion_adi: DataTypes.TEXT,
        habilidades: DataTypes.TEXT,
        conclusion: DataTypes.TEXT,
        tema: DataTypes.STRING,
        color: DataTypes.STRING,
        estado: DataTypes.BOOLEAN,
        archivo: DataTypes.STRING
    });
    return personas;
}