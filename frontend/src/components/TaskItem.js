import React, { useState } from 'react';
import { updateTask, deleteTask } from '../services/api';
import { TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

const TaskItem = ({ task, onTaskUpdate, onTaskDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate); 

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateTask(task.id, title, description, dueDate, task.user.id); 
      setIsEditing(false);
      onTaskUpdate();
    } catch (err) {
      console.error('Failed to update task', err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      onTaskDelete(task.id);
    } catch (err) {
      console.error('Failed to delete task', err);
    }
  };

  return (
    <Card sx={{ mb: 2, boxShadow: 3 }}>
      <CardContent>
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)} 
              fullWidth
              sx={{ mb: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <Button type="submit" variant="contained" sx={{ mr: 2 }}>
              Save
            </Button>
            <Button variant="outlined" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </form>
        ) : (
          <>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {task.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
             <strong>Due Date: </strong>{dueDate} 
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" onClick={() => setIsEditing(true)} sx={{ mr: 2 }}>
                Edit
              </Button>
              <Button variant="outlined" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskItem;