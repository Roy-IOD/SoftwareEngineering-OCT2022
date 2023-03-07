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
io.on("connection", (socket) => {
  socket.broadcast.emit("connection message", "a user connected...");
  socket.on("disconnect", () => {
    io.emit("connection message", "a user disconnected...");
  });
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("typing", (username) => {
    io.emit("typing", username);
  });
});
server.listen(3001, () => {
  console.log("listening on *:3001");
});
