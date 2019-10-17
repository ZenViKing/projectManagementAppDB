import { Router } from 'express';
import { createUser, list, getOne} from './user.controller';

const router = Router();

router
    .route('/')
    .get(list)
    .post(createUser)
    
router
    .route('/:id')
    .get(getOne)

export default router;