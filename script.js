// // let x = 15;
// // console.log(x);

// // console.log(typeof typeof x);
// // console.log(typeof x);


// // let y = true;
// // console.log(y);
// // console.log(typeof y);

// // let a = null;
// // console.log(a);
// // console.log(typeof a);

// // console.log(null == undefined);

// // let vs var vs const

// // let x = 10;
// // console.log(x);

// // var y = 20;
// // console.log(y);

// // const z = 30;
// // console.log(z);

// function display() {
//     let x = 10;
//     console.log(x);
//     return x;
// }
// var y = display();
// console.log(y);


// //hoisting
// console.log(a);
// var a = 5;
// console.log(a);

// //in variable hoisiting, the variable declaration is moved to the top of the scope, but the assignment remains in place. So when we try to access the variable before it is assigned a value, it will return undefined.
// //In function hoisting, the entire function declaration is moved to the top of the scope, so we can call the function before it is defined in the code.

// let x=75;
// console.log(x> 50 ? "x is greater than 50" : "x is less than or equal to 50");
// //condition ? result if condition is true : result if condition is false

// // unary -> i++
// //binary -> i + 1

// let grade = 80
// if ((grade >= 90) && (grade <= 100)) {
//     console.log("Grade: A");
// } else if ((grade >= 80) && (grade < 90)) {
//     console.log("Grade: B");
// } else if ((grade >= 70) && (grade < 80)) {
//     console.log("Grade: C");
// } else {
//     console.log("Grade: D");
// }

// console.log(grade>80 ? "A" : "B");

//switch case
// let x;
// switch(x){
//     case 1:
//         console.log("x is 1");
//         break;  
//     case 2:
//         console.log("x is 2");
//         break;
//     case 3:
//         console.log("x is 3");
//         break;
//     default:
//         console.log("x is not 1, 2 or 3");
// }

// switch (x){
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     case 4:
//         console.log("4");
//         break;
//     default:
//         console.log("number not found");

// }

//Loops
//for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//while loop
// let x= 22;
// while (x<28) {
//     console.log(x);
//     x++;
// }

//do while loop
// let x = 22;
// do {
//     console.log(x);
//     x++;
// } while (x < 28);

// function display() {
//     let x = 10;
//     console.log(x);
//     return x;
// }

//parameters vs arguments : parameters are variables that are defined in the function definition, while arguments are the values that are passed to the function when it is called.

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 10));