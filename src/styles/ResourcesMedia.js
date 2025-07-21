// src/styles/ResourcesMedia.js
import { css } from 'styled-components'

/*
  Mobile (≤480px) overrides only.
  Nothing here will affect your desktop layouts.
*/
export default {
  ResourcesContainer: css`
    @media (max-width: 480px) {
      padding: 40px 20px;
      gap: 40px;
    }
  `,
  Label: css`
    @media (max-width: 480px) {
      text-align: center;
    }
  `,
  TopRow: css`
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `,
  TextColumn: css`
    @media (max-width: 480px) {
      & > * + * {
        margin-top: 12px;
      }
    }
  `,
  Heading: css`
    @media (max-width: 480px) {
      font-size: 2.5rem;
      text-align: center;
    }
  `,
  Intro: css`
    @media (max-width: 480px) {
      font-size: 1.1rem;
      text-align: center;
    }
  `,
  Highlight: css`
    @media (max-width: 480px) {
      margin: 30px 0 0;
      text-align: center;
    }
  `,
  List: css`
    @media (max-width: 480px) {
      margin: 24px 0 0;
      padding-left: 1rem;
    }
  `,
  ListItem: css`
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  `,
  StoryWrapper: css`
    @media (max-width: 480px) {
      box-shadow: none;
      border-radius: 8px;
      width: 100%;
    }
  `,
  StoryImage: css`
    @media (max-width: 480px) {
      object-fit: cover;
    }
  `,
  FooterLinks: css`
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }
  `,
  FooterLink: css`
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  `,
}
