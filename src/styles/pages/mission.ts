import styled from "styled-components";
import { BsFillTriangleFill } from 'react-icons/bs';

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  padding: 3em;
  gap: 3em;

  color: ${props => props.theme.palette.darkText.secondary};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 10em 1em 3em 1em;
  }
`;

const Divider = styled(BsFillTriangleFill)`
  transform: rotate(180deg);
`;

const CEO = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1em;

  strong {
    color: ${props => props.theme.palette.common.main};
  }

  img {
    width: 150px !important;
    height: 150px !important;

    border-radius: 50%;
  }

  p {
    margin-top: 1em;
  }
`;

export { Container, Divider, CEO };
