const Objective = require('../model/Objective');

const ObjectiveController = {};

async function listObjectives(domain) {
    const objectiveList = await Objective.find({ domain: domain });
    return objectiveList;
}

async function saveObjective(objective) {
    await lastObjectiveId().then(res => {
        objective.objectiveId = (res.length > 0) ? res[0].objectiveId + 1 : 1;
    });
    await objective.save()
}

async function updateObjective(objective) {
    const response = await Objective.updateOne({ objectiveId: objective.objectiveId }, { $set: { questions: objective.questions } });
    return (response.modifiedCount === 1) ? 'success' : 'error';
}

async function lastObjectiveId() {
    const objectives = await Objective.find().sort({ objectiveId: -1 });
    return objectives;
}

ObjectiveController.listObjectives = listObjectives;
ObjectiveController.saveObjective = saveObjective;
ObjectiveController.updateObjective = updateObjective;

module.exports = ObjectiveController

