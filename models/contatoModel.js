const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: String,
    fone: String,
},{
    timestamps: true,
});

module.exports = mongoose.model('Contato', contatoSchema);