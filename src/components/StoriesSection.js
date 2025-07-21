import React from 'react';
import {
  Section,
  CardsWrapper,
  Card,
  CardImage,
  CardText,
  CenterCard,
  ProfileCircle,
  ProfileName,
  QuoteText,
  ActionButton
} from '../styles/StoriesSectionStyles';

import savingsCardImg from '../assets/savingsCard.png';
import patientImg from '../assets/patient.png';
import starterPackImg from '../assets/starterPack.png';

const StoriesSection = () => (
  <Section>
    <CardsWrapper>
      {/* Left Card */}
      <Card>
        <CardImage src={savingsCardImg} alt="VANNI Savings Card" />
        <CardText>
          The VANNI Savings Card offers three separate benefits to help you save while finding your glow and defeating your acne.
        </CardText>
      </Card>

      {/* Center Testimonial */}
      <CenterCard>
        <ProfileCircle>
          <img src={patientImg} alt="Natalie" />
        </ProfileCircle>
        <ProfileName>Natalie, 32</ProfileName>
        <QuoteText>
          “I was always so embarrassed by my acne. I wore heavy makeup every day to conceal it, but now I can confidently go makeup‑free.”
        </QuoteText>
        <ActionButton>Patient Stories</ActionButton>
      </CenterCard>

      {/* Right Card */}
      <Card>
        <CardImage src={starterPackImg} alt="14‑Day Starter Pack" />
        <CardText>
          Once‑daily dosing and no food requirements for ease and convenience. Talk to your doctor now to get a sample starter pack.
        </CardText>
      </Card>
    </CardsWrapper>
  </Section>
);

export default StoriesSection;
