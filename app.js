import express from 'express';
import { connect } from './utils/db';
import { json, urlencoded } from 'body-parser';
import userRouter from './ressources/user/user.router';
import taskRouter from './ressources/task/task.router';
import projectRouter from './ressources/project/project.router';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/projects/:id/tasks', taskRouter);
app.use('/api/projects', projectRouter);

const start = async () => {
    try {
        await connect()
        app.listen(8001, () => {
            console.log('REST API listening on port 8001')
        })
    } catch (err) {
        throw err;
    }
}
start();