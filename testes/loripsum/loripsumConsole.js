var http = require('http');

http.get('http://loripsum.net/api/1',function(response) {
   var text = '';

   response.on('data', function(parag) {
      text += parag;
   });

   response.on('end',function () {
     console.log(text);
  });

}).on('error', function (error) {
   console.log('Error:' + error.message);
});
