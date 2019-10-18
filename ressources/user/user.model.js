import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    function: String,
    idUser: Number
});

export const User = mongoose.model('user', userSchema);