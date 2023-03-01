import { verifyJWT } from '../utils/auth.js'
import config from '../config.js'

export default async (req, res, next) => {
    const { headers: { authorization } } = req
    if (!authorization) {
        return res.status(401).json({ message: 'Para ingresar debe loguearse con cuenta de administrador' })
    }
    const accessToken = authorization.split(' ')[1]
    try {
        req.user = await verifyJWT(accessToken)
        if(req.user.email !== config.ADMIN_EMAIL){
            return res.status(401).json({ message: 'Para ingresar debe loguearse con cuenta de administrador' })
        }
        next()
    } catch (error) {
        console.log('error', error.message);
        next(error)
    }
}