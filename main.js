const express = require('express');
const app = express();
const port = 80;

var isCalling = false;
var currentMessage = '';
var responseMessage = '';

app.get('/isCalling', (req, res) => {
    res.end(`${isCalling}/${currentMessage}`);
});

app.get('/setCalling', (req, res) => {
    isCalling = true;
    currentMessage = req.query.message;
    res.end('200');
});

app.get('/answerCall', (req, res) => {
    isCalling = false;
    responseMessage = req.query.rmessage;
    currentMessage = '';
    res.end('200');
});

app.get('/stopCalling', (req, res) => {
    isCalling = false;
    currentMessage = '';
    responseMessage = '';
    res.end('200');
});

app.listen(port, () => console.log(`App listening on port ${port}!`))