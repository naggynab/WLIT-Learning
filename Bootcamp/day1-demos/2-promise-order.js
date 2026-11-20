// LIVE TOGGLE: Change true to false during class to demo error handling!
const kitchenHasIngredients = true;

function orderFood() {
  return new Promise((resolve, reject) => {
    console.log("Receipt printed (Promise is PENDING)...");

    setTimeout(() => {
      if (kitchenHasIngredients) {
        resolve("Here is your hot Chowmein! (RESOLVED)");
      } else {
        reject("Sorry, we ran out of noodles! (REJECTED)");
      }
    }, 1500);
  });
}


//then method is called when the promise is resolved, catch method is called when the promise is rejected, and finally method is called when the promise is no longer pending.
orderFood()
.then((data) => {
  console.log("Promise is got(FINALLY)");
})
.catch((error) => {
  console.log("Promise REJECTED:", error);
})
.finally(() => {
  console.log("Promise is no longer PENDING (FINALLY)");
});

//async function is a function that returns a promise. It allows you to write asynchronous code in a synchronous manner using the await keyword. The await keyword can only be used inside an async function and it pauses the execution of the function until the promise is resolved or rejected.
async function eatLunch() {
  try {
    const food = await orderFood(); // Pauses cleanly here until receipt finishes
    console.log("SUCCESS:", food);
  } catch (error) {
    console.log("HANDLED ERROR:", error);
  }
}

eatLunch();