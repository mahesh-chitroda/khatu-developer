//Void function without parameters
function PrintMessage(){
	console.log('This a Void Function without parameters !!');
}
PrintMessage();
//Void function with parameters
function CalculateAge(birthYear){
	var date = new Date();
	var currentYear = date.getFullYear();
	var age = currentYear - birthYear;
	console.log('Your age is - ' + age);
}
CalculateAge(1980);
//Return function with parameter
function Addition(no1,no2){
	return no1 + no2;
}
var addition = Addition(100,200);
console.log('Addition of two numbers is - ' + addition);
//Function Overloading
function TodaysMessage(){
	console.log('This is todays message !!');
}

function TodaysMessage(message){
	console.log('Todays message is - ' + message);
}

TodaysMessage();
TodaysMessage('Welcome To India !!');

//Working with 'this' keyword
function CompanyInformation1(){
	this.companyName='Google Pvt. Ltd';
	setTimeout(function(){
		console.log(this.companyName);
	},1000);
}
CompanyInformation1();
function CompanyInformation2(){
	var self = this;
	self.companyName='Google Pvt. Ltd';
	setTimeout(function(){
		console.log(self.companyName);
	},1000);
}
CompanyInformation2();