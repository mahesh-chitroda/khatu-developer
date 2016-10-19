var customersList=[];

var customerObj={
	customerId: null,
	contactName: null,
	city: null,
	email: null,
	contactNo: null
};
function insertCustomerDetails(id,name,city,email,contactno){
	customerObj.customerId = id;
	customerObj.contactName = name;
	customerObj.city = city;
	customerObj.email = email;
	customerObj.contactNo = contactno;
	customersList.push(customerObj);
}
function fetchAllCustomers(){
	return customersList;
}