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
  let resume = document.getElementById('resume').value;
  

  // if(phone.length()!==10)alert("phone number must be 10 digi")

  let body = "Name: "+ firstName +" "+lastName+"<br/> Email: "+ email1+" <br/> Phone: "+phone +"<br/> Experience: "+experience+"<br/> Notice Period: "+
   noticePeriod+"<br/> Current Designation: "+currentDesignation +"<br/> Current CTC: "+currentCTC+
   "<br/> Expected CTC: "+expectedCTC+" <br/> Join Date: "+ joinDate+"<br/> Resume: "+resume;

//    attachment
  Email.send({
    //Host : "smtp.elasticemail.com",
    //Username : "kunder.intertenment63@gmail.com",
    //Password : "15976E6CE79DBAD125851266000752B56E8C",
    SecureToken :"1bb21ca4-0280-46ed-99ad-2820fec00936",
    To : 'kunder.intertenment63@gmail.com',
    From : "kunder.intertenment63@gmail.com",
    Subject : "Contect From",
    Body : body
  }).then(
  message => alert("Thanks for submit from soon be conect you.")
  );
}