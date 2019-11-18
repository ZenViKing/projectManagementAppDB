import { Task } from './task.model';

export const createTask = async (req, res) => {
    try {
        const task = await Task.create(
            { ...req.body, project: req.params.id }
        );
        res.status(201).json({ tasks: task });
    } catch (err) {
        console.error(err);
        res.status(400).end();
    }
}

export const getAllTasks = async (req, res) => {
    try {
        // const tasks = await Task.find({project:req.params.id});
        const tasks = await Task.find();
        if (!tasks) return res.status(400).end();
        res.status(200).json(tasks);
    } catch (err) {
        console.error(err);
        res.status(400).end();
    }
}

export const getOne = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) return res.status(400).end();
        res.status(200).json({ tasks: task });
    } catch (err) {
        console.error(err);
        res.status(400).end();
    }
}

export const updateOne = async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedTask) return res.status(400).end();
        res.status(200).json({ tasks: updatedTask });
    } catch (err) {
        console.error(err);
        res.status(400).end();
    }
}

export const deleteOne = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete({ _id: req.params.id });
        if (!deletedTask) return res.status(400).end();
        res.status(200).json({ tasks: deletedTask });
    } catch (err) {
        console.error(err);
        res.status(400).end();
    }
}