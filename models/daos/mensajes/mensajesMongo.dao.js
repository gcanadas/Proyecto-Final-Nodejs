import logger from '../../../utils/logger.js';
import MensajeModel from '../../model/mensajes.js';
import MensajesDto from '../../dto/mensajes.dto.js';
import ContenedorMongoDb from '../../contenedores/contenedorMongoDb.js';

let mensajeInstance = null;

class MensajesMongoDao extends ContenedorMongoDb {
    constructor() {
        super(MensajeModel);
    }
    /*Metodo para contar la cantidad de documentos */
    async getByEmail(email) {
        try {
            const data = await this.collection.find({ email: email });
            if (!data) {
                logger.warn(`No se encontraron elementos con el email: ${email} en la base de datos`);
                return [];
            }
            return data.map(mensajes => new MensajesDto(mensajes));
        } catch (error) {
            logger.error('Error en el metodo getByEmail de MensajesMongoDao', error.message);
        }
    }
    static getInstance(){
        if (!mensajeInstance) {
            mensajeInstance = new MensajesMongoDao();
        }
        return mensajeInstance;
    }
}
export default MensajesMongoDao;