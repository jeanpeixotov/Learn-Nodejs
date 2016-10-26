var express = require('../config/express')();
var request = require('supertest')(express);//

describe('ProdutosController', function () {
    beforeEach(function(done) {
        var conn = express.infra.connectionFactory();
        conn.query("delete from livros", function(exc,result) {
            if(!exc){
                done();
            }
        });
    });
    //node-database-cleaner - limpa todas tabela que passar - LIB

    //afterEach
    it('listagem json',function (done) {
        request.get('/produtos') //monta o endereco que queremos acessar
        .set('Accept','application/json') //tipo
        .expect('Content-Type',/json/)//asserts
        .expect(200,done);
    });
    it('#add new invalid products',function(done) {
        request.post('/produtos')
        .send({titulo:"",descricao:"new book"})
        .expect(400,done);
    });
    it('#add new products',function(done) {
        request.post('/produtos')
        .send({titulo:"Linguagem C",descricao:"new book",preco:19.99})
        .expect(302,done);
    });
});
