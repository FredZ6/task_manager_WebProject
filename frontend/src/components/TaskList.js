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
import { useTheme } from '@mui/material';
import ThemeToggle from './ThemeToggle';

const GlassContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  padding: '16px 24px',
  
  '&:before': {
    content: '""',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark' 
      ? '#121212'
      : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    zIndex: -1
  }
}));

const GlassBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 30px rgba(0, 0, 0, 0.3)'
    : '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.3)'
  }`,
  marginTop: '2rem',
  position: 'relative',
  overflow: 'hidden',

  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2196F3, #E91E63)',
  }
}));

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05) !important'
    : 'rgba(255, 255, 255, 0.4) !important',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.3)'
  }`,
  borderRadius: '16px',
  position: 'relative !important',
  width: '100% !important'
}));

const StyledAvatar = styled(Avatar)`
  background: linear-gradient(135deg, #2196F3, #E91E63);
  margin-right: 12px;
`;

const TaskList = ({ toggleTheme }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const theme = useTheme();

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

  const sortAndCategoryTasks = (tasks) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return tasks.sort((a, b) => {
      const dateA = a.dueDate ? new Date(a.dueDate) : new Date('9999-12-31');
      const dateB = b.dueDate ? new Date(b.dueDate) : new Date('9999-12-31');
      return dateA - dateB;
    }).reduce((acc, task) => {
      const dueDate = task.dueDate ? new Date(task.dueDate) : null;
      
      if (!dueDate) {
        acc.noDueDate.push(task);
      } else if (dueDate < today) {
        acc.overdue.push(task);
      } else if (dueDate.toDateString() === today.toDateString()) {
        acc.dueToday.push(task);
      } else {
        acc.upcoming.push(task);
      }
      
      return acc;
    }, {
      overdue: [],
      dueToday: [],
      upcoming: [],
      noDueDate: []
    });
  };

  return (
    <GlassContainer component="main" maxWidth="md">
      <GlassAppBar position="static">
        <Toolbar>
          <DashboardIcon sx={{ 
            mr: 2, 
            color: theme.palette.mode === 'dark' ? '#fff' : '#333' 
          }} />
          <StyledAvatar>
            {user.username.charAt(0).toUpperCase()}
          </StyledAvatar>
          <Typography variant="h6" sx={{ 
            flexGrow: 1,
            color: theme.palette.mode === 'dark' ? '#fff' : '#333',
            fontWeight: 500
          }}>
            Welcome, {user.username}
          </Typography>
          <ThemeToggle toggleTheme={toggleTheme} />
          <IconButton 
            onClick={handleLogout}
            sx={{ 
              ml: 1,
              color: theme.palette.mode === 'dark' ? '#fff' : '#333',
              '&:hover': {
                background: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.04)'
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
            color: theme.palette.mode === 'dark' ? '#fff' : '#333',
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
          <Typography variant="body2" sx={{ 
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : '#666' 
          }}>
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
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : '#666',
              backgroundColor: 'rgba(0,0,0,0.02)',
              borderRadius: 2
            }}>
              <Typography variant="body1">
                No tasks yet. Start by adding a new task!
              </Typography>
            </Box>
          ) : (
            <>
              {Object.entries(sortAndCategoryTasks(tasks)).map(([category, categoryTasks]) => (
                categoryTasks.length > 0 && (
                  <Box key={category} sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 2,
                        color: theme.palette.mode === 'dark' ? '#fff' : '#333',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '1px',
                        fontWeight: 600,
                        opacity: 0.8
                      }}
                    >
                      {category === 'overdue' && 'Overdue Tasks'}
                      {category === 'dueToday' && 'Due Today'}
                      {category === 'upcoming' && 'Upcoming'}
                      {category === 'noDueDate' && 'No Due Date'}
                    </Typography>
                    {categoryTasks.map((task) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        onTaskUpdate={handleTaskUpdate}
                        onTaskDelete={handleTaskDelete}
                        category={category}
                      />
                    ))}
                  </Box>
                )
              ))}
            </>
          )}
        </List>
      </GlassBox>
    </GlassContainer>
  );
};

export default TaskList;