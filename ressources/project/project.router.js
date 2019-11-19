import { Router } from 'express';
import { createProject, listProject, getProject, updateProject, deleteProject } from './project.controller';
// import { verifyRole } from '../../utils/verifyrole';
import { verify } from '../../utils/verify';
import { verifyToken } from '../../utils/verifytoken';

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