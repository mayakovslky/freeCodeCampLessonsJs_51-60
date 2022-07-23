// 51. Return a Value from a Function with Return

// function timesFive(num) {
//   return num * 5;
// }

// 52. Global Scope and Functions

// const myGlobal = 10;

// function fun1() {
  
//   oopsGlobal = 5;  
// }

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// 53. Local Scope and Functions

// function myLocalScope() {
//   let myVar;
//   console.log('inside myLocalScope', myVar);
// }
// myLocalScope();

// console.log('outside myLocalScope', myVar);

// 54. Global vs. Local Scope in Functions

// const outerWear = "T-Shirt";

// function myOutfit() {
//   let outerWear = "sweater";
//   return outerWear;
// }

// myOutfit();

// 55. Understanding Undefined Value returned from a Function

// let sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// function addFive() {
//   sum = sum + 5;
// }

// addThree();
// addFive();

// 56. Assignment with a Returned Value

// let processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// processed = processArg(7);

// 57. Stand in Line

// function nextInLine(arr, item) {
//   arr.push(item);
//   const removed = arr.shift();
//   return removed;
// }

// const testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// 58. Understanding Boolean Values

// function welcomeToBooleans() {
//   return true; 
// }

// 59. Use Conditional Logic with If Statements

// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }
//     return "No, that was false";
// }

// 60. Comparison with the Equality Operator

// function testEqual(val) {
//   if (val == 12) { 
//     return "Equal";
//   }
//   return "Not Equal";
// }

// testEqual(10);