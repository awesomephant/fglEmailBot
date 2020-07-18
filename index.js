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
    if (req.body.message) {
        console.log("Received message, attempting to send email...")
        const email = `
${req.body.message.from.first_name} ${req.body.message.from.last_name} (${req.body.message.from.username}) schreibt: ${req.body.message.text}
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
                res.send(true)
            }
        });

    } else {
        console.log("Request invalid.")
        res.send('Invalid.')
    }
})

app.listen(port, () => console.log(`Listening at port ${port}`))