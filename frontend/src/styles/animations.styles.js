export const transitions = {
  default: 'all 0.2s ease-in-out',
  slow: 'all 0.3s ease-in-out',
  fast: 'all 0.1s ease-in-out'
};

export const animations = {
  fadeIn: {
    opacity: 0,
    animation: 'fadeIn 0.3s ease-in-out forwards'
  },
  slideUp: {
    transform: 'translateY(20px)',
    animation: 'slideUp 0.3s ease-in-out forwards'
  }
}; 