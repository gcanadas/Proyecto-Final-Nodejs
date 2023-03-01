import mongoose, { Schema } from 'mongoose';

const mensajeModel = new Schema({
    email: { type: String, required: true },
    tipo: { type: String, required: true },
    timestamp: { type: String, required: true },
    mensajeBody: { type: String, required: true },
});

export default mongoose.model('Mensaje', mensajeModel);