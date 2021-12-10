import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10em;

  img {
    width: 200px !important;
    height: 200px !important;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    gap: 0;

    img {
      display: none!important;
    }
  }
`;

const CardMoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-flow: wrap;
    gap: 1em;
  }
`;

const InfoContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2em;
  z-index: 2;

  h1 {
    color: ${props => props.theme.palette.darkText.secondary};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 90%;
  }
`;

export { Container, CardMoreContainer, InfoContainer };
