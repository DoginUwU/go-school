import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 56vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2em;

  background-color: ${props => props.theme.palette.common.main};
  color: ${props => props.theme.palette.text.primary};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-top: 9em;
    padding-bottom: 9em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  padding: 2em;
  background-color: ${props => props.theme.palette.text.primary};
  border-radius: 0.5em;
`;

export { Container, Form };
