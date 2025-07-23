// src/styles/StartingLathrixPageMedia.js
import { createGlobalStyle } from 'styled-components';
import {
  PageContainer,
  SectionLabel,
  Title,
  Subtitle,
  TimelineImage,
  SupportTitle,
  SupportSubtitle
} from './StartingLathrixPageStyles';

const StartingLathrixPageMedia = createGlobalStyle`
  @media (max-width: 600px) {
    /* reduce overall vertical gaps */
    ${PageContainer} {
      padding: 40px 16px !important;
      gap: 40px !important;
    }

    /* tighten space below SectionLabel */
    ${SectionLabel} {
      margin-bottom: 4px !important;
    }

    /* title sizing + reduce bottom margin */
    ${Title} {
      font-size: 2.5rem !important;
      margin: 0 0 8px !important;
    }

    /* subtitle sizing + add a bit of top margin for breathing room */
    ${Subtitle} {
      font-size: 0.95rem !important;
      margin: 4px 0 0 !important;
    }

    /* timeline graphics width + extra vertical spacing */
    ${TimelineImage} {
      width: 85% !important;
      margin: 12px auto !important;      /* 12px top & bottom */
      margin-top: 16px !important;       /* even more space above */
      margin-bottom: 20px !important;    /* more space between timelines */
    }

    /* support section titles */
    ${SupportTitle} {
      font-size: 2.5rem !important;
    }

    /* left‑align support subtitle, reduce top margin */
    ${SupportSubtitle} {
      font-size: 0.95rem !important;
      text-align: left !important;
      margin-top: 4px !important;
    }
  }
`;

export default StartingLathrixPageMedia;
