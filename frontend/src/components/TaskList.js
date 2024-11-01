// TaskList.js

import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import { Typography, List, Box, Toolbar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import { GlassContainer, GlassBox, GlassAppBar, StyledAvatar } from '../styles/TaskList.styles';
import { 
  textColorStyle, 
  secondaryTextColorStyle, 
  errorBoxStyle
} from '../styles/common.styles';

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
    today.setUTCHours(0, 0, 0, 0);

    return tasks.sort((a, b) => {
      const dateA = a.dueDate ? new Date(a.dueDate + 'T00:00:00Z') : new Date('9999-12-31');
      const dateB = b.dueDate ? new Date(b.dueDate + 'T00:00:00Z') : new Date('9999-12-31');
      return dateA - dateB;
    }).reduce((acc, task) => {
      if (!task.dueDate) {
        acc.noDueDate.push(task);
        return acc;
      }

      const dueDate = new Date(task.dueDate + 'T00:00:00Z');
      
      if (dueDate < today) {
        acc.overdue.push(task);
      } else if (
        dueDate.getUTCFullYear() === today.getUTCFullYear() &&
        dueDate.getUTCMonth() === today.getUTCMonth() &&
        dueDate.getUTCDate() === today.getUTCDate()
      ) {
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
            ...textColorStyle(theme)
          }} />
          <StyledAvatar>
            {user.username.charAt(0).toUpperCase()}
          </StyledAvatar>
          <Typography variant="h6" sx={{ 
            flexGrow: 1,
            ...textColorStyle(theme),
            fontWeight: 500
          }}>
            Welcome, {user.username}
          </Typography>
          <ThemeToggle toggleTheme={toggleTheme} />
          <IconButton 
            onClick={handleLogout}
            sx={{ 
              ml: 1,
              ...textColorStyle(theme),
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
            ...textColorStyle(theme),
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
          <Typography variant="body2" sx={secondaryTextColorStyle(theme)}>
            Total Tasks: {tasks.length}
          </Typography>
        </Box>
        
        {error && (
          <Box sx={errorBoxStyle}>
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
              ...secondaryTextColorStyle(theme),
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
                        ...textColorStyle(theme),
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