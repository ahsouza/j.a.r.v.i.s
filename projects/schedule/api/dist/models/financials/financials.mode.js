"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 160, minlength: 3 },
    members: [{ name: String, email: String, github: String, telephone: String }],
    git: { type: String },
    datePreview: { type: Date, required: true },
    dateCompleted: { type: Date, required: true },
    dateModified: { type: Date, default: Date.now },
    dateCreated: { type: Date, default: Date.now }
});
exports.Project = mongoose.model('Project', projectSchema);
