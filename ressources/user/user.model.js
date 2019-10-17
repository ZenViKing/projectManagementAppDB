import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    fonction: String
});

export const User = mongoose.model('user', userSchema);