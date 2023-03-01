import mongoose, { Schema } from 'mongoose';

const cartModel = new Schema({
      email: { type: String, required: true, unique: true, index: true },
      timestamp: { type: String, required: true },
      address: { type: String, required: true },
      productos: { type: Array, required: true },
});

export default mongoose.model('Carrito', cartModel);