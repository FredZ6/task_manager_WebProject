import { styled } from '@mui/material/styles';
import { Container, Paper, Button } from '@mui/material';

export const GlassContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  background: theme.palette.mode === 'dark' ? '#121212' : '#ffffff',
  paddingTop: '15vh'
}));

export const GlassBox = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '16px',
  padding: '2.5rem',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 8px 32px rgba(0, 0, 0, 0.08)',
  border: `1px solid ${
    theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.05)'
  }`,
  width: '100%',
  maxWidth: '400px',
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

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #2196F3, #1976D2);
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
  }
`;

export const RegisterButton = styled(Button)`
  background: linear-gradient(45deg, #E91E63, #D81B60);
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(233, 30, 99, 0.4);
  }
`; 