console.log("1. Customer orders Momo");

// Handed off to the background timer (doesn't block the line!)
setTimeout(() => {
  console.log("2. Momo is steamed and served! (Took 2 seconds)");
}, 2000);

console.log("3. Cashier takes the next customer's order immediately");

/*Notice how Line 3 didn't wait 2 seconds. 
If this were a website, Line 3 is your user being 
able to scroll and click buttons while data downloads in the background */