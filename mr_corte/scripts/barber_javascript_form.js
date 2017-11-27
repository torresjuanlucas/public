/* script for form & datepicker */


/*
 script for datepicker in appointment form
 */
$(document).ready(function(){
	$("#datepicker").datepicker();
});


// Get today's date
var today = new Date();
$("#datepicker").datepicker({
    minDate: today // set the minDate to the today's date
});



//script for inputs appointment form in case of early browsers not supporting placeholder attribute

function insertPlaceholders() {
	if (!Modernizr.input.placeholder) {
		document.getElementById("firstName").value = "John";
		document.getElementById("lastName").value = "Smith";
		document.getElementById("phoneNum").value = "555-555-5555";
		document.getElementById("email").value = "jsmith@example.com";
	}
}

//add event listener 

if (window.addEventListener) {
	window.addEventListener("load", insertPlaceholders, false);
} else if (window.attachEvent) {
	window.addEventListener("onload", insertPlaceholders);
}
