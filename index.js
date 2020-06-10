'use strict';

const receiver = require('./source/receiver');
const controller = require('./source/dmx-controller');

const fs = require('fs');
// read the config file
var configData = JSON.parse(fs.readFile('./config/config.json'));


const Receiver = new receiver({port: 17809, address: 'http://localhost:'});
//const Controller = new controller({useNullDevice: true});
//const Controller = new controller({device: '/dev/ttyUSB0', deviceOptions: {}});

// receiver now has a controller.
Receiver.initDmxController('testing','/dev/ttyUSB0', controller.drivers.ENTTECPRO, {})
 