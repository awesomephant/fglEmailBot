const nodemailer = require('nodemailer')
require('dotenv').config();
const transporter = nodemailer.createTransport({
    host: "smtp.fgl-konstanz.de",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PW
    }
});

var message = {
    from: "bot@fgl-konstanz.de",
    to: "nurmail@fgl-konstanz.de",
    subject: "Telegram Bot",
    text: "${req.body.message.from.first_name} ${req.body.message.from.last_name} (${req.body.message.from.username}) schreibt: ${req.body.message.text}"
};

transporter.sendMail(message, (err, info) => {
    if (err) { console.log(err) }
})
