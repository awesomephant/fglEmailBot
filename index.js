const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const sendmail = require('sendmail')();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('FGL email bot is running.')
})

app.post(`/${process.env.TT_URL}`, (req, res) => {
    console.log("Received post request...")
    if (req.message) {
        console.log("Received message, attempting to send email...")
        const email = `
${req.message.from.first_name} ${req.message.from.last_name} (${req.message.from.username}) schreibt: ${req.message.text}
        `
        sendmail({
            from: 'hi@maxkoehler.com',
            to: process.env.TARGET_EMAIL,
            subject: 'FGL Email Bot 🤖',
            html: email,
        }, function (err, reply) {
            console.log(err && err.stack);
            if (!err){
                console.log(`Email set to ${process.env.TARGET_EMAIL}`)
            }
        });

    }
})

app.listen(port, () => console.log(`Listening at port ${port}`))