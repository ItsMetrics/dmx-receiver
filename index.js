'use strict';

const receiver = require('./source/receiver');

const Receiver = new receiver({port: 17809, address: 'http://localhost:'});
// console.log('testing');
// const io = require('socket.io-client');
// const client = io.connect('http://localhost:17809');

// client.on('update', (msg) => console.info(msg));
 