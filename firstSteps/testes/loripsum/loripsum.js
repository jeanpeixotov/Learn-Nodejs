/**
   Faz uma requisição na API
   e grava um arquivo com o nome e a quantidade
   de paragrafos especificados

   Jean Vitor, Novembro - 2016
**/
var http = require('http');
var fs = require('fs');
var filename = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi,'');
var quantOfParags = String(process.argv[3] || '').replace(/[^\d]/g,'');

const USAGE = 'Uso: node loripsum.js {nomeArquivo} {quantidadeParágrafos}';

if(!filename || !quantOfParags){
   return console.log(USAGE);
}

http.get('http://loripsum.net/api/' + quantOfParags ,function(response) {
   var text = '';

   response.on('data', function(parag) {
      text += parag;
   });

   response.on('end',function () {
     fs.writeFile(filename, text, function () {
        console.log('Arquivo ' + filename + ' pronto!');
     });
  });

}).on('error', function (error) {
   console.log('Error:' + error.message);
});
