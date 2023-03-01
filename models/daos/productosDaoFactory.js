import config from '../../config.js'
import ProductosMongoDao from './productos/productosMongo.dao.js';

class ProductosDaoFactory {

    static getProductoDao(){
        switch (config.TIPO_PERSISTENCIA) {
            case 'file':
                return new Error('Method not implemented')
            case 'mongo':
                return ProductosMongoDao.getInstance()
            default:
                return new Error('Method not implemented')
        }
    }
}

export default ProductosDaoFactory