const Report = require('../model/Report')

const ReportController = {}

function createReport(report) {
    return new Report({
        reportId: report.reportId,
        bussiness_name: report.bussiness_name,
        auditor_name: report.auditor_name,
        bussiness_assets: [],
        processes: []
    })
}

async function saveProduct(report) {
    await lastReportId().then(res => {
        report.reportId = (res.length > 0) ? report[0].reportId + 1 : 1
    })
    const newReport = createReport(report);
    const response = await newReport.save();
    return (newProduct === response) ? 'El reporte ha sido creado correctamente' : 'Error al crear el reporte';
}

async function getReport(reportId) {
    const report = await Report.findOne({ reportId: reportId });
    return report;
}

async function lastReportId() {
    const reports = await Report.find().sort({ reportId: -1 });
    return reports;
}



ReportController.saveProduct = saveProduct
ReportController.getReport = getReport

module.exports = FileController