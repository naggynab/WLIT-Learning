const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: Automatically parses incoming JSON bodies into req.body
app.use(express.json());

// ============================================================================
// SLIDE 1 ROUTES: Basic Express Server
// ============================================================================

// Route 1: Plain text welcome message
// Test in browser: http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Welcome to our Express Server!");
});

// Route 2: JSON response
// Test in browser: http://localhost:3000/api/hello
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API!", ok: true });
});


// ============================================================================
// SLIDE 2 ROUTES: Inspecting req (params, query, body) & res
// ============================================================================

// Route 3: Reading Path Parameter (:id) and Query Parameter (?completed=...)
// Test in browser: http://localhost:3000/api/tasks/42?completed=false
app.get("/api/tasks/:id", (req, res) => {
  console.log("Path Param (id):", req.params.id);           // Logs: "42"
  console.log("Query Param (completed):", req.query.completed); // Logs: "false"

  res.status(200).json({
    id: Number(req.params.id),
    completedFilter: req.query.completed
  });
});

// Route 4: Reading JSON Request Body (req.body) on POST
app.post("/api/tasks", (req, res) => {
  console.log("Request Body:", req.body); // Logs: { title: "Learn Express" }

  res.status(201).json({
    created: req.body.title
  });
});


// ============================================================================
// START SERVER
// ============================================================================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});