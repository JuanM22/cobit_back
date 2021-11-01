const ObjectiveRoutes = require('./ObjectiveRoutes');
const FileRoutes = require('./ReportRoutes');

module.exports = function (app) {

    app.use('/objective', ObjectiveRoutes);
    app.use('/report', FileRoutes)
}