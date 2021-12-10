import Link from 'next/link';
import Lottie from 'react-lottie';
import * as officeData from '../../../../public/lottie/office.json';
import Button from '../../Button';

import { Container, Content, ImageContent } from './styles';

const Intro: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Acesso à educação de forma 100% remota.</h1>
        <p>Juntos vamos acabar com o díficil acesso à educação.</p>
        <Link href="/registration" passHref>
          <Button color="orange">Procurar minha nova classe</Button>
        </Link>
      </Content>
      <ImageContent>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: officeData,
          }}
        />
      </ImageContent>
    </Container>
  );
};

export default Intro;
