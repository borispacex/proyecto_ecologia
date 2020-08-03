const http = require('http');
const app = require('../app');
const socket = require('socket.io');
const socketUpload = require('../server/socketUpload.js');

const port = parseInt(process.env.port, 10) || 8012;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

const io = socket(server);

io.sockets.on('connection', (socket) => {
    console.log(`new connection id: ${socket.id}`);
    socketUpload(socket);
});