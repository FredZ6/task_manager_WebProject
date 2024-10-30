import React, { useState } from 'react';
import { updateTask, deleteTask } from '../services/api';
import { TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassCard = styled(Card)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const StyledButton = styled(Button)`
  backdrop-filter: blur(5px);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

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
    <GlassCard sx={{ mb: 2 }}>
      <CardContent>
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                  },
                },
                '& label': {
                  color: 'rgba(0, 0, 0, 0.7)',
                },
              }}
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
            <StyledButton type="submit" variant="contained" sx={{ mr: 2 }}>
              Save
            </StyledButton>
            <StyledButton variant="outlined" onClick={() => setIsEditing(false)}>
              Cancel
            </StyledButton>
          </form>
        ) : (
          <>
            <Typography variant="h6" sx={{ color: '#333' }}>{task.title}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              {task.description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              <strong>Due Date: </strong>{dueDate}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <StyledButton 
                variant="contained" 
                onClick={() => setIsEditing(true)} 
                sx={{ 
                  mr: 2,
                  backgroundColor: 'rgba(25, 118, 210, 0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 1)',
                  }
                }}
              >
                Edit
              </StyledButton>
              <StyledButton 
                variant="outlined" 
                onClick={handleDelete}
                sx={{
                  borderColor: 'rgba(0, 0, 0, 0.3)',
                  color: '#333',
                  '&:hover': {
                    borderColor: 'rgba(0, 0, 0, 0.5)',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)'
                  }
                }}
              >
                Delete
              </StyledButton>
            </Box>
          </>
        )}
      </CardContent>
    </GlassCard>
  );
};

export default TaskItem;