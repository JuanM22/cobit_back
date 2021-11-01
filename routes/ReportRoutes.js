const express = require('express');
const router = express.Router();

const ReportController = require('../controller/ReportController');

router.post('/save', (req, res) => {
    if (req.body.reportId == 0) {
        async function saveReport() {
            let response = "";
            await ReportController.saveReport(req.body).then(res => {
                response = res;
            });
            res.send({ data: response });
        }
        saveReport();
    } else {
        async function updateReport() {
            let response = "";
            await ReportController.updateReport(req.body).then(res => {
                response = res;
            });
            res.send({ data: response });
        }
        updateReport();
    }
});

router.get('/view/:id', (req, res) => {
    async function getReport() {
        const report = await ReportController.getReport(req.params['id']);
        res.send(report);
    };
    getReport();
});

module.exports = router;