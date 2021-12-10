import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;

  color: ${props => props.theme.palette.darkText.secondary};
  background-color: ${props => props.theme.palette.common.gray.light};
  padding: 4em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4em 1em;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;

  margin-top: 4em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    gap: 1em;
  }
`;

export { Container, Cards };
