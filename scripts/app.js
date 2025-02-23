const cors = require('cors');
const express = require('express');
const app = express();
const rotaCart = require('./rotas/carrinho').rotaCarrinho;
const rotaCad = require('./rotas/cadastro');
const rotaLog = require('./rotas/login').rotaLog;
const rotaLiv = require('./rotas/livros');
const bodyParser = require('body-parser');

app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/cadastro", rotaCad);
app.use('/login', rotaLog);
app.use('/livros', rotaLiv);
app.use('/cart', rotaCart);

app.use("/", (req, res, next)=>{
    res.status(201).send({
        "mensagem": "Página principal"
    })
})

module.exports = app;
