var mysql = require('mysql');
function createDbConnection() {
    if(!process.env.NODE_ENV){
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "12345678",
            database: "lojadelivros"
        });
    }
    if(process.env.NODE_ENV == 'test'){
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "12345678",
            database: "lojadelivros_test"
        });
    }
}
//wrapper
module.exports = function() { //agora o bd tera conexao só quando chamar e nao na init
    //console.log(createDbConnection);//loading da page.
    return createDbConnection;//loading da page.

}
