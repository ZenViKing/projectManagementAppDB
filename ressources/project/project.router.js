import { Router } from 'express';
import { createProject, listProject } from './project.controller';

const router = Router();

router
  .route('/')
  .post(createProject)
  .get(listProject)

export default router;