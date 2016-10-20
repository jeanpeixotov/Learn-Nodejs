var app = require('express')(); //chamando direto () === var x express()
app.set('view engine','ejs'); //definir variaveis
module.exports = function () {
    return app;
}
