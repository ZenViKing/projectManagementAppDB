import { Router } from 'express';
import { createProject, listProject, getProject, updateProject } from './project.controller';

const router = Router();

router
  .route('/')
  .post(createProject)
  .get(listProject)

router
  .route('/:id')
  .get(getProject)
  .patch(updateProject)

  export default router;