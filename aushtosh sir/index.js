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





