// src/styles/ScienceMedia.js

import styled from 'styled-components';
import {
  Section as BaseSection,
  Container as BaseContainer,
  Heading as BaseHeading,
  Description as BaseDescription,
  Tagline as BaseTagline,
  ButtonWrapper as BaseButtonWrapper,
  ActionButton as BaseActionButton
} from './ScienceStyles';

const MOBILE = '@media (max-width: 480px)';

export const Section = styled(BaseSection)`
  ${MOBILE} {
    padding: 40px 10px;
  }
`;

export const Container = styled(BaseContainer)`
  ${MOBILE} {
    text-align: left;
    padding: 0 16px;
  }
`;

export const Heading = styled(BaseHeading)`
  ${MOBILE} {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
`;

export const Description = styled(BaseDescription)`
  ${MOBILE} {
    font-size: 0.95rem;
    margin: 0 0 24px;
    max-width: 100%;
  }
`;

export const Tagline = styled(BaseTagline)`
  ${MOBILE} {
    font-size: 1.2rem;
    margin-bottom: 24px;
  }
`;

export const ButtonWrapper = styled(BaseButtonWrapper)`
  ${MOBILE} {
    text-align: left;
  }
`;

export const ActionButton = styled(BaseActionButton)`
  ${MOBILE} {
    width: 100%;
    padding: 12px 0;
    font-size: 1rem;
  }
`;
