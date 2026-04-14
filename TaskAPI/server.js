const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let tasks = []; // In-memory storage for tasks
let id = 1;

// Root route
app.get("/", (req, res) => {
  res.send("✅ Welcome to Task API! Use /tasks endpoints for CRUD operations.");
});

// Create a new task
app.post("/tasks", (req, res) => {
  const task = {
    id: id++,
    title: req.body.title,
    description: req.body.description,
    completed: false
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Get a single task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// Update a task by ID
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

  res.json(task);
});

// Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const deletedTask = tasks.splice(index, 1);
  res.json({ message: "Task deleted successfully", task: deletedTask[0] });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});