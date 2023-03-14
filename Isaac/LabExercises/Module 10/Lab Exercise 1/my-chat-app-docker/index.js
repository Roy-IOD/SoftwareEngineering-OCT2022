const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const usernames = [];

app.get("/", (res, req) => {
  req.sendFile(__dirname + "/index.html");
});

function updateUsernames() {
  io.emit("usernames", usernames);
}

io.on("connection", (socket) => {
  socket.broadcast.emit("connection message", "a user connected...");
  socket.on("disconnect", () => {
    io.emit("connection message", "a user disconnected...");
    if (!socket.username) return;
    usernames.splice(usernames.indexOf(socket.username), 1);
    updateUsernames();
  });
  socket.on("chat message", (data) => {
    socket.broadcast.emit("chat message", { msg: data, user: socket.username });
  });
  socket.on("typing", (username) => {
    socket.broadcast.emit("typing", username);
  });
  // TEST BELOW
  socket.on("new user", (data, callback) => {
    if (usernames.indexOf(data) != -1) {
      callback(false);
    } else {
      callback(true);
      socket.username = data;
      usernames.push(socket.username);
      updateUsernames();
    }
  });
  // TEST ABOVE
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
