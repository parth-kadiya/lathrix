// src/components/PatientStories.js
import React from 'react';
import {
  ResponsiveSection as Section,
  ResponsiveCardsWrapper as CardsWrapper,
  ResponsiveCard as Card,
  ResponsiveCardImage as CardImage,
  ResponsiveCardText as CardText,
  ResponsiveCenterCard as CenterCard,
  ResponsiveProfileCircle as ProfileCircle,
  ResponsiveProfileName as ProfileName,
  ResponsiveQuoteText as QuoteText,
  ResponsiveButtonWrapper as ButtonWrapper,
  ResponsiveActionButton as ActionButton
} from '../styles/PatientStoriesMedia';

import savingsCardImg from '../assets/savingsCard.png';
import patientImg from '../assets/patient.png';
import starterPackImg from '../assets/starterPack.png';

const PatientStories = () => (
  <Section>
    <CardsWrapper>
      {/* Left Card */}
      <Card>
        <CardImage src={savingsCardImg} alt="LaThrix Serum" />
        <CardText>
          LaThrix Anti-Grey Hair Serum with<br />
          1% Darkenyl™ helps reduce white<br />
          hair density, restore melanin, and<br />
          protect hair follicles from ageing.
        </CardText>
      </Card>

      {/* Center Testimonial */}
      <CenterCard>
        <ProfileCircle>
          <img src={patientImg} alt="Volunteer" />
        </ProfileCircle>
        <ProfileName>Volunteer #18, Age 51</ProfileName>
        <QuoteText>
          “After using LaThrix for 4 months,<br />
          I noticed up to 56% less white hair.<br />
          My scalp looks healthier and darker.”
        </QuoteText>
      </CenterCard>

      {/* Right Card */}
      <Card>
        <CardImage src={starterPackImg} alt="How to Use" />
        <CardText>
          Apply twice daily on the scalp using<br />
          the dropper. Massage gently with fingertips<br />
          and do not rinse. Enriched with Biotin and<br />
          Black Tea Extract for healthy follicles.
        </CardText>
      </Card>
    </CardsWrapper>

    {/* Button moved outside of the cards */}
    <ButtonWrapper>
      <ActionButton>Patient Stories</ActionButton>
    </ButtonWrapper>
  </Section>
);

export default PatientStories;
