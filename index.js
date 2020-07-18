const express = require('express')
const app = express()
const port = 3000
const secrets = require('./secrets.json')

app.get('/', (req, res) => {
    res.send('FGL email bot is running.')
})

app.get(`/${process.env.TELEGRAM_TOKEN}`, (req, res) => {
    res.send('FGL Email Bot')
})

app.listen(port, () => console.log(`Listening at port ${port}`))