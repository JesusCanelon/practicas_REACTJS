import express from 'express';
import {Server} from 'socket.io';
import http, { createServer } from 'http';

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5173"
    }
})

io.on("connection", socket => {
    console.log(`client: ${socket.id} connected!`);

    socket.on('message', (data) => {
        socket.broadcast.emit("message", data)
    })

    socket.on('move', (data) => {
        socket.broadcast.emit("move", data)
    })

    socket.on("restar", (data) => {
        socket.broadcast.emit("restar", data)
    })
})

server.listen(3000)
console.log('Server on port', 3000);