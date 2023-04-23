const {commandErrorHandler} = require("../Utlis/errors/commandErrorHandler");
const echo = (command) => {
    if (command.length === 2) {
        return `+${command[1]}`
    }
    return commandErrorHandler('ECHO')
}

module.exports = {
    echo
}
