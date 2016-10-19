//Class Declaration
function Product(productId,productName){
	this.productId = productId;
	this.productName = productName;
	var demo=100;
	this.printProduct = function(){
		console.log('Product ID - ' + productId + ' and product name is - ' + productName);
	};
}


//This will work but will not have access to private/member data of a class
/*Product.generateProductId = function(id){
	this.productId = id;
	console.log('The generated product id is - ' + this.productId);
}*/

//This can be done with JavaScript Prototype Object
Product.prototype.generateProductId = function(id){
	this.productId = id;
	console.log('The generated product id is - ' + this.productId);
}
var prod = new Product();
prod.generateProductId(2389238);