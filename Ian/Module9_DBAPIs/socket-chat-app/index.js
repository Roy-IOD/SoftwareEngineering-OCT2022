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
    io.emit('connection', 'a user connected');
    console.log('a user connected')

    socket.on('chat message', (msg) => {
        console.log('${username}: ' + msg);
        io.emit('chat message', msg, {username: socket.username}); //msg msg??
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // socket.on('message', (msg)) Test

    socket.on('typing', (username) => {
        socket.broadcast.emit('user typing...', username)
    })

    socket.on('set username', (username) => {
        console.log('User ${username} has entered the chat');
        socket.username = username;
    });
  });

server.listen(3000, () => {
    console.log('listening on *:3000');
});