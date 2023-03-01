import { Router } from 'express';
import userRouter from './userRouter.js';
import carritoRouter from './carritoRouter.js';
import productosRouter from './productosRouter.js';
import chatRouter from './chatRouter.js';
import configRouter from './configRouter.js';

const router = Router();

router.use("/", userRouter);
router.use("/carrito", carritoRouter);
router.use("/productos", productosRouter);
router.use("/chat", chatRouter);
router.use("/config", configRouter)

export default router;