//var dbConnection = require('../infra/connectionFactory
module.exports = function(app) {
    //controllers

    app.get("/produtos",function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        //new novo contexto de uso, ""'classe'""

        produtosDAO.lista(function(err, results){
            res.format({
                html: function() {
                    res.render('produtos/lista',{lista:results});
                },
                json: function () {
                    res.json(results);
                }
            });
        });

        connection.end();
    });

    app.get('/produtos/form', function(req,res) {
        res.render('produtos/form',{errsVali:{},produto:{}});
    });

    app.post("/produtos",function(req,res) {
        var produto = req.body;//pega o insformações do form e grava na var em json ( graças ao bodyParser)
        //console.log(produto);
        req.assert('titulo','Título obrigatório').notEmpty();
        req.assert('preco','Formato inválido').isFloat();
        var errs = req.validationErrors();
        if(errs){
            res.format({
                html: function() {
                    res.status(400).render('produtos/form',{errsVali:errs,produto:produto});
                },
                json: function () {
                    res.status(400).json(errs);
                }
            });

        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto,function(erros,resultado){
            res.redirect('/produtos');
        });

        connection.end();

    })
}
