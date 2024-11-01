// Login.js

import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { 
  TextField, 
  Button, 
  Typography, 
  Box,
  IconButton,
  InputAdornment,
  Divider,
  Fade
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff,
  LockOutlined,
  PersonOutline,
  LoginOutlined
} from '@mui/icons-material';
import ThemeToggle from './ThemeToggle';
import { GlassContainer, GlassBox, StyledButton } from '../styles/Auth.styles';

const Login = ({ toggleTheme }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/tasks');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  const textFieldStyle = {
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
  };

  return (
    <GlassContainer>
      <Box sx={{ 
        position: 'absolute', 
        top: 16, 
        right: 16 
      }}>
        <ThemeToggle toggleTheme={toggleTheme} />
      </Box>
      <Fade in={true} timeout={1000}>
        <GlassBox elevation={0}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 3
          }}>
            <Box sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #2196F3, #E91E63)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2
            }}>
              <LockOutlined sx={{ color: '#fff', fontSize: 30 }} />
            </Box>
            <Typography component="h1" variant="h4" 
              sx={{ 
                fontWeight: 600,
                background: 'linear-gradient(45deg, #2196F3, #E91E63)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
              Welcome Back
            </Typography>
            <Typography variant="body2" sx={{ 
              color: theme.palette.mode === 'dark' ? '#fff' : '#666'
            }}>
              Please sign in to continue
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
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            </Box>
          )}

          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline sx={{ 
                      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'action.active' 
                    }} />
                  </InputAdornment>
                ),
              }}
              sx={textFieldStyle}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined sx={{ 
                      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'action.active' 
                    }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'action.active'
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={textFieldStyle}
            />

            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<LoginOutlined />}
            >
              Sign In
            </StyledButton>

            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="textSecondary">
                OR
              </Typography>
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate('/register')}
              sx={{ 
                borderRadius: 2,
                borderColor: '#2196F3',
                color: '#2196F3',
                '&:hover': {
                  borderColor: '#1976D2',
                  backgroundColor: 'rgba(33, 150, 243, 0.05)'
                }
              }}
            >
              Create Account
            </Button>
          </Box>
        </GlassBox>
      </Fade>
    </GlassContainer>
  );
};

export default Login;