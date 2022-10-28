const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        requires:[true,'Nome é obrigatório']
    },
    fone: String
},{
    timestamps: true,
});

module.exports = mongoose.model('Contato', contatoSchema);