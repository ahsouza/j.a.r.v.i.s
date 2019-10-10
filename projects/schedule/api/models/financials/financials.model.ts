import * as mongoose from 'mongoose'

export interface Financial extends mongoose.Document {
  cash: number,
  savings: string,
  reinvestments: { description: string, value: number, pg: boolean },
  fun: { description: string, value: number, pg: boolean },
  expenses: { description: string, value: number, pg: boolean },
  dateModified: Date,
  dateCreated: Date
}

const financialSchema = new mongoose.Schema({
  cash: { type: Number, default: 0 },
  savings: { type: Number, default: 0 },
  reinvestments: { description: String, value: Number, pg: false },
  fun: { description: String, value: Number, pg: false },
  expenses: { description: String, value: Number, pg: false },
  dateModified: { type: Date, default: Date.now },
  dateCreated: { type: Date, default: Date.now }

})

export const Financial = mongoose.model<Financial>('Financial', financialSchema)