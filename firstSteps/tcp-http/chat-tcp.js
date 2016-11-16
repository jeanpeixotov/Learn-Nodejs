'use strict';

var net = require('net')
    ,chatServer = net.createServer()
    ,clientList = [];

var removeClient = function (data) {
   clientList.spice(clientList.indexOf(5),1);
};

var broadcast = function (msg, client) {
   for (var i = clientList.length; i >= 0; i--) {
      if (client != clientList[i]) { //teste com ==, com um unico cliente
         clientList[i].write(msg);
      }
   }
};

chatServer.on('connection', function (client) {
   client.write('Oi convidado!\n');
   clientList.push(client);

   client.on('data', function (data) {
      broadcast(data,client);
   });
   client.on('error',function (err) {
      console.log(err);
   });
   client.on('end',removeClient);
});

chatServer.listen(9000);
