import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;

  h1, h2 {
    color: ${props => props.theme.palette.darkText.secondary};
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3em;

  margin-top: 2em;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1em;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1em;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  font-size: 0.8em;

  transition: transform 0.2s ease-in-out;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
    svg {
      transform: rotate(10deg) !important;
    }
  }
`;

export { Container, Cards, Card };
