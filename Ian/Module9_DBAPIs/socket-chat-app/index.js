const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const usernames = []

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    io.emit('connection', 'a user connected');
    console.log('a user connected')

    socket.on('chat message', (msg) => {
        socket.emit('chat message', {msg: msg, user: socket.username });
        console.log(`${socket.username}: ` + msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // socket.on('message', (msg)) Test

    socket.on('typing', (username) => {
        io.sockets.emit('user typing...', username) //why io.sockets.emit not socket.broadcast.emit ?
    })

    socket.on('set-username', (username) => {
        socket.username = username;
        console.log(`User ${socket.username} has entered the chat`);
        socket.broadcast.emit('new user', `User ${socket.username} has entered the chat`);
        
    });
  });

server.listen(3000, () => {
    console.log('listening on *:3000');
});