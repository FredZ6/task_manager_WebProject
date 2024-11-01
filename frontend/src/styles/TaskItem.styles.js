import { styled } from '@mui/material/styles';
import { Card, Button } from '@mui/material';
import { glassEffect, hoverEffect, borderRadius } from './common.styles';

export const GlassCard = styled(Card)(({ theme, category }) => ({
  ...glassEffect(theme),
  ...hoverEffect,
  borderRadius: borderRadius.medium,
  position: 'relative',

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

export const StyledButton = styled(Button)`
  border-radius: ${borderRadius.small};
  ${hoverEffect}
`; 