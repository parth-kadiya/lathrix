// src/components/PatientStoriesPage.js
import React from 'react';
import {
  Section,
  LeftContent,
  Label,
  Title,
  Subtitle,
  CaptionWrapper,
  Caption,
  Arrow,
  RightContent,
  ImageWrapper,
  MockupImage,
  PlayButton,
  TestimonialsSection,
  TestHeading,
  TestNav,
  TestButton,
  ButtonImage,
  ButtonLabel,
  VideoSection,
  VideoWrapper,
  VideoPlayer
} from '../styles/PatientStoriesPageStyles';

import mockupSrc from '../assets/vanni-patient.jpg';
import deanPortrait from '../assets/dean.png';
import cassiePortrait from '../assets/cassie.png';
import sammyPortrait from '../assets/sammy.png';
import testimonialVideo from '../assets/testimonial.mp4';

const PatientStoriesPage = () => (
  <>
    {/* ——— Proven Results block ——— */}
    <Section>
      <LeftContent>
        <Label>PATIENT STORIES</Label>
        <Title>Proven Results with VANNI for Acne</Title>
        <Subtitle>
          4 out of 5 people achieved clearer skin after just two months!<sup>1</sup>
        </Subtitle>
        <CaptionWrapper>
          <Caption>Tap play to dive into our patient testimonials</Caption>
          <Arrow>—›</Arrow>
        </CaptionWrapper>
      </LeftContent>

      <RightContent>
        <ImageWrapper>
          <MockupImage src={mockupSrc} alt="VANNI patient testimonial mockup" />
          <PlayButton>▶</PlayButton>
        </ImageWrapper>
      </RightContent>
    </Section>

    {/* ——— Hear from Patients nav ——— */}
    <TestimonialsSection>
      <TestHeading>Hear from Patients Like You</TestHeading>
      <TestNav>
        <TestButton bg="#E18FFF">
          <ButtonImage src={deanPortrait} alt="Dean thumbnail" />
          <ButtonLabel>View Dean’s Story</ButtonLabel>
        </TestButton>
        <TestButton bg="#FFD700">
          <ButtonImage src={cassiePortrait} alt="Cassie thumbnail" />
          <ButtonLabel>View Cassie’s Story</ButtonLabel>
        </TestButton>
        <TestButton bg="#FFD700">
          <ButtonImage src={sammyPortrait} alt="Sammy thumbnail" />
          <ButtonLabel>View Sammy’s Story</ButtonLabel>
        </TestButton>
      </TestNav>

      <VideoSection>
        <VideoWrapper>
          <VideoPlayer controls src={testimonialVideo} />
        </VideoWrapper>
      </VideoSection>
    </TestimonialsSection>
  </>
);

export default PatientStoriesPage;
