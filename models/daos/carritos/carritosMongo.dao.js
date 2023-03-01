import ContenedorMongoDb from '../../contenedores/contenedorMongoDb.js'
import CartModel from '../../model/carritos.js'
import logger from '../../../utils/logger.js'
import CarritosDto from '../../dto/carritos.dto.js'

let carritoInstance = null;

class CarritosMongoDao extends ContenedorMongoDb {
    constructor() {
        super(CartModel);
    }
    /*Metodo para crear un nuevo carrito*/
    async createCart(user) {
        try {
            let cart = {}
            cart['email'] = user.email
            cart['timestamp'] = new Date().toLocaleString()
            cart['address'] = user.address || 'Sin dirección registrada'
            cart['productos'] = []
            const result = await this.save(cart)
            return new CarritosDto(result)
        } catch (error) {
            logger.error('Error en el metodo createCart de CarritosMongoDao', error.message)
        }
    }
    /*Metodo para agregar producto en el carrito*/
    async updateCart(email, cart) {
        try {
            const data = await this.collection.find({ email: email })
            if(data.length === 0) {
                logger.warn(`No se encontro ningun carrito con el email: ${email} en la base de datos`)
                return []
            }
            const result = await this.collection.updateOne({ email: email },{ $set: cart })
            return new CarritosDto(cart)
        } catch(error) {
            logger.error('Error en el metodo updateCart de CarritosMongoDao', error.message)
        }
    }
    //Metodo para obtener un carrito a partir del email del usuario
    async getCart(email) {
        try {
            const cart = await this.collection.findOne({ email: email })
            if(!cart) {
                return []
            }
            return new CarritosDto(cart)
        } catch (error) {
            logger.error('Error en el metodo getCart de CarritosMongoDao', error.message)
        }
    }
    /*Metodo para eliminar los productos del carrito*/
    async deleteCart(email) {
        try {
            const data = await this.collection.findOne({ email: email })
            if (!data) {
                logger.warn(`No se encontro ningun carrito con el email: ${email} en la base de datos`)
                return []
            }
            await this.collection.deleteOne({ email: email })
            return data
        } catch(error) {
            logger.error('Error en el metodo deleteCart de CarritosMongoDao', error.message)
        }
    }

    static getInstance(){
        if (!carritoInstance) {
            carritoInstance = new CarritosMongoDao()
        }
        return carritoInstance;
    }
}
export default CarritosMongoDao;