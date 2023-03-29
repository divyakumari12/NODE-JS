const EventEmitter = require('events');
const event = new EventEmitter();
event.on('save',()=>{
    console.log('A saved event occured');
});

event.on('save',()=>{
    console.log('A saved event occured');
});

event.on('save',()=>{
    console.log('A saved event occured');
});

event.emit('save',);
