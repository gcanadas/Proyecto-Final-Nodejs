export function translateUser(userDao) {
    return {
        id: userDao.id || userDao._id,
        password: userDao.password,
        email: userDao.email,
        firstname: userDao.firstname,
        lastname: userDao.lastname,
        phone: userDao.phone,
    }
}

export function nullUser() {
    return {
        id: null,
        password: null,
        email: null,
        firstname: null,
        lastname: null,
        phone: null,
    }
}

export function bodyRegister(user) {
    let body = `<div>
                    <h3>Información de nuevo registro</h3>
                    <ul>
                        <li>Nombre:${user.firstname}</li>
                        <li>Apellido:${user.lastname}</li>
                        <li>Email:${user.email}</li>
                        <li>Direccion:${user.address}</li>
                        <li>Telefono:${user.phone}</li>
                    </ul> 
                </div>`
    return body
}

export function bodyOrder(order) {
    let precioTotal = 0
    order.items.forEach((item) => {
        precioTotal = precioTotal + (item.price * parseInt(item.quantity))
    })
    let body = `<div>
                    <h3>Nuevo pedido generado con exito</h3>
                    <p>Número de orden: ${order.orderNumber}</p>
                    <p>Fecha de orden: ${order.timestamp}</p>
                    <h4>Detalle de la compra:</h4>
                    <ul>
                    ${order.items.map((item) => {
                        return `<li>${item.title} - Cantidad: ${item.quantity} - 
                        Precio unitario: $${item.price} - Precio final: ${parseInt(item.quantity) * item.price}</li>`
                    })}
                    </ul>
                    <h4>Total de la compra: ${precioTotal} </h4>
                    <h4>Muchas gracias por su compra</h4>
                </div>`
return body
}