import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
    email: { type: String, require: true, unique: true, index: true, validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ },
    password: { type: String, require: true },
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    phone: { type: Number, require: true }
});

export default mongoose.model("Usuario", userModel);