import React, { createContext, useState, useEffect } from 'react';
import { axios } from '../configs/Axios';
import { useNavigate } from 'react-router-dom';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/tasks');
        setTasks(response.data.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      await axios.post('/tasks', newTask);
      const updatedTasks = await axios.get('/tasks');
      setTasks(updatedTasks.data.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (taskId, updatedTask) => {
    try {
      await axios.put(`/tasks/${taskId}`, updatedTask);
      const updatedTasks = await axios.get('/tasks');
      setTasks(updatedTasks.data.data);
      navigate(-1);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      const updatedTasks = await axios.get('/tasks');
      setTasks(updatedTasks.data.data);
      navigate('/');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskProvider };
