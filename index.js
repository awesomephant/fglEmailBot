const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const nodemailer = require('nodemailer')
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: "smtp.udag.de",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PW
    },
    tls: {
        rejectUnauthorized: false
    }
});


app.use(express.json());
app.get('/', (req, res) => {
    res.send('FGL email bot is running.')
})

app.post(`/${process.env.TT_URL}`, (req, res) => {
    console.log("Received post request...")
    if (req.body.message && req.body.message.from.username !== "etlgr_bot") {
        console.log("Received message, attempting to send email...")

        var message = {
            from: '"FGL-Vorstand bei Telegram" vorstand@fgl-konstanz.de',
            to: process.env.TARGET_EMAIL,
            subject: "FGL Telegram Bot",
            replyTo: "vorstand@fgl-konstanz.de",
            text: `${req.body.message.from.first_name} ${req.body.message.from.last_name} (${req.body.message.from.username}) schreibt: ${req.body.message.text}`
        };

        transporter.sendMail(message, (err, info) => {
            if (err) { console.log(err) }
            console.log("Email sent.")
            res.send(true)
        })


    } else {
        console.log("Request invalid.")
        res.send('Invalid.')
    }
})

app.listen(port, () => console.log(`Listening at port ${port}`))