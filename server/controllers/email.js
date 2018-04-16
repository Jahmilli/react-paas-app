var nodemailer = require('nodemailer')

function sendEmail(email, first, last, message) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
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
      console.log(err)
    }
    console.log("Message was sent: ")
    console.log(info)
  })
}

module.exports = {
  "sendEmail": function(email, first, last, message) {
    sendEmail(email, first, last, message)
  }
}
