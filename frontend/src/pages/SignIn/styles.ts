import styled from 'styled-components';

import backgroundImage from '../../assets/background-sign-in.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage});
  background-size: cover;
  border-radius: 2px;
`;
