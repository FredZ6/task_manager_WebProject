import { styled } from '@mui/material/styles';
import { Card, Button } from '@mui/material';

export const GlassCard = styled(Card)(({ theme, category }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  border: `1px solid ${
    theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.2)'
  }`,
  transition: 'transform 0.2s ease-in-out',
  position: 'relative',
  
  '&:hover': {
    transform: 'translateY(-3px)',
  },

  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    borderRadius: '4px 0 0 4px',
    background: 
      category === 'overdue' ? '#f44336' :
      category === 'dueToday' ? '#ff9800' :
      category === 'upcoming' ? '#4caf50' :
      'transparent'
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  }
})); 