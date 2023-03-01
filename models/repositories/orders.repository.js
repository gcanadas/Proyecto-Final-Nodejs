import Order from '../order.model.js'
import OrdersDto from '../dto/orders.dto.js'
import OrdersDaoFactory from '../daos/ordersDaoFactory.js'

export default class OrdersRepository {
    constructor() {
        this.dao = OrdersDaoFactory.getOrderDao()
    }

    async create(order) {
        const orderDto = await this.dao.save(new OrdersDto(order))
        return new Order(orderDto)
    }

    async countOrders() {
        const count = await this.dao.countOrders()
        return count
    }

}