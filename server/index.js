const express = require('express')
const socketio = require('socket.io');
const http = require('http');
const port = process.env.PORT || 5000;
const router = require('./router');
const app = express()
const server = http.createServer(app);
const io = socketio(server);

app.use(router)

io.on('connection' , (socket)=>{
    console.log("we have a new connection!!");
    socket.on('disconnect' , ()=>{
        console.log("User had left!!");
    })
})

server.listen(port , ()=>{
    console.log(`Server has started on Port ${port}`);
})