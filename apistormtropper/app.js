var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//server config
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true}));


app.get('/', function (req,res) {
   res.status(201);
   if(req.accepts('text')){
      res.write('name; email\n');
      res.write('Jean Vitor; jeanvitor06@gmail.com\n');
      res.end();
   }else{
      res.json({'name':'Jean Vitor', 'email':'jeanvitor06@gmail.com'});
   }
});

var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log('Server at http://%s:%s', host,port);
});
