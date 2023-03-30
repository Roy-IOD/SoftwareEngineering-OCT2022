const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);


const io = new Server(server);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  io.emit('a user connected');

  socket.on('disconnect', () => {
    io.emit('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  console.log('Connected')

  io.emit('chat message', 'You are connected');

  socket.on('disconnect', function() {
     io.emit('chat message', 'Other user disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



server.listen(3000, () => {
    console.log('listening on *:3000');
});
 
