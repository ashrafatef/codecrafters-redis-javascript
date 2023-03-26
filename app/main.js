const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  // Handle connection
    connection.on('data', (data)=>{
        // convert from buffer to string
        const cleanCommands = formatCommand(data)
        console.log('cleaned commands' , cleanCommands)
        let results;
        switch (cleanCommands[0].toLowerCase()){
            case 'ping':
                connection.write('+PONG\r\n')
                break
            default:
                connection.write('+OK\r\n')
        }
        // console.log(results)
        // connection.write('+PONG\r\n')
        // return 'PONG'
    })
});

const formatCommand = (buf) =>{
    const convertedBinaryToString = Buffer.from(buf).toString()
    return convertedBinaryToString.replace(/(\*[0-9])|(\$[0-9])/g, ' ').trim().split(' ').map(str => str.trim())

}

server.listen(6379, "127.0.0.1");
