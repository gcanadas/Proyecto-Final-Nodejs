import config from '../../config.js'
import CarritosMongoDao from './carritos/carritosMongo.dao.js'

class CarritosDaoFactory {

    static getCarritoDao(){
        switch (config.TIPO_PERSISTENCIA) {
            case 'file':
                return new Error('Method not implemented')
            case 'mongo':
                return CarritosMongoDao.getInstance()
            default:
                return new Error('Method not implemented')
        }
    }
}

export default CarritosDaoFactory