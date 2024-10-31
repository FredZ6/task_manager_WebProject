import React, { useState } from 'react';
import { updateTask, deleteTask } from '../services/api';
import { TextField, Button, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassCard = styled(Card)(({ theme, category }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  border: `1px solid ${
    theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.2)'
  }`,
  transition: 'transform 0.2s ease-in-out',
  position: 'relative',
  
  '&:hover': {
    transform: 'translateY(-3px)',
  },

  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    borderRadius: '4px 0 0 4px',
    background: 
      category === 'overdue' ? '#f44336' :
      category === 'dueToday' ? '#ff9800' :
      category === 'upcoming' ? '#4caf50' :
      'transparent'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  }
}));

// 添加一个日期格式化函数
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  });
};

const TaskItem = ({ task, onTaskUpdate, onTaskDelete, category }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate); 
  const theme = useTheme();

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
    <GlassCard sx={{ mb: 2 }} category={category}>
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
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(255, 255, 255, 0.5)',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.2)',
                  },
                },
                '& label': {
                  color: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(0, 0, 0, 0.7)',
                },
                '& input': {
                  color: theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#000',
                }
              }}
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={2}
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(255, 255, 255, 0.5)',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.2)',
                  },
                },
                '& label': {
                  color: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(0, 0, 0, 0.7)',
                },
                '& textarea': {
                  color: theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#000',
                }
              }}
            />
            <TextField
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)} 
              fullWidth
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(255, 255, 255, 0.5)',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.2)',
                  },
                },
                '& label': {
                  color: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(0, 0, 0, 0.7)',
                },
                '& input': {
                  color: theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#000',
                }
              }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <StyledButton 
                type="submit" 
                variant="contained"
                sx={{
                  flex: 1,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #2196F3, #1976D2)'
                    : 'rgba(25, 118, 210, 0.9)',
                  color: '#fff',
                  '&:hover': {
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, #1976D2, #1565C0)'
                      : 'rgba(25, 118, 210, 1)',
                  }
                }}
              >
                Save
              </StyledButton>
              <StyledButton 
                variant="outlined" 
                onClick={() => setIsEditing(false)}
                sx={{
                  flex: 1,
                  borderColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'rgba(0, 0, 0, 0.3)',
                  color: theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#333',
                  '&:hover': {
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(0, 0, 0, 0.5)',
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
                  }
                }}
              >
                Cancel
              </StyledButton>
            </Box>
          </form>
        ) : (
          <>
            <Typography variant="h6" sx={{ 
              color: theme.palette.mode === 'dark' ? '#fff' : '#333'
            }}>
              {task.title}
            </Typography>
            {task.dueDate && (
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 
                    category === 'overdue' ? '#f44336' :
                    category === 'dueToday' ? '#ff9800' :
                    category === 'upcoming' ? '#4caf50' :
                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                  display: 'block',
                  mb: 1
                }}
              >
                {category === 'overdue' && 'Overdue'}
                {category === 'dueToday' && 'Due Today'}
                {category === 'upcoming' && 'Coming Up'}
                {' - '}
                {formatDate(task.dueDate)}
              </Typography>
            )}
            <Typography variant="body2" sx={{ 
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.7)' 
                : 'rgba(0, 0, 0, 0.7)',
              mb: 1
            }}>
              {task.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <StyledButton 
                variant="contained" 
                onClick={() => setIsEditing(true)} 
                sx={{ 
                  flex: 1,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #2196F3, #1976D2)'
                    : 'rgba(25, 118, 210, 0.9)',
                  color: '#fff',
                  '&:hover': {
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, #1976D2, #1565C0)'
                      : 'rgba(25, 118, 210, 1)',
                  }
                }}
              >
                Edit
              </StyledButton>
              <StyledButton 
                variant="outlined" 
                onClick={handleDelete}
                sx={{
                  flex: 1,
                  borderColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'rgba(0, 0, 0, 0.3)',
                  color: theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#333',
                  '&:hover': {
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(0, 0, 0, 0.5)',
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)'
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