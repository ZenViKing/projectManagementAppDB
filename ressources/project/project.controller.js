import { Project } from './project.model';

export const createProject = async (req,res) => {
  try {
    const project = await Project.create({...req.body});
    res.status(201).json({Projects : project});
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}