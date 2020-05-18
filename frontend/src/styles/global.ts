import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
  background: #DE6262;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family:  'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
