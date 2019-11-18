import { Router } from 'express';
import { createUser, list, getOne, updateOne, deleteOne, login} from './user.controller';

const router = Router();

router
    .route('/')
    .get(list)
    .post(createUser)
    
router
    .route('/:id')
    .get(getOne)
    .patch(updateOne)
    .delete(deleteOne)

router
    .route('/login')
    .post(login)

export default router;