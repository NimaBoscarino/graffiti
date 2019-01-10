const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
 

const messages = []

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    messages.push(JSON.parse(message))

    // ws.send(JSON.stringify(messages))
    wss.clients.forEach(c => c.send(JSON.stringify(messages)))
  });

  ws.send(JSON.stringify(messages))
});

console.log('listening')
