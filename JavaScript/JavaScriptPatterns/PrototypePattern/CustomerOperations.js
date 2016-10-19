var Customer = function(){
	var customerId,
		contactName,
		city;
};

Customer.prototype = {
	addNew : function(custId,name,city){
				this.customerId = custId;
				this.contactName = name;
				this.city = city;
	},
	printCustomer : function(){
				console.log('Customer ID ' + this.customerId + ' Contact Name ' + this.contactName + ' and city is ' + this.city);
	}
};