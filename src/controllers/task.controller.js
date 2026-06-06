const Task = require("../models/task.model");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({
    boardId: req.params.boardId,
  });

  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const task =
    await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Task deleted",
  });
};

exports.moveTask = async (req, res) => {
  const {
    taskId,
    column,
    order,
  } = req.body;

  const task =
    await Task.findByIdAndUpdate(
      taskId,
      {
        column,
        order,
      },
      { new: true }
    );

  res.json(task);
};