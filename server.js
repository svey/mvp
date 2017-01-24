var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var twilio = require('twilio');

var app = express();

mongoose.connect('mongodb://localhost/text2phone');

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/sms', function(request, response) {
  var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  response.writeHead(200, {'Content-Type': 'text/xml'});
  response.end(twiml.toString());
});


app.listen(3000, function() {
  console.log('I\'m Listening...');
});

