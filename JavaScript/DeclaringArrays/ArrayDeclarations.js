var menu = ['Veg', 'NonVeg', 'Chinese', 'Italian', 'Thai'];

menu[menu.length]='American';
menu.push('Others');
//Simple Array
for (var i = 0; i < menu.length; i++) {
	console.log(menu[i]);
}
console.log('');
//Array with different objects

var hetroObjectArray = ['Bing Search','Google Search', 1, true];
for (var i = 0; i < hetroObjectArray.length; i++) {
	console.log(hetroObjectArray[i]);
}
console.log('');
console.log('Menu Array has total - ' + menu.length + ' items');

menu.sort();
console.log();
console.log('Sorted Array Items !!');
for (var i = 0; i < menu.length; i++) {
	console.log(menu[i]);
}

console.log();
menu.sort();
menu.reverse();
console.log('Sorted Array Items Descending!!');
for (var i = 0; i < menu.length; i++) {
	console.log(menu[i]);
}