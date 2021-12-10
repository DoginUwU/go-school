import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding-top: 5em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  gap: 1em;

  margin-top: 4em;

  max-width: 25em;

  color: ${props => props.theme.palette.text.primary};

  h1 {
    font-size: 2.3em;
  }

  & p {
    font-size: 1em;
    font-weight: 200;
  }

  button {
    margin-top: 1em;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    align-items: center;
    text-align: center;
  }
`;

const ImageContent = styled.div`
  width: 30em;
  height: 30em;
  margin-top: -6em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export { Container, Content, ImageContent };
