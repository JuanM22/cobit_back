const Report = require('../model/Report')
const Domain = require('../model/Domain')
const Process = require('../model/Process')

const domain1 = [
    new Process('PO1', 'PO1 Definir un Plan Estratégico de TI'),
    new Process('PO2', 'PO2 Definir la Arquitectura de la Información'),
    new Process('PO3', 'PO3 Determinar la Dirección Tecnológica'),
    new Process('PO4', 'PO4 Definir los Procesos, Organización y Relaciones de TI'),
    new Process('PO5', 'PO5 Administrar la Inversión en TI'),
    new Process('PO6', 'PO6 Comunicar las Aspiraciones y la Dirección de la Gerencia'),
    new Process('PO7', 'PO7 Administrar Recursos Humanos de TI'),
    new Process('PO8', 'PO8 Administrar la Calidad'),
    new Process('PO9', 'PO9 Evaluar y Administrar los Riesgos de TI'),
    new Process('PO10', 'PO10 Administrar Proyectos')
]

const domain2 = [
    new Process('AI1', 'AI1 Identificar Soluciones Automatizadas', 2),
    new Process('AI2', 'AI2 Adquirir Mantener Software Aplicativo', 2),
    new Process('AI3', 'AI3 Adquirir y Mantener Infraestructura Tecnológica', 2),
    new Process('AI4', 'AI4 Facilitar la Operación y el Uso', 2),
    new Process('AI5', 'AI5 Adquirir Recursos de TI', 2),
    new Process('AI6', 'AI6 Administrar Cambios', 2),
    new Process('AI7', 'AI7 Instalar y Acreditar Soluciones y Cambios', 2)
]

const domain3 = [
    new Process('DS1', 'DS1 Definir y Administrar los Niveles de Servicio', 3),
    new Process('DS2', 'DS2 Administrar los Servicios a Terceros', 3),
    new Process('DS3', 'DS3 Administrar el Desempeño y la Capacidad', 3),
    new Process('DS4', 'DS4 Garantizar la Continuidad del Servicio', 3),
    new Process('DS5', 'DS5 Garantizar la Seguridad de los Sistemas', 3),
    new Process('DS6', 'DS6 Identificar y Asignar Costos', 3),
    new Process('DS7', 'DS7 Educar y Entrenar a los Usuarios', 3),
    new Process('DS8', 'DS8 Administrar la mesa de Servicio y los Incidentes', 3),
    new Process('DS9', 'DS9 Administrar la Configuración', 3),
    new Process('DS10', 'DS10 Administrar los Problemas', 3),
    new Process('DS11', 'DS11 Administrar los Datos', 3),
    new Process('DS12', 'DS12 Administrar el Ambiente Físico', 3),
    new Process('DS13', 'DS13 Administras las Operaciones', 3)
]

const domain4 = [
    new Process('ME1', 'ME1 Monitorear y Evaluar el Desempeño de TI', 4),
    new Process('ME2', 'ME2 Monitorear y Evaluar el Control Interno', 4),
    new Process('ME3', 'ME3 Garantizar el Cumplimiento Regulatorio', 4),
    new Process('ME4', 'ME4 Proporcionar Gobierno de TI', 4)
]

const domains = [
    new Domain(1, domain1),
    new Domain(2, domain2),
    new Domain(3, domain3),
    new Domain(4, domain4)
]

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

async function saveReport(report) {
    await lastReportId().then(res => {
        report.reportId = (res.length > 0) ? res[0].reportId + 1 : 1
    })
    const newReport = createReport(report);
    for (let domain of domains) {
        newReport.domains.push(domain)
    }
    const response = await newReport.save();
    return (newReport === response) ? response.reportId : -1;
}

async function updateReport(report) {
    const response = await Report.updateOne({ reportId: report.reportId }, { $set: report });
    return (response.modifiedCount === 1) ? 'Datos actualizados correctamente' : 'Error al actualizar el reporte';
}

async function getReport(reportId) {
    const report = await Report.findOne({ reportId: reportId });
    return report;
}

async function lastReportId() {
    const reports = await Report.find().sort({ reportId: -1 });
    return reports;
}


ReportController.saveReport = saveReport
ReportController.updateReport = updateReport
ReportController.getReport = getReport

module.exports = ReportController