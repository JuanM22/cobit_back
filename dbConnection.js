const mongoose = require('mongoose');

server = {}

function connectToDatabase(){
    mongoose.connect('mongodb://localhost:27017/cobit', () => {
        console.log('Connection to Data Base Succesfully...');
    });
}

server.connectToDatabase = connectToDatabase;

module.exports = server;


