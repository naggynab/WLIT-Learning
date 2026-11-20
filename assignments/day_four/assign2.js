//Build a wait(ms) Promise
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
    await wait(1000);
    console.log("Waited 1 second");
}
run();