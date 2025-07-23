// src/styles/PatientStoriesPageMedia.js
import { createGlobalStyle } from 'styled-components';
import {
  Title,
  Subtitle,
  MockupImage,
  ImageWrapper,
  VideoWrapper
} from './PatientStoriesPageStyles';

const PatientStoriesPageMedia = createGlobalStyle`
  @media (max-width: 600px) {
    ${Title} {
      font-size: 2.5rem !important;
    }
    ${Subtitle} {
      font-size: 0.95rem !important;
    }
    /* shrink and center the image container */
    ${ImageWrapper} {
      width: 85% !important;
      margin: 0 auto !important;
    }
    /* mockup fills its (now smaller) wrapper */
    ${MockupImage} {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      margin: 0 !important;
    }
    /* video stays centered but can remain scaled */
    ${VideoWrapper} {
      width: 85% !important;
      margin: 0 auto !important;
    }
  }
`;

export default PatientStoriesPageMedia;
