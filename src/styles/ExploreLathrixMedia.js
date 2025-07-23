import styled from 'styled-components';
import {
  Heading as BaseHeading,
  Text as BaseText
} from './ExploreLathrixStyles';

export const Heading = styled(BaseHeading)`
  @media (max-width: 767px) {
    font-size: 2.5rem; /* mobile heading */
  }
`;

export const Text = styled(BaseText)`
  @media (max-width: 767px) {
    font-size: 0.95rem; /* mobile paragraph */
  }
`;
