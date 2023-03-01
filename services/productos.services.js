import pick from 'lodash/pick.js'
import ProductosRepository from '../models/repositories/productos.repository.js'
import Producto from '../models/producto.model.js'
import ProductosDto from '../models/dto/productos.dto.js'

const repository = new ProductosRepository()

export async function create(data) {
  const dataClean = pick(data, ['title','thumbnail','price','description','stock','category'])
  const producto = await repository.create(new Producto(dataClean))
  return new ProductosDto(producto)
}

export async function getAll() {
  const productos = await repository.getAll()
  return productos.map(producto => new ProductosDto(producto))
}

export async function getById(id) {
  const producto = await repository.getById(id)
  return new ProductosDto(producto)
}

export async function getByCategory(categoria) {
  const productos = await repository.getByCategory(categoria)
  return productos.map(producto => new ProductosDto(producto))
}

export async function updateById(id, data) {
  const dataClean = pick(data, ['title','thumbnail','price','description','stock','category'])
  const producto = await repository.updateById(id, new Producto(dataClean))
  return new ProductosDto(producto)
}

export async function deleteById(id) {
  const producto = await repository.deleteById(id)
  return new ProductosDto(producto)
}

export default {
  create,
  getAll,
  getById,
  getByCategory,
  updateById,
  deleteById,
}