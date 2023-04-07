$(document).ready(function() {
	$('#sample-form').submit(function(e) {
		e.preventDefault();
		var firstName = $('#first-name').val();
		var lastName = $('#last-name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var experience = $('#experience').val();
		var noticePeriod = $('#notice-period').val();
		var currentDesignation = $('#current-designation').val();
		var currentCTC = $('#current-ctc').val();
		var expectedCTC = $('#expected-ctc').val();
		var joinDate = $('#join-date').val();
		var resume = $('#resume').val();

		// if (firstName == '' || lastName == '' || email == '' || phone == '' || experience == '' || noticePeriod == '' || currentDesignation == '' || currentCTC == '' || expectedCTC == '' || joinDate == '' || resume == '') {
		// 	alert('Please fill all fields');
		// 	return false;
		// }

		return true;
	});
});





$("#email_form").submit((e) => {
  $("#submit").prop("disabled", true);

  let data = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#about").val(),
      _captcha: false,
      _next: "",
  };
  if ($("#subject").val()) data.subject = $("#subject").val();

  submitForm(data);
  e.preventDefault();
});

const submitForm = (data) => {
  $.ajax({
      method: "POST",
      url: "https://formsubmit.co/vinay30001111@gmail.com",
      // dataType: "json",
      accepts: "application/json",
      data: data,
  })
      .done(function (data) {
          $("#popup-message").html(
              "Thank you for taking the time to contact me.<br> I appreciate your interest and I will get back to you as soon as possible."
          );
          $("#popupModal").modal("show");
          $("#email_form").trigger("reset");
      })
      .fail(() => {
          $("#popup-message").html(
              "Something went you wrong..!<br>Please try again."
          );
          $("#popupModal").modal("show");
      })
      .always(() => {
          $("#submit").prop("disabled", false);
      });
};


