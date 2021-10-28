const dbConnection = require('./dbConnection');
dbConnection.connectToDatabase();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true
}));
app.use(express.static("public"));

require('./routes/Routes')(app);

const port = 8090;

const ObjectiveController = require('./controller/ObjectiveController')
const Objective = require('./model/Objective');
const domain1 = require('./objectives')

async function saveObjectives() {
    let domain = 1;
    let i = 1;
    let objectives;
    await ObjectiveController.listObjectives(domain).then(res => {
        objectives = res;
    })
    if (objectives.length == 0) {
        for (let process of domain1) {
            let processId = 'PO' + i
            for (let item of process) {
                const newObjective = new Objective({
                    objectiveId: 0,
                    domain: domain,
                    process: processId,
                    name: item,
                    questions: []
                });
                await ObjectiveController.saveObjective(newObjective)
            }
            i++;
        }
    }
}

app.listen(port, function () {
    console.log('Server running at localhost:' + port)
    saveObjectives()
});


