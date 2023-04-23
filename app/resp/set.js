const {commandErrorHandler} = require("../Utlis/errors/commandErrorHandler");
const set = (command, database, ttl) => {
    if (command.length >= 3) {
        database.set(command[1], command[2].toString())
        if (command.length > 3 && command[3] === 'px') {
            ttl.set(command[1], command[4])
        }
        return '+OK'
    }
    return commandErrorHandler('SET')
}

module.exports = {
    set
}
