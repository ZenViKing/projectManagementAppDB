import { Router } from 'express';
import { createProject, listProject, getProject, updateProject, deleteProject } from './project.controller';
import { verifyRole } from '../../utils/verifyrole';
import { verify } from '../../utils/verify';
import { verifyToken } from '../../utils/verifytoken';

const router = Router();

router
  .route('/')
  .post(verify, verifyToken, verifyRole, createProject)
  .get(verify, verifyToken, listProject)

router
  .route('/:id')
  .get(getProject)
  .patch(updateProject)
  .delete(deleteProject)
  
  export default router;