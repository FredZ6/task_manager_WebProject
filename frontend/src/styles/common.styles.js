// import { alpha } from '@mui/material/styles';

// Common TextField styles
export const textFieldStyle = (theme) => ({
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
  '& input, & textarea': {
    color: theme.palette.mode === 'dark'
      ? '#fff'
      : '#000',
  }
});

// Error box styles
export const errorBoxStyle = {
  p: 2,
  mb: 2,
  borderRadius: 1,
  backgroundColor: 'rgba(255,0,0,0.1)',
  border: '1px solid rgba(255,0,0,0.3)'
};

// Gradient icon container styles
export const gradientIconBoxStyle = {
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #2196F3, #E91E63)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: 2
};

// Gradient text styles
export const gradientTextStyle = {
  fontWeight: 600,
  background: 'linear-gradient(45deg, #2196F3, #E91E63)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent'
};

// Primary button styles
export const primaryButtonStyle = (theme) => ({
  flex: 1,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(45deg, #2196F3, #1976D2)'
    : 'rgba(25, 118, 210, 0.9)',
  color: '#fff',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(45deg, #1976D2, #1565C0)'
      : 'rgba(25, 118, 210, 1)',
  }
});

// Secondary button styles
export const secondaryButtonStyle = (theme) => ({
  flex: 1,
  borderColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.3)'
    : 'rgba(0, 0, 0, 0.3)',
  color: theme.palette.mode === 'dark'
    ? '#fff'
    : '#333',
  '&:hover': {
    borderColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(0, 0, 0, 0.5)',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.05)'
  }
});

// Dark/light text colors
export const textColorStyle = (theme) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#333'
});

// Secondary text colors
export const secondaryTextColorStyle = (theme) => ({
  color: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.7)' 
    : 'rgba(0, 0, 0, 0.7)'
});

// Common glass effect styles
export const glassEffect = (theme) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${
    theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.2)'
  }`,
});

// Common hover animation effects
export const hoverEffect = {
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
  }
};

// Common gradient backgrounds
export const gradientBackground = {
  primary: 'linear-gradient(45deg, #2196F3, #1976D2)',
  secondary: 'linear-gradient(45deg, #E91E63, #D81B60)',
  accent: 'linear-gradient(90deg, #2196F3, #E91E63)'
};

// Common shadow effects
export const shadowEffect = (theme) => ({
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 30px rgba(0, 0, 0, 0.3)'
    : '0 4px 30px rgba(0, 0, 0, 0.1)'
});

// Common border radius values
export const borderRadius = {
  small: '8px',
  medium: '12px',
  large: '16px'
};

// Common spacing values
export const spacing = {
  small: '8px',
  medium: '16px',
  large: '24px'
};

// Common layout styles
export const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const flexBetween = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

// Common responsive layouts
export const responsiveStyles = {
  column: {
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'stretch', md: 'flex-start' }
  }
}; 