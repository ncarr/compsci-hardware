var express = require('express');
var five = require('johnny-five');
var Raspi = require('raspi-io');

var app = express();

var board = new five.Board({
  io: new Raspi()
});


var servo;
board.on('ready', function() {
  servo = new five.Servo({
    pin: 'P1-40',
    startAt: 90
  });
});


app.post('/click', express.json(), function (req, res) {
  servo.to(req.body.clicksPerSecond);
  res.send('');
});