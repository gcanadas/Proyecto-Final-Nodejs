export default class Order {
    #id
    #items
    #orderNumber
    #timestamp
    #estado
    #email
    constructor(orderDto) {
        this.id = orderDto.id
        this.items = orderDto.items
        this.orderNumber = orderDto.orderNumber
        this.timestamp = orderDto.timestamp
        this.estado = orderDto.estado
        this.email = orderDto.email
    }
    set id(value) {
        this.#id = value
    }
    get id() {
        return this.#id
    }
    set items(value) {
        this.#items = value
    }
    get items() {
        return this.#items
    }
    set orderNumber(value) {
        this.#orderNumber = value
    }
    get orderNumber() {
        return this.#orderNumber
    }
    set timestamp(value) {
        this.#timestamp = value
    }
    get timestamp() {
        return this.#timestamp
    }
    set estado(value) {
        this.#estado = value
    }
    get estado() {
        return this.#estado
    }
    set email(value) {
        this.#email = value
    }
    get email() {
        return this.#email
    }
}