var http = require('http');

var server = http.createServer( function( request,response ) {
    if(request.url == "/produtos"){
        response.end("");
    }else{
        response.end("");
    }
}).listen(3000,"localhost");
console.log("servidor online");
