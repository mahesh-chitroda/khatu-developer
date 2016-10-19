var menu = {
	VEG : 1,
	NONVEG : 2,
	CHINESE : 3,
	ITALIAN : 4,
	THAI : 5
}

var foodChoice = menu.ITALIAN;

switch(foodChoice){
	case 1 :
		console.log('Customer wants to have - VEG Lunch !!');
		break;
	case 2 :
		console.log('Customer wants to have - NONVEG Lunch !!');
		break;
	case 3 :
		console.log('Customer wants to have - CHISESE Lunch !!');
		break;
	case 4 :
		console.log('Customer wants to have - ITALIAN Lunch !!');
		break;
	case 5 :
		console.log('Customer wants to have - THAI Lunch !!');
		break;
	default:
		console.log('Please choose the lunch option from our menu !!');
		break;
}