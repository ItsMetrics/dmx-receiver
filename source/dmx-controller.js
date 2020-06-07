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
            this.universe = this.dmx.addUniverse('main', 'enttec-usb-dmx-pro', options.device, options.deviceOptions);
        }
    }

};

module.exports = dmxcontroller;