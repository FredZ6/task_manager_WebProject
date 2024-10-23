// TaskList.js

import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import { Container, Typography, List, Box, AppBar, Toolbar } from '@mui/material';

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
    <Container component="main" maxWidth="md">
      {/* 添加顶部导航栏，显示用户名 */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Welcome, {user.username}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 任务列表 */}
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
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
      </Box>
    </Container>
  );
};

export default TaskList;