class Receiver {
    constructor(options) {
        this.options = options || {};
        
        // socket.io init
        this.port = options.port || "17809";
        this.address = options.address || "http://localhost:";
        console.log('testing');
        this.addressConcat = this.address.concat(this.port);
        console.log('Attempting to connect to: ' + this.addressConcat);
        this.client = this.io.connect(this.addressConcat);
        
        this.controller = null;

        client.on('update', (msg) => {
            console.info(msg);
            this.onDataReceived(msg);
        });
    }

    onDataReceived(msg)
    {
        // send it to the dmx controller
        if(this.dmxController)
        {

        }

    }

    initDmxController(name, device, driver, options)
    {
       if(!this.controller)
       {
           this.controller = require('./dmx-controller');
       }
        var options = {
            name : name,
            device : device,
            driver : driver,
            deviceOptions : options
        };
        
        this.dmxController = new this.controller(options);
    }
}

Receiver.controller = require('./dmx-controller');

Receiver.io = require('socket.io-client');
module.exports = Receiver;