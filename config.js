import dotenv from 'dotenv';
dotenv.config();

export default {
    fileSystem: {
        path: './DB'
    },
    mongoDB: {
      URI: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,
      URI_SESSION: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.dlq60k1.mongodb.net/sessions?retryWrites=true&w=majority`,
    },
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    EXPIRATION_TIME: process.env.EXPIRATION_TIME || '24h',
    TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'mongo',
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8080,
    NODEMAILER_HOST: process.env.NODEMAILER_HOST,
    NODEMAILER_PORT: process.env.NODEMAILER_PORT,
    NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
    NODEMAILER_PASS: process.env.NODEMAILER_PASS,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  }