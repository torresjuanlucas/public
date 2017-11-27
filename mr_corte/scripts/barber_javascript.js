
// barbershop JavaScript
//written by Alex Poole
// June 20, 2017


//function to toggle navbar from desktop to mobile mode
function navToggle() {
	document.getElementById('nav-menu').classList.toggle('is-active');
}


/* the following is to make the navbar disappear on scroll down,
re-appear on scroll up and end of page */
;( function( $, window, document, undefined )
	{
		'use strict';

		var elSelector		= '#nav',
			$element		= $( elSelector );

		if( !$element.length ) return true;

		var elHeight		= 0,
			elTop			= 0,
			$document		= $( document ),
			dHeight			= 0,
			$window			= $( window ),
			wHeight			= 0,
			wScrollCurrent	= 0,
			wScrollBefore	= 0,
			wScrollDiff		= 0;

		$window.on( 'scroll', function()
		{
			elHeight		= $element.outerHeight();
			dHeight			= $document.height();
			wHeight			= $window.height();
			wScrollCurrent	= $window.scrollTop();
			wScrollDiff		= wScrollBefore - wScrollCurrent;
			elTop			= parseInt( $element.css( 'top' ) ) + wScrollDiff;

			if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
				$element.css( 'top', 0 );

			else if( wScrollDiff > 0 ) // scrolled up; element slides in
				$element.css( 'top', elTop > 0 ? 0 : elTop );

			else if( wScrollDiff < 0 ) // scrolled down
			{
				if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
					$element.css( 'top', ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 );

				else // scrolled down; element slides out
					$element.css( 'top', Math.abs( elTop ) > elHeight ? -elHeight : elTop );
			}

			wScrollBefore = wScrollCurrent;
		});

	})( jQuery, window, document );











	/*
	function to validate appointment form: validationEvent()
	*/

// below function executes on form submit
// 	function validationEvent(){
// 		//storing field values in variables
// 		var hairSelect = document.getElementById("hairSelect").value;
// 		var datepicker = document.getElementById("datepicker").value;
// 		var chooseTime = document.getElementById("chooseTime").value;
// 		var firstName = document.getElementById("firstName").value;
// 		var lastName = document.getElementById("lastName").value;
// 		var phoneNum = document.getElementById("phoneNum").value;
// 		var email = document.getElementById("email").value;
// 		//regular expression for email
// 		var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// 		//var for current date

// 		//regular expression for phoneNum
// 		var phoneReg = /^[2-9]\d{2}-\d{3}-\d{4}$/;

// 		if (firstName != '' && lastName != '' && phoneNum != '' &&
// 			email != '' && hairSelect != '' && datepicker != ) {
// 			if(email.match(emailReg)) {
// 				if (phoneNum.match(phoneReg)) {

// 				}
// 			}
// 		}

// 	} 



//form validation using jquery validator plugin

// //Wait for the DOM  to be ready
// $(document).ready(function() {
// 	// initialize form validation on the appt form
// 	//it has the name attribute 'appointment'
// 	$("#form").validate({
// 		//Specify validation rules
// 		rules: {
// 			//the key name on the left side is the name attribute
// 			//of an input field. validation rules are defined 
// 			//on the right side
// 			firstName:"required",
// 			lastName: "required",
// 			email: {
// 				required:true,
// 				//specify that email should be validated 
// 				//by the built-in 'email' rule
// 				email:true
// 			},
		
// 		},
// 		//specify validation error messages
// 		messages: {
// 			firstName: "Please enter your first name",
// 			lastName: "Please enter your last name",
// 			phoneNum: {
// 				required: "Please provide your phone number",
// 				phone: "Please enter a valid phone number"
// 			},
// 			email:"Please enter a valid email address"
// 			},
// 			//Make sure the form is submitted to the destination
// 			//defined in the "action" attribute of the form when valid
// 			submitHandler: function(form) {
// 				form.submit();
// 			}
// 	});
// });

