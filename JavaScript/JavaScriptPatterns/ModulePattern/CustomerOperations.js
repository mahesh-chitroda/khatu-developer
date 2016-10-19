var Customer = function(){
	//Private Members
	var customerId,
		contactName,
		city;
	//Public Members
		return{
			addNew : function(custId,name,city){
				this.customerId = custId;
				this.contactName = name;
				this.city = city;
			},
			printCustomer : function(){
				console.log('Customer ID ' + this.customerId + ' Contact Name ' + this.contactName + ' and city is ' + this.city);
			}
		};
};