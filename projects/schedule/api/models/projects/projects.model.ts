import * as mongoose from 'mongoose'
import {Client} from '../clients/clients.model'
import {Task} from '../tasks/tasks.model'


export interface Project extends mongoose.Document {
  name: string,
  members: [mongoose.Types.ObjectId | Client],
  tasks: [mongoose.Types.ObjectId | Task],
  git: string,
  url: string,
  type: string,
  datePreview: Date,
  dateCompleted: Date,
  dateModified: Date,
  dateCreated: Date
}

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 160, minlength: 3 },
  members: { type: [mongoose.Schema.Types.ObjectId], ref: 'Client', required: true },
  tasks: { type: [mongoose.Schema.Types.ObjectId], ref: 'Task', required: true },
  git: { type: String },
  url: { type: String },
  datePreview: { type: Date, required: true },
  dateCompleted: { type: Date, required: true },
  dateModified: { type: Date, default: Date.now },
  dateCreated: { type: Date, default: Date.now }

})

export const Project = mongoose.model<Project>('Project', projectSchema)