import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TaskContext } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const { tasks, updateTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const task = tasks.find((task) => task._id === id);

  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const [dueDate, setDueDate] = useState(task?.dueDate);
  const [status, setStatus] = useState(task.status !== 'pending');

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-black">
      <h1 className="mt-5">Edit Task</h1>
      <Form className="w-25">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value.trimStart())}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value.trimStart())}
            rows={5}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Due Date</Form.Label>
          <input type="date" className="ms-3 p-1" defaultValue={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Check
            type="checkbox"
            label="Mark as completed"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </Form.Group>
      </Form>
      <div className="d-flex gap-3">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button
          type="submit"
          variant="dark"
          onClick={() => updateTask(id, { title, description, dueDate, status: status ? 'completed' : 'pending' })}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditTask;
