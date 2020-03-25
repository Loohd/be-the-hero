const crypto = require('crypto'); //biblio para id ramdom

const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    }, // rota para listar todas as ongs do BD

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); //Gera 4 bytes de caracteres aleatorios e é convertido para uma string hexadecimal

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })
    return response.json({id});
    }
}