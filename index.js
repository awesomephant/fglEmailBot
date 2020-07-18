const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('FGL email bot is running.')
})

app.post(`/`, (req, res) => {
    console.log(req)
})

app.listen(port, () => console.log(`Listening at port ${port}`))