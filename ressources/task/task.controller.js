import { Task } from './task.model';

export const createTask = async (req, res) => {
    try {
        const task = await Task.create({...req.body});
        res.status(201).json({tasks : task});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if(!tasks) return res.status(400).end();
        res.status(200).json({tasks});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}