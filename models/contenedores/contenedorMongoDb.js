import mongoose from 'mongoose';
import config from '../../config.js';
import logger from "../../utils/logger.js";


class ContenedorMongoDb {
    constructor(model) {
        this.collection = model;
    }

    async connect() {
        try {
            await mongoose.connect(config.mongoDB.URI);
            logger.info('Conectado correctamente a la Base de datos MongoDb');
        } catch (err) {
            logger.error('Error en el metodo connect de ContenedorMongoDb', err.message);
        }
    }

    /*Metodo para obtener todos los elementos del archivo*/
    async getAll () {
        try {
            const data = await this.collection.find({});
            return data;
        } catch(err) {
            logger.error('Error en el metodo getAll de ContenedorMongoDb', err.message);
        }
    }
    /*Metodo para obtener un elemento del archivo por id*/
    async getById (id) {
        try {
            const data = await this.collection.find({ _id: id });
            if (data.length === 0) {
                logger.warn(`No se encontraron elementos con el id: ${id} en la base de datos`);
                return [];
            }
            return data[0];
        } catch(err) {
            logger.error('Error en el metodo getById de ContenedorMongoDb', err.message);
        }
    }

    /*Metodo para guardar un elementos en el archivo*/
    async save (element) {
        try {
            const user = this.collection(element);
            const result = await user.save()
            return result
        } catch (err) {
            console.log(err);
            logger.error('Error en el metodo save de ContenedorMongoDb');
        }
    }

    /*Metodo para eliminar un elementos en el archivo por el id*/
    async deleteById(id) {
        try {
            const data = await this.collection.findOne({ _id: id })
            if (!data) {
                logger.warn(`No se encontraron elementos con el id: ${id} en la base de datos`);
                return []
            }
            await this.collection.deleteOne({ _id: id })
            return data
        } catch(err) {
            logger.error('Error en el metodo deleteById de ContenedorMongoDb', err.message);
        }
    }

    /*Metodo para borrar todos los elementos en el archivo*/
    async deleteAll() {
        try {
            await this.collection.deleteMany({});
            return
        } catch(err) {
            logger.error('Error en el metodo deleteAll de ContenedorMemoria', err.message);
        }
    }

    /*Metodo para actualizar un elemento en el archivo*/
    async updateById(id, element){
        try {
            const data = await this.collection.find({ _id: id });
            if(data.length === 0) {
                logger.warn(`No se encontraron elementos con el id: ${id} en la base de datos`);
                return []
            }
            const result = await this.collection.updateOne({ _id: id },{ $set: element });        
            return result
        } catch(err) {
            logger.error('Error en el metodo updateByID de ContenedorMongoDB', err.message);
        }
    }
}

export default ContenedorMongoDb;