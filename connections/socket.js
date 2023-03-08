import { Server } from 'socket.io';
import logger from '../utils/logger.js';
import chatsService from '../services/chats.services.js'

let io;

function initSocket(httpServer) {
    io = new Server(httpServer);
    setEvents(io);
}

async function setEvents(io) {
    io.on('connect', async (socketClient) => {
        const mensajes = await chatsService.getAllMessages();
        io.emit('historyMessage', mensajes);
        logger.info(`Se conecto el cliente con el id: ${socketClient.id}`);

        socketClient.on('newMessage', async (data) => {
                await chatsService.resMessage(data);
                io.emit('messageNotification', data);
        });

        socketClient.on('disconnect', () => {
                logger.info(`Se desconecto el cliente con el id: ${socketClient.id}`);
        });
    });
}

export { initSocket };