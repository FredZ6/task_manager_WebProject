import { styled } from '@mui/material/styles';
import { Container, Box, AppBar, Avatar } from '@mui/material';
import { glassEffect, shadowEffect, borderRadius, gradientBackground } from './common.styles';

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
  ...glassEffect(theme),
  ...shadowEffect(theme),
  borderRadius: borderRadius.large,
  padding: '2rem',
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
    background: gradientBackground.accent
  }
}));

export const GlassAppBar = styled(AppBar)(({ theme }) => ({
  ...glassEffect(theme),
  ...shadowEffect(theme),
  borderRadius: borderRadius.large,
  position: 'relative !important',
  width: '100% !important'
}));

export const StyledAvatar = styled(Avatar)`
  background: ${gradientBackground.accent};
  margin-right: 12px;
`; 