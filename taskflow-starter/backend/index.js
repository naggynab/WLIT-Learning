require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Data Store
let tasks = [
  { id: 1, title: "Build Express Server", description: "Day 2 Bootcamp Milestone", completed: true },
  { id: 2, title: "Connect Frontend to Backend", description: "Switch API_URL to localhost:3000", completed: false }
];
let nextId = 3;

// 1. GET all tasks (Already working!)
app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// 2. POST create a new task
app.post("/api/tasks", (req, res) => {
  const { title, description } = req.body;

  // TODO 1 (Day 2): Validate that `title` exists. If empty, return status 400 with { error: "Title required" }
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    description: description || "Created on Express backend",
    completed: false
  };

  tasks.unshift(newTask);
  res.status(201).json(newTask);
});

// 3. PATCH update task completion
app.patch("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  if (req.body.completed !== undefined) {
    task.completed = Boolean(req.body.completed);
  }
  res.status(200).json(task);
});

// 4. DELETE remove a task
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  // TODO 2 (Day 2): Find the task index and remove it using tasks.splice(index, 1)
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  tasks.splice(index, 1);
  res.status(200).json({ message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`TaskFlow Backend running at http://localhost:${PORT}`);
});