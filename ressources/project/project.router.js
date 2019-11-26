import { Router } from 'express';
import { createProject, listProject, getProject, updateProject, deleteProject } from './project.controller';
import { verify } from '../../utils/verify';
import { verifyToken } from '../../utils/verifytoken';

const router = Router();

router
  .route('/')
  .post(createProject)
  .get(verifyToken, verify, listProject)

router
  .route('/:id')
  .get(getProject)
  .patch(updateProject)
  .delete(deleteProject)
  
  export default router;