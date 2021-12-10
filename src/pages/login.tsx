import React from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Input from '../components/Input';

import { Container, Form } from '../styles/pages/login';

const Login: React.FC = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('submit');
  }

  return (
    <>
      <Head>
        <title>GoSchool | Login</title>
      </Head>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Button type="submit">Entrar</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
