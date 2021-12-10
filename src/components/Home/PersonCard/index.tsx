import Image from 'next/image';

import { Container } from './styles';

interface Props {
  name: string;
  image: string;
  description: string;
}

const PersonCard: React.FC<Props> = ({ image, name, description }) => {
  return (
    <Container>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
      />
      <h2>{name}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default PersonCard;
