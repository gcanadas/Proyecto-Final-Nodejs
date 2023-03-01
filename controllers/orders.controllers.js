import OrdersService from '../services/orders.services.js'

export async function createNewOrder(req, res, next) {
    try {
        const order = await OrdersService.createNewOrder(req.user)
        return res.status(201).json({ message: 'Orden generada correctamente', order})
    } catch (error) {
        next(error)
    }
}

export default {
    createNewOrder,
}