import { Router } from 'express';
import { createProject, listProject, getProject, updateProject, deleteProject } from './project.controller';

const router = Router();

router
  .route('/')
  .post(createProject)
  .get(listProject)

router
  .route('/:id')
  .get(getProject)
  .patch(updateProject)
  .delete(deleteProject)
  
  export default router;