var nodemailer = require('nodemailer')

function sendEmail(email, first, last, message) {
  return new Promise(function(resolve, reject) {
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
        reject(err)
      }
      console.log("Message was sent: ")
      resolve(info)
    })
  })
}

module.exports = {
  "sendEmail": function(email, first, last, message) {
    return new Promise(function(resolve, reject) {
      sendEmail(email, first, last, message).then(function(myResolve) {
        resolve(myResolve)
      }).catch(function(err) {
        reject(err)
      })
    })
  }
}
