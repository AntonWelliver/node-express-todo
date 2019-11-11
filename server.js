const express = require('express')
const app = express()
const port = 3000

app.get('/api', function (req, res) {
    res.json({
        message: 'Hello World!!'
    })
  })