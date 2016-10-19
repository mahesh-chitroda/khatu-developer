//Global namespace
var num1;
var num2=10;
var NUM3=20;


console.log('Type of num1 - ' + typeof(num1));//Result is undefined
console.log('Type of num2 - ' + typeof(num2));//Result is number
console.log('Type of num3 - ' + typeof(num3));//Result is undefined

var num2='Hello World !!!';
console.log('Type of num2 - ' + typeof(num2));//Result is string

var num2=true;
console.log('Type of num2 - ' + typeof(num2));//Result is boolean

//Comparing variables

var number1=100, number2='100';
//if (number1==number2) //Type Comparison 
if (number1==number2) //Value Comparison
{
	console.log('Comparison is true !!')
}
else {
	console.log('Comparison is false !!')	
}

//Scopping variables
	function PrintMessages (name, message) {
		 var messangerName="The messanger name is - " + name;
		 console.log(messangerName);
		 if (name!==null && message!==null) {
		 	var formatedMessage = "Mr./Mrs./Miss " + name + " has send a message - " + message;
		 };
		 return formatedMessage; //The variable declared in 'if' condition is available outside the if condition.
	}

//Calling function
var message = PrintMessages('Spider Man','With great power comes great responsibility!!');
console.log(message);


