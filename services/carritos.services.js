import pick from 'lodash/pick.js'
import CarritosRepository from '../models/repositories/carritos.repository.js'
import Carrito from '../models/carrito.model.js'
import CarritosDto from '../models/dto/carritos.dto.js'
import { getById } from './productos.services.js'

const repository = new CarritosRepository()

export async function getCart(user) {
  let cart = await repository.getCart(user.email)
  let carritoDto = new CarritosDto(cart)
  if(carritoDto.id === undefined ){
    cart = await repository.createCart(user)
  }
  return carritoDto
}

//Este servicio se encarga de actualizar la dirección del envio
export async function updateAddressCart(address, email) {
  let cart = await repository.getCart(email)
  cart.address = address
  const newCart = await repository.updateCart(new Carrito(cart), email);
  return new CarritosDto(newCart);
}

//Este servicio agrega un producto a partir de su id en el carrito
export async function addProductToCart(data, email) {
  const producto = await getById(data.id)
  if(producto.id === undefined) {
    return false
  }
  const dataClean = pick(producto, ['id','title','price'])
  dataClean['quantity'] = parseInt(data.quantity)
  let cart = await repository.getCart(email)
  let carritoDto = new CarritosDto(cart)
  let cartProductos = carritoDto.productos;
  //Se detecta si ya existe ese producto en el carrito y se elimina
  if(carritoDto.productos.some((producto) => producto.id.toString() === data.id)){
    cartProductos = carritoDto.productos.filter((product) => product.id.toString() !== data.id);
    cartProductos.push(dataClean);
    carritoDto = {...carritoDto, productos: cartProductos};
    const newCart = await repository.updateCart(new Carrito(carritoDto), email)
    return new CarritosDto(newCart)
  }
  cartProductos.push(dataClean);
  carritoDto = {...carritoDto, productos: cartProductos};
  const newCart = await repository.updateCart(new Carrito(carritoDto), email)
  return new CarritosDto(newCart)
}

//Este servicio se encarga de eliminar el carrito
export async function deleteCart(email) {
  const cart = await repository.deleteCart(email)
  return new CarritosDto(cart)
}

//Este servicio se encarga de actualizar la cantidad de un producto en el carrito
export async function updateProductoToCart(id, data, email) {
  let cart = await repository.getCart(email)
  if(cart.productos.some((product) => product.id.toString() === id)){
    const index = cart.productos.findIndex((product) => product.id === id)
    cart.productos[index]['quantity'] = data.quantity
    const newCart = await repository.updateCart(new Carrito(cart), email);
    return new CarritosDto(newCart);
  }
  return false;
  }

//Este servicio elimina un producto del carrito
export async function deleteProductToCart(id, email) {
  let cart = await repository.getCart(email)
  if(cart.productos.some((product) => product.id.toString() === id)){
    const productFilter = cart.productos.filter((product) => product.id.toString() !== id);
    cart = {...cart, productos: productFilter};
    const newCart = await repository.updateCart(new Carrito(cart), email);
    return new CarritosDto(newCart);
  }
  return false;
}


export default {
  getCart,
  updateAddressCart,
  addProductToCart,
  deleteCart,
  updateProductoToCart,
  deleteProductToCart,
}