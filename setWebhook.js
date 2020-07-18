const https = require('https')

https.get(`https://api.telegram.org/fglEmailBot:${process.env.TELEGRAM_TOKEN}/getMe`, (res) => {
    // Do stuff
}).on('socket', (socket) => {
    socket.emit('agentRemove');
});