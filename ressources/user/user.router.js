import { Router } from 'express';
import { createUser, list, getOne, updateOne} from './user.controller';

const router = Router();

router
    .route('/')
    .get(list)
    .post(createUser)
    
router
    .route('/:id')
    .get(getOne)
    .patch(updateOne)

export default router;