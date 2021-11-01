const mongoose = require('mongoose');

const Report = new mongoose.Schema({
    reportId: Number,
    bussiness_name: String,
    auditor_name: String,
    bussiness_assets: [{}],
    domains: [{}]
});

module.exports = mongoose.model("Report", Report);