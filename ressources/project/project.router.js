import { Router } from 'express';
import { createProject, listProject, getProject } from './project.controller';

const router = Router();

router
  .route('/')
  .post(createProject)
  .get(listProject)

router
  .route('/:id')
  .get(getProject)

export default router;