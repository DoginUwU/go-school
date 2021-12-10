import Image from 'next/image';

import { Container } from './styles';

interface Props {
  name: string;
  image: StaticImageData;
}

const Company: React.FC<Props> = ({ name, image }) => {
  return (
    <Container>
      <Image src={image} alt={name} />
    </Container>
  );
};

export default Company;
