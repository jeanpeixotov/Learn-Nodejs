//var dbConnection = require('../infra/connectionFactory
module.exports = function(app) {
    //controllers

    app.get("/produtos",function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        //new novo contexto de uso, ""'classe'""

        produtosDAO.lista(function(err, results){
            res.render('produtos/lista', {lista: results}); //returna json
            //res.send(results); //json compreto do bd
        });

        connection.end();
    });

    app.get('/produtos/form', function(req,res) {
        res.render('produtos/form');
    });

    app.post("/produtos",function(req,res) {
        var produto = req.body;//pega o insformações do form e grava na var em json ( graças ao bodyParser)
        //console.log(produto);


        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto,function(erros,resultado){
            res.redirect('/produtos');
        });

        connection.end();

    })
}
