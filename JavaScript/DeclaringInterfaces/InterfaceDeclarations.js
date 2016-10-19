//Interface Declaration in JavaScript
var IProductOprations = {
	addProduct: function(productId,productName){},
	removeProduct: function(productId,productName){},
	updateProduct: function(productId,productName){},
	printProduct: function(productId,productName){}
};

var Product = function(){};
Product.prototype = Object.create(IProductOprations);

Product.prototype.addProduct=function(productId,productName){
	console.log('Product ID - ' + productId + ' and product name is - '+productName + ' has been added into database !');
};

Product.prototype.removeProduct=function(productId,productName){
	console.log('Product ID - ' + productId + ' and product name is - '+productName + ' has been removed into database !');
};

Product.prototype.updateProduct=function(productId,productName){
	console.log('Product ID - ' + productId + ' and product name is - '+productName + ' has been updated into database !');
};

Product.prototype.printProduct=function(productId,productName){
	console.log('Product ID - ' + productId + ' and product name is - '+productName);
};

//Calling product class
var prod = new Product();
prod.addProduct(1,'Windows 10 Phone');
prod.updateProduct(1,'Windows 10 Phone');
prod.printProduct(1,'Windows 10 Phone');
prod.removeProduct(1,'Windows 10 Phone');


