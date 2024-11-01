import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { borderRadius, gradientBackground } from './common.styles';

export const BaseButton = styled(Button)`
  border-radius: ${borderRadius.small};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const GradientButton = styled(BaseButton)`
  background: ${({ variant }) => 
    variant === 'secondary' ? gradientBackground.secondary : gradientBackground.primary};
  box-shadow: ${({ variant }) => 
    variant === 'secondary' 
      ? '0 4px 15px rgba(233, 30, 99, 0.3)'
      : '0 4px 15px rgba(33, 150, 243, 0.3)'};

  &:hover {
    box-shadow: ${({ variant }) => 
      variant === 'secondary'
        ? '0 6px 20px rgba(233, 30, 99, 0.4)'
        : '0 6px 20px rgba(33, 150, 243, 0.4)'};
  }
`; 