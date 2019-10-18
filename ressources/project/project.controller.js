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

export const listProject = async (req,res) => {
  try {
    const projects = await Project.find();
    if(!projects) return res.status(400).end();
    res.status(200).json({projects});
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}

export const getProject = async (req,res) => {
  try {
    const project = await Project.findOne({_id:req.params.id});
    if(!project) return res.status(400).end();
    res.status(200).json({projects : project});
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}