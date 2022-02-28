
$(document).ready(function() {
    $('#btn').on('click',function() {
        var age = $('#input1').val()
        var salary = $('#input2').val()

	if (age >= 18) {
		if (salary >=20000) {
			if (salary >= 20000 && salary < 40000) {
				$('#para1').text('loan upto 5 lakh rupees can be offered')
			} else if (salary >= 40000 && salary < 80000) {
				$('#para1').text('loan upto 10 lakh rupees can be offered')
			} else if (salary >= 80000 && salary <= 200000) {
				$('#para1').text('loan upto 20 lakh rupees can be offered') 
			} else {
				$('#para1').text('loan upto 50 lakh rupees can be offered')
			}
		} else {
			$('#para1').text('below 20,000 salary no loan available')
		}
	} else {
		$('#para1').text('below 18 year no loan facility available');
	}

    })
})
