import { Router } from 'express';
import { createTask, getAllTasks, getOne, updateOne, deleteOne } from './task.controller';

const router = Router({ mergeParams: true });

router
    .route('/')
    .get(getAllTasks)
    .post(createTask)
router
    .route('/:id')
    .get(getOne)
    .patch(updateOne)
    .delete(deleteOne)


export default router;