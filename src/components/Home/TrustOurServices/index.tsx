import React from 'react';
import Company from '../Company';

import rocketSeatImg from '../../../../public/images/companies/rocketseat.png';
import udemyImg from '../../../../public/images/companies/udemy.png';

import { Companies, Container } from './styles';

const TrustOurServices: React.FC = () => {
  return (
    <Container>
      <h1>Empresas que confiam em nossos serviços</h1>
      <Companies>
        <Company name="RocketSeat" image={rocketSeatImg} />
        <Company name="Udemy" image={udemyImg} />
      </Companies>
    </Container>
  );
}

export default TrustOurServices;
