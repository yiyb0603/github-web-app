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
    height: 100%;
  }
`;