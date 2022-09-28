const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
} = require("../controllers/todo.controller");
const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);

module.exports = router;
