let todos = [
  { id: 1, title: "Belajar Node.js" },
  { id: 2, title: "Belajar REST API" }
];

exports.getTodos = (req, res) => {
  res.json({
    success: true,
    data: todos
  });
};

exports.createTodo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title wajib diisi"
    });
  }

  const newTodo = {
    id: todos.length + 1,
    title
  };

  todos.push(newTodo);

  res.status(201).json({
    success: true,
    data: newTodo
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(id)
  );

  if (todoIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Todo tidak ditemukan"
    });
  }

  const deletedTodo = todos.splice(todoIndex, 1);

  res.json({
    success: true,
    data: deletedTodo[0]
  });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title wajib diisi"
    });
  }

  const todo = todos.find(
    (todo) => todo.id === parseInt(id)
  );

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo tidak ditemukan"
    });
  }

  todo.title = title;

  res.json({
    success: true,
    data: todo
  });
};

