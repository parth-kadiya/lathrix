// src/styles/HairGreyingMedia.js

import styled from 'styled-components';
import {
  Section as BaseSection,
  Content as BaseContent,
  SmallLabel as BaseSmallLabel,
  Heading as BaseHeading,
  Text as BaseText,
  FactsTitle as BaseFactsTitle,
  List as BaseList,
  ListItem as BaseListItem,
  ImageWrapper as BaseImageWrapper,
  StyledImage as BaseStyledImage
} from './HairGreyingStyles';

const MOBILE = '@media (max-width: 480px)';

export const Section = styled(BaseSection)`
  ${MOBILE} {
    flex-direction: column;
    padding: 40px 10px;
    gap: 20px;
  }
`;

export const Content = styled(BaseContent)`
  ${MOBILE} {
    flex: 1 1 100%;
    text-align: left;
  }
`;

export const SmallLabel = styled(BaseSmallLabel)`
  ${MOBILE} {
    font-size: 0.75rem;
    margin-bottom: 4px;
    padding-left: 16px;
  }
`;

export const Heading = styled(BaseHeading)`
  ${MOBILE} {
    font-size: 2.5rem;    /* mobile heading size */
    line-height: 1.2;
    margin-bottom: 16px;
    padding-left: 16px;
    text-align: left;
  }
`;

export const Text = styled(BaseText)`
  ${MOBILE} {
    font-size: 0.95rem;   /* mobile paragraph size */
    margin-bottom: 24px;
    padding-left: 16px;
    text-align: left;
  }
`;

export const FactsTitle = styled(BaseFactsTitle)`
  ${MOBILE} {
    font-size: 1.2rem;    /* mobile facts title size */
    margin-bottom: 12px;
    padding-left: 16px;
  }
`;

export const List = styled(BaseList)`
  ${MOBILE} {
    font-size: 0.95rem;   /* mobile list item size */
    margin-bottom: 24px;
    padding-left: 16px;
  }
`;

export const ListItem = styled(BaseListItem)`
  ${MOBILE} {
    margin-bottom: 8px;
  }
`;

export const ImageWrapper = styled(BaseImageWrapper)`
  ${MOBILE} {
    flex: 1 1 100%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const StyledImage = styled(BaseStyledImage)`
  ${MOBILE} {
    width: 80%;          /* shrink image on mobile */
    max-width: 300px;
    height: auto;
  }
`;
