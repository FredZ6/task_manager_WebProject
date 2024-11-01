import { styled } from '@mui/material/styles';
import { Container, Box, AppBar, Avatar } from '@mui/material';

export const GlassContainer = styled(Container)(({ theme }) => ({
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

export const GlassBox = styled(Box)(({ theme }) => ({
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

export const GlassAppBar = styled(AppBar)(({ theme }) => ({
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

export const StyledAvatar = styled(Avatar)`
  background: linear-gradient(135deg, #2196F3, #E91E63);
  margin-right: 12px;
`; 