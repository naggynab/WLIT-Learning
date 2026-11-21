// Task 4:
// Write a program to find the area of a square and a rectangle using JavaScript objects with a common area function. (Use this keyword). (Area of a Rectangle/Square = length * breadth)

const square = {
    length: 5,
    breadth: 5,
    area: function() {
        return this.length * this.breadth;
    }
};

const rectangle = {
    length: 10,
    breadth: 5,
    area: function() {
        return this.length * this.breadth;
    }
};

console.log("The area of the square is:", square.area()); // Output: The area of the square is: 25
console.log("The area of the rectangle is:", rectangle.area()); // Output: The area of the rectangle is: 50
