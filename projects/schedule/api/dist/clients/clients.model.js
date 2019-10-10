"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const clientchema = new mongoose.Schema({
    firstName: { type: String, required: true, maxlength: 80, minlength: 3 },
    LastName: { type: String, required: true, maxlength: 80, minlength: 3 },
    email: {
        type: String,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true
    },
    cpf: { type: Number },
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
});
exports.Client = mongoose.model('Client', clientSchema);
