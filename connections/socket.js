import { Server } from 'socket.io';
import logger from '../utils/logger.js';
import chatsController from '../controllers/chats.controller.js';

let io;

function initSocket(httpServer) {
    io = new Server(httpServer);
    setEvents(io);
}

async function setEvents(io) {
    io.on('connect', async (socketClient) => {
        const mensajes = await chatsController.getAllMessages();
        io.emit('historyMessage', mensajes);
        logger.info(`Se conecto el cliente con el id: ${socketClient.id}`);

        socketClient.on('newMessage', async (data) => {
                await chatsController.resMessage(data);
                io.emit('historyMessage', mensajes);
                io.emit('messageNotification', data);
        });

        socketClient.on('disconnect', () => {
                logger.info(`Se desconecto el cliente con el id: ${socketClient.id}`);
        });
    });
}

export { initSocket };