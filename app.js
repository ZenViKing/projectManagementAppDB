import express from 'express';
import {connect} from './utils/db';
import userRouter from './ressources/user/user.router';

const app = express();

app.use('api/users', userRouter);

const start = async () => {
    try{
        await connect()
        app.listen(8001,()=>{
            console.log('REST API listening on port 8001')
        })
    } catch(err){
        throw err;
    }
}
start();