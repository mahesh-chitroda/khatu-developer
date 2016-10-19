function BasicMaths(){
	var _self = this;
	var num1, num2;
	//Declaring Public Properties
	//_self.Number1 = no1;
	//_self.Number2 = no2;
	Object.defineProperty(_self,'CompanyName',{
		get: function(){
			return "Synechron Pvt. Ltd., USA";
		}
	});
	Object.defineProperty(_self,'Number1',{
		get : function(){return num1;},
		set : function(value){ num1 = value + 100; }
	});
	Object.defineProperty(_self,'Number2',{
		get : function(){return num2;},
		set : function(value){ num2 = value + 100; }
	});
	//Declaring Private Function
	/*var changeNumbers = function(){
		_self.Number2 = _self.Number2 + 100;
		_self.Number1 = _self.Number1 + 100;
		console.log(_self.Number1);
	};*/
	//Declaring Public Functions
	_self.Addition=function(){
		//changeNumbers();
		return _self.Number1 + _self.Number2;
	};
	_self.Subtraction = function(){
		//changeNumbers();
		return _self.Number1 - _self.Number2;
		
	};
	_self.Multiplication = function(){
		return _self.Number1 * _self.Number2;;
	};
	_self.Division = function(){
		return _self.Number1 / _self.Number2;;
	};
}

/*BasicMaths.prototype.PrintNumbers=function(){
	console.log('This function is print function !!');
}*/

BasicMaths.PrintNumbers=function(){
	console.log('This function is print function !!');
}