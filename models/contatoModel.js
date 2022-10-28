const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required:[true,'Nome é obrigatório']
    },
    fone: {
        type: String,
        required:[true,'fone é obrigatório']
    },
},{
    timestamps: true,
});

module.exports = mongoose.model('Contato', contatoSchema);