// Register.js

import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, password);
      navigate('/login');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, padding: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" gutterBottom>
          Register
        </Typography>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleRegister}>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Button fullWidth variant="outlined" onClick={() => navigate('/login')}>
            Back to Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;