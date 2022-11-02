const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required:[true,'Nome é obrigatório'],
        trim : true,
        minLength: [3,'nome desve conter pelo menos 3 caracteres']
    },
    fone: {
        type: String,
        required:[true,'fone é obrigatório']
    },
});

module.exports = mongoose.model('Contato', contatoSchema);