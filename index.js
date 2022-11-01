const WebSocket = require('ws');
const PORT = 8080;

const wsServer = new WebSocket.Server({port: PORT});

wsServer.on('connection', (socket) => {
  console.log('A client just connected');
  socket.on('message', (msg) => {
    console.log('Receive message from client: ', msg);
    wsServer.clients.forEach((client) => {
      client.send(msg);
    });
  });
});
