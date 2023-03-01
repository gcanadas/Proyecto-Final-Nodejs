import Producto from '../producto.model.js'
import ProductoDto from '../dto/productos.dto.js'
import ProductosDaoFactory from '../daos/productosDaoFactory.js'

export default class ProductosRepository {
    constructor() {
        this.dao = ProductosDaoFactory.getProductoDao()
    }

    async create(producto) {
        const productoDto = await this.dao.save(new ProductoDto(producto))
        return new Producto(productoDto)
    }

    async getAll() {
        const productosDto = await this.dao.getAll()
        return productosDto.map(productoDto => new Producto(productoDto))
    }

    async getById(id) {
        const productoDto = await this.dao.getById(id)
        return new Producto(productoDto)
    }

    async getByCategory(categoria) {
        const productosDto = await this.dao.getByCategory(categoria)
        return productosDto.map(productoDto => new Producto(productoDto))
    }
    
    async updateById(id, producto) {
        const productoDto = await this.dao.updateById(id, new ProductoDto(producto))
        return new Producto(productoDto)
    }

    async deleteById(id) {
        const productoDto = await this.dao.deleteById(id)
        return new Producto(productoDto)
    }
}