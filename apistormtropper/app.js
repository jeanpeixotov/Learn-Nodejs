var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cors = require('cors');
//server config
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true}));

app.use(function (req, res, next) {
   if (req.url === '/favicon.ico') {
      res.writeHead(200, {'Content-type':'image/x-icon'});
      res.end('');
   } else {
      next();
   }
});

app.use(cors());
//ou usar cors do npm para permitir acesso de todos a api
// app.use(function(req,res,next){
//    res.header('Access-Control-Allow-Origin','*');
//    res.header('Access-Control-Allow-Headers','Origin, X-Request-With, Content-type, Accept');
// });


//routes
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

//error handling
app.use(function (req,res,next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

app.use(function (err,req,res,next) {
   console.log(err.stack);
   res.status(err.status || 500).json({err:err.message});
});

//server listener
var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log('Server at http://%s:%s', host,port);
});
