const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
} = require("../controllers/todo.controller");

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);
router.put("/todos/:id", updateTodo);

module.exports = router;

