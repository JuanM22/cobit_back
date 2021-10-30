const express = require('express');
const router = express.Router();

const FileController = require('../controller/FileController');

router.post('/update', (req, res) => {
    async function saveFile() {
        let response = "";
        await FileController.saveFile(req.body).then(res => {
            response = res;
        });
        res.send({data:response});
    };
    saveFile();
});

router.get('/report', (req, res) => {
    async function getFiles() {
        res.sendFile(FileController.getFile());
    };
    getFiles();
});

module.exports = router;