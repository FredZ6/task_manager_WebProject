import { alpha } from '@mui/material/styles';

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