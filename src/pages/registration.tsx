import { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/Button';
import Input from '../components/Input';

import { Container, FormContent } from '../styles/pages/registration';

const Registration: NextPage = () => {

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Submitted');
  }

  return (
    <>
      <Head>
        <title>GoSchool | Matrícula</title>
      </Head>
      <Container onSubmit={handleFormSubmit}>
        <FormContent>
          <h2>1. Informações Pessoais</h2>
          <Input label="Primeiro Nome" required />
          <Input label="Ultimo Nome" required />
          <Input label="CPF" required />
          <Input label="Data de Nascimento" required type="date" />
        </FormContent>
        <FormContent>
          <h2>2. Informações de Contato</h2>
          <Input label="E-mail" required type="email" />
          <Input label="Telefone Fixo" type="tel" />
          <Input label="Celular" required type="tel" />
          <Button type="submit">Continuar</Button>
        </FormContent>
      </Container>
    </>
  );
}

export default Registration;
