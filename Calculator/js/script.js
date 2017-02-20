
/*	1. get All the keys
 *		- display screen
 *		- equal button
 *		- List of number button
 *		- List of function button
 *		- current number
 *		- First number
 *		- result
 *		- operator 
 *		- clear button
 *		- backspace button
 */ 		

var display = document.querySelector(".display span");
var equal = document.querySelector("#equal");
var nums= document.querySelectorAll(".num");
var ops = document.querySelectorAll(".operator");
var aktNum="";
var oldNum;
var result="";
var operator;
var clear = document.getElementById("clear");
var back = document.getElementById("backspace");

/*
2. Function - setNumber()
	When Number button is clicked. Get the current number selected
		- If a result war displayed, reset number
	 	- If not, kombine the numbers als String
	Then display the current number
*/

var getNumber = function() {

	if(result) {
		aktNum = this.getAttribute("data-num");
		result = "";
	} else {
		aktNum += this.getAttribute("data-num");
	}	
	display.innerHTML = aktNum;
};

/*
 	3. Function - save Number
		When function button is clicked, pass Number to Oldnumber and save operator
		Set the result in attr
*/

var passNumber = function() {
	oldNum = aktNum;
	aktNum = "";
	operator = this.getAttribute("data-func");

	console.log(operator);
	equal.setAttribute("data-equal", "");
};

/*
 	4. Function - calculation
		When equal button is clicked, calculation result
		- Convert String to number
		- choose operator
			- defaut condition: if equal is pressed without an operator, keep number and continue
		- If NaN or Infinity returned
	
		- Result display.
			- reset oldNum & keep result ?
*/

var calculate  = function() {
	
	oldNum = parseFloat(oldNum);
	aktNum = parseFloat(aktNum);	

	switch(operator) {

		case "+":
			result = oldNum + aktNum;
			break;

		case "-":
			result = oldNum - aktNum;
			break;

		case "×":
			result = oldNum * aktNum;
			break;

		case "÷":
			result = oldNum / aktNum;
			break;
	}
	
	display.innerHTML = result;
	console.log(result);
	equal.setAttribute("data-equal", result);

	oldNum = "";
	aktNum = "";

};

/*
	5. Function: clear value on screen
 */

function clearDisplay() {
	oldNum="";
	aktNum="";
	display.innerHTML = "";
}

clear.onclick = clearDisplay;

/*
	6. Function: backspacing the value
 */
function backspace() {
	if(display !== "" || display !== null) {
		aktNum = aktNum.substring(0, aktNum.length - 1);
		display.innerHTML =  aktNum;		
	}	
}

back.onclick = backspace;

// All Click-Event

for(var i = 0; i < nums.length; i++) {
	nums[i].onclick = getNumber;
}

for(var i = 0; i < ops.length; i++) {
	ops[i].onclick = passNumber;
}

equal.onclick = calculate;


/*
 *	1. get All the keys
 *		- display screen
 *		- equal button
 *		- List of number button
 *		- List of function button
 *		- current number
 *		- First number
 *		- result
 *		- operator // Batman
 *
 * 	2. Function - setNumber()
 * 			When Number button is clicked. Get the current number selected
 * 				- If a result war displayed, reset number
 * 			 	- If not, kombine the numbers als String
 * 		 	Then display the current number
 *
 * 	3. Function - save Number
 * 			When function button is clicked, pass Number to Oldnumber and save operator
 * 			Set the result in attr
 *
 * 	4. Function - calculation
 * 			When equal button is clicked, calculation result
 *    		- Convert String to number
 *    		- choose operator
 *    			- defaut condition: if equal is pressed without an operator, keep number and continue
 *    		- If NaN or Infinity returned
 *
 * 				- Result display.
 * 				- reset oldNum & keep result ?
 *
 * 	5. Function - clear
 * 			When clear button is click. Clear everything
 * 			- old Number, aktNum, display = '', set Attribut
 *
 *  6. Function - backspace
 *
 * 	7. All Click-Event
 * 			- numbers
 * 			- func-button
 * 			- equal 
 * 					
 */
 