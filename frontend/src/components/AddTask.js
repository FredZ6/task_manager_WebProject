// AddTask.js

import React, { useState } from 'react';
import { createTask } from '../services/api';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddTask = ({ userId, onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await createTask(title, description, userId);
      setTitle('');
      setDescription('');
      onTaskAdded();
    } catch (err) {
      setError('Failed to create task');
    }
  };

  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
      <Box component="form" onSubmit={handleCreateTask} sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default AddTask;