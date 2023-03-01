import Mensaje from '../mensaje.model.js'
import MensajeDto from '../dto/mensajes.dto.js'
import MensajesDaoFactory from '../daos/mensajesDaoFactory.js'

export default class ChatsRepository {
    constructor() {
        this.dao = MensajesDaoFactory.getMensajeDao()
    }

    async create(producto) {
        const mensajeDto = await this.dao.save(new MensajeDto(producto))
        return new Mensaje(mensajeDto)
    }

    async getAll() {
        const mensajesDto = await this.dao.getAll()
        return mensajesDto.map(mensajeDto => new Mensaje(mensajeDto))
    }

    async getByEmail(email) {
        const mensajesDto = await this.dao.getByEmail(email)
        return mensajesDto.map(mensajeDto => new Mensaje(mensajeDto))
    }
}