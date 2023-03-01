import UserModel from '../../model/usuarios.js';
import ContenedorMongoDb from '../../contenedores/contenedorMongoDb.js';
import { nullUser, translateUser } from '../../../utils/common.js';

let userInstance = null;

class UsersMongoDao extends ContenedorMongoDb {
    constructor() {
        super(UserModel);
    }
    /*Metodo para obtener usuario por el email */
    async getUser(email) {
        const user = await this.collection.findOne({ email: email })
        if(!user) {
            return nullUser()
        }
        return translateUser(user)
    }
    static getInstance(){
        if (!userInstance) {
            userInstance = new UsersMongoDao();
        }
        return userInstance;
    }
}
export default UsersMongoDao;