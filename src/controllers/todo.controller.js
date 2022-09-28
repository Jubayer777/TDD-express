const Todo = require("../model/todo.model");

const createTodo = async (req, res) => {
  try {
    const { name, description } = req.body;
    const todo = { name: name, description: description, completed: false };
    const savedTodo = await new Todo(todo).save();
    return res.status(201).json({
      success: true,
      todo: savedTodo,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getTodos = async (req, res) => {
  try {
    const savedTodos = await Todo.find({});
    if (savedTodos.length < 1) {
      throw new Error("There is no todos");
    } else {
      return res.status(200).json({
        success: true,
        todos: savedTodos,
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      todo: todo,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createTodo, getTodos, getTodoById };
