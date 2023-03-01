import { Router } from 'express';
import { getConfig } from '../../controllers/config.controller.js';


const router = Router();

//Ruta para que los usuarios puedan enviar mensajes
router.get('/', getConfig);


export default router;