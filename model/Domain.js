const Process = require("./Process");

class Domain {

    id = 0;
    processes = [];

    constructor (id, processes){
        this.id = id
        this.processes = processes
    }

}

module.exports = Domain