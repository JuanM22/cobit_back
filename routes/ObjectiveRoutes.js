const express = require('express');
const router = express.Router();

const ObjectiveController = require('../controller/ObjectiveController');

router.get('/list/:id', (req, res) => {
    async function getObjectives() {
        const objectives = await ObjectiveController.listObjectives(parseInt(req.params['id']));
        res.send(objectives);
    };
    getObjectives();
});

router.post('/update', (req, res) => {
    async function updateObjective() {
        const message = await ObjectiveController.updateObjective(req.body);
        res.send({ data: message });
    };
    updateObjective();
});

module.exports = router;