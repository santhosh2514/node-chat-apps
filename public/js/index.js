var socket = io();

socket.on('connect',function(){
  console.log("connected to server");

});

socket.on('disconnect',function(){
  console.log("Disconnected from sever");
});

socket.on('newMessage',function (message) {
  console.log("New chat message",message);
});
