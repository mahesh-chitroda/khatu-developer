var customersList=[];

(function(){
	var customer1 = {
		customerId: 100,
		contactName: 'John Mclane',
		city: 'New York',
		email: 'johnm@synechron.com',
		contactNo: 27382387
	};
	var customer2 = {
		customerId: 101,
		contactName: 'Maria Andrus',
		city: 'Berlin',
		email: 'maria@synechron.com',
		contactNo: 34343555
	};
	var customer3 = {
		customerId: 103,
		contactName: 'Anjala Johns',
		city: 'London',
		email: 'anjalaj@synechron.com',
		contactNo: 23334224
	};
	customersList.push(customer1);
	customersList.push(customer2);
	customersList.push(customer3);
})();

function Customer(){
	this.getAllCustomers = function(){
		return customersList;
	};
	this.getCustomerByContactNo = function(contactNo){

	};
	this.addNewCustomer = function(newCustomerProfile){
		customersList.push(newCustomerProfile);
	};
}