const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // Parse incoming JSON request bodies

// In-Memory Data Store (resets when server restarts)
let tasks = [
  { id: 1, title: "Learn Node.js", description: "Understand V8 and npm", completed: false },
  { id: 2, title: "Build an API", description: "Create Express CRUD routes", completed: true }
];

// ============================================================================
// 1. READ ALL: GET /api/tasks (Optional filter: ?completed=true|false)
// ============================================================================
app.get("/api/tasks", (req, res) => {
  const { completed } = req.query;
  if (completed !== undefined) {
    const isDone = completed === "true";
    return res.status(200).json(tasks.filter((t) => t.completed === isDone));
  }
  res.status(200).json(tasks);
});

// ============================================================================
// 2. READ ONE: GET /api/tasks/:id
// ============================================================================
app.get("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id); // URL params arrive as strings, convert to Number!
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: `Task with ID ${taskId} not found` });
  }
  res.status(200).json(task);
});

// ============================================================================
// 3. CREATE: POST /api/tasks
// ============================================================================
app.post("/api/tasks", (req, res) => {
  const { title, description = "" } = req.body;

  // Input validation (Never trust the client!)
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title: title.trim(),
    description: description.trim(),
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask); // 201 Created
});
// ============================================================================
// BONUS: FULL REPLACE WITH PUT /api/tasks/:id
// ============================================================================
app.put("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, description = "", completed = false } = req.body;

  // PUT requires the FULL resource object (at minimum, title is required)
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "PUT requires a full task object (title is required)" });
  }

  // Overwrites the entire task object at that index
  tasks[index] = {
    id: taskId,
    title: title.trim(),
    description: description.trim(),
    completed: Boolean(completed)
  };

  res.status(200).json(tasks[index]);
});
// ============================================================================
// 4. UPDATE: PATCH /api/tasks/:id
// ============================================================================
app.patch("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (typeof req.body.completed === "boolean") {
    task.completed = req.body.completed;
  }
  if (typeof req.body.title === "string" && req.body.title.trim()) {
    task.title = req.body.title.trim();
  }

  res.status(200).json(task);
});

// ============================================================================
// 5. DELETE: DELETE /api/tasks/:id
// ============================================================================
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = tasks.splice(index, 1)[0];
  res.status(200).json({ message: "Task deleted", task: deleted });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});