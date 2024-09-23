const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PackageFeedbackSchema = new Schema({
    pfID: Number,
    cusName: String,
    cusEmail: String,
    pName: Number,
    pfType: String,
    pfRate: Number,
    pfNote: String,
});

const PackageFeedback = mongoose.model('PackageFeedback',PackageFeedbackSchema);

module.exports = PackageFeedback;