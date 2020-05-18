import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyled from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyled />
      <SignIn />
    </>
  );
};

export default App;
