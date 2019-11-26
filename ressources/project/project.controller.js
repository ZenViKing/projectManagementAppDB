import { Project } from './project.model';

export const createProject = async (req, res) => {
  try {
    const project = await Project.create({ ...req.body });
    res.status(201).json({ Projects: project });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}

export const listProject = async (req, res) => {
  try {


    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const projects = await Project.find();
    if(!projects) return res.status(400).end();
    
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}

export const getProject = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    if (!project) return res.status(400).end();
    res.status(200).json({ project });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!project) return res.status(400).end();
    res.status(200).json({ project });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete({ _id: req.params.id });
    if (!project) return res.status(400).end();
    res.status(200).json({ project: project });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
}