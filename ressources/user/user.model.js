import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const userSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    fonction: String,
    password: String,
    idUser: Number
});

//generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
  
//checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


export const User = mongoose.model('user', userSchema);