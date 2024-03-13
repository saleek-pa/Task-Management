import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks, deleteTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const task = tasks.find((task) => task._id === id);

  return (
    <div className="d-flex flex-column justify-content-end align-items-center gap-2 mt-5">
      <Card className="mt-5 w-25">
        <Card.Body>
          <Card.Title>{task?.title}</Card.Title>
          <Card.Text>{task?.description}</Card.Text>
          <Card.Text>Due Date: {task?.dueDate?.slice(0, 10)}</Card.Text>
          <Card.Text
            className={`d-inline ${
              task.status === 'pending' ? 'bg-warning text-black' : 'bg-success text-light'
            } px-3 py-1 rounded-5`}
          >
            {task.status}
          </Card.Text>
        </Card.Body>
      </Card>
      <div className='d-flex gap-2'>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button variant="secondary" onClick={() => navigate(`/tasks/${id}/edit-task`)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => deleteTask(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskDetails;
