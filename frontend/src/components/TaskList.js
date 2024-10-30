// TaskList.js

import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import { Container, Typography, List, Box, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
  padding-bottom: 2rem;
  padding-top: 16px;
  
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
    z-index: -1;
  }
`;

const GlassBox = styled(Box)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 2rem;
`;

const GlassAppBar = styled(AppBar)`
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  width: calc(100% - 32px) !important;
  margin: 0 auto !important;
  position: relative !important;
`;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(user.id);
        setTasks(response.data);
      } catch (err) {
        setError('Failed to load tasks');
      }
    };
    fetchTasks();
  }, [user.id]);

  const handleTaskUpdate = async () => {
    const response = await getTasks(user.id);
    setTasks(response.data);
  };

  const handleTaskDelete = async () => {
    const response = await getTasks(user.id);
    setTasks(response.data);
  };

  const handleTaskAdded = async () => {
    const response = await getTasks(user.id);
    setTasks(response.data);
  };

  return (
    <GlassContainer component="main" maxWidth="md" disableGutters>
      <GlassAppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ 
            flexGrow: 1,
            color: '#333',
            fontWeight: 500
          }}>
            Welcome, {user.username}
          </Typography>
        </Toolbar>
      </GlassAppBar>

      <GlassBox>
        <Typography variant="h4" gutterBottom sx={{
          color: '#333',
          fontWeight: 500,
          mb: 3
        }}>
          Task List
        </Typography>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <AddTask userId={user.id} onTaskAdded={handleTaskAdded} />
        <List>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskUpdate={handleTaskUpdate}
              onTaskDelete={handleTaskDelete}
            />
          ))}
        </List>
      </GlassBox>
    </GlassContainer>
  );
};

export default TaskList;