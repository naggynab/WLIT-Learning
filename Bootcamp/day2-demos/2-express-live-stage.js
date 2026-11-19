const express = require("express");
const cors = require("cors");
const app = express();

// Middleware: Unpacks incoming JSON bodies & allows frontend requests
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Learn Express Routes", completed: false },
  { id: 2, title: "Test with Thunder Client", completed: true }
];

// ==========================================
// STAGE 1: Active from the start (GET all)
// ==========================================
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// ==========================================
// STAGE 2: Uncomment live to add POST (Create)
// ==========================================
/*
app.post("/api/tasks", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required!" });
  }
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
*/

// ==========================================
// STAGE 3: Uncomment live to show .env secret
// ==========================================
/*
require("dotenv").config();
app.get("/api/secret-check", (req, res) => {
  res.json({
    message: "The browser never sees the real key!",
    keyLoadedOnServer: Boolean(process.env.EXTERNAL_SERVICE_API_KEY)
  });
});
*/

app.listen(3000, () => {
  console.log("Live Demo Server running at http://localhost:3000/api/tasks");
});