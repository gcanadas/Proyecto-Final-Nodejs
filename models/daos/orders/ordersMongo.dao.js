import OrderModel from '../../model/orders.js';
import ContenedorMongoDb from '../../contenedores/contenedorMongoDb.js';

let orderInstance = null;

class OrdersMongoDao extends ContenedorMongoDb {
    constructor() {
        super(OrderModel);
    }
    /*Metodo para contar la cantidad de documentos */
    async countOrders() {
        const count = await OrderModel.countDocuments({})
        return count
    }
    static getInstance(){
        if (!orderInstance) {
            orderInstance = new OrdersMongoDao();
        }
        return orderInstance;
    }
}
export default OrdersMongoDao;