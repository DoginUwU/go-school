import styled from 'styled-components';
import Color from 'color';
import { motion } from 'framer-motion';

interface Props {
  color: string;
}

const Container = styled(motion.div)<Props>`
  text-align: center;

  p {
    color: ${props => props.color};
    font-weight: bold;
    margin-top: 0.7em;
  }
`;

const Content = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => Color(props.color).lighten(0.85).string()};
  color: ${props => props.color};

  padding: 1em 1.5em;
  border-radius: 1.5em;
`;

export { Container, Content };
