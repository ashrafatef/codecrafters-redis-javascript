const parseCommand = (data)=>{
    const convertedBinaryToString = Buffer.from(data).toString()
    const cleanCommands = []
    for (let i = 0; i < convertedBinaryToString.length; i++) {
        if (convertedBinaryToString[i] === '$') {
            const argumentLength = getArgumentLength(convertedBinaryToString,i+1)
            const start = i + argumentLength.toString().length + 3
            const end = start + argumentLength
            const command = convertedBinaryToString.slice(start, end)
            cleanCommands.push(command.toLowerCase())
            i = end
        }
    }
    return cleanCommands
}

function getArgumentLength(string, start){
    let value = ''
    for (let i = start; i < string.length; i++) {
        if(string[i] === '\r'){
            break
        }
        value += string[i]
    }
    return parseInt(value)
}





module.exports = {
    parseCommand,
}
