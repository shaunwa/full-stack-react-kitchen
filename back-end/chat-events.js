const sendMessageEvent = (socket, io) => ({
    name: 'send message',
    handler: text => {
        io.emit('new message posted', text);
    } 
});

export default sendMessageEvent;