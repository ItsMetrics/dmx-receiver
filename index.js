'use strict';

const receiver = require('./source/receiver');
const controller = require('./source/dmx-controller');

const Receiver = new receiver({port: 17809, address: 'http://localhost:'});
//const Controller = new controller({useNullDevice: true});
//const Controller = new controller({device: '/dev/ttyUSB0', deviceOptions: {}});

// receiver now has a controller.
Receiver.initDmxController('testing','/dev/ttyUSB0', controller.drivers.ENTTECPRO, {})
 