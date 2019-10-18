import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  date : {type:Date},
  deadline : {type:Date},
  name : {type:String},
  desc : {type:String},
  staff : {type:Array},
  time : {type:Number},
  inProgress : {type:Boolean}
});

export const Project = mongoose.model('project', projectSchema);