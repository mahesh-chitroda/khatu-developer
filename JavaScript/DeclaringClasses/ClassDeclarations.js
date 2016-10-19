//Declare simple class with constructor
//First Example
/* 
function Product(productId,productName){
	this.productId = productId;
	this.productName = productName;

	this.printProduct = function(){
		console.log('Product ID - ' + productId + ' and product name is - ' + productName);
	};
}

//Using Product class

var product = new Product(23823,'Apple 6S');
product.printProduct();
*/
//Second Example with private and public properties and functions
/*
function Product(productId,productName){
	//Public Properties
	this.productId = productId;
	this.productName = productName;

	//Private Property
	var hotProductsDiscount = '20%';

	//Private Function
	var setDiscount = function(discountDate){
		console.log('We offer ' + hotProductsDiscount + ' discount to all hot products');
	};

	//Public Function
	//Using closure
	this.showDiscountPercentage = function(todaysDate){
		setDiscount(todaysDate);
	};
	//Public Function
	this.printProduct = function(){
		console.log('Product ID - ' + productId + ' and product name is - ' + productName);
	};
	
}

//Using Product class

var product = new Product(23823,'Apple 6S');
product.printProduct();
product.showDiscountPercentage(new Date());
*/

