import { HTMLAttributes } from 'react';
import Image from 'next/image';

import Button from '../../Button';

import computerImage from '../../../../public/images/computer.jpg';

import { Container, CardMoreContainer, InfoContainer } from './styles';
import CardMore from '../CardMore';
import Link from 'next/link';

const More: React.FC<HTMLAttributes<HTMLDivElement>> = ({...rest}) => {
  return (
    <Container {...rest}>
      <InfoContainer>
        <h1>Aprenda com nossas escolas de longa distância</h1>
        <p>
          Com nosso ensino totalmente digital, você irá conseguir uma
          expêriencia muito próxima de uma escola real.
        </p>
        <CardMoreContainer>
          <CardMore title="Alunos cadastrados" amount={2000} color="#00A2FF" />
          <CardMore title="Professores ativos" amount={180} color="#AD00FF" />
          <CardMore title="Aulas gratuitas" amount={500} color="#00FF94" />
        </CardMoreContainer>
        <Link href="/mission" passHref>
          <Button>Saiba mais</Button>
        </Link>
      </InfoContainer>
      <Image src={computerImage} alt="computer" />
    </Container>
  );
};

export default More;
