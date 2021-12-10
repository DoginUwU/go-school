import styled from 'styled-components';

interface ButtonProps {
  color: "main" | "orange";
}

const ButtonContainer = styled.button<ButtonProps>`
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 2rem;
  background: ${props => props.theme.palette.common[props.color]};

  &:hover {
    opacity: 0.9;
  }
`;

export { ButtonContainer };
