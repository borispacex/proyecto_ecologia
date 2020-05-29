const bcrypt = require("bcrypt");
// interface
module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define('adm_usuarios', {
        id_usuario: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        id_persona: DataTypes.INTEGER,   // -->  aqui esta el email: correo
        usuario: DataTypes.STRING,
        password: DataTypes.STRING,
        recordatorio: DataTypes.STRING,
        estado: DataTypes.BOOLEAN,
        resetPasswordToken: DataTypes.STRING,
        resetPasswordExpires: DataTypes.DATE
    });
    // codifica la contraseña crear
    usuarios.beforeSave((usuarios, options) => {
        if (usuarios.changed('password')) {
            usuarios.password = bcrypt.hashSync(usuarios.password, bcrypt.genSaltSync(10), null);
        }
    });
    // cuando se compara contraseña decodifica y compara aqui
    usuarios.prototype.comparePassword = function (passw, cb) {
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
        });
    };
    return usuarios;
}