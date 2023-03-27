const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
    connection.on('data', (data)=>{
        connection.write('+PONG\r\n')
    })
});

const formatCommand = (buf) =>{
    const convertedBinaryToString = Buffer.from(buf).toString()
    console.log(convertedBinaryToString)
    return convertedBinaryToString.replace( /(\n)|(\r)|(\*[0-9])|(\$[0-9])/g, ' ').split(' ').filter(st => !!st)
}

server.listen(6379, "127.0.0.1");
