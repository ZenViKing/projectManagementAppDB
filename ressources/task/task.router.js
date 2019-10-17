import { Router } from 'express';
import { createTask, getAllTasks } from './task.controller';

const router = Router();

router
    .route('/')
    .get(getAllTasks)
    .post(createTask)
router
    .route('/:id')
    

export default router;