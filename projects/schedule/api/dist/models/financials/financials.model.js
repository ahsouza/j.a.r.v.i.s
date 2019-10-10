"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const financialSchema = new mongoose.Schema({
    cash: { type: Number, default: 0 },
    savings: { type: Number, default: 0 },
    reinvestments: { description: String, value: Number, pg: false },
    fun: { description: String, value: Number, pg: false },
    expenses: { description: String, value: Number, pg: false },
    dateModified: { type: Date, default: Date.now },
    dateCreated: { type: Date, default: Date.now }
});
exports.Financial = mongoose.model('Financial', financialSchema);
