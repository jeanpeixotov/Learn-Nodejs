function ProdutosDAO(connection) { //'classe'
    //return function(connection) {//retorna outra funcao quando o express chama no inicio
    this._connection = connection; //this agr é o contexto e  o underline para 'private' por convecao
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros',callback);
}
ProdutosDAO.prototype.salva = function(produto,callback) {
    this._connection.query('INSERT INTO livros SET ?', produto, callback);
}
module.exports = function(){
    return ProdutosDAO;
}
