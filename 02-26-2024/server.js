
const express = require('express');
const fs = require('fs');
const Task = require('./task');

const server = express();

// Middleware to parse JSON in the request body
server.use(express.json());

// Load tasks from file
let tasks = require('./tasks.json');

// Routes and Endpoints
server.get('/tasks', (req, res) => {
  res.json(tasks);
});

server.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find(task => task.id === taskId);
  res.json(task);
});

server.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  // Validation check for required fields
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }
  const newTask = new Task(Date.now().toString(), title, description, false);
  tasks.push(newTask);
  fs.writeFileSync('./tasks.json', JSON.stringify(tasks, null, 2));
  res.json(newTask);
});

server.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;
  const index = tasks.findIndex(task => task.id === taskId);

  if (index !== -1) {
    // Update task properties if provided
    tasks[index].title = title || tasks[index].title;
    tasks[index].description = description || tasks[index].description;
    tasks[index].completed = completed !== undefined ? completed : tasks[index].completed;

    fs.writeFileSync('./tasks.json', JSON.stringify(tasks, null, 2));
    res.json(tasks[index]);
  } else {
    res.status(404).json({ error: 'Task not found.' });
  }
});

server.patch('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { completed } = req.body;
  const index = tasks.findIndex(task => task.id === taskId);

  if (index !== -1) {
    tasks[index].completed = completed !== undefined ? completed : tasks[index].completed;

    fs.writeFileSync('./tasks.json', JSON.stringify(tasks, null, 2));
    res.json(tasks[index]);
  } else {
    res.status(404).json({ error: 'Task not found.' });
  }
});

server.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter(task => task.id !== taskId);

  fs.writeFileSync('./tasks.json', JSON.stringify(tasks, null, 2));
  res.json({ message: 'Task deleted successfully.' });
});

// Start the server
server.listen(8080, () => {
  console.log("Server is listening at: 8080");
});
