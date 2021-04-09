const express = require("express");
const app = express();
const path = require("path");
var port = 4000;

var server = app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});

app.use(express.static(path.join(__dirname, "public")));

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("An user connects: " + socket.id);

  socket.on("join", (roomName) => {
    let rooms = io.sockets.adapter.rooms;
    let room = io.sockets.adapter.rooms.get(roomName);
    console.log(room);
  });
});
