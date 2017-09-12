var express = require('express');
var nodemailer = require('nodemailer');

var app = express();


let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'sebastian.southern@gmail.com',
    pass: 'sebastian97',
  },
  tls: {
    rejectUnauthorised: false
  }
});

let HelperOptions = {
  from: '"Sebastian Southern" <sebastian.southern@gmail.com>',
  to: 'sebastian.southern@gmail.com',
  subject: 'Test',
  text: 'This is a test email using NODEjs',
};

transporter.sendMail(HelperOptions, (err, info) => {
  if(err) {
    console.log(err);
  }
  console.log("Message was sent: ");
  console.log(info);

})

app.listen(3000, function() {
  console.log('listening on port: 3000');
})
