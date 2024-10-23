// Login.js

import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      localStorage.setItem('user', JSON.stringify(response.data)); 
      navigate('/tasks'); 
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper'
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Login
        </Typography>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;