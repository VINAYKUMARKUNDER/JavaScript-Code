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



























 