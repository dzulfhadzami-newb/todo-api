const express = require('express');
const app = express();

app.use(express.json());

// data sementara
let todos = [
  { id: 1, title: 'Belajar Node.js', done: false }
];

// GET semua todo
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST todo baru
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    done: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});
