/* 
  -- INSTRUCTIONS --
  This time we want to write calculations using functions and get the results. Let's have a look at some examples:
  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3

  Requirements:
  - There must be a function for each number from 0 ("zero") to 9 ("nine")
  - There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
  - Each calculation consist of exactly one operation and two numbers
  - The most outer function represents the left operand, the most inner function represents the right operand
  - Division should be integer division. 
  For example, this should return 2, not 2.666666...:
  eight(dividedBy(three()));
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function zero(operation) {
	return operation ? operation(0) : 0;
}
// eslint-disable-next-line no-unused-vars
function one(operation) {
	return operation ? operation(1) : 1;
}
// eslint-disable-next-line no-unused-vars
function two(operation) {
	return operation ? operation(2) : 2;
}
// eslint-disable-next-line no-unused-vars
function three(operation) {
	return operation ? operation(3) : 3;
}
// eslint-disable-next-line no-unused-vars
function four(operation) {
	return operation ? operation(4) : 4;
}
// eslint-disable-next-line no-unused-vars
function five(operation) {
	return operation ? operation(5) : 5;
}
// eslint-disable-next-line no-unused-vars
function six(operation) {
	return operation ? operation(6) : 6;
}
// eslint-disable-next-line no-unused-vars
function seven(operation) {
	return operation ? operation(7) : 7;
}
// eslint-disable-next-line no-unused-vars
function eight(operation) {
	return operation ? operation(8) : 8;
}
// eslint-disable-next-line no-unused-vars
function nine(operation) {
	return operation ? operation(9) : 9;
}
// eslint-disable-next-line no-unused-vars
function plus(rightOperand) {
	return function (leftOperand) {
		return leftOperand + rightOperand;
	};
}
// eslint-disable-next-line no-unused-vars
function minus(rightOperand) {
	return function (leftOperand) {
		return leftOperand - rightOperand;
	};
}
// eslint-disable-next-line no-unused-vars
function times(rightOperand) {
	return function (leftOperand) {
		return leftOperand * rightOperand;
	};
}
// eslint-disable-next-line no-unused-vars
function dividedBy(rightOperand) {
	return function (leftOperand) {
		return Math.floor(leftOperand / rightOperand);
	};
}
