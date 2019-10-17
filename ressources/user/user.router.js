import { Router } from 'express';
import { createUser, list} from './user.controller';

const router = Router();

router
    .route('/')
    .post(createUser)
    .get(list)
    

export default router;