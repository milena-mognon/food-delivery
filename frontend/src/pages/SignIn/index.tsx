import React from 'react';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
