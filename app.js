const express = require('express');
const mongoose = require('mongoose');
const contatoRouter = require('./router/contatoRouter')
const url='mongodb+srv://mateus:josisoneca@cluster0.6efu8an.mongodb.net/test';
const app = express();
const port = 3000;

app.use(express.json());
app.use('/contatos',contatoRouter);

mongoose.connect(url)
.then(app.listen(port,()=>{
    console.log('O app esta online na porta', port);
}))
.catch(error => console.log("deu ruim!", error));

