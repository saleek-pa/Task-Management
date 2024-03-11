const express = require('express');
const tryCatch = require('../middlewares/tryCatch');
const { getAllTasks, getTaskByID, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', tryCatch(getAllTasks));
router.get('/tasks/:id', tryCatch(getTaskByID));
router.post('/tasks', tryCatch(createTask));
router.put('/tasks/:id', tryCatch(updateTask));
router.delete('/tasks/:id', tryCatch(deleteTask));

module.exports = router;
