import mongoose, { Schema } from 'mongoose';

const orderModel = new Schema({
    items: { type: Array, required: true },
    orderNumber: { type: Number, required: true },
    timestamp: { type: String, required: true },
    estado: { type: String, required: true },
    email: { type: String, required: true },
});

export default mongoose.model('Ordenes', orderModel);