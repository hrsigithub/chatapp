const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

server.listen(PORT, () => {
  console.log("server running !");
});

app.get("/", (req, res) => {
  res.send("hello world");
});
