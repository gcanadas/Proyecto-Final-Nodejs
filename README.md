# Proyecto Final de Curso de Programación Backend

## Instalación

Primero debemos crear un archivo en la raiz proyecto con el nombre `.env` con el siguiente contenido
```
#Dependencias de servidor
PORT=8080
NODE_ENV=development
TIPO_PERSISTENCIA=mongo
PRIVATE_KEY=(key para la encriptación de los archivos)
EXPIRATION_TIME=(Tiempo de expiración de los token)

NODEMAILER_HOST=(host del mail de notificaciones)
NODEMAILER_PORT=(puerto del mail de notificaciones)
NODEMAILER_EMAIL=(email de notificaciones)
NODEMAILER_PASS=(pass del mail de notificaciones)
ADMIN_EMAIL=(mail del administrador).

#Dependencias de MongoDB
MONGODB_USER
MONGODB_PASS
MONGODB_HOST
MONGODB_DB
```

## Testing

Para testear el funcionamiento del código importar el archivo `postman_collection.json` en [Postman](https://www.postman.com/). 

## Ejecutar en producción


```sh
npm start
```

## Ejecutar en desarrollo


```sh
npm run dev
```