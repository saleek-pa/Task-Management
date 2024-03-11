const Task = require('../models/taskModel');

const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  return res.status(200).json({
    status: 'success',
    message: 'Tasks retrieved successfully',
    data: tasks,
  });
};

const getTaskByID = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({
      status: 'failure',
      message: 'Task not found',
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'Task retrieved successfully',
    data: task,
  });
};

const createTask = async (req, res) => {
  const task = req.body;
  const newTask = await Task.create(task);
  return res.status(201).json({
    status: 'success',
    message: 'Task created successfully',
    data: newTask,
  });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true });
  if (!updatedTask) {
    return res.status(404).json({
      status: 'failure',
      message: 'Task not found',
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'Task updated successfully',
    data: updatedTask,
  });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) {
    return res.status(404).json({
      status: 'failure',
      message: 'Task not found',
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'Task deleted successfully',
    data: deletedTask,
  });
};

module.exports = { getAllTasks, getTaskByID, createTask, updateTask, deleteTask };
