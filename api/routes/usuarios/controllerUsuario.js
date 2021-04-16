const jwt = require('jsonwebtoken');
const Usuario = require('./Usuario');
const crypto = require('crypto');

function criarToken(usuario){
    const payload= {
        id: usuario.id
    };

    return jwt.sign(payload, '')
}

module.exports = {
    login:(req, resp) => {
        const acessToken = criarToken(req.user);
        resp.set('Authorization', acessToken);
        resp.status(200).send();
    }
}