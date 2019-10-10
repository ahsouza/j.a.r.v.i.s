import * as mongoose from 'mongoose'

export interface Task extends mongoose.Document {
  description: string,
  note: string,
  priority: string,
  project: [string],
  datePreview: Date,
  dateCompleted: Date,
  dateModified: Date,
  dateCreated: Date

}

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true, maxlength: 160, minlength: 2 },
  note: { type:String,  maxlength: 120, minlength: 2 },
  priority: { urgent: false, relevant: false, irrelevant: false },
  project: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  datePreview: { type: Date, required: true },
  dateCompleted: { type: Date, required: true },
  dateModified: { type: Date, default: Date.now },
  dateCreated: { type: Date, default: Date.now }

})

export const Task = mongoose.model<Task>('Task', taskSchema)