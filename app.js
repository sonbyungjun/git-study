const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.end('Hello byungjun!')
})

app.listen(8080, function(err) {
    console.log("server running...")
})
