// src/styles/HeroMedia.js
import styled from 'styled-components';
import {
  HeroSection,
  HeroText,
  Highlighted,
  GlowText,
  DecorativeCircle
} from './HeroStyles';

/* Section height shrinks on mobile and adds root padding */
export const ResponsiveHeroSection = styled(HeroSection)`
  @media (max-width: 768px) {
    height: 60vh;
    padding: 60px 32px !important;
  }
`;

/* Main title font scales down */
export const ResponsiveHeroText = styled(HeroText)`
  @media (max-width: 768px) {
    & > div {
      font-size: 2.5rem;
    }
  }
`;

/* “BRINGS BACK” scales down */
export const ResponsiveHighlighted = styled(Highlighted)`
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

/* Glow line scales down */
export const ResponsiveGlowText = styled(GlowText)`
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

/* Bubbles shrink proportionally (60% of original) */
export const ResponsiveDecorativeCircle = styled(DecorativeCircle)`
  @media (max-width: 768px) {
    width: calc(${p => p.size} * 0.6);
    height: calc(${p => p.size} * 0.6);
  }
`;
