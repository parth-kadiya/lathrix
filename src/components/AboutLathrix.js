// src/components/AboutLathrix.js
import React from 'react';
import {
  Section,
  Content,
  SmallLabel,
  Heading,
  Description,
  List,
  ListItem,
  ImageWrapper,
  StyledImage,
  WhoSection,
  WhoContent,
  WhoHeading,
  WhoDescription,
  WhoList,
  WhoListItem,
  WhoImageWrapper,
  WhoStyledImage
} from '../styles/AboutLathrixStyles';
import howImg from '../assets/vanni-how.png';   // Replace with: lathrix-how.png
import whoImg from '../assets/vanni-who.png';   // Replace with: lathrix-who.png

const AboutLathrix = () => (
  <>
    {/* ——— How Does LaThrix Work? ——— */}
    <Section>
      <Content>
        <SmallLabel>ABOUT LATHRIX</SmallLabel>
        <Heading>
          How Does
          <br />
          LaThrix Work?
        </Heading>
        <Description>
          LaThrix Advanced Anti-Grey Hair Serum works through a triple-action mechanism to reverse premature greying:
        </Description>
        <List>
          <ListItem>
            <strong>Protects Follicles:</strong> Darkenyl™ reduces oxidative stress (ROS), protecting melanocytes and melanoblasts from damage.
          </ListItem>
          <ListItem>
            <strong>Stimulates Stem Cells:</strong> Promotes proliferation of follicle stem cells to regenerate melanocytes and restore pigmentation.
          </ListItem>
          <ListItem>
            <strong>Activates Melanin Production:</strong> Enhances melanogenesis and boosts melanin levels in grey hair for visible repigmentation.
          </ListItem>
        </List>
      </Content>

      <ImageWrapper>
        <StyledImage src={howImg} alt="How LaThrix works diagram" />
      </ImageWrapper>
    </Section>

    {/* ——— Who Can Use LaThrix? ——— */}
    <WhoSection>
      <WhoImageWrapper>
        <WhoStyledImage src={whoImg} alt="Who Can Use LaThrix" />
      </WhoImageWrapper>

      <WhoContent>
        <WhoHeading>
          Who Can
          <br />
          Use LaThrix?
        </WhoHeading>
        <WhoDescription>
          LaThrix is suitable for adults experiencing premature greying or age-related hair depigmentation, especially those who:
        </WhoDescription>
        <WhoList>
          <WhoListItem>Have visible grey or white hair due to oxidative stress or aging.</WhoListItem>
          <WhoListItem>Experience nutritional deficiencies or environmental hair damage.</WhoListItem>
          <WhoListItem>Want a clinically proven, non-invasive alternative to hair dyes.</WhoListItem>
        </WhoList>
      </WhoContent>
    </WhoSection>
  </>
);

export default AboutLathrix;
