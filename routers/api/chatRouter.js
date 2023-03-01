import { Router } from 'express';
import { newMessage, getAllMessages, getMessageByEmail, resMessage } from '../../controllers/chats.controller.js'
import auth from '../../middlewares/auth.js';
import adminAuth from '../../middlewares/adminAuth.js';


const router = Router();

//Ruta para que los usuarios puedan enviar mensajes
router.post('/', auth, newMessage);

//Ruta para que los usuarios puedan ver sus mensajes y las respuestas recibidas
router.get('/:email', auth, getMessageByEmail) //Controlar que el mail del usuario coincida con el solicitado

//Ruta para que administradores puedan recibir todos los mensajes
router.get('/admin/mensajes', adminAuth, getAllMessages); //implementar un control de usuario admin

//Ruta para que los administradores puedan responder mensajes a los usuarios
router.post('/admin/mensajes', adminAuth, resMessage)



export default router;