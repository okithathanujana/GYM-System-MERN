const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const InstructFeedbackSchema = new Schema({
    ifID: Number,
    cusName: String,
    cusEmail: String,
    iName: Number,
    ifType: String,
    ifRate: Number,
    ifNote: String,
});

const InstructFeedback = mongoose.model('InstructFeedback',InstructFeedbackSchema);

module.exports = InstructFeedback;