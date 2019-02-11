const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const express = require('express');
var publicPath = path.join(__dirname,'../public');
const port=process.env.PORT || 3000;

var app=express();
var server=http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
app.get('/',()=>{
  res.render('index.html');
})
io.on('connection',(socket)=>{
  console.log("new user connected");

   socket.emit('newMessage',{
     from:'Santhosh',
     text:"heyeeeeeeey",
     createAt:123
   });

   socket.on('createMessage',(newMessage)=>{
     console.log('createMessage',newMessage);
   })
  socket.on('disconnect',()=>{
  console.log('user is disconneted');
  })
});

server.listen(port,()=>{
  console.log(`lisitening on port ${port}`);
});
