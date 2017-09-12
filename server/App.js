var express = require('express');
var nodemailer = require('nodemailer');
var BodyParser = require('body-parser');

var app = express();

app.use(BodyParser.json());



app.post("/api/contact", (req, res) => {
  console.log(req.body);
  var email = req.body.email;
  var first = req.body.firstName;
  var last = req.body.lastName;
  var message = req.body.message;
  sendEmail(email, first, last, message);

});

function sendEmail(email, first, last, message) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: '',
      pass: '',
    },
    tls: {
      rejectUnauthorised: false
    }
  });

  let HelperOptions = {
    from: `${first} ${last} <${email}>`,
    to: 'sebastian.southern@gmail.com',
    subject: 'Website Inquiry Message',
    text: first + ' ' + last + '\n' + message,
  };

  transporter.sendMail(HelperOptions, (err, info) => {
    if(err) {
      console.log(err);
    }
    console.log("Message was sent: ");
    console.log(info);

  })
}

app.listen(3001, function() {
  console.log('listening on port: 3001');
})
