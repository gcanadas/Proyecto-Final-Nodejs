import mongoose, { Schema } from 'mongoose';

const productModel = new Schema({
    title: { type: String, required: true, unique: true, index: true},
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
});

export default mongoose.model('Producto', productModel)