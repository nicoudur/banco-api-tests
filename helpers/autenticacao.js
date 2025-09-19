const request = require('supertest')
require('dotenv').config()

const obterToken = async (usuario, senha) => {
    const resposta = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha,
        })

    return resposta.body.token
}

module.exports = {
    obterToken
}