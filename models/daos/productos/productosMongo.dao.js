import logger from '../../../utils/logger.js';
import ProductModel from '../../model/productos.js';
import ContenedorMongoDb from '../../contenedores/contenedorMongoDb.js';

let productoInstance = null;

class ProductosMongoDao extends ContenedorMongoDb {
    constructor() {
        super(ProductModel);
    }
    /*Metodo para Crear un nuevo Producto */
    async newProduct(product) {
        try {
            product['timestamp'] = new Date().toLocaleString();
            await this.save(product);
        } catch (error) {
            logger.error('Error en el metodo newProduct de ProductosDaoMongoDb', error.message);
        }
    }
    async getByCategory(categoria) {
        try {
            const data = await this.collection.find({ category: categoria });
            if (!data) {
                logger.warn(`No se encontraron elementos con el id: ${id} en la base de datos`);
                return [];
            }
            return data;
        } catch (error) {
            logger.error('Error en el metodo getByCategory de ProductosDaoMongoDb', error.message);
        }
    }
    static getInstance(){
        if (!productoInstance) {
            productoInstance = new ProductosMongoDao();
        }
        return productoInstance;
    }
}
export default ProductosMongoDao;