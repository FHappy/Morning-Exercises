// Given 2 non-negative integers, a and b, 
// return their sum, so long as the sum has the same number of digits as a
// (the first integer). 
// If the sum has more digits than a, just return the first integer.

// NOTE: there are a couple of ways to compute the number of digits
// easiest would be to convert to a string and then find the length
// for example: 
// var num = 42;
// numAsString = num.toString();
// console.log(numAsString.length); -> should log ('2') to the console 

// IMPORTANT: Do not change the function name
// EXAMPLES
// sumLimit(3,9) -> 3 (actual sum is 12 whish has more digits than 3)
// sumLimit(12,44) -> 56 (actual sum, same number of digits as 12)
// sumLimit(33,67) -> 33 (actual sum is 100, which has more digits than 33)
// sumLimit(-45, 50) -> -45 (actual sum is 5, which has less digits than -45)

function sumLimit(a, b) {
// ENTER ANSWER BELOW
// STEPS/PSEUDOCODE
// 1. Find number of digits in first integer (a)
    // -> convert a to a string
    // -> run .length() on that value and store the value to reference later
  // 2. Repeat the process for the actual sum (could also store the actual sum...)
  // 3. Compare values
    // -> if values are different => return a (the first integer)
    // else return the actual sum


}

module.exports = sumLimit;