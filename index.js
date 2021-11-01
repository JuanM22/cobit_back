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

//// Objetivos de Control por Dominios ////
const domain1 = require('./domainOneObjectives')
const domain2 = require('./domainTwoObjectives')
const domain3 = require('./domainThreeObjectives')
const domain4 = require('./domainFourObjectives')

const domains = [domain1, domain2, domain3, domain4]

async function saveObjectives() {
    let domainId = 1;
    let i = 1;
    let objectives;
    let domainsPrefix = ['PO', 'AI', 'DS', 'ME']
    for (let domain of domains) {
        await ObjectiveController.listObjectives(domainId).then(res => {
            objectives = res;
        })
        if (objectives.length == 0) {
            for (let process of domain) {
                let processId = domainsPrefix[domainId - 1] + i
                for (let item of process) {
                    const newObjective = new Objective({
                        objectiveId: 0,
                        domain: domainId,
                        process: processId,
                        name: item,
                        questions: []
                    });
                    await ObjectiveController.saveObjective(newObjective)
                }
                i++
            }
        }
        i = 1;
        domainId++
    }
}

app.listen(port, function () {
    console.log('Server running at localhost:' + port)
    saveObjectives()
});


