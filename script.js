document.orderForm.onclick = function(){
	var size = document.orderForm.group1.value;
	var cream = document.orderForm.group2.value;
	var sugar = document.orderForm.group3.value;
	var ice = document.orderForm.group4.value;
	var whipcream = document.orderForm.group5.value;
	var style = document.orderForm.group6.value;

	var totalPrice = +size + +cream + +sugar + +ice + +whipcream + +style;
	price.innerHTML = "Price: " + totalPrice;
}
