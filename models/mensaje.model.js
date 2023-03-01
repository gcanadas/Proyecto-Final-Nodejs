export default class Mensaje {
    #id
    #email
    #tipo
    #timestamp
    #mensajeBody
    constructor(mensajeDto) {
        this.id = mensajeDto.id
        this.email = mensajeDto.email
        this.tipo = mensajeDto.tipo
        this.timestamp = mensajeDto.timestamp
        this.mensajeBody = mensajeDto.mensajeBody
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
    set tipo(value) {
        this.#tipo = value
    }
    get tipo() {
        return this.#tipo
    }
    set timestamp(value) {
        this.#timestamp = value
    }
    get timestamp() {
        return this.#timestamp
    }
    set mensajeBody(value) {
        this.#mensajeBody = value
    }
    get mensajeBody() {
        return this.#mensajeBody
    }
}