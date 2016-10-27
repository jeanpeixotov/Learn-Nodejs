var express = require('express'); //chamando direto () === var x express()
var load = require('express-load');
var bodyParser = require('body-parser');
var expressvali = require('express-validator');
module.exports = function () {
    var app = express();

    app.use(express.static('./app/public'))
    app.set('view engine','ejs'); //definir variaveis o default é views na raiz do projeto
    app.set('views','./app/views'); // . é caminho relativo ao local onde voce vai subir o servidor

    app.use(bodyParser.urlencoded({extended: true})); //extended para o bodyparser consegue interpretar o form corretamente(FK por exdmplo)
    //funções que sao carregadas antes de chegar a requisicao middleware
    //req->middlewarebodyparser -> middlewareautenticacao -> funcao que trata requisicao
    app.use(bodyParser.json());
    app.use(expressvali());
    //rotas,controllers etc loading
    load('routes',{cwd: 'app'})
        .then('infra')
        .into(app);//tudo que for carregado fica aqui
    return app;
}
