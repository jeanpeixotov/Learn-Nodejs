var mysql = require('mysql');
function createDbConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password : "12345678",
        database: "lojadelivros"
    });
}
//wrapper
module.exports = function() { //agora o bd tera conexao só quando chamar e nao no
    //console.log(createDbConnection);//loading da page.
    return createDbConnection;//loading da page.

}
