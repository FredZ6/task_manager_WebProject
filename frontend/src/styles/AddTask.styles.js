import { styled } from '@mui/material/styles';
import { Card, Button } from '@mui/material';

export const GlassCard = styled(Card)(({ theme }) => ({
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
  marginBottom: '20px',
  
  '&:hover': {
    transform: 'translateY(-3px)',
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(45deg, #2196F3, #1976D2)'
    : 'rgba(25, 118, 210, 0.9)',
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
  padding: '8px 24px',
  minWidth: '120px',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(33, 150, 243, 0.3)',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(45deg, #1976D2, #1565C0)'
      : 'rgba(25, 118, 210, 1)',
  }
})); 