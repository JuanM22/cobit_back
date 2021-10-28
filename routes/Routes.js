const ObjectiveRoutes = require('./ObjectiveRoutes');

module.exports = function (app) {

    app.use('/objective', ObjectiveRoutes);

}