import pick from 'lodash/pick.js'
import UserService from '../services/users.services.js'
import { encryptPassword, isValidPassword, generateToken, verifyJWT } from '../utils/auth.js'

export async function getUser(req, res, next) {
    return res.redirect('/productos',)
}

export async function loginUser(req, res, next) {
    try {
        const { body: { email, password } } = req
        const user = await UserService.getUser(email)
        if (!user.email) {
            return res.status(401).json({ message: 'El email o la contraseña no son correctas.' })
        }
        if (!isValidPassword(password, user.password)) {
            return res.status(401).json({ message: 'El email o la contraseña no son correctas.' })
        }
        res.json({ access_token: generateToken(pick(user, ['email','firstname','lastname','phone'])) })
    } catch (error) {
        next(error)
    }
}

export async function registerUser(req, res, next) {
    try {
        const { body: { password, passwordConfirmation, email, firstname, lastname, phone } } = req;
        let user = await UserService.getUser(email)
        if (user.email) {
            return res.status(422).json({ message: `El usuario ${email} ya existe.` })
        };
        let newUser = [];
        if (password === passwordConfirmation) {
            newUser = {
                password: encryptPassword(password),
                email,
                firstname,
                lastname,
                phone,
            };
        } else {
            return res.status(400).json({ 
                status: 400, 
                message: '¡Las contraseñas no coinciden, intenta nuevamente!',
            });
        };
        user = await UserService.create(newUser);
        return res.status(201).json({ access_token: generateToken(pick(user, ['email','firstname','lastname','phone'])) });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error,
        });
    }
}

export default {
    getUser,
    loginUser,
    registerUser,
}