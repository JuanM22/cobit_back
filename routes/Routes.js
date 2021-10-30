const ObjectiveRoutes = require('./ObjectiveRoutes');
const FileRoutes = require('./FileRoutes');

module.exports = function (app) {

    app.use('/objective', ObjectiveRoutes);
    app.use('/file', FileRoutes)
}