var http = require('http');
var fs = require('fs');

http.get('http://loripsum.net/api/1',function(response) {
   var text = '';

   response.on('data', function(parag) {
      text += parag;
   });

   response.on('end',function () {
      fs.writeFile('lorem.html',text, function() {
         console.log('Arquivo pronto!');
      });
   });

}).on('error', function (error) {
   console.log('Error:' + error.message);
});
