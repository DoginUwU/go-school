import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1{
    color: ${props => props.theme.palette.darkText.secondary};
  }
`;

const Companies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;

  margin-top: 4em;
  margin-bottom: 4em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    gap: 1em;
  }
`;

export { Container, Companies };
