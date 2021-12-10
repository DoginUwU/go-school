import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import ceoImg from '../../public/images/ceo.jpg';
import { getPrismicClient } from '../services/prismic';

import { Container, Divider, CEO } from '../styles/pages/mission';
import { RichText } from 'prismic-dom';
import { MissionDataType } from '../@types/mission';

interface Props {
  data: MissionDataType;
}

const Mission: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>GoSchool | Missão</title>
      </Head>
      <Container>
        <h1>Nossa missão</h1>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: data.message }} />
        <Divider />
        <CEO>
          <Image src={ceoImg} alt="Luiz Eduardo" />
          <h2>
            Luiz Eduardo - <strong>CEO</strong>
          </h2>
          <p>
            &quot; A educação é a parte mais fundamental para todos nós, não
            podemos deixas nossas diferenças influenciarem isso. &quot;
          </p>
        </CEO>
      </Container>
    </>
  );
};

export default Mission;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getSingle('mission', {});

  const data = {
    id: response.id,
    message: RichText.asHtml(response.data.message),
  } as MissionDataType;

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: { data },
    revalidate: 60 * 60 * 24,
  };
};
