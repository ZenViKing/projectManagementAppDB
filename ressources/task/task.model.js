import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema({
    name: String,
    desc: String,
    assignedUsers: Array,
    status: String
});

export const Task = mongoose.model('task', taskSchema);