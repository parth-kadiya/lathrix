// src/styles/AboutLathrixMedia.js
import { createGlobalStyle } from 'styled-components';
import {
  Heading,
  Description,
  List,
  WhoHeading,
  WhoDescription,
  WhoList,
  ImageWrapper,
  WhoImageWrapper
} from './AboutLathrixStyles';

export default createGlobalStyle`
  @media (max-width: 768px) {
    /* Text sizes */
    ${Heading} {
      font-size: 2.5rem !important;
    }
    ${Description},
    ${WhoDescription} {
      font-size: 0.95rem !important;
    }
    ${List},
    ${WhoList} {
      font-size: 0.95rem !important;
    }
    ${WhoHeading} {
      font-size: 2.5rem !important;
    }

    /* Shrink images */
    ${ImageWrapper},
    ${WhoImageWrapper} {
      flex: 1 1 280px !important;
      max-width: 280px !important;
      margin: 0 auto !important;
    }
  }
`;
