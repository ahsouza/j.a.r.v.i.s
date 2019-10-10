import * as mongoose from 'mongoose'

export interface Project extends mongoose.Document {
  name: string,
  members: string,
  git: string,
  datePreview: Date,
  dateCompleted: Date,
  dateModified: Date,
  dateCreated: Date
}

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 160, minlength: 3 },
  members: [ { name: String, email: String, github: String, telephone: String } ],
  git: { type: String },
  datePreview: { type: Date, required: true },
  dateCompleted: { type: Date, required: true },
  dateModified: { type: Date, default: Date.now },
  dateCreated: { type: Date, default: Date.now }

})

export const Project = mongoose.model<Project>('Project', projectSchema)