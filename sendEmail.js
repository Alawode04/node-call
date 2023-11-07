const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alawodepuritymoyosola@gmail.com',
    pass: 'oybb suhk tcdg ovek'
  }
});

const mailOptions = {
  from: 'alawodepuritymoyosola@gmail.com',
  to: 'profsainhm@gmail.com',
  subject: 'Sending Email using Node.js',
  text: ' Learning node.js is fun! That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});