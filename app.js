import express from 'express';
import {connect} from './utils/db';
import {json, urlencoded} from 'body-parser';
import userRouter from './ressources/user/user.router';
import taskRouter from './ressources/task/task.router';
import projectRouter from './ressources/project/project.router';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({extended:true}));

app.use('/api/users', userRouter);
<<<<<<< HEAD
app.use('/api/projects/:id/tasks', taskRouter);
// app.use('/api/tasks', taskRouter);

=======
// app.use('/api/projects/:id/tasks', taskRouter);
app.use('/api/tasks', taskRouter);
>>>>>>> 38554f44b81df904c318a189c630c880ed705faa
app.use('/api/projects', projectRouter);

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