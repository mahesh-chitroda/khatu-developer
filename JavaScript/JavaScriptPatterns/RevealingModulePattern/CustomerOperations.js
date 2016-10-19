var customer = function(){
	//Private Members
	var customerId,
		contactName,
		city,
		addNew = function(custId,name,city){
				this.customerId = custId;
				this.contactName = name;
				this.city = city;
		},
		printCustomer = function(){
				console.log('Customer ID ' + this.customerId + ' Contact Name ' + this.contactName + ' and city is ' + this.city);
		};
		//Public Members
		return{
			addNew:addNew,
			printCustomer:printCustomer	
		};
}();