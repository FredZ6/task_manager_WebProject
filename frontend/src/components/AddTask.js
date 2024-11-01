// AddTask.js

import React, { useState } from 'react';
import { createTask } from '../services/api';
import { TextField, Box, Typography, CardContent, useTheme } from '@mui/material';
import { Add } from '@mui/icons-material';
import { GlassCard, StyledButton } from '../styles/AddTask.styles';

const AddTask = ({ userId, onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await createTask(title, description, dueDate, userId);
      setTitle('');
      setDescription('');
      setDueDate('');
      onTaskAdded();
    } catch (err) {
      setError('Failed to create task');
    }
  };

  return (
    <GlassCard>
      <CardContent>
        {error && (
          <Box sx={{
            p: 2,
            mb: 2,
            borderRadius: 1,
            backgroundColor: 'rgba(255,0,0,0.1)',
            border: '1px solid rgba(255,0,0,0.3)'
          }}>
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          </Box>
        )}

        <Box 
          component="form" 
          onSubmit={handleCreateTask} 
          sx={{ 
            display: 'flex', 
            gap: 2,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'flex-start' }
          }}
        >
          <TextField
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
            sx={{ 
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
            label="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={1}
            sx={{ 
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
            required
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ 
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
          <StyledButton 
            type="submit" 
            variant="contained"
            startIcon={<Add />}
            sx={{
              height: { xs: '48px', md: '56px' },
              alignSelf: { xs: 'stretch', md: 'flex-start' }
            }}
          >
            Add Task
          </StyledButton>
        </Box>
      </CardContent>
    </GlassCard>
  );
};

export default AddTask;