const io = require('socket.io')();

io.on('connection', function(socket) {
    socket.on('flip-square', function(data) {
        io.emit('flip-square', data);
    });
});

module.exports = io;