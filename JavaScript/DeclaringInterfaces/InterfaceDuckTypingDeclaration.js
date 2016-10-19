//Interface declaration with Duck Typing

function PrintInformation(p){
	var firstName = p.firstName;
	var lastName = p.lastName;
	var email = p.email;
	console.log('First name ' + firstName + ' last name ' + lastName + ' email ID ' + email);
}

var Employee = {
	firstName: 'Pravinkumar',
	lastName: 'R.D.',
	email: 'pravin@jambosales.com'
};

PrintInformation(Employee);

function Customer(firstName,lastName,email){
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
}

var c = new Customer('Anjala','Johns','anjal@jambosales.com');
PrintInformation(c);