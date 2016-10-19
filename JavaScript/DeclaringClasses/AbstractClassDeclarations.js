//To create an Abstarct class in JavaScript which can not be instantiated we can create an object in JavaScript

var Person = {
	firstName: 'Pravinkumar',
	lastName: 'R.D.',
	printInformation: function(){
		console.log("Person's full name is - " + this.firstName + " " + this.lastName);
	}
};

//var newPerson = new Person(); //This will throw an exception Person is not defined.

//To make this work, we will use inheritance
function Employee(firstName,lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

//Implementing inheritance
Employee.prototype = Person;

//Calling Employee class
var e = new Employee('Anjala','Johns');
e.printInformation();

//Testing instance of Person and Employee
console.log(e instanceof Person);
console.log(e instanceof Employee);