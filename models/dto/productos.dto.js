export default class ProductoDto {
    constructor(producto) {
        this.id = producto.id
        this.title = producto.title
        this.thumbnail = producto.thumbnail
        this.price = producto.price
        this.description = producto.description
        this.stock = producto.stock
        this.category = producto.category
    }
}