const get = (command, database, ttl) => {
    const expire = ttl.get(command[1])
    if (expire && isExpired(expire)) {
        return '$-1\r\n'
    }
    return `+${database.get(command[1])}`
}

function isExpired(milliseconds) {
    return Date.now() > new Date(parseInt(milliseconds)).getTime()
}


module.exports = {
    get
}
