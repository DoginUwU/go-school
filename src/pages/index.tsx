import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import Intro from '../components/Home/Intro';
import More from '../components/Home/More';
import PersonsAboutUs from '../components/Home/PersonsAboutUs';
import SpecializedTeachings from '../components/Home/SpecializedTeachings';
import TrustOurServices from '../components/Home/TrustOurServices';
import { getPrismicClient } from '../services/prismic';

import { Container, IntroContainer, MoreContainer, Wave1 } from '../styles/pages/index';
import { RichText } from 'prismic-dom';
import { PersonsAboutUsType } from '../@types/persons';

interface Props {
  personAboutUsData: PersonsAboutUsType[];
}

const Home: NextPage<Props> = ({ personAboutUsData }) => {
  return (
    <>
      <Head>
        <title>GoSchool</title>
      </Head>
      <Container>
        <IntroContainer>
          <Intro />
          <Wave1 opacity={100} top={0} />
          <Wave1 opacity={50} top={20} />
        </IntroContainer>
        <MoreContainer>
          <More />
        </MoreContainer>
        <SpecializedTeachings />
        <PersonsAboutUs persons={personAboutUsData} />
        <TrustOurServices />
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    Prismic.predicates.at('document.type', 'personsaboutus')
  );

  const personAboutUsData = response.results.slice(0, 3).map(post => ({
    id: post.uid,
    name: RichText.asText(post.data.name),
    message: RichText.asText(post.data.message),
    image: post.data.image.url,
  }) as PersonsAboutUsType);

  return {
    props: { personAboutUsData: personAboutUsData || [] },
    revalidate: 60 * 60 * 24,
  };
};
