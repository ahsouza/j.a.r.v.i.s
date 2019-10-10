"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    description: { type: String, required: true, maxlength: 160, minlength: 2 },
    note: { type: String, maxlength: 120, minlength: 2 },
    priority: { urgent: false, relevant: false, irrelevant: false },
    datePreview: { type: Date, required: true },
    dateCompleted: { type: Date, required: true },
    dateModified: { type: Date, default: Date.now },
    dateCreated: { type: Date, default: Date.now }
});
exports.Task = mongoose.model('Task', taskSchema);
