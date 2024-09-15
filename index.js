require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
   res.send('This is login route')
})

app.get('/twitter', (req, res) => {
    res.send('This is Twitter route')
})

app.get('/youtube', (req, res) => {
   res.send('This is youtube route')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})