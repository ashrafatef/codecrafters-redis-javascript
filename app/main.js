const net = require("net");
const {parseCommand} = require('./Utlis/parseCommand')
const {resp} = require("./resp");
const {applicationErrorHandler} = require("./Utlis/errors/applicationErrorHandler");
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {
    connection.on('data', (data) => {
        const command = parseCommand(data)
        if (!resp[command[0]]) {
            return connection.write(applicationErrorHandler(`unknown command  ${command[0]}`))
        }
        const results = resp[command[0]](command)
        return connection.write(`${results}\r\n`)
    })
});
server.listen(6379, "127.0.0.1");
