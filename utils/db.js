import mongoose from 'mongoose';
export const connect = (url = 'mongodb://@localhost:27017/projectplanner', opts={}) => {
    return mongoose.connect(
        url,
        {...opts, useUnifiedTopology: true, useNewUrlParser:true}
    );
};