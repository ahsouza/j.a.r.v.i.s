import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'
import {environment} from '../config/env'

export interface User extends mongoose.Document {
  name: string,
  email: string,
  password: string,
  admin: boolean
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 80, minlength: 3 },
  email: { 
    type: String, 
    unique: true, 
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
    required: true
  },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }
})

const hashPassword = (data, next) => {
  bcrypt.hash(data.password, environment.security.saltRounds)
    .then(hash => {
      data.password = hash

      next()
    }).catch(next)
}

const saveMiddleware = function (next) {
  const user: User = this
  if(!user.isModified('password')) {

    next()
  } else {
    hashPassword(user, next)
  }
}

const updateMiddleware = function (next) {
  if(!this.getUpdate().password) {

    next()
  } else {
    hashPassword(this.getUpdate(), next)
  }
}


userSchema.pre('save', saveMiddleware)
userSchema.pre('findOneAndUpdate', updateMiddleware)
userSchema.pre('update', updateMiddleware)

export const User = mongoose.model<User>('User', userSchema)