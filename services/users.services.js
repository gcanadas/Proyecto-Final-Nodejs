import pick from 'lodash/pick.js'
import UsersRepository from '../models/repositories/user.repository.js'
import User from '../models/user.model.js'
import UsersDto from '../models/dto/users.dto.js'
import sendMail from '../utils/nodemailer.js'
import config from '../config.js'
import { bodyRegister } from '../utils/common.js'

const repository = new UsersRepository()

export async function get(query) {
  const users = await repository.get(query)
  return users.map(user => new UsersDto(user))
}

export async function getUser(email) {
  const user = await repository.getUser(email)
  return new UsersDto(user)
}

export async function create(data) {
  const dataClean = pick(data, ['password','email','firstname','lastname','phone'])
  const user = await repository.create(new User(dataClean))
  const body = bodyRegister(data)
  await sendMail(config.ADMIN_EMAIL,'Nuevo Registro', body)
  return new UsersDto(user)
}

export async function getById(id) {
  const user = await repository.getById(id)
  return new UsersDto(user)
}

export async function updateById(id, data) {
  const dataClean = pick(data, ['password','email','firstname','lastname','phone'])
  const user = await repository.updateById(id, new User(dataClean))
  return new UsersDto(user)
}

export async function deleteById(id) {
  const user = await repository.deleteById(id)
  return new UsersDto(user)
}

export default {
  get,
  getUser,
  create,
  getById,
  updateById,
  deleteById,
}