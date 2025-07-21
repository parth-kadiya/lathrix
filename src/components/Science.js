import React from 'react';
import {
  Section,
  Container,
  Heading,
  Description,
  Tagline,
  ButtonWrapper,
  ActionButton
} from '../styles/ScienceStyles';

const Science = () => (
  <Section>
    <Container>
      <Heading>The Science Behind LaThrix</Heading>
      <Description>
        <strong>LaThrix</strong> is formulated with 1% Darkenyl™, a patented active that works at the cellular level
        to reverse premature greying. It protects hair follicles from oxidative stress (ROS), stimulates hair stem cells,
        and reactivates melanogenesis — restoring natural melanin and repigmenting grey hair.
      </Description>
      <Tagline>Restore your natural black with science.</Tagline>
      <ButtonWrapper>
        <ActionButton>See LaThrix Patient Results</ActionButton>
      </ButtonWrapper>
    </Container>
  </Section>
);

export default Science;
