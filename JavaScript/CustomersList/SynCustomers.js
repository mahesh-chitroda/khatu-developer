var customersList=[
	{
		customerID : 100,
		contactName : "Pravinkumar R. D.",
		city : "Pune",
		contactNo : "222-333-8888",
		emailId : "pravin@synechron.com"
	},
	{
		customerID : 101,
		contactName : "Maria Andrus",
		city : "London",
		contactNo : "332-333-8888",
		emailId : "maria@synechron.com"
	},
	{
		customerID : 102,
		contactName : "John Mclane",
		city : "New York",
		contactNo : "111-333-8888",
		emailId : "john@synechron.com"
	},
	{
		customerID : 103,
		contactName : "Alisha R. D.",
		city : "Mumbai",
		contactNo : "444-333-8888",
		emailId : "alisha@synechron.com"
	},
	{
		customerID : 104,
		contactName : "John R.",
		city : "London",
		contactNo : "332-333-8888",
		emailId : "johnr@synechron.com"
	},
];

var displayCustomers = function(){
	var table = document.querySelector('#customersTable');
    for (var i = 0; i < customersList.length; i++) {
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = customersList[i].customerID;
        cell2.innerHTML = customersList[i].contactName;
        cell3.innerHTML = customersList[i].city;
        cell4.innerHTML = customersList[i].contactNo;
        cell5.innerHTML = customersList[i].emailId;
	}
};
displayCustomers();
var USA = USA || {};
var India = India || {}; 

India.CheckSynechronID = function (employeeID) {
	 alert("Employee ID is correct");
}

USA.CheckSynechronID = function (employeeID,socialID) {
	 alert("Employee ID and Social ID is correct");
}

India.CheckSynechronID();
USA.CheckSynechronID();

//Self Executing Function
(function DisplayMyMessage () {
	 alert("This is my Message!!");
})();














