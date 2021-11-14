import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import normalize from 'styled-normalize';

export default createGlobalStyle`
  ${reset};
  ${normalize};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    font-size: 62.5%;
    overflow-x: hidden;
  }
`;