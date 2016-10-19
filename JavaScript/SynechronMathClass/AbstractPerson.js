// Abstract Class Declaration
var Person = {
	firstName : 'No First Name',
	lastName : 'No Last Name',
	city : 'No City',
	PrintProfile : function(){
		console.log('First Name is ' + this.firstName + ', Last Name is ' + this.lastName + ' and city is ' + this.city);
	}
}

function Customer(customerId){
	this.CustomerID = customerId;
}
Customer.prototype = Person;

Customer.prototype.PrintMessage=function(){
	
};