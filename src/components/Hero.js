// src/components/Hero.js
import React from 'react';
import {
  ResponsiveHeroSection as HeroSection,
  ResponsiveHeroText as HeroText,
  ResponsiveHighlighted as Highlighted,
  ResponsiveGlowText as GlowText,
  ResponsiveDecorativeCircle as DecorativeCircle
} from '../styles/HeroMedia';

const Hero = () => {
  return (
    <HeroSection>
      {/* Top bubble */}
      <DecorativeCircle top="-5%" left="10%" size="220px" />

      {/* Bottom bubble */}
      <DecorativeCircle bottom="-5%" right="5%" size="340px" opacity={0.2} />

      <HeroText>
        <div>LÀTHRIX</div>
        <Highlighted>BRINGS BACK</Highlighted>
        <GlowText>YOUR NATURAL BLACK HAIR</GlowText>
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
