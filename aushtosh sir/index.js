// $(document).ready(function() {
// 	$('#sample-form').submit(function(e) {
// 		e.preventDefault();
// 		var firstName = $('#first-name').val();
// 		var lastName = $('#last-name').val();
// 		var email = $('#email').val();
// 		var phone = $('#phone').val();
// 		var experience = $('#experience').val();
// 		var noticePeriod = $('#notice-period').val();
// 		var currentDesignation = $('#current-designation').val();
// 		var currentCTC = $('#current-ctc').val();
// 		var expectedCTC = $('#expected-ctc').val();
// 		var joinDate = $('#join-date').val();
// 		var resume = $('#resume').val();

// 		// if (firstName == '' || lastName == '' || email == '' || phone == '' || experience == '' || noticePeriod == '' || currentDesignation == '' || currentCTC == '' || expectedCTC == '' || joinDate == '' || resume == '') {
// 		// 	alert('Please fill all fields');
// 		// 	return false;
// 		// }

// 		return true;
// 	});
// });




// const sendEmail = (data) => {
// 	console.log(data);
// 	const email = "recipient@example.com";
// 	const subject = "New Form Submission";
// 	const body = `
// 	  <p><strong>First Name:</strong> ${data.firstName}</p>
// 	  <p><strong>Last Name:</strong> ${data.lastName}</p>
// 	  <p><strong>Email:</strong> ${data.email}</p>
// 	  <p><strong>Phone:</strong> ${data.phone}</p>
// 	  <p><strong>Total Experience:</strong> ${data.experience}</p>
// 	  <p><strong>Notice Period:</strong> ${data.noticePeriod}</p>
// 	  <p><strong>Current Designation:</strong> ${data.currentDesignation}</p>
// 	  <p><strong>Current CTC:</strong> ${data.currentCTC}</p>
// 	  <p><strong>Expected CTC:</strong> ${data.expectedCTC}</p>
// 	  <p><strong>When can you join us?:</strong> ${data.joinDate}</p>
// 	`;
  
// 	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
// 	window.location.href = mailtoLink;
//   }



  const nodemailer = require ('nodemailer');
//   const nodemailer1 = import ('../node_modules/nodemailer/lib/nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kunder.intertenment63@gmail.com',
    pass: 'Vinay@1313'
  }
});

// Define email options
let mailOptions = {
  from: 'kunder.intertenment63@gmail.com',
  to: 'vinay3000111@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Node.js and Gmail'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  
