import styled from "styled-components";

const Container = styled.form`
  max-width: 1240px;
  margin: 0 auto;
  padding: 5em 1em;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  gap: 2em;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    padding: 10em 1em;
  }
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;

  button {
    margin-top: 2em;
    width: max-content;
    align-self: flex-start;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    button {
      width: 100%;
    }
  }
`;

export { Container, FormContent };
