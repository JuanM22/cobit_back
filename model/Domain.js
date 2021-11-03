class Domain {

    id = 0;
    name = '';
    processes = [];

    constructor (id, name, processes){
        this.id = id
        this.name = name
        this.processes = processes
    }

}

module.exports = Domain