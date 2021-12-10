import { PersonsAboutUsType } from '../../../@types/persons';
import PersonCard from '../PersonCard';

import { Cards, Container } from './styles';

interface Props {
  persons: Array<PersonsAboutUsType>;
}

const PersonsAboutUs: React.FC<Props> = ({ persons }) => {
  return (
    <Container>
      <h1>O que as pessoas falam sobre nós</h1>
      <Cards>
        {persons.map(person => (
          <PersonCard
            key={person.id}
            image={person.image}
            name={person.name}
            description={person.message}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default PersonsAboutUs;
