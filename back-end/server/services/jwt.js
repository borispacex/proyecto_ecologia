var nJwt = require('njwt');
var config = require('../config/config');
var secret = config.token_secret;

exports.createToken = (usuario) => {
    var params = {
        sub: usuario.id_usuario,
        usuario: usuario.usuario,
        id_persona: usuario.id_persona
    }
    var jwt = nJwt.create(params, secret);
    // tiempo de vida del tokem de 2 horas
    var t = new Date();
    t.setHours(t.getHours() + 2);
    jwt.setExpiration(t);
    var token = jwt.compact();
    return token;
}
