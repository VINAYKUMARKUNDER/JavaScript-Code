// function sendEmail(){
//   let firstName = document.getElementById('first-name').value;
//   let lastName = document.getElementById('last-name').value;
//   let email1 = document.getElementById('email').value;
//   let phone = document.getElementById('phone').value;
//   let experience = document.getElementById('experience').value;
//   let noticePeriod = document.getElementById('notice-period').value;
//   let currentDesignation = document.getElementById('current-designation').value;
//   let currentCTC = document.getElementById('current-ctc').value;
//   let expectedCTC = document.getElementById('expected-ctc').value;
//   let joinDate = document.getElementById('join-date').value;
//   let resume = document.getElementById('resume').value;
  

//   // if(phone.length()!==10)alert("phone number must be 10 digi")

//   let body = "Name: "+ firstName +" "+lastName+"<br/> Email: "+ email1+" <br/> Phone: "+phone +"<br/> Experience: "+experience+"<br/> Notice Period: "+
//    noticePeriod+"<br/> Current Designation: "+currentDesignation +"<br/> Current CTC: "+currentCTC+
//    "<br/> Expected CTC: "+expectedCTC+" <br/> Join Date: "+ joinDate;

// //    attachment
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "ashutosh2023singh@gmail.com",
//     Password : "B4B77067B2634EC94AEFC7854CBB2691CE92",
//     // SecureToken :"1bb21ca4-0280-46ed-99ad-2820fec00936",
//     To : 'ashutosh2023singh@gmail.com',
//     From : "ashutosh2023singh@gmail.com",
//     Subject : "Contect From",
//     Attachments: resume,
//     Body : body
//   }).then(
//   message => alert("Thanks for submit from soon be conect you.")
//   );
// }



  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let email1 = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let experience = document.getElementById('experience').value;
  let noticePeriod = document.getElementById('notice-period').value;
  let currentDesignation = document.getElementById('current-designation').value;
  let currentCTC = document.getElementById('current-ctc').value;
  let expectedCTC = document.getElementById('expected-ctc').value;
  let joinDate = document.getElementById('join-date').value;
  let resume = document.getElementById('resume').value;

const nodemailer = require('nodemailer');

// create transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ashutosh2023singh@gmail.com', // sender email address
        pass: 'B4B77067B2634EC94AEFC7854CBB2691CE92' // sender email password
    }
});

// setup email data
let mailOptions = {
    from: 'ashutosh2023singh@gmail.com', // sender address
    to: email1, // list of receivers
    subject: 'Hello from Node.js!', // Subject line
    text: 'Hello world!', // plain text body
    html: '<h1>Hello world!</h1>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else{
        console.log('Email sent: ' + info.response);
    }
});
