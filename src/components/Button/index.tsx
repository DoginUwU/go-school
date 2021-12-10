import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: "main" | "orange";
}

const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(({ color = 'main', ...rest }, ref) => (
    <ButtonContainer type="button" {...rest} color={color} ref={ref}>
      {rest.children}
    </ButtonContainer>
));

Button.displayName = 'Button';

export default Button;
