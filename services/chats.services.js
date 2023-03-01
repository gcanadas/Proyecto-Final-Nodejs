import ChatsRepository from '../models/repositories/chats.repository.js'
import Mensaje from '../models/mensaje.model.js'
import MensajesDto from '../models/dto/mensajes.dto.js'

const repository = new ChatsRepository()

export async function newMessage(data, email) {
    const dataClean = { email, tipo: 'usuario', timestamp: new Date().toLocaleString(), mensajeBody: data }
    const mensaje = await repository.create(new Mensaje(dataClean))
    return new MensajesDto(mensaje)
}

export async function resMessage(data) {
    const dataClean = { email: data.email, tipo: 'sistema', timestamp: new Date().toLocaleString(), mensajeBody: data.message }
    const mensaje = await repository.create(new Mensaje(dataClean))
    return new MensajesDto(mensaje)
}

export async function getAllMessages() {
    const mensajes = await repository.getAll()
    return mensajes.map(mensaje => new MensajesDto(mensaje))
}

export async function getMessageByEmail(email) {
    const mensajes = await repository.getByEmail(email)
    return mensajes.map(mensaje => new MensajesDto(mensaje))
}


export default {
    newMessage,
    resMessage,
    getAllMessages,
    getMessageByEmail,
}