import { Router } from 'express';
import { getCart, updateAddressCart, addProductToCart, deleteCart, updateProductoToCart, deleteProductToCart } from '../../controllers/carritos.controllers.js';
import { createNewOrder } from '../../controllers/orders.controllers.js';
import auth from '../../middlewares/auth.js';


const router = Router();

router.get('/', auth, getCart);

//Ruta para modificar la dirección del envio
router.put('/', auth, updateAddressCart);

//Ruta para agregar productos al carrito (se deben enviar por formulario el id del producto y la cantidad)
router.post('/', auth, addProductToCart);

//Ruta para eliminar el carrito de compras
router.delete('/', auth, deleteCart);

//Ruta para actualizar la cantidad de un producto en el carrito
router.put('/:id', auth, updateProductoToCart);

//Ruta para eliminar un producto en el carrito
router.delete('/:id', auth, deleteProductToCart);

//Ruta para terminar la compra y generar la orden
router.post('/orden', auth, createNewOrder);

export default router;