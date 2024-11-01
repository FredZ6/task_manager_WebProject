import { styled } from '@mui/material/styles';
import { Container, Paper } from '@mui/material';
import { 
  glassEffect, 
  shadowEffect, 
  borderRadius, 
  gradientBackground 
} from './common.styles';
import { BaseButton } from './Button.styles';

export const GlassContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  background: theme.palette.mode === 'dark' ? '#121212' : '#ffffff',
  paddingTop: '15vh'
}));

export const GlassBox = styled(Paper)(({ theme }) => ({
  ...glassEffect(theme),
  ...shadowEffect(theme),
  borderRadius: borderRadius.large,
  padding: '2.5rem',
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
    background: gradientBackground.accent
  }
}));

export const StyledButton = styled(BaseButton)`
  background: ${gradientBackground.primary};
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
  }
`;

export const RegisterButton = styled(BaseButton)`
  background: ${gradientBackground.secondary};
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(233, 30, 99, 0.4);
  }
`; 