const mongoose = require('mongoose');

const Report = new mongoose.Schema({
    reportId: Number,
    bussiness_name: Number,
    auditor_name: String,
    bussiness_assets: [{}],
    processes: [{}]
});

module.exports = mongoose.model("Report", Report);