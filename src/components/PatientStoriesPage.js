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
import PatientStoriesPageMedia from '../styles/PatientStoriesPageMedia';

import mockupSrc from '../assets/lathrix-patient.jpg';
import deanPortrait from '../assets/dean.png';
import cassiePortrait from '../assets/cassie.png';
import sammyPortrait from '../assets/sammy.png';
import testimonialVideo from '../assets/testimonial.mp4';

const PatientStoriesPage = () => (
  <>
    {/* inject mobile overrides */}
    <PatientStoriesPageMedia />

    {/* ——— Proven Results block ——— */}
    <Section>
      <LeftContent>
        <Label>PATIENT STORIES</Label>
        <Title>Visible Grey Hair Reduction with LaThrix</Title>
        <Subtitle>
          Up to 56% decrease in white hair after 4 months of use.<sup>1</sup>
        </Subtitle>
        <CaptionWrapper>
          <Caption>Tap play to hear real experiences with LaThrix Serum</Caption>
          <Arrow>—›</Arrow>
        </CaptionWrapper>
      </LeftContent>

      <RightContent>
        <ImageWrapper>
          <MockupImage
            src={mockupSrc}
            alt="LaThrix patient testimonial mockup"
          />
          <PlayButton>▶</PlayButton>
        </ImageWrapper>
      </RightContent>
    </Section>

    {/* ——— Hear from Patients nav ——— */}
    <TestimonialsSection>
      <TestHeading>Hear from People Like You</TestHeading>
      <TestNav>
        <TestButton bg="#E18FFF">
          <ButtonImage src={deanPortrait} alt="Dean thumbnail" />
          <ButtonLabel>View Dean’s Grey Hair Journey</ButtonLabel>
        </TestButton>
        <TestButton bg="#FFD700">
          <ButtonImage src={cassiePortrait} alt="Cassie thumbnail" />
          <ButtonLabel>View Cassie’s LaThrix Story</ButtonLabel>
        </TestButton>
        <TestButton bg="#FFD700">
          <ButtonImage src={sammyPortrait} alt="Sammy thumbnail" />
          <ButtonLabel>View Sammy’s Repigmentation Results</ButtonLabel>
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
