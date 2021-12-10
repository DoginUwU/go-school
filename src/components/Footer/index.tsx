import React from 'react';
import Button from '../Button';

import { Container, Contact } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>GoSchool</h1>
        <p>
          GoSchool é apenas uma representação fícticia de uma escola virtual.
        </p>
      </div>
      <Contact>
        <h2>Contate-nos</h2>
        <input type="email" placeholder='Seu E-mail' />
        <textarea rows={3} placeholder='Mensagem...'></textarea>
        <Button color="orange">Enviar</Button>
      </Contact>
    </Container>
  );
}

export default Footer;
