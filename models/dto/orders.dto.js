class OrdersDto {
    constructor(order) {
        this.id = order.id || order._id
        this.items = order.items
        this.orderNumber = order.orderNumber
        this.timestamp = order.timestamp
        this.estado = order.estado
        this.email = order.email
    }
}

export default OrdersDto;