import ProductosService from '../services/productos.services.js'

export async function create(req, res, next) {
    try {
        const productos = await ProductosService.create(req.body)
        return res.status(201).json(productos)
    } catch (error) {
        next(error)
    }
}

export async function getAll(req, res, next) {
    try {
        const productos = await ProductosService.getAll()
        if(productos.length === 0) {
            return res.status(200).json({message: 'No hay productos disponibles'})
        }
        return res.status(200).json(productos) 
    } catch (error) {
        next(error)
    }
}

export async function getById(req, res, next) {
    try {
        const productos = await ProductosService.getById(req.params.id)
        if(!productos.id) {
            return res.status(404).json({message: `No se encontro ningun producto con el id ${req.params.id}`})
        }
        return res.status(200).json(productos) 
    } catch (error) {
        next(error)
    }
}

export async function getByCategory(req, res, next) {
    try {
        const productos = await ProductosService.getByCategory(req.params.categoria)
        if(productos.length === 0) {
            return res.status(200).json(`No hay productos disponibles en la categoria ${req.params.categoria}`)
        }
        return res.status(200).json(productos) 
    } catch (error) {
        next(error)
    }
}

export async function updateById(req, res, next) {
    try {
        const productos = await ProductosService.updateById(req.params.id, req.body)
        return res.status(200).json(productos) 
    } catch (error) {
        next(error)
    }
}

export async function deleteById(req, res, next) {
    try {
        const productos = await ProductosService.deleteById(req.params.id)
        return res.status(200).json(productos) 
    } catch (error) {
        next(error)
    }
}

export default {
    create,
    getAll,
    getById,
    getByCategory,
    updateById,
    deleteById,
}