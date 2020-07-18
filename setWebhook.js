require('dotenv').config();
const url = `https://fgl-email-bot.herokuapp.com/${process.env.TT_URL}`
console.log(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/setWebhook?url=${url}`)