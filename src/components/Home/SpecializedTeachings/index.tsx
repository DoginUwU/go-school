import React from 'react';
import Lottie from 'react-lottie';

import * as childData from '../../../../public/lottie/child.json';
import * as learnData from '../../../../public/lottie/learn.json';

import { Container, Cards, Card } from './styles';

const SpecializedTeachings: React.FC = () => {
  return (
    <Container>
      <h1>Ensinos especializados</h1>

      <Cards>
        <Card>
          <Lottie
            options={{ loop: true, autoplay: true, animationData: childData }}
          />
          <h2>Ensino Fundamental</h2>
        </Card>
        <Card>
          <Lottie
            options={{ loop: true, autoplay: true, animationData: learnData }}
          />
          <h2>Ensino Médio</h2>
        </Card>
      </Cards>
    </Container>
  );
}

export default SpecializedTeachings;
