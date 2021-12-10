import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;

  strong {
    color: ${props => props.theme.palette.common.red};
  }

  input {
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    padding: 0.5em 1em;
    outline: none;
    width: 100%;
  }
`;

export { Container };
