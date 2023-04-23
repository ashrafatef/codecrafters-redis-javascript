const {echo} = require("./echo");
const {set} = require("./set");
const {get} = require("./get");


const database = new Map()
const ttl = new Map()

const index = {
    'set': (command) => {
        return set(command, database , ttl)
    },
    'get': (command) => {
        return get(command, database , ttl)
    },
    'ping': () => {
        return '+PONG'
    },
    'echo': (command)=>{
        return echo(command)
    }
}

module.exports = {
    resp: index
}
