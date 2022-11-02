const { ObjectID } = require('bson');
const { PromiseProvider } = require('mongoose');
const Contato = require('../models/contatoModel');

async function criar (req, res){
    const contato =  new Contato(req.body);
    await contato.save()
    .then (doc => {
        return res.status(201).json(doc);
    })
    .catch(error => {
        const msgErro = {};
        Object.values(error.errors).forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
})
}

async function listar (req, res) {
    await Contato.find({})
    .then(contatos => {return res.json(contatos); })
    .catch (error => {return res.status(500).json (error)});
}

async function consultarPeloId(req, res) {
    await Contato.findOne({_id: ObjectID(req.params.id)})
    .then(contato => {
        if(contato) return res.json(contato);
        else return res.status(404).json('Contato Não Localizado');
    })
    .catch(error => {return res.status(500).json(error) });
}

async function atualizar (req, res){
    await Contato.findOneAndUpdate({_id: ObjectID(req.params.id)}, req.body, {
        runValidators: true})
    .then(contato => {
        if(contato) return res.status(204).end();
        else return res.status(404).json('Contato Nao Localizado');
    })
    .catch(error => {
        const msgErro = {};
        Object.values(error.errors).forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro)
    });
}

async function remover (req, res){
    await Contato.findOneAndDelete({_id: ObjectID(req.params.id) })
    .then(contato => {
        if(contato) return res.status(204).end();
        else return res.status(404).json('Contato Não localizado'); 
    })
    .catch (error => {return res.status(500).json (error) });
}

module.exports = {criar, listar, consultarPeloId, atualizar, remover};