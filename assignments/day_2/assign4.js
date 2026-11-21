// Task 4:
// Create a web page that:
// 1.Has an array: let colors = ["red", "blue", "green", "yellow"];
// 2.Use splice() to replace "green" with "purple".
// 3.Then use slice() to make a new array with the first two colors.
// 4.Show both arrays in the console. 


let colors = ["red", "blue", "green", "yellow"];
console.log("Original array:", colors);

// Replace "green" with "purple"
colors.splice(2, 1, "purple");
console.log("Array after replacing 'green' with 'purple':", colors);

// Make a new array with the first two colors
let newColors = colors.slice(0, 2);
console.log("New array with the first two colors:", newColors);
