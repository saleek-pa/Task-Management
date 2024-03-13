import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-5 mt-5 mb-3">
        <h2 className="">My tasks</h2>
        <Button variant="secondary" onClick={() => navigate('/tasks/add-task')}>
          Add Task
        </Button>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        {tasks?.map((task) => (
          <Card
            key={task._id}
            className="mb-2 bg-dark text-white"
            style={{ width: '26rem', cursor: 'pointer' }}
            onClick={() => navigate(`/tasks/${task._id}`)}
          >
            <Card.Body>
              <Card.Title>{task.title} </Card.Title>
              <Card.Text>Due Date: {task.dueDate?.slice(0, 10)}</Card.Text>
              <Card.Text
                className={`d-inline ${
                  task.status === 'pending' ? 'bg-warning text-black' : 'bg-success text-light'
                } px-3 py-1 rounded-5`}
              >
                {task.status}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TaskList;
