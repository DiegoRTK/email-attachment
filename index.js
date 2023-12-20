const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const email = require('./src/router/mail.router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/email', email)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})