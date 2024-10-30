import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useTheme();
  
  return (
    <IconButton 
      onClick={toggleTheme} 
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
      {theme.palette.mode === 'dark' ? (
        <Brightness7 sx={{ color: '#fff' }} />
      ) : (
        <Brightness4 sx={{ color: '#333' }} />
      )}
    </IconButton>
  );
};

export default ThemeToggle; 