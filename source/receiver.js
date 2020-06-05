module.exports = function() {
    
    // The NodeCG extension will broadcast the changes to this receiver
    // The receiver will interact with the dmx device and the lights

    // Listener for the DMX instructions on the dashboard
    const port = "18909"
    const io = require('socket.io-client')
    const client = io.connect('http://localhost:${port}');

    // node dmx stuff
    const DMX = require('dmx');
    const dmx = new DMX();


    function Init() {

    }

    // socket.io handling
    client.on('update', (msg) => console.info(msg));
};