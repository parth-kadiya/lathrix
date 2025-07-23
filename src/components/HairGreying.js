import React from 'react';
import {
  Section,
  Content,
  SmallLabel,
  Heading,
  Text,
  FactsTitle,
  List,
  ListItem,
  ImageWrapper,
  StyledImage
} from '../styles/HairGreyingMedia';
import HairgreyingImg from '../assets/hair.png';

const HairGreying = () => (
  <Section>
    <Content>
      <SmallLabel>GREYING</SmallLabel>
      <Heading>
        Understanding
        <br />
        Premature Greying
      </Heading>
      <Text>
        Premature greying is caused by a reduction in melanin production within
        <br />
        hair follicles. This occurs due to oxidative stress, reduced melanocyte
        <br />
        activity, and aging‑related changes. LaThrix helps restore natural pigment
        <br />
        by targeting the root cause at a cellular level.
      </Text>
      <FactsTitle>Key Facts about Premature Greying</FactsTitle>
      <List>
        <ListItem>
          <strong>Prevalence:</strong> Affects up to 74% of people between the ages of 45–65 globally,
          and can appear earlier due to genetics or environmental stressors.
        </ListItem>
        <ListItem>
          <strong>Causes:</strong> Common causes include oxidative stress, nutritional deficiencies,
          genetics, smoking, and reduced stem cell activity in follicles.
        </ListItem>
        <ListItem>
          <strong>Science:</strong> LaThrix, powered by 1% Darkenyl™, helps protect follicles from
          oxidative damage and stimulates melanin production for visible repigmentation.
        </ListItem>
      </List>
    </Content>

    <ImageWrapper>
      <StyledImage src={HairgreyingImg} alt="Hair Before & After" />
    </ImageWrapper>
  </Section>
);

export default HairGreying;
