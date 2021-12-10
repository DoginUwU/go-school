import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Container, Content } from './styles';

const animationVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 30 },
};

interface Props {
  color?: string;
  title: string;
  amount: number;
}

const CardMore: React.FC<Props> = ({ color = '#f40', title, amount }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setViewed(true);
    }
  }, [controls, inView]);

  return (
    <Container
      color={color}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
    >
      <Content color={color}>
        <h2>+ {viewed && <CountUp end={amount} duration={3} />}</h2>
      </Content>
      <p>{title}</p>
    </Container>
  );
};

export default CardMore;
