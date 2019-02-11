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
// app.get('/',()=>{
//   res.render('index.html');
// })
io.on('connection',(socket)=>{
  console.log("new user connected");

     socket.emit('newMessage',{
       from:'admin',
       text:'Welcome to Chat app',
       createdAt:new Date().getTime()
     });
     socket.broadcast.emit('newMessage',{
       from:'admin',
       text:'new User Joined',
       createdAt:new Date().getTime()
     })
   socket.on('createMessage',(message)=>{
     console.log('createMessage',message);
     io.emit('newMessage',{
       from:message.from,
       text:message.text,
       createdAt:new Date().getTime()
     })
     // socket.broadcast.emit('newMessage',{
     //   from:message.from,
     //   text:message.text,
     //   createdAt:new Date().getTime()
     // })
   })

  socket.on('disconnect',()=>{
  console.log('user is disconneted');
  })
});

server.listen(port,()=>{
  console.log(`lisitening on port ${port}`);
});
