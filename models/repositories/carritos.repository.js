import Carrito from '../Carrito.model.js'
import CarritosDto from '../dto/Carritos.dto.js'
import CarritosDaoFactory from '../daos/CarritosDaoFactory.js'

export default class CarritosRepository {
    constructor() {
        this.dao = CarritosDaoFactory.getCarritoDao()
    }

    async createCart(user) {
        const carritoDto = await this.dao.createCart(user)
        return new Carrito(carritoDto)
    }

    async getCart(email) {
        const carritoDto = await this.dao.getCart(email)
        return new Carrito(carritoDto)
    }

    async updateCart(cart, email) {
        const carritoDto = await this.dao.updateCart(email, new CarritosDto(cart))
        return new Carrito(carritoDto)
    }

    async deleteCart(email) {
        const carritoDto = await this.dao.deleteCart(email)
        return new Carrito(carritoDto)
    }
}