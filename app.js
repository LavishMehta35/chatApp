const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

const io = require("socket.io")(server);

app.use(express.static(path.resolve("./public")));

let socketConnected = new Set();

io.on("connect", onConnected);

function onConnected(socket) {
  // console.log(socket.id)
  socketConnected.add(socket.id);
  io.emit("clients-total", socketConnected.size);

  socket.on("disconnect", () => {
    // console.log("socket disconnected" , socket.id)
    socketConnected.delete(socket.id);
    io.emit("clients-total", socketConnected.size);
  });

  socket.on("message", (data) => {
    // console.log(data)
    socket.broadcast.emit("chat-message", data);
  });
}
