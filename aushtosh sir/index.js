function sendEmail(){
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
  let resume = document.getElementById('resume').files[0];
  var fileName = document.getElementById('resume').files[0].name;
  
  let body = "Name: "+ firstName +" "+lastName+"<br/> Email: "+ email1+" <br/> Phone: "+phone +"<br/> Experience: "+experience+"<br/> Notice Period: "+
   noticePeriod+"<br/> Current Designation: "+currentDesignation +"<br/> Current CTC: "+currentCTC+
   "<br/> Expected CTC: "+expectedCTC+" <br/> Join Date: "+ joinDate;

  // Convert file to base64-encoded string
  let reader = new FileReader();
  reader.readAsDataURL(resume);
  reader.onload = function () {
    let pdfBase64 = reader.result.split(",")[1];

    // Send email with attachment
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "ashutosh2023singh@gmail.com",
      Password : "B4B77067B2634EC94AEFC7854CBB2691CE92",
      To : 'ashutosh2023singh@gmail.com',
      From : "ashutosh2023singh@gmail.com",
      Subject : "Contact Form",
      Attachments: [
        {
          name: fileName,
          data: pdfBase64
        }
      ],
      Body : body
    }).then(
      message => alert("Thanks for submitting your form. We will soon be in touch with you.")
    );
  };
}




// import Email from 'emailjs-com';

// function sendEmail() {
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
//   let resume = document.getElementById('resume').files[0];

//   let body = "Name: " + firstName + " " + lastName + "<br/> Email: " + email1 + " <br/> Phone: " + phone + "<br/> Experience: " + experience + "<br/> Notice Period: " +
//     noticePeriod + "<br/> Current Designation: " + currentDesignation + "<br/> Current CTC: " + currentCTC +
//     "<br/> Expected CTC: " + expectedCTC + " <br/> Join Date: " + joinDate;

//   // create a new FormData object and append the resume file to it
//   let formData = new FormData();
//   formData.append('resume', resume);

//   // send the email with attachment
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     SecureToken: "b3bf9dc7-ca62-4b69-982e-7ab96bfe7540", // use your own SecureToken here
//     To: 'ashutosh2023singh@gmail.com',
//     From: "ashutosh2023singh@gmail.com",
//     Subject: "Contact Form",
//     Html: body,
//     Attachments: [
//       {
//         name: resume.name,
//         data: formData
//       }
//     ]
//   }).then(
//     message => alert("Thanks for submitting the form. We will get in touch with you soon.")
//   );
// }

 