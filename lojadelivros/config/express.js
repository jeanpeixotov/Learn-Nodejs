var app = require('express')(); //chamando direto () === var x express()
app.set('view engine','ejs'); //definir variaveis o default é views na raiz do projeto
app.set('views','./app/views'); //caminho relativo ao local onde voce vai subir o servidor
module.exports = function () {
    return app;
}
