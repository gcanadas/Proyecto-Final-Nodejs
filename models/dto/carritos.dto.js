export default class CarritosDto {
    constructor(carrito) {
        this.id = carrito.id
        this.email = carrito.email
        this.timestamp = carrito.timestamp
        this.address = carrito.address
        this.productos = carrito.productos
    }
}