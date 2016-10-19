//Class Declaration
function Product(productId,productName){
	this.productId = productId;
	this.productName = productName;

	this.printProduct = function(){
		console.log('Product ID - ' + productId + ' and product name is - ' + productName);
	};
}

//Declaring Static Property
Product.CompanyOwnerName = 'Jambo Online Sales';

//Using Product class
var product = new Product(23823,'Apple 6S');

//This will print product name
console.log(product.productName);
var owner = product.CompanyOwnerName;
//This will throw an exeption - Undefined
console.log(owner);
var companyOwner = Product.CompanyOwnerName;
//This will print the company Owner name
console.log(companyOwner);