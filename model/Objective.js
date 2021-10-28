const mongoose = require('mongoose');

const Objective = new mongoose.Schema({
    objectiveId: Number,
    domain: Number,
    process: String,
    name: String,
    questions: [{}]
});

module.exports = mongoose.model("Objective", Objective);