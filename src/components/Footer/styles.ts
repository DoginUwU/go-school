import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.palette.common.main};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  color: ${props => props.theme.palette.text.primary};

  padding: 2em 1em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 4em;
    align-items: start;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.7em;

  input,
  textarea {
    padding: 0.5em;
    border: none;
    border-radius: 0.5em;
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export { Container, Contact };
