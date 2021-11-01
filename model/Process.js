class Process {

    processId = '';
    name = '';
    objectives = []; 
    average = 0;

    constructor (processId, name){
        this.processId = processId;
        this.name = name;
        this.objectives = [];
        this.average = 0;
    }

}

module.exports = Process