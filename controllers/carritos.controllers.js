import CarritosService from '../services/carritos.services.js'

export async function getCart(req, res, next) {
    try {
        const cart = await CarritosService.getCart(req.user)
        return res.status(200).json({ message: 'Carrito obtenido/generado correctamente', cart }) 
    } catch (error) {
        next(error)
    }
}

export async function updateAddressCart(req, res, next) {
    try {
        const cart = await CarritosService.updateAddressCart(req.body.address, req.user.email)
        if(!cart) {
            return res.status(404).json({message: 'No se pudo actualizar la dirección del envio'})
        }
        return res.status(200).json({ message: 'Se actualizo la dirección del envio correctamente', cart }) 
    } catch (error) {
        next(error)
    }
}

export async function addProductToCart(req, res, next) {
    try {
        const cart = await CarritosService.addProductToCart(req.body, req.user.email)
        if(!cart) {
            return res.status(404).json({message: 'No se pudo encontrar el producto en la base de datos'})
        }
        return res.status(201).json({ message: 'Se agrego el producto al carrito correctamente', cart })
    } catch (error) {
        next(error)
    }
}

export async function deleteCart(req, res, next) {
    try {
        const cart = await CarritosService.deleteCart(req.user.email)
        return res.status(200).json({ message: 'Se elimino el carrito correctamente', cart }) 
    } catch (error) {
        next(error)
    }
}

export async function updateProductoToCart(req, res, next) {
    try {
        const cart = await CarritosService.updateProductoToCart(req.params.id, req.body, req.user.email)
        if(!cart) {
            return res.status(404).json({message: 'No se pudo actualizar el carrito'})
        }
        return res.status(200).json({ message: 'Se actualizo el producto correctamente', cart }) 
    } catch (error) {
        next(error)
    }
}

export async function deleteProductToCart(req, res, next) {
    try {
        const cart = await CarritosService.deleteProductToCart(req.params.id, req.user.email)
        if(!cart) {
            return res.status(404).json({message: 'No se pudo eliminar el producto del carrito'})
        }
        return res.status(200).json({ message:'Se elimino correctamente el producto del carrito', 'Producto eliminado': cart }) 
    } catch (error) {
        next(error)
    }
}

export default {
    getCart,
    updateAddressCart,
    addProductToCart,
    deleteCart,
    updateProductoToCart,
    deleteProductToCart,
}