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
app.use(bodyParser.urlencoded({ extented:true }));

app.use(function (req, res, next) {
   if (req.url === '/favicon.ico') {
      res.writeHead(200, {'Content-type':'image/x-icon'});
      res.end('');
   } else {
      next();
   }
});

//refactory routes
app.use('/',require('./routes'));


//error handling
app.use(function (req,res,next) {
   var err = new Error('Not Found');
   err.status = 404;//
   next(err);
});

app.use(function (err,req,res,next) {
   console.log(err.stack);
   res.status(err.status || 500).json({err:err.message});
});

//refactory server listener
module.exports = app;
