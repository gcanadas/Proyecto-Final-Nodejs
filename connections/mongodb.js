import mongoose from 'mongoose'
import config from '../config.js'
import logger from '../utils/logger.js'

export default class MongoConnection {
    async connect(){
        try {
            await mongoose.connect(config.mongoDB.URI);
            logger.info('Conectado correctamente a la Base de datos MongoDb');
        } catch (err) {
            logger.error('Error en el metodo connect de ContenedorMongoDb', err.message);
        }
    }
}