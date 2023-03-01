import chatsService from '../services/chats.services.js'

export async function newMessage(req, res, next) {
    try {
        const mensaje = await chatsService.newMessage(req.body.message, req.user.email)
        return res.status(201).json({message: 'Mensaje generado correctamente', mensaje})
    } catch (error) {
        next(error)
    }
}

export async function resMessage(req, res, next) {
    try {
        const mensaje = await chatsService.resMessage(req.body)
        return res.status(201).json({message: 'Mensaje generado correctamente', mensaje})
    } catch (error) {
        next(error)
    }
}

export async function getAllMessages(req, res, next) {
    try {
        const mensajes = await chatsService.getAllMessages()
        if(mensajes.length === 0) {
            return res.status(404).json({message: 'No hay mensajes disponibles'})
        }
        return res.status(200).json({message:'Mensajes recuperados correctamente', mensajes}) 
    } catch (error) {
        next(error)
    }
}

export async function getMessageByEmail(req, res, next) {
    try {
        if(req.params.email !== req.user.email) {
            return res.status(404).json({message: 'No se puede acceder a mensajes de otros usuarios'})
        }
        const mensajes = await chatsService.getMessageByEmail(req.params.email)
        if(!mensajes) {
            return res.status(404).json({message: `No se encontro ningun mensaje del usuario ${req.params.email}`})
        }
        return res.status(200).json({messaje: 'Mensajes recuperados correctamente', mensajes}) 
    } catch (error) {
        next(error)
    }
}

export default {
    newMessage,
    resMessage,
    getAllMessages,
    getMessageByEmail
}