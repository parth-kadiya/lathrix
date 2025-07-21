// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* import Montserrat from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #101820; /* optional */
    color: #fff;               /* optional default text color */
  }
`;

export default GlobalStyle;
