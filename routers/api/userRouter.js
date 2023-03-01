import { Router } from 'express';
import { getUser, loginUser, registerUser } from '../../controllers/users.controllers.js'
import auth from '../../middlewares/auth.js';

const router = Router();

router.get('/', auth, getUser);

router.post('/', loginUser);

router.post('/register', registerUser);


export default router;