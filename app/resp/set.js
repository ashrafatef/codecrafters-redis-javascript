const {commandErrorHandler} = require("../Utlis/errors/commandErrorHandler");
const set = (command, database, ttl) => {
    if (command.length >= 3) {
        database.set(command[1], command[2].toString())
        if (command.length > 3 && command[3] === 'px') {
            const expire = Date.now() + parseInt(command[4])
            ttl.set(command[1], expire.toString())
        }
        return '+OK'
    }
    return commandErrorHandler('SET')
}

module.exports = {
    set
}
