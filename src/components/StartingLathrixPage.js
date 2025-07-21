// src/components/StartingLathrixPage.js
import React from 'react';
import {
  PageContainer,
  SectionLabel,
  Title,
  Subtitle,
  TimelineImage,
  SupportSection,
  SupportTitle,
  SupportSubtitle,
  SupportGrid,
  SupportCard,
  ResourcesButton
} from '../styles/StartingLathrixPageStyles';

// dosing timeline slices
import timelineImg1 from '../assets/starting-timeline-1.png';
import timelineImg2 from '../assets/starting-timeline-2.png';

// support‑programs graphic
import supportImg from '../assets/starting-support.png';

const StartingLathrixPage = () => (
  <PageContainer>
    {/* ——— How to Begin Treatment with LATHRIX ——— */}
    <SectionLabel>STARTING LATHRIX</SectionLabel>
    <Title>How to Start Using LaThrix Serum</Title>
    <Subtitle>
      Getting started with LaThrix is simple. Just apply the serum directly to your scalp twice daily.
      With consistent use, clinical studies show visible results within 90 days — including up to 56% reduction in white hair.
    </Subtitle>

    {/* ——— timeline part 1 ——— */}
    <TimelineImage
      src={timelineImg1}
      alt="LaThrix application timeline – part 1"
    />

    {/* ——— timeline part 2 ——— */}
    <TimelineImage
      src={timelineImg2}
      alt="LaThrix application timeline – part 2"
    />

    {/* ——— Patient Support Programs ——— */}
    <SupportSection>
      <SupportTitle>Patient Support Programs</SupportTitle>
      <SupportSubtitle>
        LaThrix provides supportive resources to help you stay consistent and see results, including:
        instructional guides, tracking tools, and expert tips for your repigmentation journey.
      </SupportSubtitle>

      <SupportGrid>
        <SupportCard>
          <img src={supportImg} alt="Support programs" />
        </SupportCard>
      </SupportGrid>

      <ResourcesButton>See LaThrix Resources</ResourcesButton>
    </SupportSection>
  </PageContainer>
);

export default StartingLathrixPage;
