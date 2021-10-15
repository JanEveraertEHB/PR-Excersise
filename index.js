
const server =  require("express")();
const socket = require('http').createServer();
const io = require('socket.io')(socket);

const messages = [];

io.on('connection', client => {
  client.on('event', data => { 

   });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3001);


server.listen(3000, () => {
  console.log("server listening at 3000")
})