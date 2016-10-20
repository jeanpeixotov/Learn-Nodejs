module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "12345678",
            database: "lojadelivros"
        });

        connection.query('select * from livros', function(err, results){
            res.send(results);
        });

        connection.end();

    });
}
