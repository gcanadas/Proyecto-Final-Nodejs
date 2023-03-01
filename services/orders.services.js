import OrdersRepository from '../models/repositories/orders.repository.js'
import sendMail from '../utils/nodemailer.js'
import Order from '../models/order.model.js'
import OrdersDto from '../models/dto/orders.dto.js'
import { deleteCart, getCart } from './carritos.services.js'
import { bodyOrder } from '../utils/common.js'

const repository = new OrdersRepository()

export async function createNewOrder(user) {
    const carrito = await getCart(user)
    let orderNumber = await countOrders()
    const data = { items: carrito.productos, orderNumber: orderNumber + 1, timestamp: new Date().toLocaleString(), estado: 'generada', email: user.email }
    const order = await repository.create(new Order(data))
    let body = bodyOrder(order)
    await sendMail(user.email, `Nuevo pedido de ${user.firstname} ${user.lastname}`, body)
    deleteCart(user.email)
    return new OrdersDto(order)
}

export async function countOrders() {
    const cantOrders = await repository.countOrders()
    return cantOrders
}

export default {
    createNewOrder,
    countOrders,
}