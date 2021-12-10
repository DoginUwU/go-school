import React from 'react';

import { Container } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const Input: React.FC<Props> = ({ label, required, ...rest }) => {
  return (
    <Container>
      {label && (
        <label htmlFor="input">
          {required && <strong>*</strong>} {label}
        </label>
      )}
      <input type="text" id="input" {...rest} />
    </Container>
  );
};

export default Input;
