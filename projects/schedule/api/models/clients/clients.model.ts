import * as mongoose from 'mongoose'
import {validateCPF} from '../../config/validators'

export interface Client extends mongoose.Document {
  firstName: string,
  LastName: string,
  cpf: string,
  avatar: Buffer,
  email: string,
  telephone: {optionOne: string, optionTwo: string},
  site: string,
  social: {facebook: string, linkedin: string, instagram: string, telegram: string, twitter: string},
  location: {addressCountry: string, addressCity: string, addressState: string, streetAddress: string, numberAddress: string, postalCode: string, latitude: string, longitude: string},
  debtor: boolean,
  dateCreated: Date,
  dateModified: Date
}

const clientchema = new mongoose.Schema({
  firstName: { type: String, required: true, maxlength: 80, minlength: 3 },
  LastName: { type: String, required: true, maxlength: 80, minlength: 3 },
  email: { 
    type: String, 
    unique: true, 
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
    required: true
  },
  cpf: { type: String, validate: { validator: validateCPF, message: '{PATH}: Inválido CPF ({VALUE'}},
  avatar: { data: Buffer, contentType: String },
  telephone: { optionOne: String, optionTwo: String },
  site: { type: String },
  location: { 
    addressCountry: { type: String }, 
    addressCity: { type: String },
    addressState: { type: String },
    streetAddress: { type: String },
    numberAddress: { type: String },
    postalCode: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
  },
  social: { 
    facebook: String,
    linkedin: String, 
    instagram: String, 
    telegram: String, 
    twitter: String, 
  },
  debtor: { type: Boolean, default: false },
  dateCreated: { type: Date, default: Date.now },
  dateModified: { type: Date, default: Date.now }
})

export const Client = mongoose.model<Client>('Client', clientSchema)