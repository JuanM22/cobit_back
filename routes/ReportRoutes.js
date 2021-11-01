const express = require('express');
const router = express.Router();

const ReportController = require('../controller/ReportController');

router.post('/save', (req, res) => {
    async function saveReport() {
        let response = "";
        await ReportController.saveReport(req.body).then(res => {
            response = res;
        });
        res.send({data:response});
    };
    saveReport();
});

router.get('/report/:id', (req, res) => {
    async function getReport() {
        const report = await ReportController.getReport(req.params['id']);
        res.send(report);
    };
    getReport();
});

module.exports = router;