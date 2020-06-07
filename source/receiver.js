class Receiver {
    constructor(options) {
        this.options = options || {};
        
        // socket.io init
        this.port = options.port || "17809";
        this.address = options.address || "http://localhost:";
        console.log('testing');
        const io = require('socket.io-client');
        const client = io.connect();

        client.on('update', (msg) => console.info(msg));
    }
}

module.exports = Receiver;