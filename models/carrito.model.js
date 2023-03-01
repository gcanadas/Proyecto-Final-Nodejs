export default class Carrito {
    #id
    #email
    #timestamp
    #address
    #productos
    constructor(carritoDto) {
        this.id = carritoDto.id
        this.email = carritoDto.email
        this.timestamp = carritoDto.timestamp
        this.address = carritoDto.address
        this.productos = carritoDto.productos
    }
    set id(value) {
        this.#id = value
    }
    get id() {
        return this.#id
    }
    set email(value) {
        this.#email = value
    }
    get email() {
        return this.#email
    }
    set timestamp(value) {
        this.#timestamp = value
    }
    get timestamp() {
        return this.#timestamp
    }
    set address(value) {
        this.#address = value
    }
    get address() {
        return this.#address
    }
    set productos(value) {
        this.#productos = value
    }
    get productos() {
        return this.#productos
    }
}