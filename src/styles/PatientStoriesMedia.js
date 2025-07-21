// src/styles/PatientStoriesMedia.js
import styled from 'styled-components';
import {
  Section,
  CardsWrapper,
  Card,
  CardImage,
  CardText,
  CenterCard,
  ProfileCircle,
  ProfileName,
  QuoteText,
  ButtonWrapper,
  ActionButton
} from './PatientStoriesStyles';

/* Only mobile overrides—desktop untouched */

export const ResponsiveSection = styled(Section)`
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

export const ResponsiveCardsWrapper = styled(CardsWrapper)`
  @media (max-width: 768px) {
    gap: 40px;
    padding: 0 8px;
  }
`;

export const ResponsiveCard = styled(Card)`
  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    gap: 16px;
  }
`;

export const ResponsiveCenterCard = styled(CenterCard)`
  @media (max-width: 768px) {
    padding-top: 24px;
  }
`;

export const ResponsiveCardImage = styled(CardImage)`
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

export const ResponsiveCardText = styled(CardText)`
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const ResponsiveProfileCircle = styled(ProfileCircle)`
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    border-width: 4px;
  }
`;

export const ResponsiveProfileName = styled(ProfileName)`
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-top: 8px;
  }
`;

export const ResponsiveQuoteText = styled(QuoteText)`
  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 260px;
    margin: 16px 0;
  }
`;

export const ResponsiveButtonWrapper = styled(ButtonWrapper)`
  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const ResponsiveActionButton = styled(ActionButton)`
  @media (max-width: 768px) {
    width: 80%;
    padding: 12px 0;
    font-size: 0.95rem;
  }
`;
