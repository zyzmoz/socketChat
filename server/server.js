var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('User connected...');

    io.on('disconnect', () =>{
        console.log('User disconnected...');
    });

    socket.on('add-message', (message, username) =>{
        io.emit('message', {type: 'new-message', text: message, username: username});
    })
});

http.listen(3000, () =>{
    console.log('Server running at localhost:3000');
});