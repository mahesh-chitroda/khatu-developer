//Inheritance is done with chain of Prototype object
function Person(firstName,lastName){
	this.firstName = firstName;
	this.lastName = lastName;
};

Person.prototype.printInformation=function(){
	console.log("Person's full name is - " + this.firstName + " " + this.lastName);
}

function Employee(employeeId,email){
	this.employeeId = employeeId;
	this.email = email;
}

//Applying is-a relation between Employee and Person
Employee.prototype = new Person('Pravinkumar','R.D.');

var e = new Employee(1234,'pravin@jambosales.com');
e.printInformation();

//Testing instance of Person and Employee
console.log(e instanceof Person);
console.log(e instanceof Employee);