var express = require('express');
var app = express();

app.set('view engine','ejs'); //definir variaveis

app.get('/produtos',function (request,response) {
    response.render("produtos/lista");
});
app.listen(3000,function() {
    console.log("servidor online");
});
