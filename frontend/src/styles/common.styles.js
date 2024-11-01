// import { alpha } from '@mui/material/styles';

// TextField 通用样式
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

// 错误提示框样式
export const errorBoxStyle = {
  p: 2,
  mb: 2,
  borderRadius: 1,
  backgroundColor: 'rgba(255,0,0,0.1)',
  border: '1px solid rgba(255,0,0,0.3)'
};

// 渐变图标容器样式
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

// 渐变文本样式
export const gradientTextStyle = {
  fontWeight: 600,
  background: 'linear-gradient(45deg, #2196F3, #E91E63)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent'
};

// 主按钮样式
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

// 次要按钮样式
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

// 暗色/亮色文本颜色
export const textColorStyle = (theme) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#333'
});

// 次要文本颜色
export const secondaryTextColorStyle = (theme) => ({
  color: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.7)' 
    : 'rgba(0, 0, 0, 0.7)'
});

// 添加通用的玻璃态效果样式
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

// 添加通用的悬浮动画效果
export const hoverEffect = {
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
  }
};

// 添加通用的渐变背景
export const gradientBackground = {
  primary: 'linear-gradient(45deg, #2196F3, #1976D2)',
  secondary: 'linear-gradient(45deg, #E91E63, #D81B60)',
  accent: 'linear-gradient(90deg, #2196F3, #E91E63)'
};

// 添加通用的阴影效果
export const shadowEffect = (theme) => ({
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 30px rgba(0, 0, 0, 0.3)'
    : '0 4px 30px rgba(0, 0, 0, 0.1)'
});

// 添加通用的圆角样式
export const borderRadius = {
  small: '8px',
  medium: '12px',
  large: '16px'
};

// 添加通用的间距
export const spacing = {
  small: '8px',
  medium: '16px',
  large: '24px'
};

// 添加通用的布局样式
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

// 添加通用的响应式布局
export const responsiveStyles = {
  column: {
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'stretch', md: 'flex-start' }
  }
}; 