const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const express = require('express');


const {generateMessage} = require('./utils/message');
const {generateLocationMessage} = require('./utils/message');
var publicPath = path.join(__dirname,'../public');
const port=process.env.PORT || 3000;

var app=express();
var server=http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
// app.get('/',()=>{
//   res.render('index.html');
// })
io.on('connection',(socket)=>{
  console.log("new user connected");

     socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));

     socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

   socket.on('createMessage',(message,callback)=>{
     console.log('createMessage',message);
     io.emit('newMessage',generateMessage(message.from,message.text))
     callback('This is from the server');
     })

     socket.on('createLocationMessage',(coords)=>{
       io.emit('newLocationMessage',generateLocationMessage('Admin', coords.latitude,coords.longitude))
   })

  socket.on('disconnect',()=>{
  console.log('user is disconneted');
  })
});

server.listen(port,()=>{
  console.log(`lisitening on port ${port}`);
});
