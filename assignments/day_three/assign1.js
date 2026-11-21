// Task 1:
// Write a JavaScript function that accepts a number as a parameter and checks whether the number is positive or not.
function checkPositiveNumber(num) {
    if (num > 0) {
        console.log(num + " is a positive number.");
    } else if (num === 0) {
        console.log(num + " is neither positive nor negative.");
    }
    else {
        console.log(num + " is a negative number.");
    }}

checkpositiveNumber(5);  // Output: 5 is a positive number.
checkpositiveNumber(-3);  // Output: -3 is a negative number.
checkpositiveNumber(0);  // Output: 0 is neither positive nor negative. 
