// TaskList.js

import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import { Container, Typography, List, Box, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';

const GlassContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
  padding: 16px 24px;
  
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
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2196F3, #E91E63);
  }
`;

const GlassAppBar = styled(AppBar)`
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  position: relative !important;
  width: 100% !important;
`;

const StyledAvatar = styled(Avatar)`
  background: linear-gradient(135deg, #2196F3, #E91E63);
  margin-right: 12px;
`;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <GlassContainer component="main" maxWidth="md">
      <GlassAppBar position="static">
        <Toolbar>
          <DashboardIcon sx={{ mr: 2, color: '#333' }} />
          <StyledAvatar>
            {user.username.charAt(0).toUpperCase()}
          </StyledAvatar>
          <Typography variant="h6" sx={{ 
            flexGrow: 1,
            color: '#333',
            fontWeight: 500
          }}>
            Welcome, {user.username}
          </Typography>
          <IconButton 
            onClick={handleLogout}
            sx={{ 
              color: '#333',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </GlassAppBar>

      <GlassBox>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 3 
        }}>
          <Typography variant="h4" sx={{
            color: '#333',
            fontWeight: 500,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '40%',
              height: 3,
              background: 'linear-gradient(90deg, #2196F3, transparent)'
            }
          }}>
            Task List
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Total Tasks: {tasks.length}
          </Typography>
        </Box>
        
        {error && (
          <Box sx={{
            p: 2,
            mb: 2,
            borderRadius: 1,
            backgroundColor: 'rgba(255,0,0,0.1)',
            border: '1px solid rgba(255,0,0,0.3)'
          }}>
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          </Box>
        )}
        
        <AddTask userId={user.id} onTaskAdded={handleTaskAdded} />
        
        <List sx={{
          mt: 2,
          '& > *': {
            transition: 'all 0.3s ease-in-out',
          }
        }}>
          {tasks.length === 0 ? (
            <Box sx={{
              textAlign: 'center',
              py: 4,
              color: '#666',
              backgroundColor: 'rgba(0,0,0,0.02)',
              borderRadius: 2
            }}>
              <Typography variant="body1">
                No tasks yet. Start by adding a new task!
              </Typography>
            </Box>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
              />
            ))
          )}
        </List>
      </GlassBox>
    </GlassContainer>
  );
};

export default TaskList;