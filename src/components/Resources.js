// src/components/Resources.js
import React from 'react';
import {
  ResourcesContainer,
  Label,
  TopRow,
  TextColumn,
  StoryWrapper,
  StoryImage,
  FooterLinks,
  FooterLink,
  Heading,
  Intro,
  Highlight,
  List,
  ListItem
} from '../styles/ResourcesStyles';

import storyImg from '../assets/resources-screenshot.png';

const Resources = () => (
  <ResourcesContainer>
    <Label>RESOURCES</Label>

    <TopRow>
      <TextColumn>
        <Heading>24/7 LaThrix Support</Heading>
        <Intro>
          Access expert tools and guides to support you on your LaThrix journey toward reversing premature greying.
        </Intro>
        <Highlight>
          Use the interactive story on the right to sign up for LaThrix 1‑to‑1 and get guidance from a dedicated hair repigmentation advisor.
        </Highlight>
        <List>
          <ListItem>
            <strong>Product Usage Guidance:</strong> Get step-by-step instructions on how to apply LaThrix Serum properly for best results.
          </ListItem>
          <ListItem>
            <strong>Tracking Your Progress:</strong> Download melanin tracking sheets to visually monitor your grey-to-black hair transition over 90 days.
          </ListItem>
          <ListItem>
            <strong>Expert Support:</strong> Speak with a LaThrix specialist for personalized tips and recommendations based on your hair type and goals.
          </ListItem>
        </List>
      </TextColumn>

      <StoryWrapper>
        <StoryImage src={storyImg} alt="Interactive LaThrix support story" />
      </StoryWrapper>
    </TopRow>

    <FooterLinks>
      <FooterLink href="#">Full Product Information</FooterLink>
      <FooterLink href="#">Support Program Details</FooterLink>
    </FooterLinks>
  </ResourcesContainer>
);

export default Resources;
