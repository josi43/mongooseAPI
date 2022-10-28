const express = require('express');
const mongoose = require('mongoose');
const contatoRouter = require('./router/contatoRouter')
const url='mongodb+srv://iesb:3ABj1Q0Fe6RTWRA0@cluster0.ux0hiy5.mongodb.net/contatosdb?retryWrites=true&w=majority';
const app = express();
const port = 3000;

app.use(express.json());
app.use('/contatos',contatoRouter);

mongoose.connect(url)
.then(app.listen(port,()=>{
    console.log('O app esta online na porta', port);
}))
.catch(error => console.log("deu ruim!", error));

