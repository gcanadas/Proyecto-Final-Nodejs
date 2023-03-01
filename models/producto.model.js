export default class Producto {
    #id
    #title
    #thumbnail
    #price
    #description
    #stock
    #category
    constructor(productoDto) {
        this.id = productoDto.id
        this.title = productoDto.title
        this.thumbnail = productoDto.thumbnail
        this.price = productoDto.price
        this.description = productoDto.description
        this.stock = productoDto.stock
        this.category = productoDto.category
    }
    set id(value) {
        this.#id = value
    }
    get id() {
        return this.#id
    }
    set title(value) {
        this.#title = value
    }
    get title() {
        return this.#title
    }
    set thumbnail(value) {
        this.#thumbnail = value
    }
    get thumbnail() {
        return this.#thumbnail
    }
    set price(value) {
        this.#price = value
    }
    get price() {
        return this.#price
    }
    set description(value) {
        this.#description = value
    }
    get description() {
        return this.#description
    }
    set stock(value) {
        this.#stock = value
    }
    get stock() {
        return this.#stock
    }
    set category(value) {
        this.#category = value
    }
    get category() {
        return this.#category
    }
}