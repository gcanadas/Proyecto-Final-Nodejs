import config from '../../config.js'
import UsersMongoDao from './usuarios/usersMongo.dao.js';

class UsersDaoFactory {

    static getUserDao(){
        switch (config.TIPO_PERSISTENCIA) {
            case 'file':
                return new Error('Method not implemented')
            case 'mongo':
                return UsersMongoDao.getInstance()
            default:
                return new Error('Method not implemented')
        }
    }
}

export default UsersDaoFactory