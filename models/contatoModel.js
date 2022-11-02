const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required:[true,'Nome é obrigatório'],
        trim : true,
        minLneght: [3,'nome desve conter pelo menos 3 caracteres']
    },
    fone: {
        type: String,
        required:[true,'fone é obrigatório']
    },
},{
    timestamps: true,
});

module.exports = mongoose.model('Contato', contatoSchema);