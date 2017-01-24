var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var sms = require('./send-sms.js');

var accountSid = sms.accountSid;
var authToken = sms.authToken;

var client = require('twilio')(accountSid, authToken);

var app = express();

mongoose.connect('mongodb://localhost/text2phone');

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/sms', function(request, response) {
  console.log('request-body', request.body);
  client.messages.create({ 
    to: sms.userNumber, 
    from: sms.twilioNumber, 
    body: request.body.text,
  }, function(err, message) { 
    if(err) {
      console.log(err.message);
    }
  });
});


app.listen(3000, function() {
  console.log('I\'m Listening...');
});

