var http = require('http')
   ,server = http.createServer(function (req,res) {
      res.writeHead(200, {'Content-type' : 'text/plain' });

      if(req.url === '/'){
         res.end('Olá Mundo!\n');
      }else if(req.url === '/contato'){
         res.end('jeanvitor06@gmail.com');
      }else{
         res.end('Not found');
      }

      res.end('Olá mundo!\n');
   });

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
