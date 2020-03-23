function total() {
	var firstnumber = parseFloat(document.getElementById('firstnumber').value);
	var secondnumber = parseFloat(document.getElementById('secondnumber').value);
	var result = firstnumber + secondnumber;
	document.getElementById("result").innerHTML = result;
}

function subtraction() {
	var firstnumber = parseFloat(document.getElementById('firstnumber').value);
	var secondnumber = parseFloat(document.getElementById('secondnumber').value);
	var result = firstnumber - secondnumber;
	document.getElementById("result").innerHTML = result;
}

function multiplication() {
	var firstnumber = parseFloat(document.getElementById('firstnumber').value);
	var secondnumber = parseFloat(document.getElementById('secondnumber').value);
	var result = firstnumber * secondnumber;
	document.getElementById("result").innerHTML = result;
}

function division() {
	var firstnumber = parseFloat(document.getElementById('firstnumber').value);
	var secondnumber = parseFloat(document.getElementById('secondnumber').value);
	var result = firstnumber / secondnumber;
	document.getElementById("result").innerHTML = result;
}

function power() {
	var firstnumber = parseFloat(document.getElementById('firstnumber').value);
	var secondnumber = parseFloat(document.getElementById('secondnumber').value);
	var result = Math.pow(firstnumber,secondnumber);
	document.getElementById("result").innerHTML = result;
}


 