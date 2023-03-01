import config from "../config.js"

export async function getConfig(req, res, next) {
    const data = {
        PORT: config.PORT,
        NODE_ENV: config.NODE_ENV,
        TIPO_PERSISTENCIA: config.TIPO_PERSISTENCIA,
        PRIVATE_KEY: config.PRIVATE_KEY,
        EXPIRATION_TIME: config.EXPIRATION_TIME,
        NODEMAILER_HOST: config.NODEMAILER_HOST,
        NODEMAILER_PORT: config.NODEMAILER_PORT,
        NODEMAILER_EMAIL: config.NODEMAILER_EMAIL,
        NODEMAILER_PASS: config.NODEMAILER_PASS,
        ADMIN_EMAIL: config.ADMIN_EMAIL,
        MONGODB_URI: config.mongoDB.URI,
    }

    res.render('config', data)
}

export default {
    getConfig,
}