import { Router } from 'express';
import { addProject } from './project.controller';

const router = Router();

router
  .route('/')
  .post(addProject)

export default router;