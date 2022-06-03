const express = require("express")
const path = require("path")
const app = express()
const port = "8080";
const Conteiner=require('./models/conteiner');
const Movimentacao=require('./models/movimentacao');
const routCadastro =require('./routs/cadastro')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/conteiner', routCadastro)
app.use('/movimentacao', routCadastro)

app.use(morgan("dev"))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });