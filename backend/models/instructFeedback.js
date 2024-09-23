const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const InstructFeedbackSchema = new Schema({
    ifID: Number,
    cusName: String,
    cusEmail: String,
    iName: String,
    ifType: String,
    ifRate: Number,
    ifNote: String,
});

const InstructFeedback = mongoose.model('InstructFeedback',InstructFeedbackSchema);

module.exports = InstructFeedback;