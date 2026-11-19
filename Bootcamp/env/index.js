require("dotenv").config();

const PORT = process.env.PORT || 3000;
const apiKey = process.env.WEATHER_API_KEY;

console.log("Loaded Port:", PORT);
console.log("Loaded API Key:", apiKey);