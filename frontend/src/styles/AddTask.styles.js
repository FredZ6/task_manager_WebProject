import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import { 
  glassEffect, 
  hoverEffect, 
  borderRadius, 
  spacing 
} from './common.styles';
import { BaseButton } from './Button.styles';

export const GlassCard = styled(Card)(({ theme }) => ({
  ...glassEffect(theme),
  ...hoverEffect,
  borderRadius: borderRadius.medium,
  marginBottom: spacing.large
}));

export const StyledButton = styled(BaseButton)`
  padding: ${spacing.small} ${spacing.large};
  min-width: 120px;
`; 