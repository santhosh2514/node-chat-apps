const path = require('path');
const express = require('express');
var publicPath = path.join(__dirname,'../public');

var app=express();
const port=process.env.PORT || 3000;

app.use(express.static(publicPath));
app.get('/',()=>{
  res.render('index.html');
})

app.listen(port,()=>{
  console.log(`lisitening on port ${port}`);
})
