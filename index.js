const WebSocket = require('ws');
const PORT = 8080;

const wsServer = new WebSocket.Server({port: PORT});

wsServer.on('connection', (socket) => {
  console.log('A client just connected');
  socket.on('message', (msg) => {
    console.log('Receive message from client: ', JSON.parse(msg));
    wsServer.clients.forEach((client) => {
      const body = {Name: `Machine${Math.random(100)}`};
      client.send(JSON.stringify(body));
    });
  });
});
