const request = require('supertest')
require('dotenv').config()
const postLogin = require("../fixtures/postLogin.json")

const obterToken = async (usuario, senha) => {
     const bodyLogin = { ...postLogin  }

    const resposta = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin)

    return resposta.body.token
}

module.exports = {
    obterToken
}