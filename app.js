const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.end('Hello byungjun!')
})

app.get('/hello', (req, res, next) => {
    res.end("Hello Hello")
})

app.listen(8080, (err) => {
    console.log("server running...")
})
