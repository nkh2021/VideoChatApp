const socket = io("http://localhost:4000");
const divvideoChatLobby = document.getElementById("video-chat-lobby");
const divvideoChat = document.getElementById("video-chat-room");
const joinButton = document.getElementById("join");
const userVideo = document.getElementById("user-video");
const peerVideo = document.getElementById("peer-video");
const roomInput = document.getElementById("roomName");

joinButton.addEventListener("click", () => {
  if (roomInput.value == "") {
    alertify.error("مقدار کد اتاق را پر کنید");
  } else {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: { width: 320, height: 240 } })
      .then(function (stream) {
        divvideoChatLobby.style = "display:none";
        userVideo.srcObject = stream;
        userVideo.onloadedmetadata = function (e) {
          userVideo.play();
        };
        socket.emit("join", roomInput.value);
      })
      .catch(function (err) {
        alertify.error(`Error on get user media : ${err}`);
      });
  }
});
