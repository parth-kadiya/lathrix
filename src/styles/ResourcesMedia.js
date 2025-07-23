// src/styles/ResourcesMedia.js
import { css } from 'styled-components'

/*
  Mobile (≤768px) overrides only.
  Nothing here will affect your desktop layouts.
*/
export default {
  ResourcesContainer: css`
    @media (max-width: 768px) {
      padding: 40px 20px;
      gap: 40px;
    }
  `,
  Label: css`
    @media (max-width: 768px) {
      text-align: left;
    }
  `,
  TopRow: css`
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `,
  TextColumn: css`
    @media (max-width: 768px) {
      & > * + * {
        margin-top: 12px;
      }
    }
  `,
  Heading: css`
    @media (max-width: 768px) {
      font-size: 2.5rem;
      text-align: left;
      margin-bottom: 24px;
    }
  `,
  Intro: css`
    @media (max-width: 768px) {
      font-size: 1.1rem;
      text-align: left;
    }
  `,
  Highlight: css`
    @media (max-width: 768px) {
      margin: 30px 0 0;
      text-align: left;
    }
  `,
  List: css`
    @media (max-width: 768px) {
      margin: 24px 0 0;
      padding-left: 1rem;
    }
  `,
  ListItem: css`
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  `,
  StoryWrapper: css`
    @media (max-width: 768px) {
      width: 85%;
      margin: 0 auto;
      box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
    }
  `,
  StoryImage: css`
    @media (max-width: 768px) {
      object-fit: cover;
    }
  `,
  FooterLinks: css`
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
  `,
  FooterLink: css`
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  `,
}
