const start = require('./server');
const SocketIO = require('socket.io')

const server = start();
const io = SocketIO(server)

io.sockets.on('connection', socket => {
    socket.on('offer', offer => {
        socket.broadcast.emit('offer', offer);
    })
    socket.on('answer', answer => {
        socket.broadcast.emit('answer', answer);
    })
    socket.on('call', call => {
        socket.broadcast.emit('IncomingCall', call);
    })
    socket.on('CallAnswer', answer => {
        socket.broadcast.emit('CallAnswer', answer);
    })
})