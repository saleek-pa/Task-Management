import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

function App() {
  return (
    <Router>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/tasks/add-task" element={<AddTask />} />
          <Route path="/tasks/:id/edit-task" element={<EditTask />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
}

export default App;
