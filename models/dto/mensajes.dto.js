export default class MensajesDto {
    constructor(mensaje) {
        this.id = mensaje.id || mensaje._id
        this.email = mensaje.email
        this.tipo = mensaje.tipo
        this.timestamp = mensaje.timestamp
        this.mensajeBody = mensaje.mensajeBody
    }
}