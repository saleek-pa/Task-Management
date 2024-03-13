import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-black">
      <h1 className="mt-5">Create Task</h1>
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
          <input
            type="date"
            className="ms-3 p-1"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div className='d-flex gap-3'>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button type="submit" variant="dark" onClick={() => addTask({ title, description, dueDate })}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
