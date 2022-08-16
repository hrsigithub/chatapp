const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

// app.use(express.static(__dirname + '/')

server.listen(PORT, () => {
  console.log("server running !");
});

io.on("connection", (socket) => {
  console.log("ユーザーが接続しました。");

  socket.on("chat message", (msg) => {
    console.log(msg)
    io.emit("chat message", msg);
  });
});

app.get("/", (req, res) => {
  console.log("dir:" + __dirname);
  res.sendFile(__dirname + "/index.html");
});
