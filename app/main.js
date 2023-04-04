const net = require("net");

console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {
    connection.on('data', (data)=>{
        let results;
        const command = formatCommand(data)
        if (command[0].toLowerCase() === 'ping') {
            results = '+PONG'
        } else if (command[0] === 'ECHO') {
            command.shift()
            results = handleEchoCommand(command)
        } else {
            connection.write(`-Error message : unkown command  ${command[0]}\r\n`)
        }
        return connection.write(`${results}\r\n`)
    })
});

const formatCommand = (buf) => {
    const convertedBinaryToString = Buffer.from(buf).toString()
    return convertedBinaryToString.replace(/(\n)|(\r)|(\*[0-9])|(\$[0-9])/g, ' ').split(' ').filter(st => !!st)
}

const handleEchoCommand = (arguments) => {
    if (arguments.length === 1) {
        return `+${arguments[0]}`
    }
    return '- Error Message invalid arguments for ECHO Command'
}

server.listen(6379, "127.0.0.1");
