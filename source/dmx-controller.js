class dmxcontroller {
    constructor(options)
    {
        this.DMX = require('dmx');
        this.dmx = new this.DMX();

        // pass in the device
        if(options.useNullDevice)
        {
            this.universe = this.dmx.addUniverse('fake', 'null');
            this.universe.update({1:127, 2:222})
        }
        else
        {
            this.universe = this.dmx.addUniverse(options.name, options.driver, options.device, options.deviceOptions);
        }
    }

    // TODO - this is just setup to receive the sockiet.io driver output. We might have to make this
    // handle out of order messages
    update(data)
    {
        this.universe.update(data);
    }
    // TODO - create some kind of enumeration for driver types.
    static drivers = {
        ARTNET : 'artnet',
        BBDMX : 'bbdmx',
        DMX4ALL: 'dmx4all',
        DMXKING: 'dmxkng-ultra-dmx-pro',
        ENTTECOPEN: 'enttec-open-usb-dmx',
        ENTTECPRO: 'enttec-usb-dmx-pro',
        NULL: 'null',
        SOCKETIO: 'socketio'
    }

};

module.exports = dmxcontroller;