var app = require('./config/express')(); // () mesma ideia do express
var rotasProdutos = require('./app/routes/produtos')(app);

app.listen(3000,function() {
    console.log("servidor online!");
});
