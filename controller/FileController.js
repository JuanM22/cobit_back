const fs = require('fs')
const FileController = {}

function saveFile(data) {
    __dirname = __dirname.replace('controller', '');
    const file = `${__dirname}/resources/report.json`;
    return new Promise((resolve) => {
        fs.writeFile(file, JSON.stringify(data), function (err) {
            if (err) resolve('Error');
            else resolve('Files saved successfully');
        });
    })
}

function getFile() {
    __dirname = __dirname.replace('controller', '');
    const file = `${__dirname}/resources/report.json`;
    return file;
}


FileController.saveFile = saveFile
FileController.getFile = getFile

module.exports = FileController