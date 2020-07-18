const https = require('https')
const url = "https://fgl-email-bot.herokuapp.com/"


https.get(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/setWebhook?url=${url}`, (res) => {
    console.log(res.body)
})