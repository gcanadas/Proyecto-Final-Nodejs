import config from '../../config.js'
import MensajesMongoDao from './mensajes/mensajesMongo.dao.js';

class MensajesDaoFactory {

    static getMensajeDao(){
        switch (config.TIPO_PERSISTENCIA) {
            case 'file':
                throw new Error('Method not implemented')
            case 'mongo':
                return MensajesMongoDao.getInstance()
            default:
                throw new Error('Method not implemented')
        }
    }
}

export default MensajesDaoFactory