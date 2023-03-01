import nodemailer from 'nodemailer';
import logger from './logger.js';
import config from '../config.js'

const transporter = nodemailer.createTransport({
    host: config.NODEMAILER_HOST,
    port: config.NODEMAILER_PORT,
    auth: {
        user: config.NODEMAILER_EMAIL,
        pass: config.NODEMAILER_PASS,
    },
})

export default async function sendMail(email, subject, body) {
    const opts ={
        from: 'Tienda de Videojuegos SpaceX',
        to: email,
        subject,
        html: body,
    }

    try {
        const result = await transporter.sendMail(opts)
        logger.info(`Resultado de envio de email: ${result}`)
    } catch (error) {
        logger.error(`Error en envio de email: ${error.message}`)
    }
}