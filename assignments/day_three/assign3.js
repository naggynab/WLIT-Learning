// Task 3:
// Write a program to find the area of a cylinder using JavaScript objects (radius, height and the area function should be in the object). (Area of a Cylinder= pi*r^2*h)

const cylinder = {
    radius: 5,
    height: 10,
    area: function() {
        return Math.PI * this.radius * this.radius * this.height;
    }
};

console.log("The area of the cylinder is:", cylinder.area()); // Output: The area of the cylinder is: 785.3981633974483
