import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config.js'


export const encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10)
}

export const isValidPassword = (password, target) => {
    return bcrypt.compareSync(password, target)
}

export const generateToken = (user) => {
    const token = jwt.sign({ data: user }, config.PRIVATE_KEY, { expiresIn: config.EXPIRATION_TIME })
    return token
}

export const verifyJWT = (token) => new Promise((resolve, reject) => {
    jwt.verify(token, config.PRIVATE_KEY, (error, decoded) => {
        if (error) {
            console.log(error);
            return reject(error)
        }
        resolve(decoded.data)
    })
})