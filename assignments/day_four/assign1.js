//Starter Code

console.log("1");
setTimeout(() => {
    console.log("2")    ;
}, 50);
Promise.resolve().then(() => {
    console.log("3");
});
console.log("4");