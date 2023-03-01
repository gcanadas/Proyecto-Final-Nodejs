import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRouters from './routers/api/index.js';
import config from './config.js';
import cors from 'cors';
import logger from './utils/logger.js';
import { engine } from 'express-handlebars';
import MongoConnection from './connections/mongodb.js';
import { initSocket } from './connections/socket.js';


const app = express();

const mongoConnection = new MongoConnection()
mongoConnection.connect()

const PORT = config.PORT;
const ENV = config.NODE_ENV;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouters);

app.use(function (err, req, res, next) {
  console.error(err)
  res.status(err.status || 500).json(err);
});

app.use((req, res) => {
    res.status(404).json({
        error: -2,
        descripcion: `ruta ${req.originalUrl} método ${req.method} no implementada`,
    });
});

app.get('*', function (req, res) { 
  logger.warn(`Solicitud de Ruta inexistente - Ruta: ${req.originalUrl} - Metodo: ${req.method}`)
  res.status(404).send(`${req.originalUrl} not found`);
})

const server = app.listen(PORT, () => {
  logger.info(
    `Servidor http esta escuchando en el puerto ${server.address().port}`
  );
  logger.info(`http://localhost:${server.address().port}`);
  logger.info(`Environment:${ENV}`);
});

initSocket(server)

server.on("error", error => logger.error(`Error en servidor ${error}`));
