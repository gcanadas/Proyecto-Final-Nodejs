import config from '../../config.js'
import OrdersMongoDao from './orders/ordersMongo.dao.js';

class OrdersDaoFactory {

    static getOrderDao(){
        switch (config.TIPO_PERSISTENCIA) {
            case 'file':
                throw new Error('Method not implemented')
            case 'mongo':
                return OrdersMongoDao.getInstance()
            default:
                throw new Error('Method not implemented')
        }
    }
}

export default OrdersDaoFactory