$("#registerForm").validate({
	rules: {
		"usr" : {
			minlength : 6,
			required: true
		},
		"pass" : {
			required: true,
			minlength: 6,
			maxlength: 20,
			digit: true
		},
		"rpass": {
			required: true,
			equalTo: "exampleInputPassword2"
		}
	}

});

jQuery.validator.addMethod("digit", function(value, element) {
	for (let i = 0; i < value.length; i++) {
		let currentSymbol = value[i].charCodeAt();
		let isDigit = (48 <= currentSymbol && currentSymbol <=57);
		if(isDigit) {
			return true;
		}
	}
	return false;

}
,"Enter at least one digit!")

(function($) {
			window.fnames = new Array(); 
			window.ftypes = new Array();
			fnames[1]='FNAME';
			ftypes[1]='text';
			fnames[0]='EMAIL';
			ftypes[0]='email';
			fnames[2]='LNAME';
			ftypes[2]='text';
			fnames[3]='ADDRESS';
			ftypes[3]='address';
			fnames[4]='PHONE';
			ftypes[4]='phone';
			fnames[5]='BIRTHDAY';
			ftypes[5]='birthday';
			fnames[6]='MMERGE6';
			ftypes[6]='text';
		}
		(jQuery));
		var $mcj = jQuery.noConflict(true);