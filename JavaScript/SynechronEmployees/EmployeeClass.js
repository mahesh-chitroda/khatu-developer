var employeesList=[];
function SynechronEmployee (firstName,lastName,contactNo,email) {
	 //Declare Properties
	 this.firstName = firstName;
	 this.lastName = lastName;
	 this.contactNo = contactNo;
	 this.emailId = email;
	 var oldEmployee = null;
	 this.fetchAllEmployees = function(){
 		return employeesList;
	 };
	 this.fetchSingleEmployee = function (email) {
	 	oldEmployee = search(email,employeesList);
		console.log(oldEmployee);
		return oldEmployee;
	 }
	 this.addNewEmployee = function(employee){
	 	employeesList.push(employee);
	 };
	 this.modifyEmployee = function(modifiedEmployee){
		var index=employeesList.indexOf(oldEmployee);
		console.log(modifiedEmployee.firstName + " " + index);
		employeesList[index]=modifiedEmployee;
	 };
	 this.deleteEmployee = function(){
		var index=employeesList.indexOf(oldEmployee);
	 	employeesList.splice(index, 1);
	 }
	 var search=function(email, emps){
	 	console.log(emps);
    	for (var i=0; i < emps.length; i++) {
        if (emps[i].email === email) {
            return emps[i];
        }
    }
}

}

var employeeObj = new SynechronEmployee();

function modifyCurrentEmployee (fname,lname,contactno,email) {
	var emp={
		firstName:"",
		lastName:"",
		contactNo:"",
		email:""
	};
	 emp.firstName=fname;
	 emp.lastName=lname;
	 emp.contactNo=contactno;
	 emp.email=email;
	 employeeObj.modifyEmployee(emp);
}
function deleteCurrentEmployee (email) {
	 employeeObj.fetchSingleEmployee(email);
	 employeeObj.deleteEmployee();
}
function displayEmployees (fname,lname,contactno,email) {
	 return employeeObj.fetchAllEmployees();
}
function displaySingleEmployee (email) {
	 return employeeObj.fetchSingleEmployee(email);
}
function newEmployee (fname,lname,contactno,email) {
	var emp={
		firstName:"",
		lastName:"",
		contactNo:"",
		email:""
	};
	 emp.firstName=fname;
	 emp.lastName=lname;
	 emp.contactNo=contactno;
	 emp.email=email;
	 employeeObj.addNewEmployee(emp);
}