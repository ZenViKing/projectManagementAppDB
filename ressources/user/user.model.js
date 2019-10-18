import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    function: String
});

export const User = mongoose.model('user', userSchema);