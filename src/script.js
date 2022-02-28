function myfunction() {
	var age = document.getElementById('input1').value;
	var salary = document.getElementById('input2').value;

	if (age >= 18) {
		if (salary >=20000) {
			if (salary >= 20000 && salary < 40000) {
				document.getElementById('para1').innerHTML = 'loan upto 5 lakh rupees can be offered';
			} else if (salary >= 40000 && salary < 80000) {
				document.getElementById('para1').innerHTML = 'loan upto 10 lakh rupees can be offered';
			} else if (salary >= 80000 && salary <= 200000) {
				document.getElementById('para1').innerHTML = 'loan upto 20 lakh rupees can be offered';
			} else {
				document.getElementById('para1').innerHTML = 'loan upto 50 lakh rupees can be offered';
			}
		} else {
			document.getElementById('para1').innerHTML = 'below 20,000 salary no loan available';
		}
	} else {
		document.getElementById('para1').innerHTML = 'below 18 year no loan facility available';
	}
}
