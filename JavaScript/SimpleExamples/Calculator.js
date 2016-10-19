function Addition(no1,no2){
	return no1 + no2;
}
function Subtraction(no1,no2){
	return no1 - no2;
}
function Multiplication(no1,no2){
	return no1 * no2;
}
function Division(no1,no2){
	return no1 / no2;
}

var PhysicsCalculator={
	no1 : 0,
	no2 : 0,
	result : 0,
	addition:function(){
		result= this.no1 + this.no2;
	},
	multiplication:function(){
		result= this.no1 * this.no2;
	},
	division:function(){
		result= this.no1 / this.no2;
	},
	subtraction:function(){
		result= this.no1 - this.no2;
	}
};