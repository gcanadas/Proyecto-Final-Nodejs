import { Router } from 'express';
import { create, getAll, getById, getByCategory, updateById, deleteById } from '../../controllers/productos.controllers.js';
import auth from '../../middlewares/auth.js';

const router = Router();


router.get('/', auth, getAll);

router.post('/', auth, create);

router.get('/:id', auth, getById);

router.put('/:id', auth, updateById);

router.delete('/:id', auth, deleteById);

router.get('/categoria/:categoria', auth, getByCategory);


export default router;