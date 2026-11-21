// Task 2:
// Write a JavaScript function to find the largest number in an array given as the parameter. (Use arrow function).

const findLargestNumber = (arr) => {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};

// Example usage:
const numbers = [3, 5, 7, 2, 8, -1];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number in the array is:", largestNumber); // Output: The largest number in the array is: 8     
