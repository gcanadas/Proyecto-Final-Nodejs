import User from '../user.model.js'
import UsersDto from '../dto/Users.dto.js'
import UsersDaoFactory from '../daos/usersDaoFactory.js'

export default class UsersRepository {
    constructor() {
        this.dao = UsersDaoFactory.getUserDao()
    }

    async get(query) {
        const userDto = await this.dao.getAll(query)
        return userDto.map(userDto => new User(userDto))
    }

    async getUser(email) {
        const userDto = await this.dao.getUser(email)
        return new User(userDto)
    }

    async create(user) {
        const userDto = await this.dao.save(new UsersDto(user))
        return new User(userDto)
    }


    async getById(id) {
        const userDto = await this.dao.getById(id)
        return new User(userDto)
    }
    
    async updateById(id, user) {
        const userDto = await this.dao.updateById(id, new UsersDto(user))
        return new User(userDto)
    }

    async deleteById(id) {
        const userDto = await this.dao.deleteById(id)
        return new User(userDto)
    }
}